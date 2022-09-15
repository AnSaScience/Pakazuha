let conceptContainer = document.querySelector('.game-concept');

conceptContainer.addEventListener('click',(event)=>{
    if(event.target.classList.contains('btn1')){
        const btnArrow= document.querySelector('#btn1');
        const content = document.querySelector('#content1');
        console.log(btnArrow)
        btnArrow.classList.toggle('active');
        content.classList.toggle('hide');
    }
    if(event.target.classList.contains('btn2')){
        const btnArrow= document.querySelector('#btn2');
        const content = document.querySelector('#content2');
        btnArrow.classList.toggle('active');
        content.classList.toggle('hide');
    }
    if(event.target.classList.contains('btn3')){
        const btnArrow= document.querySelector('#btn3');
        const content = document.querySelector('#content3');
        btnArrow.classList.toggle('active');
        content.classList.toggle('hide');
    }
})