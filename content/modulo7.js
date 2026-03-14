const modulo7 = {
  id: 7,
  titulo: "MCP e Integrações",
  descricao: "Conecte o Claude Code a ferramentas externas e amplie suas capacidades",
  icone: "🔗",
  duracao: "20 min",
  secoes: [
    {
      titulo: "O que é o MCP?",
      conteudo: `
        <p>O <strong>Model Context Protocol (MCP)</strong> é um padrão aberto que permite ao Claude Code se conectar com ferramentas, APIs e serviços externos. Pense nele como uma "tomada universal" para integrações.</p>

        <div class="destaque">
          <strong>🎯 Analogia:</strong> MCP é para o Claude Code como extensões são para o VS Code — permite que qualquer ferramenta externa seja usada diretamente na conversa.
        </div>

        <h4>O que você pode conectar via MCP?</h4>
        <div class="mcp-grid">
          <div class="mcp-item">🗄️ <span>Bancos de dados (PostgreSQL, MySQL, MongoDB)</span></div>
          <div class="mcp-item">📁 <span>Sistemas de arquivos remotos</span></div>
          <div class="mcp-item">🐛 <span>Issue trackers (GitHub, Linear, Jira)</span></div>
          <div class="mcp-item">🌐 <span>APIs de terceiros (Stripe, Slack, Notion)</span></div>
          <div class="mcp-item">☁️ <span>Serviços cloud (AWS, GCP, Azure)</span></div>
          <div class="mcp-item">🔍 <span>Motores de busca e RAG</span></div>
        </div>
      `
    },
    {
      titulo: "Instalando Servidores MCP",
      conteudo: `
        <p>Existem centenas de servidores MCP prontos para usar. Veja como instalar:</p>

        <h4>Via linha de comando (mais fácil):</h4>
        <pre><code class="language-bash"># Instalar MCP do GitHub
claude mcp add github -- npx -y @modelcontextprotocol/server-github

# Instalar MCP do PostgreSQL
claude mcp add postgres -- npx -y @modelcontextprotocol/server-postgres postgresql://localhost/meubanco

# Instalar MCP do Filesystem
claude mcp add filesystem -- npx -y @modelcontextprotocol/server-filesystem /meus/projetos</code></pre>

        <h4>Via settings.json (controle manual):</h4>
        <pre><code class="language-json">// ~/.claude/settings.json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_seu_token_aqui"
      }
    },
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://localhost/meubanco"
      ]
    }
  }
}</code></pre>
      `
    },
    {
      titulo: "Integração com GitHub",
      conteudo: `
        <p>A integração com GitHub permite ao Claude criar PRs, comentar em issues e até fazer code reviews automaticamente:</p>

        <pre><code class="language-bash"># Instalar o MCP do GitHub
claude mcp add github -- npx -y @modelcontextprotocol/server-github

# Configurar o token (no .env ou variável de ambiente)
export GITHUB_TOKEN="ghp_seu_token"</code></pre>

        <pre><code class="language-text"># Agora você pode pedir ao Claude:
> Liste os issues abertos do repositório meu-usuario/meu-projeto

> Crie um PR no GitHub para a branch atual, descrevendo as mudanças
  que fizemos hoje

> Adicione um comentário no issue #42 explicando que o bug foi corrigido</code></pre>

        <h4>GitHub Actions com Claude Code:</h4>
        <pre><code class="language-yaml"># .github/workflows/claude-review.yml
name: Claude Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: anthropics/claude-code-action@beta
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          direct_prompt: |
            Faça um code review deste PR focando em:
            - Segurança
            - Performance
            - Seguimento das convenções do projeto</code></pre>
      `
    },
    {
      titulo: "Integração com VS Code",
      conteudo: `
        <p>A extensão do Claude Code para VS Code adiciona funcionalidades poderosas diretamente no editor:</p>

        <div class="vscode-features">
          <div class="vscode-feature">
            <span>🔍</span>
            <div>
              <strong>Diffs Inline</strong>
              <p>Veja as mudanças do Claude diretamente no editor, lado a lado com o original</p>
            </div>
          </div>
          <div class="vscode-feature">
            <span>📎</span>
            <div>
              <strong>Menções @arquivo</strong>
              <p>Mencione arquivos específicos diretamente na conversa para dar contexto</p>
            </div>
          </div>
          <div class="vscode-feature">
            <span>📜</span>
            <div>
              <strong>Histórico de Conversas</strong>
              <p>Acesse conversas anteriores sem sair do editor</p>
            </div>
          </div>
          <div class="vscode-feature">
            <span>✅</span>
            <div>
              <strong>Review de Planos</strong>
              <p>Revise e aprove planos do Claude antes da execução</p>
            </div>
          </div>
        </div>

        <pre><code class="language-bash"># Instalar a extensão
# 1. Abra o VS Code
# 2. Vá em Extensions (Ctrl+Shift+X)
# 3. Busque "Claude Code"
# 4. Clique em Install</code></pre>

        <div class="destaque destaque-info">
          <strong>💡 Dica:</strong> Com a extensão, você pode selecionar um trecho de código e pedir ao Claude para explicar, refatorar ou testar apenas aquela seleção específica.
        </div>
      `
    }
  ],
  quiz: [
    {
      pergunta: "O que é o Model Context Protocol (MCP)?",
      opcoes: [
        "Um protocolo de comunicação entre modelos de IA",
        "Um padrão que permite ao Claude se conectar com ferramentas e serviços externos",
        "Um formato de arquivo para configurar o Claude Code",
        "Um sistema de autenticação para APIs"
      ],
      correta: 1,
      explicacao: "O MCP é um padrão aberto que funciona como uma 'tomada universal' para integrações — permite conectar o Claude Code a bancos de dados, APIs, serviços cloud e muito mais."
    },
    {
      pergunta: "Qual comando instala um servidor MCP chamado 'github'?",
      opcoes: [
        "claude install mcp github",
        "claude mcp add github -- npx -y @modelcontextprotocol/server-github",
        "npm install claude-mcp-github",
        "claude connect github"
      ],
      correta: 1,
      explicacao: "O comando 'claude mcp add [nome] -- [comando]' instala um servidor MCP. O prefixo -- separa o nome do MCP do comando que o inicia."
    },
    {
      pergunta: "Como o Claude Code se integra ao GitHub Actions?",
      opcoes: [
        "Não é possível usar Claude Code no GitHub Actions",
        "Usando a action 'anthropics/claude-code-action' no workflow YAML",
        "Instalando via npm no runner do Actions",
        "Usando apenas a API REST do GitHub"
      ],
      correta: 1,
      explicacao: "O Anthropic disponibiliza a action 'anthropics/claude-code-action' para usar o Claude Code diretamente em workflows do GitHub Actions, ideal para code reviews automatizados em PRs."
    }
  ]
};
