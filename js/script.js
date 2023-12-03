
var currentImageIndex = 1;

var stop1 = false;

var stop2 = false;

var stop3 = false;

function getCurrentIndexImage(value){
    return  value;
}

//=======================================================
function animate1() {
    if(stop1){
        return;
    }
    requestAnimationFrame(() => {
        setTimeout(() => {
            animate1();
        }, 1000 / 10);
    });

    const image = document.getElementById('imageRender');
    image.src='../images/AnimationTest-' + getCurrentIndexImage(currentImageIndex) + '.png';
    if(currentImageIndex < 5){
        currentImageIndex++;
    } else {
        currentImageIndex = 1;
    }
}

function startAnimate1() {
    stop1 = false;
    stopAnimate2();
    stopAnimate3();
    animate1();
}

function stopAnimate1() {
    stop1 = true;
}
//=======================================================
function animate2() {
    if(stop2){
        return;
    }
    requestAnimationFrame(() => {
        setTimeout(() => {
            animate2();
        }, 1000 / 10);
    });

    const image = document.getElementById('imageRender');
    image.src='../images/AnimationTest-' + getCurrentIndexImage(currentImageIndex) + '.png';
    if(currentImageIndex < 12){
        currentImageIndex++;
    } else {
        currentImageIndex = 6;
    }
}

function startAnimate2() {
    stop2 = false;
    stopAnimate1(); 
    stopAnimate3();
    animate2();
}
function stopAnimate2() {
    stop2 = true;
}
//=======================================================
function animate3() {
    if(stop3){
        return;
    }  
    requestAnimationFrame(() => {
        setTimeout(() => {
            animate3();
        }, 1000 / 10);
    });

    const image = document.getElementById('imageRender');
    image.src='../images/AnimationTest-' + getCurrentIndexImage(currentImageIndex) + '.png';
    if(currentImageIndex < 20){
        currentImageIndex++;
    } else {
        currentImageIndex = 13;
    }
}

function startAnimate3() {
    stop3 = false;
    stopAnimate1();
    stopAnimate2();
    animate3();
}

function stopAnimate3() {
    stop3 = true;
}

