//section_1
const section1 = document.querySelector('.stage-1');
//section_2
const section2 = document.querySelector('.stage-2');
//section_3
const section3 = document.querySelector('.stage-3');
//section_4
const section4 = document.querySelector('.stage-4');


/*
PAGE 1 
*/

//btn_1
const btnStage1 = document.querySelector('#button-stage-1');

//function
hideAndShow = () => {
    btnStage1.addEventListener('click', () => {
        section1.classList.add('hide');
        section1.classList.remove('show');
        section2.classList.remove('hide');
        section2.classList.add('show');
        document.querySelector('body').style.background = 'linear-gradient(90deg, #60B6D8, #C5F8FF)';
    })
}


/*
PAGE 2 
*/

//btn_1
const btnStage2Add = document.querySelector('#category-add');

//btn_2
const btnStage2 = document.querySelector('#button-stage-2');

//inpt_1
const inptCategoryName = document.querySelector('#category-name');

//textArea
const categoryTextArea = document.querySelector('#category-itens');

let categorys = [];
categoryTextArea.value = categorys;

//function
hideAndShow2 = () => {
    btnStage2.addEventListener('click', () => {
        if (categorys != ''){
            section2.classList.add('hide');
            section2.classList.remove('show');
            section3.classList.remove('hide');
            section3.classList.add('show');

            document.querySelector('body').style.background = 'linear-gradient(90deg, #D0203A, #FFE4E0)';
        }
        else {
            alert('Registre no mínimo uma categoria.');
            inptCategoryName.style.background = '#DFE08F';
        }
    })
}

addCategory = () => {

    btnStage2Add.addEventListener('click', () => {
        if (inptCategoryName.value == '') {
            alert('Preencha o campo destacado.');
            inptCategoryName.style.background = '#DFE08F';
        }
        else if (categorys.indexOf(inptCategoryName.value) == -1) {
            categorys.push(inptCategoryName.value);
            console.log(categorys);
            categoryTextArea.value = categorys;

            //function for add options in selection.
            options = (x) => {
                return `<option value="${x}">${x}</option>`
            }
            inptSelectCategory.innerHTML += `
            ${options(`${inptCategoryName.value}`)}
            `
            inptCategoryName.value = '';
            inptCategoryName.style.background = 'rgba(255,255,255,0.7)';
        }
        else {
            alert(`O item ${inptCategoryName.value} já foi cadastrado.`);
        }
    })
}


/*
PAGE 3 
*/

//input_1 
const inptItemName = document.querySelector('#item-name');

//inpt_2
const inptSelectCategory = document.querySelector('#item-category');

//btn_1
const btnStage3Add = document.querySelector('#item-add-i');

//btn_2
const btnStage3 = document.querySelector('#button-stage-3');

//btn 3 
const btnStage3Remove = document.querySelector('#item-remove-i');

//textArea
const itemTextArea = document.querySelector('#show-itens');

let itens = [];

//function
hideAndShow3 = () => {
    btnStage3.addEventListener('click', () => {
        if (itens != '') {
            section3.classList.add('hide');
            section3.classList.remove('show');
            section4.classList.remove('hide');
            section4.classList.add('show');
            showAllItens();

            document.querySelector('body').style.background = 'linear-gradient(90deg, #60B6D8, #74ECAE)';
        }
        else {
            alert('Registre no mínimo um item.');
            inptItemName.style.background = '#DFE08F';
        }
    })
}

addItem = () => {
    btnStage3Add.addEventListener('click', () => {
        if (inptItemName.value != '') {
            itens.push(`${inptSelectCategory.value}: ${inptItemName.value}\n`);
            console.log(itens);
            itemTextArea.value = itens.sort();
            itemTextArea.value = itemTextArea.value.replaceAll(',', '');
            inptItemName.value = '';
            inptItemName.style.background = 'rgba(255,255,255,0.7)';
        }
        else {
            alert('Preencha o campo destacado.');
            inptItemName.style.background = '#DFE08F';
        }
    })
}

removeItem = () => {
    btnStage3Remove.addEventListener('click', () => {
        if (itens.indexOf(`${inptSelectCategory.value}: ${inptItemName.value}\n`) != -1) {
            itens.splice(itens.indexOf(`${inptSelectCategory.value}: ${inptItemName.value}\n`), 1);
            alert(`Item *${inptItemName.value}* removido da lista.`);
            itemTextArea.value = itens.sort();
            itemTextArea.value = itemTextArea.value.replaceAll(',', '');
            inptItemName.value = '';
            inptItemName.style.background = 'rgba(255,255,255,0.7)';
        }
        else if (itens.indexOf(`${inptSelectCategory.value}: ${inptItemName.value}\n`) == -1 &&
                inptItemName.value != '') {
            alert(`Não foi possível localizar o item ${inptItemName.value}.`);
            inptItemName.style.background = 'rgba(255,255,255,0.7)';
        }
        else if (inptItemName.value == '') {
            alert('Preencha o campo destacado.');
            inptItemName.style.background = '#DFE08F';
        }
    })
}


/*
PAGE 4
*/

//textArea
const allItensAndCategory = document.querySelector('#show-all-itens-category');

//function
showAllItens = () => {
        allItensAndCategory.value = itemTextArea.value;
}



//EXECUTE
hideAndShow();
hideAndShow2();
hideAndShow3();
addCategory();
addItem();
removeItem();
