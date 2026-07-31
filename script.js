const settings = document.getElementById("settings");

const overlay = document.getElementById("overlay");

const cancel = document.getElementById("cancel");

const save = document.getElementById("save");

settings.onclick = () => {

overlay.style.display = "flex";

}

cancel.onclick = () => {

overlay.style.display = "none";

}

overlay.onclick = (e)=>{

if(e.target===overlay){

overlay.style.display="none";

}

}

save.onclick=()=>{

overlay.style.display="none";

}
