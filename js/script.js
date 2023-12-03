
var currentImageIndex = 1;

function getCurrentIndexImage(value){
    return  value;
}

//=======================================================
function animate1() {
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
    animate1();
}
//=======================================================
function animate2() {
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
    animate2();
}
//=======================================================
function animate3() {
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
    animate3();
}

