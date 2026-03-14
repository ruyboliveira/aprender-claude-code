// Lógica principal da aplicação — roteamento e renderização

const App = {
  moduloAtual: null,
  modulosData: [modulo1, modulo2, modulo3, modulo4, modulo5, modulo6, modulo7, modulo8],
  termoBusca: '',

  // Inicializa a aplicação
  init() {
    this.renderizarSidebar();
    this.atualizarBarraProgresso();
    this.configurarBusca();
    this.configurarMenu();

    // Carregar módulo da URL ou o primeiro
    const hash = window.location.hash.replace('#', '');
    const moduloId = hash ? parseInt(hash) : 1;
    this.navegarPara(moduloId);

    // Listener para mudança de hash
    window.addEventListener('hashchange', () => {
      const id = parseInt(window.location.hash.replace('#', ''));
      if (id) this.navegarPara(id, false);
    });
  },

  // Renderiza a sidebar com todos os módulos
  renderizarSidebar() {
    const lista = document.getElementById('lista-modulos');
    if (!lista) return;

    lista.innerHTML = this.modulosData.map(modulo => {
      const concluido = Progress.isConcluido(modulo.id);
      const ativo = this.moduloAtual?.id === modulo.id;
      return `
        <li>
          <button
            class="modulo-btn ${ativo ? 'ativo' : ''} ${concluido ? 'concluido' : ''}"
            onclick="App.navegarPara(${modulo.id})"
          >
            <span class="modulo-icone">${modulo.icone}</span>
            <span class="modulo-nome">${modulo.titulo}</span>
            ${concluido ? '<span class="check">✓</span>' : ''}
          </button>
        </li>
      `;
    }).join('');
  },

  // Atualiza a barra de progresso global
  atualizarBarraProgresso() {
    const percentual = Progress.calcularProgresso(this.modulosData.length);
    const barra = document.getElementById('barra-progresso');
    const texto = document.getElementById('texto-progresso');

    if (barra) barra.style.width = `${percentual}%`;
    if (texto) {
      const concluidos = this.modulosData.filter(m => Progress.isConcluido(m.id)).length;
      texto.textContent = `${concluidos}/${this.modulosData.length} módulos concluídos`;
    }
  },

  // Navega para um módulo específico
  navegarPara(moduloId, atualizarHash = true) {
    const modulo = this.modulosData.find(m => m.id === moduloId);
    if (!modulo) return;

    this.moduloAtual = modulo;

    if (atualizarHash) {
      history.pushState(null, '', `#${moduloId}`);
    }

    this.renderizarConteudo(modulo);
    this.renderizarSidebar();

    // Fechar menu mobile se estiver aberto
    document.getElementById('sidebar')?.classList.remove('aberta');

    // Scroll para o topo
    document.getElementById('conteudo-principal')?.scrollTo(0, 0);
  },

  // Renderiza o conteúdo de um módulo
  renderizarConteudo(modulo) {
    const area = document.getElementById('area-conteudo');
    if (!area) return;

    const concluido = Progress.isConcluido(modulo.id);
    const anterior = this.modulosData.find(m => m.id === modulo.id - 1);
    const proximo = this.modulosData.find(m => m.id === modulo.id + 1);

    let html = `
      <div class="modulo-header">
        <div class="modulo-badge">
          <span>${modulo.icone}</span>
          <span>Módulo ${modulo.id}</span>
        </div>
        <h1 class="modulo-titulo-principal">${modulo.titulo}</h1>
        <p class="modulo-descricao">${modulo.descricao}</p>
        <div class="modulo-meta">
          <span>⏱️ ${modulo.duracao} de leitura</span>
          <span>•</span>
          <span>${modulo.secoes.length} seções</span>
          <span>•</span>
          <span>🧠 ${modulo.quiz.length} questões</span>
        </div>
      </div>
    `;

    // Renderizar seções de conteúdo
    modulo.secoes.forEach((secao, index) => {
      html += `
        <div class="secao" id="secao-${index}">
          <h2 class="secao-titulo">
            <span class="secao-num">${index + 1}</span>
            ${secao.titulo}
          </h2>
          <div class="secao-conteudo">
            ${secao.conteudo}
          </div>
        </div>
      `;
    });

    // Renderizar quiz
    html += `
      <div class="separador">
        <div class="separador-linha"></div>
        <span>Teste seus conhecimentos</span>
        <div class="separador-linha"></div>
      </div>
    `;
    html += Quiz.iniciar(modulo);

    // Botão concluir módulo
    html += `
      <div class="modulo-footer">
        <button
          class="btn-concluir ${concluido ? 'btn-concluido' : ''}"
          id="btn-concluir-${modulo.id}"
          onclick="App.concluirModulo(${modulo.id})"
        >
          ${concluido ? '✓ Módulo Concluído' : 'Marcar como Concluído'}
        </button>
      </div>
    `;

    // Navegação entre módulos
    html += `
      <div class="nav-modulos">
        ${anterior ? `
          <button class="nav-btn nav-anterior" onclick="App.navegarPara(${anterior.id})">
            ← ${anterior.icone} ${anterior.titulo}
          </button>
        ` : '<div></div>'}
        ${proximo ? `
          <button class="nav-btn nav-proximo" onclick="App.navegarPara(${proximo.id})">
            ${proximo.icone} ${proximo.titulo} →
          </button>
        ` : '<div></div>'}
      </div>
    `;

    area.innerHTML = html;

    // Inicializar syntax highlighting
    if (typeof hljs !== 'undefined') {
      area.querySelectorAll('pre code').forEach(block => {
        hljs.highlightElement(block);
      });
    }
  },

  // Marca um módulo como concluído
  concluirModulo(moduloId) {
    if (!Progress.isConcluido(moduloId)) {
      Progress.concluirModulo(moduloId);
      const btn = document.getElementById(`btn-concluir-${moduloId}`);
      if (btn) {
        btn.textContent = '✓ Módulo Concluído';
        btn.classList.add('btn-concluido');
        btn.classList.remove('btn-highlight');
      }
      this.mostrarToast('✅ Módulo marcado como concluído!');
    }
  },

  // Configura a busca
  configurarBusca() {
    const input = document.getElementById('busca-input');
    if (!input) return;

    input.addEventListener('input', (e) => {
      const termo = e.target.value.toLowerCase().trim();
      this.termoBusca = termo;

      if (termo.length < 2) {
        this.renderizarSidebar();
        return;
      }

      this.buscar(termo);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        input.value = '';
        this.termoBusca = '';
        this.renderizarSidebar();
      }
    });
  },

  // Busca nos módulos
  buscar(termo) {
    const lista = document.getElementById('lista-modulos');
    if (!lista) return;

    const resultados = this.modulosData.filter(modulo => {
      const texto = `${modulo.titulo} ${modulo.descricao} ${modulo.secoes.map(s => s.titulo).join(' ')}`.toLowerCase();
      return texto.includes(termo);
    });

    if (resultados.length === 0) {
      lista.innerHTML = `
        <li class="busca-vazia">
          <span>🔍</span>
          <p>Nenhum resultado para "${termo}"</p>
        </li>
      `;
      return;
    }

    lista.innerHTML = resultados.map(modulo => {
      const concluido = Progress.isConcluido(modulo.id);
      return `
        <li>
          <button
            class="modulo-btn ${concluido ? 'concluido' : ''}"
            onclick="App.navegarPara(${modulo.id})"
          >
            <span class="modulo-icone">${modulo.icone}</span>
            <span class="modulo-nome">${modulo.titulo}</span>
            ${concluido ? '<span class="check">✓</span>' : ''}
          </button>
        </li>
      `;
    }).join('');
  },

  // Configura o menu mobile
  configurarMenu() {
    const btnMenu = document.getElementById('btn-menu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    if (btnMenu && sidebar) {
      btnMenu.addEventListener('click', () => {
        sidebar.classList.toggle('aberta');
        overlay?.classList.toggle('ativo');
      });
    }

    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar?.classList.remove('aberta');
        overlay.classList.remove('ativo');
      });
    }
  },

  // Mostra toast de notificação
  mostrarToast(mensagem, tipo = 'sucesso') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensagem;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('toast-visivel'), 10);
    setTimeout(() => {
      toast.classList.remove('toast-visivel');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  // Reseta todo o progresso
  resetarProgresso() {
    if (confirm('Tem certeza que deseja resetar todo o progresso?')) {
      Progress.resetar();
      this.atualizarBarraProgresso();
      this.renderizarSidebar();
      if (this.moduloAtual) this.renderizarConteudo(this.moduloAtual);
      this.mostrarToast('🔄 Progresso resetado!', 'info');
    }
  }
};

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => App.init());
