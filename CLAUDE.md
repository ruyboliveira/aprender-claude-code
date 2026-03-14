# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

Site interativo em português para aprender Claude Code, baseado na documentação oficial da Anthropic. Funciona como arquivo local (abrir `index.html` no navegador — sem servidor necessário).

## Stack

- HTML/CSS/JS puro — sem framework, sem build step, sem dependências npm
- Highlight.js via CDN para syntax highlighting
- LocalStorage para persistir progresso do usuário

## Arquitetura

### Fluxo de dados
`index.html` carrega os scripts na ordem: módulos de conteúdo → `progress.js` → `quiz.js` → `app.js`. O `app.js` inicializa via `DOMContentLoaded` e acessa as variáveis globais (`modulo1`…`modulo8`) definidas pelos arquivos de conteúdo.

### Módulos de conteúdo (`content/modulo*.js`)
Cada arquivo define uma variável global (ex: `const modulo1 = { ... }`) com a estrutura:
```js
{
  id: Number,
  titulo: String,
  descricao: String,
  icone: String,        // emoji
  duracao: String,      // ex: "15 min"
  secoes: [{ titulo, conteudo }],  // conteudo é HTML puro
  quiz: [{ pergunta, opcoes[], correta, explicacao }]
}
```
O campo `conteudo` das seções é HTML injetado via `innerHTML` — **nunca use template literals com `${...}` dentro dos blocos de conteúdo**; escape como `\${...}` se necessário (ex: variáveis de GitHub Actions).

### `js/app.js`
Objeto global `App` com o array `modulosData` (referências às variáveis dos módulos). Gerencia navegação por hash (`#1`…`#8`), renderização do conteúdo, sidebar e busca.

### `js/progress.js`
Objeto global `Progress` — lê/escreve `localStorage` com a chave `claudecode_progress`. Estrutura: `{ modulos: { [id]: { concluido, data } }, quizzes: { [id]: { acertos, total, percentual, data } } }`.

### `js/quiz.js`
Objeto global `Quiz` — renderiza e corrige quizzes. Depende de `App.modulosData` e `Progress`.

## Como adicionar um novo módulo

1. Criar `content/modulo9.js` seguindo a estrutura existente (variável global `modulo9`)
2. Adicionar `<script src="content/modulo9.js"></script>` no `index.html` antes dos scripts `js/`
3. Adicionar `modulo9` ao array `modulosData` em `js/app.js`

## Repositório GitHub

Repositório: **https://github.com/ruyboliveira/aprender-claude-code**

### Sincronização automática

O projeto está configurado para fazer commit e push automático a cada alteração feita pelo Claude Code. O mecanismo funciona assim:

- O hook `.claude/hooks/post-tool-use.sh` é executado após cada uso das ferramentas `Edit`, `Write` ou `Bash`
- Se houver arquivos modificados, ele faz `git add`, `git commit` e `git push` automaticamente
- As mensagens de commit automáticas seguem o padrão: `auto: atualização automática em YYYY-MM-DD HH:MM`

### Commits manuais

Para commits com mensagem descritiva (ao finalizar uma feature), peça explicitamente:
> "faça um commit descritivo das mudanças"

O padrão de mensagem é:
```
feat: descrição da funcionalidade adicionada
fix: descrição do bug corrigido
style: ajuste visual ou de responsividade
refactor: reorganização de código sem mudar comportamento
```
