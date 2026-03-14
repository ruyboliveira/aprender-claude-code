const modulo8 = {
  id: 8,
  titulo: "Boas Práticas",
  descricao: "Técnicas avançadas para extrair o máximo do Claude Code com segurança",
  icone: "⭐",
  duracao: "20 min",
  secoes: [
    {
      titulo: "Como Escrever Prompts Eficazes",
      conteudo: `
        <p>A habilidade mais importante para usar o Claude Code bem é saber como se comunicar com ele. Aqui estão os princípios:</p>

        <h4>1. Seja específico sobre o contexto</h4>
        <pre><code class="language-text">❌ "Corrija o bug no login"

✅ "A função authenticate() em backend/auth/service.py está
   retornando False mesmo com credenciais válidas. O problema
   começou após a última migração do banco. Investigue e corrija."</code></pre>

        <h4>2. Defina restrições claramente</h4>
        <pre><code class="language-text">✅ "Refatore este componente para usar hooks, mas:
   - Mantenha a mesma interface de props
   - Não mude o comportamento visual
   - Não instale novas dependências"</code></pre>

        <h4>3. Use modo de planejamento para tarefas grandes</h4>
        <pre><code class="language-text">✅ "Antes de implementar, me dê um plano detalhado de como
   você implementaria o sistema de notificações por email.
   Aguarde minha aprovação antes de começar."</code></pre>

        <h4>4. Itere incrementalmente</h4>
        <pre><code class="language-text">✅ "Vamos implementar o checkout em etapas.
   Etapa 1: apenas o formulário HTML sem lógica.
   Me avise quando terminar para continuarmos."</code></pre>
      `
    },
    {
      titulo: "Gerenciamento de Contexto",
      conteudo: `
        <p>O Claude Code tem uma janela de contexto — um limite de quanto texto ele consegue "lembrar" em uma sessão. Gerencie bem para evitar perda de contexto:</p>

        <div class="contexto-tips">
          <div class="contexto-tip">
            <span>📊</span>
            <div>
              <strong>Use /cost para monitorar</strong>
              <p>Acompanhe o uso de tokens da sessão regularmente</p>
            </div>
          </div>
          <div class="contexto-tip">
            <span>🗜️</span>
            <div>
              <strong>Use /compact quando necessário</strong>
              <p>Comprime o histórico mantendo o contexto essencial</p>
            </div>
          </div>
          <div class="contexto-tip">
            <span>🔄</span>
            <div>
              <strong>Inicie nova sessão para tarefas independentes</strong>
              <p>Use /clear ou nova janela para tarefas não relacionadas</p>
            </div>
          </div>
          <div class="contexto-tip">
            <span>📝</span>
            <div>
              <strong>CLAUDE.md como âncora de contexto</strong>
              <p>Informações no CLAUDE.md são lidas sempre, sem custar contexto da conversa</p>
            </div>
          </div>
        </div>

        <pre><code class="language-text"># Verificar uso atual
> /cost

# Comprimir quando o contexto estiver alto
> /compact</code></pre>
      `
    },
    {
      titulo: "Segurança e Boas Práticas",
      conteudo: `
        <p>O Claude Code executa código real no seu sistema. Siga estas práticas de segurança:</p>

        <div class="seguranca-lista">
          <div class="seguranca-item seguranca-ok">
            <span>✅</span>
            <div>
              <strong>Revise antes de aprovar</strong>
              <p>Leia o código gerado antes de aprovar execuções que modificam arquivos importantes</p>
            </div>
          </div>
          <div class="seguranca-item seguranca-ok">
            <span>✅</span>
            <div>
              <strong>Use Git antes de tarefas grandes</strong>
              <p>Sempre commite o estado atual antes de pedir refatorações ou mudanças estruturais</p>
            </div>
          </div>
          <div class="seguranca-item seguranca-ok">
            <span>✅</span>
            <div>
              <strong>Configure permissões no settings.json</strong>
              <p>Restrinja quais comandos bash o Claude pode executar no seu projeto</p>
            </div>
          </div>
          <div class="seguranca-item seguranca-perigo">
            <span>❌</span>
            <div>
              <strong>Cuidado com --dangerously-skip-permissions</strong>
              <p>Este flag desativa confirmações. Use apenas em ambientes controlados</p>
            </div>
          </div>
          <div class="seguranca-item seguranca-perigo">
            <span>❌</span>
            <div>
              <strong>Nunca cole secrets na conversa</strong>
              <p>Não cole API keys, senhas ou tokens diretamente no chat com o Claude</p>
            </div>
          </div>
        </div>

        <pre><code class="language-json">// .claude/settings.json — restringir comandos perigosos
{
  "permissions": {
    "allow": [
      "Read(*)",
      "Write(src/**)",
      "Bash(npm:*)",
      "Bash(git add:*)",
      "Bash(git commit:*)"
    ],
    "deny": [
      "Bash(rm -rf:*)",
      "Bash(sudo:*)"
    ]
  }
}</code></pre>
      `
    },
    {
      titulo: "Fluxo de Desenvolvimento Recomendado",
      conteudo: `
        <p>Para projetos SaaS e aplicações reais, siga este fluxo com o Claude Code:</p>

        <div class="fluxo-steps">
          <div class="fluxo-step">
            <div class="step-num">1</div>
            <div class="step-content">
              <strong>Defina a feature em linguagem natural</strong>
              <p>"Quero adicionar um dashboard mostrando métricas de vendas com gráficos"</p>
            </div>
          </div>
          <div class="fluxo-step">
            <div class="step-num">2</div>
            <div class="step-content">
              <strong>Peça um plano antes de implementar</strong>
              <p>"Me dê um plano detalhado dos arquivos que seriam criados/modificados"</p>
            </div>
          </div>
          <div class="fluxo-step">
            <div class="step-num">3</div>
            <div class="step-content">
              <strong>Commite o estado atual</strong>
              <p>Sempre tenha um ponto de retorno seguro antes de grandes mudanças</p>
            </div>
          </div>
          <div class="fluxo-step">
            <div class="step-num">4</div>
            <div class="step-content">
              <strong>Implemente em etapas</strong>
              <p>Backend primeiro, depois frontend, teste cada parte</p>
            </div>
          </div>
          <div class="fluxo-step">
            <div class="step-num">5</div>
            <div class="step-content">
              <strong>Peça um review do código gerado</strong>
              <p>"Revise o código que acabamos de criar, tem alguma melhoria?"</p>
            </div>
          </div>
          <div class="fluxo-step">
            <div class="step-num">6</div>
            <div class="step-content">
              <strong>Commite com mensagem descritiva</strong>
              <p>"Commite as mudanças seguindo o padrão Conventional Commits"</p>
            </div>
          </div>
        </div>

        <div class="destaque">
          <strong>🏆 Regra de ouro:</strong> O Claude Code é uma ferramenta poderosa, mas <em>você</em> é o desenvolvedor. Mantenha o controle, revise o código gerado e entenda o que está sendo feito. Isso faz de você um desenvolvedor melhor.
        </div>
      `
    }
  ],
  quiz: [
    {
      pergunta: "Qual é a melhor prática ao dar uma tarefa grande ao Claude Code?",
      opcoes: [
        "Pedir tudo de uma vez para economizar tempo",
        "Pedir um plano primeiro e aguardar aprovação antes de implementar",
        "Deixar o Claude decidir como implementar sem orientações",
        "Dividir em micro-tarefas de uma linha cada"
      ],
      correta: 1,
      explicacao: "Para tarefas grandes, sempre peça um plano detalhado primeiro. Isso permite revisar a abordagem, fazer ajustes e aprovar antes que o código seja efetivamente escrito — economizando tempo e evitando retrabalho."
    },
    {
      pergunta: "O que você deve fazer ANTES de pedir ao Claude para fazer uma grande refatoração?",
      opcoes: [
        "Nada especial, basta pedir",
        "Fazer um backup manual de todos os arquivos",
        "Commitar o estado atual no Git para ter um ponto de retorno",
        "Desativar o lint para não dar erros"
      ],
      correta: 2,
      explicacao: "Sempre commite o estado atual antes de grandes mudanças. Assim você tem um ponto de retorno seguro caso a refatoração não saia como esperado e precise voltar atrás."
    },
    {
      pergunta: "Por que você não deve colar API keys ou senhas diretamente na conversa com o Claude?",
      opcoes: [
        "O Claude não consegue processar informações sensíveis",
        "Porque o histórico da conversa pode ser visto, e é uma prática insegura",
        "Porque o Claude bloqueia automaticamente esse tipo de conteúdo",
        "Não há problema nenhum em fazer isso"
      ],
      correta: 1,
      explicacao: "Colar secrets (API keys, senhas, tokens) na conversa é uma prática insegura — o histórico pode ser exposto. Use sempre variáveis de ambiente ou arquivos .env para trabalhar com informações sensíveis."
    }
  ]
};
