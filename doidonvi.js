function xlkm(){
    var nhap=document.getElementById("km").value;
    if(isNaN(nhap)==false){ 
        document.getElementById("hm").value=eval(nhap*10);
        document.getElementById("dam").value=eval(nhap*100);
        document.getElementById("m").value=eval(nhap*1000);
        document.getElementById("dm").value=eval(nhap*10000);
        document.getElementById("cm").value=eval(nhap*100000);
        document.getElementById("mm").value=eval(nhap*1000000);
    }
}
function xlhm(){
    var nhap=document.getElementById("hm").value;
    if(isNaN(nhap)==false){ 
        document.getElementById("km").value=eval(nhap/10);
        document.getElementById("dam").value=eval(nhap*10);
        document.getElementById("m").value=eval(nhap*100);
        document.getElementById("dm").value=eval(nhap*1000);
        document.getElementById("cm").value=eval(nhap*10000);
        document.getElementById("mm").value=eval(nhap*100000);
    }
}
function xldam(){
    var nhap=document.getElementById("dam").value;
    if(isNaN(nhap)==false){ 
        document.getElementById("km").value=eval(nhap/100);
        document.getElementById("hm").value=eval(nhap/10);
        document.getElementById("m").value=eval(nhap*10);
        document.getElementById("dm").value=eval(nhap*100);
        document.getElementById("cm").value=eval(nhap*1000);
        document.getElementById("mm").value=eval(nhap*10000);
    }
}
function xlm(){
    var nhap=document.getElementById("m").value;
    if(isNaN(nhap)==false){ 
        document.getElementById("km").value=eval(nhap/1000);
        document.getElementById("hm").value=eval(nhap/100);
        document.getElementById("dam").value=eval(nhap/10);
        document.getElementById("dm").value=eval(nhap*10);
        document.getElementById("cm").value=eval(nhap*100);
        document.getElementById("mm").value=eval(nhap*1000);
    }
}

function xldm(){
    var nhap=document.getElementById("dm").value;
    if(isNaN(nhap)==false){ 
        document.getElementById("km").value=eval(nhap/10000)
        document.getElementById("hm").value=eval(nhap/1000);
        document.getElementById("dam").value=eval(nhap/100);
        document.getElementById("m").value=eval(nhap/10);
        document.getElementById("cm").value=eval(nhap*10);
        document.getElementById("mm").value=eval(nhap*100);
    }
}
function xlcm(){
    var nhap=document.getElementById("cm").value;
    if(isNaN(nhap)==false){ 
        document.getElementById("km").value=eval(nhap/100000);
        document.getElementById("hm").value=eval(nhap/10000);
        document.getElementById("dam").value=eval(nhap/1000);
        document.getElementById("m").value=eval(nhap/100);
        document.getElementById("dm").value=eval(nhap/10);
        document.getElementById("mm").value=eval(nhap*10);
    }
}
function xlmm(){
    var nhap=document.getElementById("mm").value;
    if(isNaN(nhap)==false){ 
        document.getElementById("km").value=eval(nhap/1000000);
        document.getElementById("hm").value=eval(nhap/100000);
        document.getElementById("dam").value=eval(nhap/10000);
        document.getElementById("m").value=eval(nhap/1000);
        document.getElementById("dm").value=eval(nhap/100);
        document.getElementById("cm").value=eval(nhap/10);
        
    }
}
/*----------------*/
function xlms(){
    var inp=document.getElementById("ms").value;
    if(isNaN(inp)==false){
        document.getElementById("mph").value=eval(inp*60);
        document.getElementById("kmh").value=eval(inp*3.6);
        document.getElementById("kms").value=eval(inp*0.001);
        document.getElementById("cms").value=eval(inp*100);
    }
}
function xlmph(){
    var inp=document.getElementById("mph").value;
    if(isNaN(inp)==false){
        document.getElementById("ms").value=eval(inp/60);
        document.getElementById("kmh").value=eval(inp*0.06);
        document.getElementById("kms").value=eval(inp/60000);
        document.getElementById("cms").value=eval(inp*10/6);
    }
}
function xlkmh(){
    var inp=document.getElementById("kmh").value;
    if(isNaN(inp)==false){
        document.getElementById("ms").value=eval(inp*10/36);
        document.getElementById("mph").value=eval(inp*100/6);
        document.getElementById("kms").value=eval(inp/3600);
        document.getElementById("cms").value=eval(inp*100/36);
    }
}
function xlkms(){
    var inp=document.getElementById("kms").value;
    if(isNaN(inp)==false){
        document.getElementById("ms").value=eval(inp*1000);
        document.getElementById("mph").value=eval(inp*60000);
        document.getElementById("kmh").value=eval(inp*3600);
        document.getElementById("cms").value=eval(inp*100000);
    }
}
function xlcms(){
    var inp=document.getElementById("cms").value;
    if(isNaN(inp)==false){
        document.getElementById("ms").value=eval(inp*0.01);
        document.getElementById("mph").value=eval(inp*0.6);
        document.getElementById("kmh").value=eval(inp*0.36);
        document.getElementById("kms").value=eval(inp/100000);
    }
}