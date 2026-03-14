const modulo4 = {
  id: 4,
  titulo: "Funcionalidades Principais",
  descricao: "Domine as tarefas do dia a dia: criar features, corrigir bugs e automatizar",
  icone: "🛠️",
  duracao: "25 min",
  secoes: [
    {
      titulo: "Criando Novas Features",
      conteudo: `
        <p>Uma das capacidades mais poderosas do Claude Code é criar funcionalidades completas — desde o backend até o frontend — entendendo todo o contexto do seu projeto.</p>

        <pre><code class="language-text">> Adicione autenticação com JWT ao projeto.
  O backend é em FastAPI (backend/app.py).
  Crie os endpoints /login e /register, use bcrypt para
  hash de senha e retorne um token JWT com expiração de 1 hora.</code></pre>

        <p>O Claude irá:</p>
        <ol>
          <li><strong>Ler</strong> os arquivos existentes para entender o projeto</li>
          <li><strong>Identificar</strong> onde fazer as mudanças</li>
          <li><strong>Criar/modificar</strong> os arquivos necessários</li>
          <li><strong>Instalar</strong> dependências faltantes se necessário</li>
          <li><strong>Verificar</strong> se o código está consistente</li>
        </ol>

        <div class="destaque destaque-info">
          <strong>💡 Dica:</strong> Mencione arquivos específicos pelo nome. "O arquivo backend/app.py" é melhor que "o backend". O Claude consegue focar melhor quando sabe exatamente onde trabalhar.
        </div>
      `
    },
    {
      titulo: "Corrigindo Bugs",
      conteudo: `
        <p>O Claude Code é excelente para debug. Cole o erro diretamente na conversa:</p>

        <pre><code class="language-text">> Estou recebendo este erro ao tentar salvar no banco:

  sqlalchemy.exc.IntegrityError: (psycopg2.errors.UniqueViolation)
  duplicate key value violates unique constraint "users_email_key"
  DETAIL: Key (email)=(teste@email.com) already exists.

  O erro acontece na função create_user() em backend/models/user.py</code></pre>

        <p>O Claude irá:</p>
        <ul>
          <li>Ler o arquivo <code>backend/models/user.py</code></li>
          <li>Identificar a causa raiz do problema</li>
          <li>Propor e implementar a correção</li>
          <li>Sugerir como testar se foi resolvido</li>
        </ul>

        <h4>Técnica: Debug com logs</h4>
        <pre><code class="language-text">> A função processPayment() está retornando undefined às vezes.
  Adicione logs temporários para rastrear o problema e me diga
  o que você acha que está causando isso.</code></pre>
      `
    },
    {
      titulo: "Automatizando Tarefas Repetitivas",
      conteudo: `
        <p>O Claude Code brilha em automações que seriam chatas de fazer manualmente:</p>

        <div class="automacoes-lista">
          <div class="automacao-item">
            <strong>📝 Testes automatizados</strong>
            <pre><code class="language-text">> Escreva testes unitários para todas as funções
  em utils/validators.py usando pytest</code></pre>
          </div>

          <div class="automacao-item">
            <strong>🔍 Correção de lint</strong>
            <pre><code class="language-text">> Execute eslint no projeto e corrija todos os
  erros encontrados, mantendo o estilo existente</code></pre>
          </div>

          <div class="automacao-item">
            <strong>📦 Atualização de dependências</strong>
            <pre><code class="language-text">> Atualize as dependências do package.json para
  as versões mais recentes estáveis e teste se tudo funciona</code></pre>
          </div>

          <div class="automacao-item">
            <strong>📋 Documentação</strong>
            <pre><code class="language-text">> Gere documentação JSDoc para todas as funções
  exportadas em src/utils/ que ainda não têm documentação</code></pre>
          </div>

          <div class="automacao-item">
            <strong>🔀 Resolução de conflitos</strong>
            <pre><code class="language-text">> Resolva os conflitos de merge no arquivo
  src/components/Header.jsx, mantendo ambas as funcionalidades</code></pre>
          </div>
        </div>
      `
    },
    {
      titulo: "Fluxo Git Integrado",
      conteudo: `
        <p>O Claude Code entende Git nativamente. Você pode pedir commits, branches e PRs diretamente:</p>

        <pre><code class="language-text">> Commite as mudanças que fizemos com uma mensagem descritiva</code></pre>

        <pre><code class="language-bash"># O Claude executa automaticamente:
git add src/auth/login.js src/auth/register.js
git commit -m "feat: adiciona autenticação JWT com bcrypt

- Endpoints /login e /register no FastAPI
- Hash de senha com bcrypt
- Token JWT com expiração de 1h
- Validação de dados com Pydantic"</code></pre>

        <h4>Criando Pull Requests:</h4>
        <pre><code class="language-text">> Crie um PR para a branch main com um título e descrição
  explicando o que foi implementado nesta feature de autenticação</code></pre>

        <pre><code class="language-bash"># O Claude cria a branch, faz push e cria o PR via gh CLI:
git checkout -b feat/autenticacao-jwt
git push -u origin feat/autenticacao-jwt
gh pr create --title "feat: implementa autenticação JWT" \
  --body "## Mudanças\n- Adiciona endpoints de login/register\n..."</code></pre>

        <div class="destaque">
          <strong>📌 Convenção:</strong> O Claude segue automaticamente o padrão Conventional Commits (feat:, fix:, docs:, etc.) para mensagens de commit quando você não especifica o formato.
        </div>
      `
    },
    {
      titulo: "Trabalhando com Código Existente",
      conteudo: `
        <p>O Claude Code é ótimo para entender e refatorar código que você não escreveu:</p>

        <pre><code class="language-text">> Explique como o sistema de pagamentos funciona neste projeto.
  Comece pelos arquivos relevantes e me dê uma visão geral.</code></pre>

        <pre><code class="language-text">> Refatore a classe PaymentProcessor em payments/processor.py
  para seguir o princípio de responsabilidade única (SRP).
  Não mude o comportamento, apenas a estrutura.</code></pre>

        <pre><code class="language-text">> Adicione tratamento de erros adequado em todas as chamadas
  de API em services/api.js. Use try/catch e log os erros
  no formato que já usamos no projeto.</code></pre>

        <div class="destaque destaque-info">
          <strong>💡 Contexto de projeto:</strong> Quanto mais o Claude conhece seu projeto (via CLAUDE.md, histórico de conversa), mais preciso e consistente ele será. Veremos isso no Módulo 5.
        </div>
      `
    }
  ],
  quiz: [
    {
      pergunta: "Qual é a melhor forma de reportar um bug ao Claude Code?",
      opcoes: [
        "Apenas dizer 'tem um bug no código'",
        "Colar a mensagem de erro completa e indicar o arquivo/função onde ocorre",
        "Pedir para o Claude procurar bugs sozinho em todo o projeto",
        "Descrever o bug em termos gerais sem detalhes técnicos"
      ],
      correta: 1,
      explicacao: "Cole a mensagem de erro completa e indique onde ocorre (arquivo e função). O Claude consegue diagnosticar e corrigir muito melhor com informações específicas do que com descrições vagas."
    },
    {
      pergunta: "Para criar um commit, o que você deve dizer ao Claude Code?",
      opcoes: [
        "O Claude não consegue criar commits, apenas código",
        "Pedir para ele 'commitar as mudanças' — ele executa os comandos git automaticamente",
        "Você precisa sempre fazer o commit manualmente",
        "Usar o comando especial /git commit"
      ],
      correta: 1,
      explicacao: "O Claude Code integra nativamente com Git. Basta pedir 'commite as mudanças com uma mensagem descritiva' e ele executará os comandos git add e git commit automaticamente."
    },
    {
      pergunta: "Qual destas é uma automação que o Claude Code pode fazer bem?",
      opcoes: [
        "Apenas criar novos arquivos",
        "Somente corrigir bugs já identificados",
        "Escrever testes, corrigir lint, atualizar dependências, gerar documentação",
        "Só trabalha com uma linguagem de programação"
      ],
      correta: 2,
      explicacao: "O Claude Code pode automatizar muitas tarefas repetitivas: escrever testes unitários, corrigir erros de lint, atualizar dependências, gerar documentação, resolver conflitos de merge e muito mais."
    }
  ]
};
