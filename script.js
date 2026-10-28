const botoesCurtir = document. querySelectorAll(".curtir");
 botoesCurtir.forEach(function(botoesCurtir){
let curtiu = false;
botaoCuurtir.addEventListener("click" , curtir);
function curtir(){
    const cantador = botaoCuurtir . queryselector("span");
    if (curtiu === false){
        contador . textContent++;
        curtiu = true;}
        else{
            contador . textContent--;
            curtiu = false;
        }
 }
});  

const btnTema = document.querySelector(".btn-tema");
    btnTema.addEvenlistener("click", mudarTema);
    function mudarTema(){
        document.body.classList.toggle("tema-escuro");
    }
    

