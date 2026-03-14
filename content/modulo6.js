const modulo6 = {
  id: 6,
  titulo: "Comandos e Atalhos",
  descricao: "Domine os slash commands, atalhos de teclado e crie seus próprios comandos",
  icone: "⌨️",
  duracao: "15 min",
  secoes: [
    {
      titulo: "Slash Commands Essenciais",
      conteudo: `
        <p>Os <strong>slash commands</strong> são atalhos especiais que começam com <code>/</code> e controlam o comportamento do Claude Code:</p>

        <div class="comandos-tabela">
          <div class="comando-row header">
            <span>Comando</span>
            <span>O que faz</span>
          </div>
          <div class="comando-row">
            <code>/help</code>
            <span>Mostra ajuda e lista todos os comandos</span>
          </div>
          <div class="comando-row">
            <code>/clear</code>
            <span>Limpa o histórico da conversa atual</span>
          </div>
          <div class="comando-row">
            <code>/compact</code>
            <span>Comprime o histórico para economizar tokens</span>
          </div>
          <div class="comando-row">
            <code>/cost</code>
            <span>Mostra o custo da sessão atual</span>
          </div>
          <div class="comando-row">
            <code>/status</code>
            <span>Exibe o status atual do Claude Code</span>
          </div>
          <div class="comando-row">
            <code>/model</code>
            <span>Troca o modelo Claude usado (opus, sonnet, haiku)</span>
          </div>
          <div class="comando-row">
            <code>/diff</code>
            <span>Mostra as mudanças feitas nesta sessão</span>
          </div>
          <div class="comando-row">
            <code>/undo</code>
            <span>Desfaz a última ação do Claude</span>
          </div>
          <div class="comando-row">
            <code>/resume</code>
            <span>Retoma uma sessão anterior</span>
          </div>
        </div>
      `
    },
    {
      titulo: "Atalhos de Teclado",
      conteudo: `
        <p>Agilize seu fluxo com os atalhos de teclado do Claude Code:</p>

        <div class="atalhos-grid">
          <div class="atalho-item">
            <kbd>Enter</kbd>
            <span>Envia a mensagem</span>
          </div>
          <div class="atalho-item">
            <kbd>Shift + Enter</kbd>
            <span>Quebra linha sem enviar</span>
          </div>
          <div class="atalho-item">
            <kbd>↑ / ↓</kbd>
            <span>Navega no histórico de mensagens</span>
          </div>
          <div class="atalho-item">
            <kbd>Ctrl + C</kbd>
            <span>Interrompe a execução atual</span>
          </div>
          <div class="atalho-item">
            <kbd>Ctrl + L</kbd>
            <span>Limpa a tela (equivale a /clear)</span>
          </div>
          <div class="atalho-item">
            <kbd>Esc</kbd>
            <span>Cancela a edição atual</span>
          </div>
          <div class="atalho-item">
            <kbd>Ctrl + Z</kbd>
            <span>Desfaz (dentro do editor)</span>
          </div>
          <div class="atalho-item">
            <kbd>Tab</kbd>
            <span>Autocompleta nomes de arquivo</span>
          </div>
        </div>

        <div class="destaque destaque-info">
          <strong>💡 Personalizar atalhos:</strong> Você pode redefinir atalhos em <code>~/.claude/keybindings.json</code>. Use o comando <code>/keybindings</code> para configurar.
        </div>
      `
    },
    {
      titulo: "Comandos Personalizados (Skills)",
      conteudo: `
        <p>Você pode criar seus próprios slash commands salvando arquivos <code>.md</code> em <code>~/.claude/commands/</code> (global) ou <code>.claude/commands/</code> (projeto):</p>

        <h4>Exemplo: criando /review-pr</h4>
        <pre><code class="language-bash"># Criar o arquivo do comando
# ~/.claude/commands/review-pr.md</code></pre>

        <pre><code class="language-markdown"># Review de Pull Request

Analise as mudanças neste PR seguindo estes critérios:

1. **Segurança**: Há alguma vulnerabilidade? (SQL injection, XSS, etc.)
2. **Performance**: Alguma query N+1? Loops desnecessários?
3. **Legibilidade**: O código é claro e bem documentado?
4. **Testes**: As mudanças têm cobertura de testes adequada?
5. **Convenções**: Segue os padrões do CLAUDE.md do projeto?

Formate o resultado como:
- ✅ Pontos positivos
- ⚠️ Sugestões de melhoria
- ❌ Problemas que devem ser corrigidos</code></pre>

        <pre><code class="language-text"># Usar o comando personalizado
> /review-pr</code></pre>

        <h4>Estrutura de um comando personalizado:</h4>
        <ul>
          <li>Salve como <code>nome-do-comando.md</code></li>
          <li>Use Markdown para formatar as instruções</li>
          <li>Pode aceitar argumentos com <code>$ARGUMENTS</code></li>
          <li>Pode referenciar outros arquivos com <code>@arquivo</code></li>
        </ul>
      `
    },
    {
      titulo: "Hooks — Automação de Eventos",
      conteudo: `
        <p>Os <strong>hooks</strong> são scripts shell que executam automaticamente em resposta a eventos do Claude Code:</p>

        <pre><code class="language-json">// .claude/settings.json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Claude vai executar um comando bash'"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "npm run lint --fix"
          }
        ]
      }
    ]
  }
}</code></pre>

        <h4>Eventos disponíveis:</h4>
        <div class="eventos-lista">
          <div class="evento-item"><code>PreToolUse</code><span>Antes de usar uma ferramenta</span></div>
          <div class="evento-item"><code>PostToolUse</code><span>Após usar uma ferramenta</span></div>
          <div class="evento-item"><code>Notification</code><span>Quando Claude quer notificar algo</span></div>
          <div class="evento-item"><code>Stop</code><span>Quando Claude termina uma tarefa</span></div>
        </div>

        <div class="destaque">
          <strong>🔥 Caso de uso poderoso:</strong> Configure um hook PostToolUse para rodar <code>npm run lint</code> automaticamente toda vez que o Claude escrever um arquivo JavaScript.
        </div>
      `
    }
  ],
  quiz: [
    {
      pergunta: "Qual comando mostra o custo da sessão atual?",
      opcoes: [
        "/price",
        "/usage",
        "/cost",
        "/billing"
      ],
      correta: 2,
      explicacao: "O comando /cost exibe o custo acumulado da sessão atual em tokens e dólares, ajudando você a monitorar o uso."
    },
    {
      pergunta: "Como você cria um slash command personalizado chamado /deploy?",
      opcoes: [
        "Usar o comando /create-command deploy",
        "Editar o settings.json e adicionar o comando",
        "Criar o arquivo deploy.md em ~/.claude/commands/ ou .claude/commands/",
        "Registrar o comando no CLAUDE.md"
      ],
      correta: 2,
      explicacao: "Comandos personalizados são criados salvando um arquivo .md em ~/.claude/commands/ (global) ou .claude/commands/ (projeto). O nome do arquivo define o nome do slash command."
    },
    {
      pergunta: "O que são Hooks no Claude Code?",
      opcoes: [
        "Atalhos de teclado customizados",
        "Scripts que executam automaticamente em resposta a eventos do Claude",
        "Funções JavaScript para estender o Claude",
        "Integrações com serviços externos"
      ],
      correta: 1,
      explicacao: "Hooks são scripts shell que executam automaticamente quando o Claude realiza certas ações, como antes/depois de usar ferramentas. São configurados em .claude/settings.json."
    }
  ]
};
