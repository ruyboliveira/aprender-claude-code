// Gerenciamento de progresso do usuário via LocalStorage

const STORAGE_KEY = 'claudecode_progress';

const Progress = {
  // Carrega o progresso salvo
  load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : { modulos: {}, quizzes: {} };
    } catch {
      return { modulos: {}, quizzes: {} };
    }
  },

  // Salva o progresso
  save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  // Marca um módulo como concluído
  concluirModulo(moduloId) {
    const data = this.load();
    data.modulos[moduloId] = { concluido: true, data: new Date().toISOString() };
    this.save(data);
    this.atualizarUI();
  },

  // Verifica se um módulo foi concluído
  isConcluido(moduloId) {
    const data = this.load();
    return !!(data.modulos[moduloId]?.concluido);
  },

  // Salva o resultado de um quiz
  salvarQuiz(moduloId, acertos, total) {
    const data = this.load();
    data.quizzes[moduloId] = {
      acertos,
      total,
      percentual: Math.round((acertos / total) * 100),
      data: new Date().toISOString()
    };
    this.save(data);
  },

  // Retorna o resultado de um quiz
  getQuizResult(moduloId) {
    const data = this.load();
    return data.quizzes[moduloId] || null;
  },

  // Calcula o progresso geral (0-100)
  calcularProgresso(totalModulos) {
    const data = this.load();
    const concluidos = Object.values(data.modulos).filter(m => m.concluido).length;
    return Math.round((concluidos / totalModulos) * 100);
  },

  // Reseta todo o progresso
  resetar() {
    localStorage.removeItem(STORAGE_KEY);
    this.atualizarUI();
  },

  // Atualiza os elementos de progresso na interface
  atualizarUI() {
    if (typeof App !== 'undefined') {
      App.renderizarSidebar();
      App.atualizarBarraProgresso();
    }
  }
};
