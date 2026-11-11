function nota(){
    let nota1;
    let nota2;
    let resultado;
    nota1=Number(prompt("digie a nota do 1 trimestre"));
    nota2=Number(prompt("digite a nota do 2 trimestre"));
    resultado=180-(nota1+nota2);
    if(resultado<=0){
        alert("parabéns, você é do rock!")
    }else{
        alert("Sem mais rock pra você amigão, precisa recuperar essa parada!")
    };
};