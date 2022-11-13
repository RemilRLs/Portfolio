const firstList = document.querySelector('.list-skills1');
const secondList = document.querySelector('.list-skills2');
const thirdList = document.querySelector('.list-skills3');

const firstButton = document.querySelector('.software-development');
const secondButton = document.querySelector('.front-end-development');
const thirdButton = document.querySelector('.back-end-development');

firstButton.addEventListener('click', () => { 
    const visibility = firstList.getAttribute('data-visible'); 
    
    if(visibility === "false"){
        firstButton.setAttribute('button-click', true);
        secondButton.setAttribute('button-click', false);
        thirdButton.setAttribute('button-click', false);

        firstList.setAttribute('data-visible', true);
        secondList.setAttribute('data-visible', false);
        thirdList.setAttribute('data-visible', false);
    }


}); 

secondButton.addEventListener('click', () => { 
    const visibility = secondList.getAttribute('data-visible'); 

    
    if(visibility === "false"){
        firstButton.setAttribute('button-click', false);
        secondButton.setAttribute('button-click', true);
        thirdButton.setAttribute('button-click', false);

        firstList.setAttribute('data-visible', false);
        secondList.setAttribute('data-visible', true);
        thirdList.setAttribute('data-visible', false);
    }


}); 

thirdButton.addEventListener('click', () => { 
    const visibility = thirdList.getAttribute('data-visible'); 

    
    if(visibility === "false"){
        firstButton.setAttribute('button-click', false);
        secondButton.setAttribute('button-click', false);
        thirdButton.setAttribute('button-click', true);

        firstList.setAttribute('data-visible', false);
        secondList.setAttribute('data-visible', false);
        thirdList.setAttribute('data-visible', true);
    }


}); 