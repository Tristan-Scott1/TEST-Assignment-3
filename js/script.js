
var currentImageIndex = 1;

function getCurrentIndexImage(value){
    return  value;
}

function animate() {
    requestAnimationFrame(() => {
        setTimeout(() => {
            animate();
        }, 1000 / 10);
    });

    const image = document.getElementById('imageRender');
    image.src='../images/AnimationTest-' + getCurrentIndexImage(currentImageIndex) + '.png';
    if(currentImageIndex < 20){
        currentImageIndex++;
    } else {
        currentImageIndex = 1;
    }
}

function startAnimate() {
    animate();
}
