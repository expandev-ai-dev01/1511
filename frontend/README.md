# Catálogo de Bolos

Um catálogo digital para confeitaria com lista de produtos, filtros, detalhes dos bolos e funcionalidade de carrinho de compras.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Zustand 5.0.1

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   └── NotFound/         # Página 404
├── domain/               # Domínios de negócio
├── core/                 # Componentes e utilitários compartilhados
│   ├── components/       # Componentes genéricos
│   ├── lib/             # Configurações de bibliotecas
│   └── utils/           # Funções utilitárias
└── assets/              # Recursos estáticos
    └── styles/          # Estilos globais
```