const modulo3 = {
  id: 3,
  titulo: "Primeiros Passos",
  descricao: "Execute sua primeira tarefa e domine o fluxo básico do Claude Code",
  icone: "👣",
  duracao: "20 min",
  secoes: [
    {
      titulo: "Iniciando o Claude Code",
      conteudo: `
        <p>Para iniciar o Claude Code, simplesmente digite <code>claude</code> no terminal dentro do seu projeto:</p>

        <pre><code class="language-bash"># Navegue até seu projeto
cd meu-projeto

# Inicie o modo interativo
claude</code></pre>

        <p>Você verá o prompt do Claude Code:</p>

        <pre><code class="language-text">╭─────────────────────────────────╮
│  Claude Code  v1.x.x            │
│  Projeto: meu-projeto           │
╰─────────────────────────────────╯

> </code></pre>

        <div class="destaque destaque-info">
          <strong>💡 Modo não-interativo:</strong> Para tarefas únicas sem abrir o modo interativo, use <code>claude -p "sua instrução aqui"</code>
        </div>
      `
    },
    {
      titulo: "Sua Primeira Tarefa",
      conteudo: `
        <p>Vamos fazer uma tarefa simples: pedir ao Claude para criar um arquivo HTML básico.</p>

        <pre><code class="language-text">> Crie um arquivo index.html com uma página de boas-vindas simples</code></pre>

        <p>O Claude irá:</p>
        <ol>
          <li>Verificar os arquivos existentes no projeto</li>
          <li>Criar o arquivo <code>index.html</code></li>
          <li>Mostrar o conteúdo criado para sua revisão</li>
        </ol>

        <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Bem-vindo&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Olá, Mundo!&lt;/h1&gt;
    &lt;p&gt;Bem-vindo ao meu projeto.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

        <div class="destaque">
          <strong>✨ Dica de ouro:</strong> Quanto mais contexto você der, melhor será o resultado. Em vez de "crie uma página", diga "crie uma página de landing para um SaaS de gestão financeira, com design moderno em tons de azul".
        </div>
      `
    },
    {
      titulo: "Modos de Operação",
      conteudo: `
        <p>O Claude Code oferece diferentes formas de trabalhar:</p>

        <div class="modos-grid">
          <div class="modo-card">
            <h4>💬 Modo Interativo</h4>
            <p>Conversa contínua com histórico. Ideal para desenvolvimento iterativo.</p>
            <pre><code class="language-bash">claude</code></pre>
          </div>

          <div class="modo-card">
            <h4>⚡ Modo Único (-p)</h4>
            <p>Executa uma tarefa e termina. Perfeito para scripts.</p>
            <pre><code class="language-bash">claude -p "explique este arquivo" --file app.py</code></pre>
          </div>

          <div class="modo-card">
            <h4>📥 Modo Pipe</h4>
            <p>Recebe input via stdin. Ideal para pipelines.</p>
            <pre><code class="language-bash">cat error.log | claude -p "analise estes erros"</code></pre>
          </div>

          <div class="modo-card">
            <h4>🔄 Modo Continuação</h4>
            <p>Retoma a última conversa.</p>
            <pre><code class="language-bash">claude --continue</code></pre>
          </div>
        </div>
      `
    },
    {
      titulo: "Como Dar Boas Instruções",
      conteudo: `
        <p>A qualidade das suas instruções determina a qualidade dos resultados. Siga estas práticas:</p>

        <h4>❌ Instrução vaga:</h4>
        <pre><code class="language-text">> Melhore o código</code></pre>

        <h4>✅ Instrução específica:</h4>
        <pre><code class="language-text">> Refatore a função calcularTotal() em utils/cart.js para usar
  reduce() em vez do loop for. Mantenha o mesmo comportamento
  e adicione JSDoc comentando os parâmetros.</code></pre>

        <h4>Fórmula para boas instruções:</h4>
        <div class="formula-box">
          <div class="formula-item"><strong>O QUÊ</strong><span>O que você quer fazer</span></div>
          <div class="formula-plus">+</div>
          <div class="formula-item"><strong>ONDE</strong><span>Em qual arquivo/função</span></div>
          <div class="formula-plus">+</div>
          <div class="formula-item"><strong>COMO</strong><span>Restrições e estilo</span></div>
          <div class="formula-plus">+</div>
          <div class="formula-item"><strong>POR QUÊ</strong><span>Contexto e objetivo</span></div>
        </div>

        <div class="destaque destaque-info">
          <strong>💡 Truque:</strong> Se uma tarefa for grande, divida em partes. "Vamos implementar o login por etapas. Primeiro, crie apenas o formulário HTML sem lógica."
        </div>
      `
    },
    {
      titulo: "Revisando e Aprovando Mudanças",
      conteudo: `
        <p>Por padrão, o Claude Code pede confirmação antes de executar ações potencialmente perigosas. Você verá prompts como:</p>

        <pre><code class="language-text">Vou executar o seguinte comando:
  rm -rf dist/

Deseja continuar? [s/N]: </code></pre>

        <h4>Modos de permissão:</h4>
        <ul>
          <li><strong>Padrão:</strong> Confirma ações destrutivas</li>
          <li><strong>--dangerously-skip-permissions:</strong> Pula confirmações (use com cautela!)</li>
          <li><strong>Configurar via settings:</strong> Definir ações que são sempre aprovadas</li>
        </ul>

        <pre><code class="language-json">// .claude/settings.json — aprovar automaticamente comandos seguros
{
  "permissions": {
    "allow": [
      "Bash(npm test:*)",
      "Bash(npm run build:*)",
      "Read(*)"
    ]
  }
}</code></pre>
      `
    }
  ],
  quiz: [
    {
      pergunta: "Como você inicia o Claude Code no modo interativo?",
      opcoes: [
        "claude --interactive",
        "claude start",
        "claude (apenas o comando)",
        "claude -i"
      ],
      correta: 2,
      explicacao: "Basta digitar 'claude' no terminal dentro do seu projeto para iniciar o modo interativo. Simples assim!"
    },
    {
      pergunta: "Qual flag você usa para executar uma tarefa única sem abrir o modo interativo?",
      opcoes: [
        "--single",
        "-p (prompt)",
        "--one-shot",
        "--quick"
      ],
      correta: 1,
      explicacao: "O flag -p (de prompt) permite passar uma instrução diretamente: claude -p 'explique este código'. O Claude executa e termina sem abrir o modo interativo."
    },
    {
      pergunta: "Qual é a melhor prática para dar instruções ao Claude Code?",
      opcoes: [
        "Quanto mais curta a instrução, melhor",
        "Usar apenas palavras-chave técnicas",
        "Ser específico: dizer o quê, onde, como e por quê",
        "Sempre deixar o Claude decidir sozinho"
      ],
      correta: 2,
      explicacao: "Instruções específicas geram resultados melhores. Inclua: o que fazer, em qual arquivo/função, como deve ser feito e qual o objetivo. Quanto mais contexto, melhor o resultado."
    }
  ]
};
