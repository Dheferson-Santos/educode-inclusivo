/* ============================================================
   EduCode Inclusivo - JavaScript
   ============================================================ */

// ===== CAPTURA DOS ELEMENTOS (DOM) =====
const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const resultado3 = document.getElementById("resultado3");
const resultadoFinal = document.getElementById("resultadoFinal");
const botao = document.getElementById("verificar");

// ===== FUNCAO AUXILIAR: valida uma pergunta =====
function validar(nomeRadio, resultado, respostaCorreta, mensagemCorreta) {
  // Pega o radio selecionado pelo nome do grupo
  const selecionado = document.querySelector(`input[name="${nomeRadio}"]:checked`);

  if (!selecionado) {
    resultado.textContent = "Atencao: selecione uma alternativa!";
    resultado.className = "resultado errado";
    return false;
  }

  if (Number(selecionado.value) === respostaCorreta) {
    resultado.textContent = "Correto! " + mensagemCorreta;
    resultado.className = "resultado correto";
    return true;
  } else {
    resultado.textContent = "Incorreto. Tente novamente!";
    resultado.className = "resultado errado";
    return false;
  }
}

// ===== EVENTO DO BOTAO =====
botao.addEventListener("click", function () {

  // Pergunta 1 - Quantos passos? (Resposta: 3 - alternativa B)
  const ok1 = validar(
    "pergunta1",
    resultado1,
    3,
    "Existem 3 passos no algoritmo."
  );

  // Pergunta 2 - O que vem primeiro? (Resposta: 2 - alternativa B)
  const ok2 = validar(
    "pergunta2",
    resultado2,
    2,
    "Primeiro ligamos o computador."
  );

  // Pergunta 3 - Qual numero e maior? (Resposta: 20 - alternativa B)
  const ok3 = validar(
    "pergunta3",
    resultado3,
    20,
    "20 e maior que 15."
  );

  // ===== RESULTADO FINAL =====
  const acertos = [ok1, ok2, ok3].filter(Boolean).length;

  if (acertos === 3) {
    resultadoFinal.textContent = "Excelente! Voce acertou todas as 3 perguntas!";
    resultadoFinal.style.background = "#dcfce7";
    resultadoFinal.style.color = "#166534";
  } else if (acertos === 2) {
    resultadoFinal.textContent = "Muito bem! Voce acertou 2 de 3.";
    resultadoFinal.style.background = "#fef9c3";
    resultadoFinal.style.color = "#854d0e";
  } else if (acertos === 1) {
    resultadoFinal.textContent = "Voce acertou 1 de 3. Continue tentando!";
    resultadoFinal.style.background = "#ffedd5";
    resultadoFinal.style.color = "#9a3412";
  } else {
    resultadoFinal.textContent = "Tente novamente! Revise os exemplos acima.";
    resultadoFinal.style.background = "#fee2e2";
    resultadoFinal.style.color = "#991b1b";
  }
});