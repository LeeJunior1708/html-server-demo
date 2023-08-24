function xuly(){
    var s1=document.getElementById("so1").value;
    var s2=document.getElementById("so2").value;
    if (!isNaN(s1) && !isNaN(s2) && s1!="" && s2!=""){
        parseFloat
        document.getElementById("cong").value=eval(parseFloat(s1)+parseFloat(s2));
        document.getElementById("tru").value=eval(s1-s2);
        document.getElementById("nhan").value=eval(s1*s2);
        if (s2=="0"){
            document.getElementById("chia").value="Không thể chia cho 0";
            document.getElementById("chiadu").value="Không thể chia cho 0";
        }
        else{
            document.getElementById("chia").value=eval(s1/s2);
            document.getElementById("chiadu").value=eval(s1%s2);
        }
    }
    else{
        document.getElementById("cong").value=0;
        document.getElementById("tru").value=0;
        document.getElementById("nhan").value=0;
        document.getElementById("chia").value=0;
        document.getElementById("chiadu").value=0;
    }
}