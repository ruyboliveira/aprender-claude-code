const modulo5 = {
  id: 5,
  titulo: "CLAUDE.md e Memória",
  descricao: "Configure instruções persistentes para que o Claude entenda seu projeto profundamente",
  icone: "🧠",
  duracao: "20 min",
  secoes: [
    {
      titulo: "O que é o CLAUDE.md?",
      conteudo: `
        <p>O <strong>CLAUDE.md</strong> é um arquivo especial que o Claude Code lê automaticamente ao iniciar. É como um "briefing" permanente do seu projeto — você escreve uma vez e o Claude usa sempre.</p>

        <div class="destaque">
          <strong>🎯 Analogia:</strong> É como o manual de integração para um novo desenvolvedor da equipe. Você explica o projeto, as convenções, as regras e o que é importante saber.
        </div>

        <h4>Onde colocar o CLAUDE.md?</h4>
        <div class="escopos-grid">
          <div class="escopo-card">
            <span>🌍</span>
            <strong>~/.claude/CLAUDE.md</strong>
            <p>Global — Vale para todos os projetos</p>
          </div>
          <div class="escopo-card">
            <span>📁</span>
            <strong>projeto/CLAUDE.md</strong>
            <p>Projeto — Vale para este repositório</p>
          </div>
          <div class="escopo-card">
            <span>📂</span>
            <strong>pasta/CLAUDE.md</strong>
            <p>Local — Vale apenas para esta subpasta</p>
          </div>
        </div>
      `
    },
    {
      titulo: "Estrutura de um CLAUDE.md",
      conteudo: `
        <p>Um CLAUDE.md bem escrito deve incluir:</p>

        <pre><code class="language-markdown"># Projeto: MeuSaaS

## Visão Geral
Sistema de gestão financeira pessoal. Backend em FastAPI,
frontend em React + Tailwind. Banco de dados PostgreSQL.

## Stack Técnica
- Backend: Python 3.11 + FastAPI + SQLAlchemy
- Frontend: React 18 + Tailwind CSS + Zustand
- Banco: PostgreSQL 15 + Alembic (migrations)
- Auth: JWT + bcrypt
- Deploy: Hostinger VPS + Nginx + PM2

## Convenções de Código
- Nomes de variáveis em inglês, comentários em português
- Componentes React em PascalCase (ex: UserCard.jsx)
- Rotas da API em snake_case (ex: /api/user_profile)
- Sempre usar async/await, nunca callbacks

## Estrutura de Pastas
- backend/routes/ — endpoints da API
- backend/models/ — modelos do banco
- frontend/src/components/ — componentes React
- frontend/src/pages/ — páginas da aplicação

## Regras Importantes
- NUNCA hardcodar credenciais no código
- Sempre validar inputs no backend com Pydantic
- Toda feature nova precisa de pelo menos um teste
- Usar Conventional Commits (feat:, fix:, docs:)

## Ambiente de Desenvolvimento
- Backend roda na porta 8000: uvicorn app:app --reload
- Frontend roda na porta 3000: npm run dev
- Banco de dados local: postgresql://localhost/meusaas_dev</code></pre>
      `
    },
    {
      titulo: "Sistema de Memória Automática",
      conteudo: `
        <p>Além do CLAUDE.md (que você escreve), o Claude Code tem um sistema de <strong>memória automática</strong> — ele pode salvar informações importantes que aprende durante a conversa para usar em sessões futuras.</p>

        <h4>Tipos de memória:</h4>
        <div class="memoria-tipos">
          <div class="memoria-tipo">
            <span>👤</span>
            <div>
              <strong>Usuário</strong>
              <p>Quem você é, seu nível, suas preferências de trabalho</p>
            </div>
          </div>
          <div class="memoria-tipo">
            <span>💬</span>
            <div>
              <strong>Feedback</strong>
              <p>Correções e preferências de comportamento do Claude</p>
            </div>
          </div>
          <div class="memoria-tipo">
            <span>📋</span>
            <div>
              <strong>Projeto</strong>
              <p>Decisões técnicas, contexto e informações do projeto</p>
            </div>
          </div>
          <div class="memoria-tipo">
            <span>🔗</span>
            <div>
              <strong>Referência</strong>
              <p>Links para recursos externos, documentação, sistemas</p>
            </div>
          </div>
        </div>

        <pre><code class="language-text"># Pedindo ao Claude para lembrar algo
> Lembre-se que neste projeto usamos sempre TypeScript strict mode
  e nunca usamos 'any'. Salve isso na sua memória.

# O Claude salva em ~/.claude/projects/[projeto]/memory/</code></pre>
      `
    },
    {
      titulo: "Importando Arquivos no CLAUDE.md",
      conteudo: `
        <p>Você pode modularizar o CLAUDE.md importando outros arquivos:</p>

        <pre><code class="language-markdown"># Meu Projeto

## Instruções Gerais
@docs/guia-desenvolvimento.md

## Padrões de API
@docs/padroes-api.md

## Regras de Negócio
@docs/regras-negocio.md</code></pre>

        <p>Isso permite manter documentação organizada sem um CLAUDE.md enorme. O Claude lerá automaticamente os arquivos referenciados com <code>@</code>.</p>

        <h4>Dicas para um CLAUDE.md eficaz:</h4>
        <ul>
          <li>✅ Seja específico e direto — evite textos longos e vagos</li>
          <li>✅ Inclua exemplos de código das convenções que quer seguir</li>
          <li>✅ Mencione o que <em>não</em> fazer (ex: "nunca use var")</li>
          <li>✅ Atualize quando as convenções mudarem</li>
          <li>❌ Não inclua informações sensíveis (senhas, keys)</li>
          <li>❌ Não seja redundante com o que está no código</li>
        </ul>

        <div class="destaque destaque-info">
          <strong>💡 Geração automática:</strong> Peça ao Claude para gerar um CLAUDE.md para seu projeto existente: <em>"Analise meu projeto e crie um CLAUDE.md com as convenções que você identificou"</em>
        </div>
      `
    }
  ],
  quiz: [
    {
      pergunta: "O que é o arquivo CLAUDE.md?",
      opcoes: [
        "Um arquivo de configuração técnica do Claude Code",
        "Instruções persistentes que o Claude lê automaticamente para entender seu projeto",
        "Um log das conversas com o Claude",
        "Um arquivo de backup das mudanças feitas"
      ],
      correta: 1,
      explicacao: "O CLAUDE.md contém instruções persistentes — convenções do projeto, stack técnica, regras importantes — que o Claude lê automaticamente ao iniciar, sem precisar repetir essas informações toda vez."
    },
    {
      pergunta: "Qual escopo do CLAUDE.md vale para TODOS os seus projetos?",
      opcoes: [
        "O CLAUDE.md na raiz de cada projeto",
        "O CLAUDE.md em ~/.claude/CLAUDE.md (global)",
        "O CLAUDE.md em subpastas do projeto",
        "Não existe CLAUDE.md global"
      ],
      correta: 1,
      explicacao: "O arquivo em ~/.claude/CLAUDE.md é o escopo global e vale para todos os seus projetos. É onde você coloca preferências pessoais que se aplicam sempre."
    },
    {
      pergunta: "Como você pede ao Claude para salvar uma informação na memória automática?",
      opcoes: [
        "Usar o comando /save",
        "Editar manualmente os arquivos de memória",
        "Pedir diretamente: 'lembre-se que...' ou 'salve isso na sua memória'",
        "A memória não pode ser controlada pelo usuário"
      ],
      correta: 2,
      explicacao: "Basta pedir ao Claude diretamente: 'Lembre-se que usamos TypeScript strict mode, salve isso na memória'. O Claude salvará a informação nos arquivos de memória para usar em sessões futuras."
    }
  ]
};
