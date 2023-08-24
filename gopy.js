function xuli(){
    var hoten=document.getElementById("ten").value;
    var email=document.getElementById("mail").value;
    var gopy=document.getElementById("noidung").value;
    var re=/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    if (hoten=="")
    {
        alert("Không được để trống họ tên");
        document.getElementById("ten").focus();
        return;
    }
    if (email=="")
    {
        alert("Không được để trống địa chỉ mail");
        document.getElementById("mail").focus();
        return;
    }
    if(re.test(email)==false){
        alert("Địa chỉ email không hợp lệ");
        document.getElementById("mail").focus();
        return;
    }
    if (gopy=="")
    {
        alert("Vui lòng điền nội dung góp ý!!!");
        document.getElementById("noidung").focus();
        return;
    }
    if(hoten !="" && email != "" && gopy!=""){
        alert("Cảm ơn bạn đã quan tâm xây dựng Website!!!")
    }
     
}