var numero1, numero2;
let idade;
const lingua = "JAVASCRIPT";

funcTeste = () => {
  numero1 = document.querySelector("h1").textContent;
  numero2 = document.querySelector("h2").textContent;
  soma = Number(numero1) + Number(numero2);
  alert(soma);
};
// funcTeste();

funcTeste1 = (a, b) => {
  soma = a + b;
  alert(soma);
};
// funcTeste1(2, 3);

funcIdadeTeste = () => {
  idade = prompt("Digite sua idade");

  if (Number(idade)) {
    if (idade < 150 && idade > 0) {
      alert(`Voce tem ${idade} anos`);
    } else {
      alert(`${idade} é uma idade invalida`);
    }
  } else {
    alert(`${idade} é uma idade invalida`);
  }
};
// funcIdadeTeste();

funcMedia = () => {
  let nota = [];

  let soma = 0;
  for (let i = 0; i < 4; i++) {
    do {
      nota[i] = prompt(`Digite a nota ${i + 1} do aluno`);
    } while (!Number(nota[i]) || Number(nota[i] < 0 || nota[i] > 10));

    nota.push(Number(nota[i]));
  }
  nota.forEach((notas) => {
    console.log(notas);
    soma += Number(notas);
  });
  media = soma / 4;
  console.log(Number(media));
  alert(`Média do aluno ${media}`);
};
funcMedia();
