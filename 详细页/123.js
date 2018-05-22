function  changeimg(){
    var bigimg=document.getElementById("bigimg");
    bigimg.src=event.srcElement.src;
}


function showobj(id){
    var obj=document.getElementById(id);
    obj.style.display="block";
}

function hiddenobj(id){
    var obj=document.getElementById(id);
    obj.style.display="none";
}

function miniimg(){
    var obj1=document.getElementById("targetimg");
    var obj2=document.getElementById(event.srcElement.id);
    obj1.src=obj2.src;
}

function onmove(){
    showobj("targetimgdiv");
    miniimg();

    var obj=document.getElementById("targetimg");

    var offx=obj.width/event.srcElement.width;
    var offy=obj.height/event.srcElement.height;

    var div=document.getElementById("targetimgdiv");

    div.scrollLeft=(event.offsetX*offx);
    div.scrollTop=(event.offsetY*offy);

}