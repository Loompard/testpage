const theme = document.querySelector("#theme-link")

if(findCookie("theme") == "dark") {
    document.getElementById("themeSliderInput").checked = true
    theme.href = "src/themes/dark.css"
}

function playSound() {
    var audio = document.getElementById("clickEvent")
    audio.play()
}

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
    playSound()
    if(theme.getAttribute("href") == "src/themes/light.css") {
        document.getElementById("themeSliderInput").checked = true
        theme.href = "src/themes/dark.css"
        document.cookie = "theme=dark"
    } else {
        document.getElementById("themeSliderInput").checked = false
        theme.href = "src/themes/light.css"
        document.cookie = "theme=light"
    }
}

function findCookie(name) {
    let cookies = document.cookie.split(";")
    for(let i = 0; i<cookies.length; i++) {
        let cookie = cookies[i].split("=")
        if(cookie[0] == name) return cookie[1]
    }
    return ""
}