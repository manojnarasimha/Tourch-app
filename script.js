function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "bulboff.png";
    } else {
        image.src = "bulbon.png";
    }
}