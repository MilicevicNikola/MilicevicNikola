function randomColor(){
    const color1 = Math.floor(Math.random() * 255);
    const color2 = Math.floor(Math.random() * 255);
    const color3 = Math.floor(Math.random() * 255);
    let col = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
    document.getElementById("mainSection").style.color = col;
}

document.body.addEventListener("click", randomColor);