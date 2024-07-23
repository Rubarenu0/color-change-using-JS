function red(){
    var collection=document.getElementsByTagName("body")
    var span=document.getElementById("span");
    span.textContent='Red';
    for(i=0;i<collection.length;i++){
        collection[i].style.backgroundColor="red"
    }
}

function purple(){
    var collection=document.getElementsByTagName("body")
    var span=document.getElementById("span");
    span.textContent='Purple';
    for(i=0;i<collection.length;i++){
        collection[i].style.backgroundColor="purple"
    }
    
}
function yellow(){
    var collection=document.getElementsByTagName("body")
    var span=document.getElementById("span");
    span.textContent='Yellow';
    for(i=0;i<collection.length;i++){
        collection[i].style.backgroundColor="yellow"
    }
    
}
function blue(){
    var collection=document.getElementsByTagName("body")
    var span=document.getElementById("span");
    span.textContent='Blue';
    for(i=0;i<collection.length;i++){
        collection[i].style.backgroundColor="blue"
    }
    
}

