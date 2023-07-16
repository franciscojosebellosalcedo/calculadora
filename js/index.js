document.addEventListener("DOMContentLoaded",()=>{
    window.addEventListener("load", function () {
        const div_resultado = document.querySelector(".resultado");
        const botones = [...document.querySelectorAll(".btn")];
        for (let index = 0; index < botones.length; index++) {
            const btn = botones[index];
            btn.addEventListener("click", () => {
                calcular(btn, div_resultado);
            });
        }
    });
    function calcular(btn, div_resultado) {
        try {
            switch (btn.innerText) {
                case "c":
                    limpiar(div_resultado);
                    break;
                case "=":
                    operar(div_resultado);
                    break;
                default:
                    escribirNumero(btn, div_resultado);
                    break;
            }
        } catch (error) {
            alert("Expresion no valida.");
            limpiar(div_resultado);
        }
    }
    function escribirNumero(btn, div_resultado) {
        div_resultado.innerText += btn.innerText;
    }
    function operar(div_resultado) {
        let expresion = div_resultado.innerText;
        if (expresion.indexOf("x") > 0) {
            expresion = expresion.replace("x", "*");
            div_resultado.innerText = eval(expresion);
        } else if (expresion.length === 0) {
            console.log(div_resultado.innerText);
        }else if(eval(expresion)===undefined){
            limpiar(div_resultado);
        } else {
            div_resultado.innerText = eval(expresion);
        }
    }
    function limpiar(div_resultado) {
        div_resultado.innerText = "";
    }
});