const modulo2 = {
  id: 2,
  titulo: "Instalação e Configuração",
  descricao: "Configure o Claude Code no seu ambiente de desenvolvimento",
  icone: "⚙️",
  duracao: "10 min",
  secoes: [
    {
      titulo: "Requisitos do Sistema",
      conteudo: `
        <p>Antes de instalar o Claude Code, verifique se seu sistema atende aos requisitos:</p>

        <div class="requisitos-grid">
          <div class="requisito-item requisito-ok">
            <span>✅</span>
            <div>
              <strong>Node.js 18 ou superior</strong>
              <p>Necessário para executar o Claude Code</p>
            </div>
          </div>
          <div class="requisito-item requisito-ok">
            <span>✅</span>
            <div>
              <strong>npm ou yarn</strong>
              <p>Gerenciador de pacotes para instalação</p>
            </div>
          </div>
          <div class="requisito-item requisito-ok">
            <span>✅</span>
            <div>
              <strong>Conta Anthropic</strong>
              <p>Necessário para autenticação (plano Pro ou Team)</p>
            </div>
          </div>
          <div class="requisito-item requisito-ok">
            <span>✅</span>
            <div>
              <strong>macOS, Linux ou Windows (WSL)</strong>
              <p>Sistemas operacionais suportados</p>
            </div>
          </div>
        </div>

        <pre><code class="language-bash"># Verificar versão do Node.js
node --version  # Deve mostrar v18.0.0 ou superior

# Verificar npm
npm --version</code></pre>
      `
    },
    {
      titulo: "Instalação",
      conteudo: `
        <p>A instalação é feita via <strong>npm</strong> de forma global:</p>

        <pre><code class="language-bash"># Instalar o Claude Code globalmente
npm install -g @anthropic-ai/claude-code

# Verificar se foi instalado corretamente
claude --version</code></pre>

        <div class="destaque destaque-aviso">
          <strong>⚠️ Windows:</strong> O Claude Code é otimizado para ambientes Unix. No Windows, recomenda-se usar o <strong>WSL (Windows Subsystem for Linux)</strong> para melhor experiência.
        </div>

        <h4>Instalação no WSL (Windows):</h4>
        <pre><code class="language-bash"># No terminal WSL (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Então instalar o Claude Code
npm install -g @anthropic-ai/claude-code</code></pre>
      `
    },
    {
      titulo: "Autenticação",
      conteudo: `
        <p>Após instalar, você precisa autenticar com sua conta Anthropic:</p>

        <pre><code class="language-bash"># Iniciar autenticação
claude

# Na primeira execução, você será redirecionado para
# fazer login na sua conta Anthropic no navegador</code></pre>

        <p>O Claude Code abrirá automaticamente o navegador para você fazer login. Após autorizar, a sessão será salva localmente.</p>

        <h4>Alternativa: API Key</h4>
        <p>Para automações e servidores, você pode usar uma API Key diretamente:</p>

        <pre><code class="language-bash"># Configurar via variável de ambiente
export ANTHROPIC_API_KEY="sua-chave-aqui"

# Ou em um arquivo .env no projeto
echo "ANTHROPIC_API_KEY=sua-chave-aqui" >> .env</code></pre>

        <div class="destaque destaque-perigo">
          <strong>🔐 Segurança:</strong> Nunca compartilhe sua API Key. Não a commite no Git. Use variáveis de ambiente ou arquivos <code>.env</code> no <code>.gitignore</code>.
        </div>
      `
    },
    {
      titulo: "Configuração Inicial do Projeto",
      conteudo: `
        <p>Para melhores resultados, inicialize o Claude Code em cada projeto:</p>

        <pre><code class="language-bash"># Navegue até seu projeto
cd meu-projeto

# Inicie o Claude Code
claude

# Sugestão: deixe o Claude gerar um CLAUDE.md para seu projeto
# (veremos isso em detalhes no Módulo 5)</code></pre>

        <h4>Configurações globais (~/.claude/settings.json):</h4>
        <pre><code class="language-json">{
  "theme": "dark",
  "autoApprove": false,
  "model": "claude-opus-4-6",
  "preferredLanguage": "pt-BR"
}</code></pre>

        <div class="destaque destaque-info">
          <strong>💡 Dica:</strong> O arquivo <code>settings.json</code> em <code>~/.claude/</code> contém suas preferências globais. Configurações específicas do projeto ficam em <code>.claude/settings.json</code> dentro do repositório.
        </div>
      `
    }
  ],
  quiz: [
    {
      pergunta: "Qual é o comando para instalar o Claude Code?",
      opcoes: [
        "pip install claude-code",
        "npm install -g @anthropic-ai/claude-code",
        "brew install claude",
        "apt install claude-code"
      ],
      correta: 1,
      explicacao: "O Claude Code é instalado via npm com o comando 'npm install -g @anthropic-ai/claude-code'. O flag -g instala globalmente, permitindo usar o comando 'claude' em qualquer diretório."
    },
    {
      pergunta: "Qual versão mínima do Node.js é necessária?",
      opcoes: [
        "Node.js 12",
        "Node.js 14",
        "Node.js 16",
        "Node.js 18"
      ],
      correta: 3,
      explicacao: "O Claude Code requer Node.js 18 ou superior. Verifique sua versão com 'node --version' antes de instalar."
    },
    {
      pergunta: "Onde você deve armazenar sua API Key para usar com segurança?",
      opcoes: [
        "Diretamente no código-fonte do projeto",
        "Em um arquivo que vai para o Git",
        "Em variáveis de ambiente ou arquivo .env no .gitignore",
        "Compartilhada no README do projeto"
      ],
      correta: 2,
      explicacao: "Nunca hardcode a API Key no código ou a commite no Git. Use variáveis de ambiente (export ANTHROPIC_API_KEY=...) ou um arquivo .env que está no .gitignore."
    }
  ]
};
