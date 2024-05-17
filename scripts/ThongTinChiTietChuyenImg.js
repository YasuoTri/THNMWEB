function AlterImg1(){
    var img=document.querySelector('#imgOf');
    img.src="/images/ImgChiTietSP/SP1/pic2.avif";
}
function AlterImg2(){
    var img=document.querySelector('#imgOf');
    img.src="/images/ImgChiTietSP/SP1/pic1.avif";
}
function AlterImg3(){
    var img=document.querySelector('#imgOf');
    img.src="/images/ImgChiTietSP/SP1/pic3.avif";
}
var even=0;
function AlterIcon(){
    var icon=document.querySelector('#icon');
    if(even%2==0){
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        even++;
    }else
    {
        icon.classList.add("fa-regular");
        icon.classList.remove("fa-solid");
        even++;
    }
}