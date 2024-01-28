function set(){
    setTimeout((()=>{
        document.body.style.background="red"
        document.getElementById("name").innerHTML="RED";
    }),400);
    setTimeout((()=>{
        document.body.style.background="blue"
        document.getElementById("name").innerHTML="BLUE";
    }),800);
    setTimeout((()=>{
        document.body.style.background="green"
        document.getElementById("name").innerHTML="GREEN";
    }),1200);
    
}
setInterval(set,1200)