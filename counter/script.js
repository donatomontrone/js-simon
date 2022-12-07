let counter = 0;
buttonElement = document.querySelector('button');

buttonElement.addEventListener(('click'), function(){
    if (counter < 10) {
        counter++;
        buttonElement.innerHTML = `Play (${counter})`;
        buttonElement.classList.remove('bg-danger');
    } else {
        buttonElement.classList.add('bg-danger');
        alert('Attendi')
        setTimeout(()=> {
            counter = 0;
            buttonElement.innerHTML = `Play (${counter})`;
        }, 3 * 1000); 
    }
})
