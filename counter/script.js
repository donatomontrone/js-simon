buttonElement = document.querySelector('button');
let counter = 0;
let stopCount = false;

buttonElement.addEventListener(('click'), function(){
    buttonElement.innerHTML = `Play (${counter})`;
    if (!stopCount) {
        if (counter < 10) {
            counter++;
            buttonElement.innerHTML = `Play (${counter})`;
        } else {
            setTimeout(()=> {
                counter = 0;
                buttonElement.classList.remove('btn-danger');
                buttonElement.innerHTML = `Play (${counter})`;
                stopCount = false;
            }, 3 * 1000);
        }
    }

    if (counter == 10) {
        buttonElement.classList.add('btn-danger');
    }
})
