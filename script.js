var models = [{
    name: 'Ford-mustang',
    img: 'cars_img/mustang.jpg',
    link: 'https://fontawesome.com/icons/arrow-alt-circle-left?style=regular'
}, {
    name: 'Chevrolette camaro',
    img: 'cars_img/camaro.jpg',
    link: 'https://fontawesome.com/icons/arrow-alt-circle-left?style=regular'
}, {
    name: 'Mercedes-benz amg',
    img: 'cars_img/mercedes-amg.jpg',
    link: 'https://fontawesome.com/icons/arrow-alt-circle-left?style=regular'
}, {
    name: 'Lamborjini aventador',
    img: 'cars_img/lamborjini.jpg',
    link: 'https://fontawesome.com/icons/arrow-alt-circle-left?style=regular'
}];
var index = 3;
var count = models.length;
var duration = '2000'
var interval;

init()

function random1(index) {
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].img);
}

function start() {
    interval = setInterval(function (index) {
        index = Math.floor(Math.random() * count)
        random1(index)
    }, duration)
}

function init() {
    document.querySelector('.fa-arrow-alt-circle-right').addEventListener('click', changeright);
    document.querySelector('.fa-arrow-alt-circle-left').addEventListener('click', changeleft);
    //------------------------------------------------
    document.querySelector('.fa-arrow-alt-circle-right').addEventListener('mouseenter', stop);
    document.querySelector('.fa-arrow-alt-circle-left').addEventListener('mouseenter', stop);
    //------------------------------------------------
    document.querySelector('.fa-arrow-alt-circle-right').addEventListener('mouseleave', start);
    document.querySelector('.fa-arrow-alt-circle-left').addEventListener('mouseleave', start);
}

function stop() {
    clearInterval(interval)
}

function changeright() {
    index++;
    if (index == count) {
        index = 0
    } else if (index < 0) {
        index = count - 1;
    }
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].img);

}

function changeleft() {
    index--;
    if (index < 0) {
        index = count - 1;
    }
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].img);
}