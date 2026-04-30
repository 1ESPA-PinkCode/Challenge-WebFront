# Health Plus

Aplicação web desenvolvida em **React + Vite**, com foco em **saúde, autocuidado, gamificação e experiência do usuário**.

---

## Sobre o Projeto

O **Health Plus** é um aplicativo web de saúde e bem-estar criado com o objetivo de incentivar hábitos saudáveis por meio de uma experiência interativa e motivadora.

A proposta do projeto é transformar o autocuidado em algo leve e prazeroso, utilizando **missões diárias, recompensas, interação em grupo e evolução visual de uma planta**, que cresce conforme o usuário completa suas metas.

O sistema foi pensado para promover:

- hábitos saudáveis
- consistência diária
- motivação visual
- suporte ao usuário
- interação social positiva

---

## Objetivo

O projeto tem como foco incentivar o usuário a cuidar melhor da sua saúde através de pequenas ações diárias, como:

- meditação
- hidratação
- sono adequado
- exercícios físicos

Cada hábito concluído gera progresso dentro do aplicativo e contribui para o crescimento da planta 🌱🌿🌾🌻

---

## Equipe de Desenvolvimento

| RM | Nome |
|----|------|
| RM 567947 | Lara Mofid Essa Alssabak |
| RM 567355 | Maria Luisa Boucinhas Franco |
| RM 568459 | Maria Luiza Kochnoff da Matta |
| RM 567825 | Roberta Moreira dos Santos |

---

## Tecnologias Utilizadas

- **React**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **React Icons**
- **Lucide React**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

---

## Estrutura do Projeto

```bash
SPRINT-WEBFRONT/
├── public/
├── src/
│   ├── assets/
│   │   ├── bloom.jpeg
│   │   └── logo.PNG
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Grupos.jsx
│   │   ├── Menu.jsx
│   │   └── Missoes.jsx
│   │
│   ├── routes/
│   │   ├── AppPage.jsx
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   └── Suporte.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Funcionalidades

### Página Inicial
A Home apresenta toda a proposta do projeto, incluindo:

- conceito do aplicativo
- explicação do funcionamento
- gamificação
- evolução da planta
- assistente virtual Bloom
- chaveiro inteligente com conta-passos

---

### Sistema de Missões
O usuário recebe missões diárias relacionadas à saúde, como:

- Meditação matinal
- Sono reparador
- Hidratação
- Exercícios físicos

Cada missão possui:

- meta diária
- barra de progresso
- porcentagem concluída
- recompensa em moedas

---

### Evolução da Planta
O sistema possui uma funcionalidade visual de evolução da planta conforme o progresso do usuário:

```text
🌱 início
🌿 progresso inicial
🌾 estágio avançado
🌻 missão completa
```

A planta cresce de acordo com a quantidade de missões concluídas.

Essa funcionalidade reforça a experiência de gamificação e motivação.

---

### Grupos e Ranking
O usuário pode participar de grupos e acompanhar rankings semanais com:

- classificação por missões
- vitórias semanais
- interação entre amigos
- incentivo coletivo

Inspirado em apps de acompanhamento em grupo.

---

### Assistente Virtual Bloom
A Bloom é a assistente virtual do aplicativo.

Ela oferece:

- mensagens motivacionais
- lembretes diários
- suporte emocional leve
- sugestões preventivas

---

### Central de Suporte
Página completa para atendimento ao usuário contendo:

- formulário de contato
- envio de dúvidas
- sugestões
- problemas técnicos
- perguntas frequentes (FAQ)

---

### Gamificação
O projeto transforma saúde em experiência gamificada através de:

- missões
- moedas
- recompensas
- evolução visual
- grupos
- conquistas

---

## Persistência de Dados

O progresso das missões é salvo utilizando **localStorage**.

Isso permite que os dados do usuário permaneçam salvos durante o dia.

Exemplo:

- progresso das missões
- data atual
- status diário

---

## Responsividade

O projeto foi desenvolvido com layout responsivo para:

- desktop
- tablet
- mobile

---

## Como Rodar o Projeto

### 1. Clone o repositório
```bash
git clone <link-do-repositorio>
```

### 2. Entre na pasta
```bash
cd Challenge-WebFront

```

### 3. Instale as dependências
```bash
npm install
```

### 4. Execute o projeto
```bash
npm run dev
```

### 5. Abra no navegador
```bash
http://localhost:5173
```

---

## Objetivo Acadêmico

Este projeto foi desenvolvido como atividade prática da disciplina de **Web Development e Front-End Design**, com foco em:

- componentização com React
- gerenciamento de estado
- persistência local
- design responsivo
- experiência do usuário
- front-end moderno
- UI/UX
- gamificação

---
