export function validarNota(nota) {
  const num = parseFloat(nota);
  return !isNaN(num) && num >= 0 && num <= 10;
}

export function calcularMedia(n1, n2) {
  return (parseFloat(n1) + parseFloat(n2)) / 2;
}

export function determinarSituacao(media) {
  if (media < 5) return "Reprovado";
  if (media < 7) return "Recuperação";
  return "Aprovado";
}

function salvarAluno(nome) {
  const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
  if (!alunos.includes(nome)) {
    alunos.push(nome);
    localStorage.setItem('alunos', JSON.stringify(alunos));
  }
}

function salvarNotas(nome, nota1, nota2, media, situacao) {
  const registros = JSON.parse(localStorage.getItem('registros')) || {};
  registros[nome] = { nota1, nota2, media, situacao };
  localStorage.setItem('registros', JSON.stringify(registros));
}

function atualizarListaAlunos() {
  const select = document.getElementById('aluno');
  const lista = document.getElementById('lista-alunos');
  select.innerHTML = '';
  lista.innerHTML = '';

  const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
  const registros = JSON.parse(localStorage.getItem('registros')) || {};

  alunos.forEach(nome => {
    const option = document.createElement('option');
    option.value = nome;
    option.textContent = nome;
    select.appendChild(option);

    const li = document.createElement('li');
    const dados = registros[nome];
    li.textContent = `${nome} - Nota 1: ${dados?.nota1 ?? '-'} | Nota 2: ${dados?.nota2 ?? '-'} | Média: ${dados?.media ?? '-'} | Situação: ${dados?.situacao ?? '-'}`;
    lista.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarListaAlunos();

  document.getElementById("cadastrarAluno").addEventListener("click", () => {
    const nome = document.getElementById("novoAluno").value.trim();
    if (nome) {
      salvarAluno(nome);
      atualizarListaAlunos();
      document.getElementById("novoAluno").value = "";
    }
  });

  document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    const aluno = document.getElementById("aluno").value;
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;

    if (!validarNota(nota1) || !validarNota(nota2)) {
      document.getElementById("resultado").textContent = "Notas inválidas! Digite valores entre 0 e 10.";
      return;
    }

    const media = calcularMedia(nota1, nota2);
    const situacao = determinarSituacao(media);

    salvarNotas(aluno, nota1, nota2, media.toFixed(2), situacao);

    document.getElementById("resultado").textContent =
      `Notas salvas! Média: ${media.toFixed(2)} | Situação: ${situacao}`;

    atualizarListaAlunos();
  });
});
