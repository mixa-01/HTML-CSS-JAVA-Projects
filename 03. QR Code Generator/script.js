let qrLink = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let qrCode = document.getElementById("qrCode")
let imgBox = document.getElementById("imgBox")
let url = document.getElementById("url")
let btn = document.querySelector("button")

function generateQR() {
    if(url.value.length > 0) {
    qrCode.src = qrLink + url.value; 
    imgBox.classlist.add("show-img");
    }
    else {
        alert("Please enter a URL")
    }
}


url.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        btn.click();
    }
});
window.addEventListener('DOMContentLoaded', (event) => {
    url.value = '';
});
