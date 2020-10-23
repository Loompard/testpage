const theme = document.querySelector("#theme-link")

function invertImage(img){
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0);
    var imageData = ctx.getImageData(0, 0, img.width, img.height);    

    var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
        if ((data[i] == 255) && (data[i+1] == 255) && (data[i+2] == 255)){
            data[i] = 0;
            data[i+1] = 0;
            data[i+2] = 0;
        }
    }

    ctx.putImageData(imageData, 0, 0);
    $(img).get(0).src = canvas.toDataURL("image/png");
}

function changeTheme() {
    if(theme.getAttribute("href") == "src/themes/light.css") {
        theme.href = "src/themes/dark.css"
    }
    else theme.href = "src/themes/light.css"
}

function alert() {
    alert("HELLO")
}

