const modulo1 = {
  id: 1,
  titulo: "Introdução ao Claude Code",
  descricao: "Entenda o que é o Claude Code e como ele pode transformar seu desenvolvimento",
  icone: "🚀",
  duracao: "15 min",
  secoes: [
    {
      titulo: "O que é o Claude Code?",
      conteudo: `
        <p>O <strong>Claude Code</strong> é um agente de IA desenvolvido pela Anthropic que funciona diretamente no seu terminal. Diferente de um simples chatbot, ele pode <em>ler, criar e modificar arquivos</em>, executar comandos, navegar em repositórios inteiros e automatizar tarefas complexas de desenvolvimento.</p>

        <div class="destaque">
          <strong>🎯 Em resumo:</strong> É como ter um desenvolvedor sênior sempre disponível no seu terminal, que entende o seu projeto completo e pode trabalhar em múltiplos arquivos ao mesmo tempo.
        </div>

        <h4>O que torna o Claude Code único?</h4>
        <ul>
          <li><strong>Agente autônomo:</strong> Planeja e executa tarefas em múltiplas etapas sem precisar de sua intervenção a cada passo</li>
          <li><strong>Acesso ao contexto completo:</strong> Lê seu repositório inteiro para entender a arquitetura antes de fazer mudanças</li>
          <li><strong>Integração nativa com Git:</strong> Cria commits, branches e pull requests diretamente</li>
          <li><strong>Extensível:</strong> Conecta com ferramentas externas via MCP (Model Context Protocol)</li>
        </ul>
      `
    },
    {
      titulo: "Como o Claude Code Funciona?",
      conteudo: `
        <p>O Claude Code opera em um <strong>ciclo agêntico</strong>: recebe sua instrução, planeja as etapas, executa ações (ler arquivos, escrever código, rodar comandos) e verifica os resultados — repetindo até concluir a tarefa.</p>

        <div class="diagrama">
          <div class="diagrama-item">📝 <span>Você dá a instrução</span></div>
          <div class="diagrama-seta">→</div>
          <div class="diagrama-item">🧠 <span>Claude planeja</span></div>
          <div class="diagrama-seta">→</div>
          <div class="diagrama-item">⚙️ <span>Executa ações</span></div>
          <div class="diagrama-seta">→</div>
          <div class="diagrama-item">✅ <span>Verifica resultado</span></div>
        </div>

        <h4>Ferramentas disponíveis para o Claude Code:</h4>
        <ul>
          <li><strong>Read/Write:</strong> Ler e criar/editar arquivos</li>
          <li><strong>Bash:</strong> Executar comandos no terminal</li>
          <li><strong>Glob/Grep:</strong> Buscar arquivos e conteúdo no projeto</li>
          <li><strong>WebFetch/WebSearch:</strong> Buscar informações na internet</li>
          <li><strong>Agent:</strong> Criar sub-agentes para tarefas paralelas</li>
        </ul>
      `
    },
    {
      titulo: "Plataformas Disponíveis",
      conteudo: `
        <p>O Claude Code está disponível em múltiplas plataformas, permitindo que você trabalhe onde preferir:</p>

        <div class="grid-cards">
          <div class="mini-card">
            <span class="mini-card-icon">💻</span>
            <strong>Terminal (CLI)</strong>
            <p>A experiência principal — direto no terminal do seu sistema operacional</p>
          </div>
          <div class="mini-card">
            <span class="mini-card-icon">📝</span>
            <strong>VS Code</strong>
            <p>Extensão com diffs inline, menções de arquivo e histórico de conversas</p>
          </div>
          <div class="mini-card">
            <span class="mini-card-icon">🖥️</span>
            <strong>Desktop App</strong>
            <p>App nativo com diffs visuais, múltiplas sessões e tarefas agendadas</p>
          </div>
          <div class="mini-card">
            <span class="mini-card-icon">🌐</span>
            <strong>Web</strong>
            <p>Use pelo navegador sem instalação local</p>
          </div>
          <div class="mini-card">
            <span class="mini-card-icon">🔧</span>
            <strong>JetBrains</strong>
            <p>IntelliJ IDEA, PyCharm, WebStorm e outros IDEs da JetBrains</p>
          </div>
        </div>
      `
    },
    {
      titulo: "Filosofia: Unix e Composabilidade",
      conteudo: `
        <p>O Claude Code foi projetado seguindo a filosofia Unix: <em>fazer uma coisa e fazer bem</em>. Isso significa que ele pode ser combinado com outras ferramentas via pipes e scripts.</p>

        <pre><code class="language-bash"># Usar Claude Code em um pipeline Unix
git diff HEAD~1 | claude -p "Explique as mudanças neste diff"

# Processar resultado de outro comando
npm test 2>&1 | claude -p "Analise os erros e sugira correções"

# Usar em scripts de automação
claude -p "Gere um changelog para esta versão" >> CHANGELOG.md</code></pre>

        <div class="destaque destaque-info">
          <strong>💡 Dica:</strong> O flag <code>-p</code> permite passar um prompt diretamente, ideal para automações e scripts CI/CD.
        </div>
      `
    }
  ],
  quiz: [
    {
      pergunta: "O que diferencia o Claude Code de um chatbot comum?",
      opcoes: [
        "Ele só responde perguntas sobre código",
        "Ele é um agente autônomo que pode ler, criar e modificar arquivos e executar comandos",
        "Ele funciona apenas online, sem acesso ao computador",
        "Ele é exclusivo para programadores avançados"
      ],
      correta: 1,
      explicacao: "O Claude Code é um agente autônomo que vai além de responder perguntas — ele executa ações reais no seu projeto: lê arquivos, escreve código, roda comandos e cria commits."
    },
    {
      pergunta: "Em qual ciclo o Claude Code opera para completar tarefas?",
      opcoes: [
        "Apenas responde e espera novas instruções",
        "Planeja → Executa → Verifica, repetindo até concluir",
        "Só executa uma ação por vez e para",
        "Precisa de aprovação humana em cada etapa"
      ],
      correta: 1,
      explicacao: "O Claude Code opera em um ciclo agêntico: planeja as etapas necessárias, executa ações (ler arquivos, escrever código, rodar comandos) e verifica os resultados, repetindo até concluir a tarefa."
    },
    {
      pergunta: "Qual flag permite usar o Claude Code em scripts e pipelines?",
      opcoes: [
        "--script",
        "-p (print/prompt)",
        "--pipe",
        "--auto"
      ],
      correta: 1,
      explicacao: "O flag -p permite passar um prompt diretamente na linha de comando, tornando o Claude Code ideal para automações, scripts e pipelines CI/CD."
    }
  ]
};
