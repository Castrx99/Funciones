let mapa=new Map([["España", "Madrid"],["Francia", "Paris"],["Italia","Roma"],["Portugal","Lisboa"]])

let select= document.querySelector("#paises");

for(let [pais,capital] of mapa){

    let paisOp= document.createElement("option")
    paisOp.textContent=pais;
    paisOp.setAttribute("id", pais);
    select.appendChild(paisOp);
}

select.addEventListener("change", function(){
    quitarBorde();
    let capitalS=mapa.get(select.value);
    //get es recuperar el valor que tiene el mapa en la clave se lee en el select. Recordar que en el mapa es indice, valor (España, Madrid)
    document.querySelector("#capital").innerHTML= "La capital es " + capitalS;
    document.querySelector("#" +capitalS).style.border=" 2px solid blue";
    bordeActivo=capitalS;
})

let imagenes=document.querySelectorAll(".img"); //crea una array con todas las imágenes
// for (let i = 0; i < imagenes.length; i++) {
//     imagenes[i].style.width="275px";   
// }

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("mouseover", function(){
        imagenes[i].style.width="200px";
    })
    imagenes[i].addEventListener("mouseout", function(){
        imagenes[i].style.width="150px";
    
    })}
function quitarBorde(){
    for (let i = 0; i< imagenes.length; i++) {
      imagenes[i].style.border="none";
    }
}

