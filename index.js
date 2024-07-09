let alunoNotaUsabilidade = 1;
let alunoNotaEngenhariaDeSoftware = 1;
let alunoNotaVidaECarreira = 9;

let alunoMediaNotas = (alunoNotaUsabilidade + alunoNotaEngenhariaDeSoftware + alunoNotaVidaECarreira) / 3;

console.log("Olá, a sua média é: " + alunoMediaNotas.toFixed(2));

if(alunoMediaNotas < 5){
    console.log("Você está reprovado, estude e tente novamente.");
}else if(alunoMediaNotas > 4 && alunoMediaNotas < 8){
    console.log("Você está de recuperação, estude e tente novamente.");
}else{
    console.log("Você está aprovado, parabéns!");
};