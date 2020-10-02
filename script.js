const btn = document.querySelector('.btn'); //получение кнопки

//Функция которая выполняет анимацию
function myAnimation() {
    let element = document.querySelector('.box'); //получение элемента, над которым будет происходить анимация
    let position = 0; //начальная позиция элемента
    let oneId; //переменная в которой будет храниться id первого setInterval
    let twoId; //переменная в которой будет храниться id второго setInterval

    oneId = setInterval(frame, 10); //сохранение id setInterval в переменную

    //Функция которая будет вызываться каждые 10 миле секунд до определённого момента, и будет воспроизводить...
    //...перемещение квадрата, то есть саму анимацию
    function frame() {
        //Когда счётчик(position) будет 300, остановится первый setInterval, и начнётся второй, который...
        //...будет возвращать квадрат с таким же интервалом в обратную сторону по диагонали
        if (position === 300) {
            clearInterval(oneId) //Остановка первого setInterval
            twoId = setInterval(() => { //сохранение id второго setInterval в переменную
                position--; //уменьшение счётчика на 1
                //Присваение элементу inline стилей, которая возвращают квадрат с интервалами в начальное состояние
                element.style.top = `${position}px`;
                element.style.left = `${position}px`;
                //Когда позиция квадрата достигнет начального состояния, второй setInterval остановится
                if(position === 0){
                    clearInterval(twoId)
                }
            }, 10)
        } else {
            position++; //увеличение счётчика на 1
            //Присваение элементу inline стилей, которые будут двигать квадрат одновременно сверху и снизу по диагонали
            element.style.top = `${position}px`;
            element.style.left = `${position}px`;
        }
    }
}


btn.addEventListener('click', myAnimation); //обработчик события при клике на кнопку, который вызывает функцию с анимацией
