// Sistema de quizzes interativos

const Quiz = {
  respostas: {},
  moduloAtual: null,
  submetido: false,

  // Inicializa o quiz para um módulo
  iniciar(modulo) {
    this.moduloAtual = modulo;
    this.respostas = {};
    this.submetido = false;
    return this.renderizar(modulo);
  },

  // Renderiza o HTML do quiz
  renderizar(modulo) {
    const resultadoAnterior = Progress.getQuizResult(modulo.id);

    let html = `
      <div class="quiz-container" id="quiz-${modulo.id}">
        <h3 class="quiz-titulo">
          <span>🧠</span> Quiz — ${modulo.titulo}
        </h3>
        <p class="quiz-subtitulo">Teste seus conhecimentos sobre este módulo</p>
    `;

    if (resultadoAnterior) {
      html += `
        <div class="quiz-resultado-anterior">
          <span>📊</span> Tentativa anterior:
          <strong>${resultadoAnterior.acertos}/${resultadoAnterior.total} acertos (${resultadoAnterior.percentual}%)</strong>
          <button class="btn-refazer" onclick="Quiz.refazer(${modulo.id})">Refazer quiz</button>
        </div>
      `;
    }

    modulo.quiz.forEach((questao, index) => {
      html += `
        <div class="questao" id="questao-${modulo.id}-${index}">
          <p class="questao-numero">Pergunta ${index + 1} de ${modulo.quiz.length}</p>
          <p class="questao-texto">${questao.pergunta}</p>
          <div class="opcoes">
      `;

      questao.opcoes.forEach((opcao, opIndex) => {
        html += `
          <label class="opcao" id="opcao-${modulo.id}-${index}-${opIndex}">
            <input
              type="radio"
              name="questao-${modulo.id}-${index}"
              value="${opIndex}"
              onchange="Quiz.selecionarResposta(${modulo.id}, ${index}, ${opIndex})"
            >
            <span class="opcao-texto">${opcao}</span>
          </label>
        `;
      });

      html += `</div></div>`;
    });

    html += `
        <button
          class="btn-submit-quiz"
          id="btn-submit-${modulo.id}"
          onclick="Quiz.submeter(${modulo.id})"
          disabled
        >
          Verificar Respostas
        </button>
        <div id="resultado-quiz-${modulo.id}" class="resultado-quiz hidden"></div>
      </div>
    `;

    return html;
  },

  // Registra a resposta selecionada
  selecionarResposta(moduloId, questaoIndex, opcaoIndex) {
    if (this.submetido) return;

    if (!this.respostas[moduloId]) this.respostas[moduloId] = {};
    this.respostas[moduloId][questaoIndex] = opcaoIndex;

    const modulo = App.modulosData.find(m => m.id === moduloId);
    if (!modulo) return;

    // Habilita o botão quando todas as questões forem respondidas
    const totalQuestoes = modulo.quiz.length;
    const totalRespostas = Object.keys(this.respostas[moduloId] || {}).length;

    const btnSubmit = document.getElementById(`btn-submit-${moduloId}`);
    if (btnSubmit) {
      btnSubmit.disabled = totalRespostas < totalQuestoes;
    }
  },

  // Submete e corrige o quiz
  submeter(moduloId) {
    if (this.submetido) return;

    const modulo = App.modulosData.find(m => m.id === moduloId);
    if (!modulo) return;

    const respostasModulo = this.respostas[moduloId] || {};
    let acertos = 0;

    modulo.quiz.forEach((questao, index) => {
      const respostaSelecionada = respostasModulo[index];
      const correta = questao.correta;
      const questaoEl = document.getElementById(`questao-${moduloId}-${index}`);

      // Desabilitar todos os radio buttons
      const radios = questaoEl.querySelectorAll('input[type="radio"]');
      radios.forEach(r => r.disabled = true);

      // Marcar opcoes corretas e erradas
      questao.opcoes.forEach((_, opIndex) => {
        const opcaoEl = document.getElementById(`opcao-${moduloId}-${index}-${opIndex}`);
        if (opIndex === correta) {
          opcaoEl.classList.add('opcao-correta');
        } else if (opIndex === respostaSelecionada && respostaSelecionada !== correta) {
          opcaoEl.classList.add('opcao-errada');
        }
      });

      // Mostrar explicação
      const explicacaoEl = document.createElement('div');
      explicacaoEl.className = 'questao-explicacao';
      explicacaoEl.innerHTML = `<span>💡</span> ${questao.explicacao}`;
      questaoEl.appendChild(explicacaoEl);

      if (respostaSelecionada === correta) acertos++;
    });

    // Salvar resultado
    Progress.salvarQuiz(moduloId, acertos, modulo.quiz.length);

    // Exibir resultado geral
    const percentual = Math.round((acertos / modulo.quiz.length) * 100);
    const resultadoEl = document.getElementById(`resultado-quiz-${moduloId}`);
    resultadoEl.classList.remove('hidden');

    let emoji, mensagem, classe;
    if (percentual === 100) {
      emoji = '🏆'; mensagem = 'Perfeito! Você dominou este módulo!'; classe = 'resultado-otimo';
    } else if (percentual >= 67) {
      emoji = '👍'; mensagem = 'Bom trabalho! Revise os pontos que errou.'; classe = 'resultado-bom';
    } else {
      emoji = '📚'; mensagem = 'Revise o módulo e tente novamente!'; classe = 'resultado-ruim';
    }

    resultadoEl.innerHTML = `
      <div class="resultado-final ${classe}">
        <span class="resultado-emoji">${emoji}</span>
        <div>
          <strong>${acertos}/${modulo.quiz.length} acertos (${percentual}%)</strong>
          <p>${mensagem}</p>
        </div>
      </div>
    `;

    // Ocultar botão de submit
    const btnSubmit = document.getElementById(`btn-submit-${moduloId}`);
    if (btnSubmit) btnSubmit.style.display = 'none';

    this.submetido = true;

    // Se acertou tudo, sugerir marcar como concluído
    if (percentual >= 67 && !Progress.isConcluido(moduloId)) {
      setTimeout(() => {
        const marcarBtn = document.getElementById(`btn-concluir-${moduloId}`);
        if (marcarBtn) {
          marcarBtn.classList.add('btn-highlight');
          marcarBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  },

  // Refaz o quiz (limpa resultados e permite nova tentativa)
  refazer(moduloId) {
    this.respostas[moduloId] = {};
    this.submetido = false;
    const modulo = App.modulosData.find(m => m.id === moduloId);
    if (modulo) {
      const quizContainer = document.getElementById(`quiz-${moduloId}`);
      if (quizContainer) {
        quizContainer.outerHTML = this.renderizar(modulo);
      }
    }
  }
};
