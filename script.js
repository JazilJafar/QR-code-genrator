const imgbox = document.getElementById("oui");
const qrimage = document.getElementById("qrimg");
const qrtext = document.getElementById("qrtext");
function genqr(){
    if(qrtext.value.length > 0){
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    imgbox.classList.add("showimg");
    imgbox.classList.remove("wrr");
    }else{
        imgbox.classList.remove("showimg");
        qrtext.classList.add("wrr");
        setTimeout(() => {
            qrtext.classList.remove("wrr");
        }, 1000);
    }
}
qrtext.addEventListener("keydown",(event) =>{
    if(event.key === "Enter"){
        genqr();
    }
});