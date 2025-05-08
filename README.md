<div align="center">
    <img src="https://capsule-render.vercel.app/api?type=waving&height=200&color=gradient&text=Rick%20and%20Morty%20Client&reversal=false">
</div>

<div align="center">

[![Angular](https://img.shields.io/badge/Angular-19.0.0-DD0031?logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![RxJS](https://img.shields.io/badge/RxJS-7.8.0-B7178C?logo=reactivex)](https://rxjs.dev/)

</div>

> _A modern Angular application to explore the multiverse of Rick and Morty!_

This repository contains a web interface for the Rick and Morty application, built with Angular. It consumes the [Rick and Morty API](https://github.com/Exploit-Experts/RickAndMorty-Spring-API) to allow users to browse, filter, and view information about the series' characters, locations, and episodes.

**[English](#english-documentation) | [Português](#documentação-em-português)**

---

## English Documentation

### 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

### Overview

Rick and Morty Explorer is a comprehensive front-end application that provides an intuitive interface for exploring all aspects of the Rick and Morty universe. Users can browse characters, locations, and episodes with rich filtering capabilities and create accounts to save their favorite content.

### Features

- **Character Explorer**

  - Browse all characters with pagination
  - Filter by status (alive, dead, unknown)
  - Filter by species, gender, and origin
  - Detailed character profiles with related episodes

- **Location Directory**

  - Browse all locations from the multiverse
  - Filter by type and dimension
  - View residents of each location

- **Episode Guide**

  - Complete episode listing with air dates
  - Season categorization
  - Character appearances by episode

- **User Features** _(In Development)_

  - User registration and authentication
  - Save favorite characters, locations, and episodes
  - Personalized dashboard

- **UI/UX**
  - Responsive design for mobile and desktop
  - Intuitive navigation
  - Dynamic search capabilities
  - Consistent theming inspired by the show

### Tech Stack

- **Frontend Framework:** Angular 19
- **Language:** TypeScript 5.7
- **Styling:** SCSS with responsive design
- **State Management:** RxJS for reactive state handling
- **HTTP Client:** Angular HttpClient for API communication
- **Build Tools:** Angular CLI
- **Package Manager:** npm

### Getting Started

#### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

#### Installation

1. Clone the repository:

```bash
git clone https://github.com/Exploit-Experts/RickAndMorthy-client.git
```

2. Navigate to the project directory:

```bash
cd RickAndMorty-client
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
ng serve
```

5. Open your browser and navigate to `http://localhost:4200`

#### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### API Integration

The application integrates with the [Rick and Morty API](https://github.com/Exploit-Experts/RickAndMorty-Spring-API) to fetch data about:

- Characters: `/characters` endpoint
- Locations: `/locations` endpoint
- Episodes: `/episodes` endpoint

Each API service is implemented in the `core/services` directory with TypeScript interfaces for strong typing.

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Documentação em Português

### 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Stack Tecnológico](#stack-tecnológico)
- [Como Começar](#como-começar)
- [Integração com API](#integração-com-api)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

### Visão Geral

Rick and Morty Explorer é uma aplicação front-end abrangente que fornece uma interface intuitiva para explorar todos os aspectos do universo de Rick and Morty. Os usuários podem navegar por personagens, localizações e episódios com ricas capacidades de filtragem e criar contas para salvar seu conteúdo favorito.

### Funcionalidades

- **Explorador de Personagens**

  - Navegue por todos os personagens com paginação
  - Filtre por status (vivo, morto, desconhecido)
  - Filtre por espécie, gênero e origem
  - Perfis detalhados dos personagens com episódios relacionados

- **Diretório de Localizações**

  - Navegue por todas as localizações do multiverso
  - Filtre por tipo e dimensão
  - Veja residentes de cada localização

- **Guia de Episódios**

  - Listagem completa de episódios com datas de exibição
  - Categorização por temporada
  - Aparições de personagens por episódio

- **Recursos de Usuário** _(Em Desenvolvimento)_

  - Registro e autenticação de usuários
  - Salve personagens, localizações e episódios favoritos
  - Painel personalizado

- **UI/UX**
  - Design responsivo para celular e desktop
  - Navegação intuitiva
  - Capacidades de busca dinâmica
  - Tema consistente inspirado na série

### Stack Tecnológico

- **Framework Frontend:** Angular 19
- **Linguagem:** TypeScript 5.7
- **Estilização:** SCSS com design responsivo
- **Gerenciamento de Estado:** RxJS para manipulação reativa de estado
- **Cliente HTTP:** Angular HttpClient para comunicação com API
- **Ferramentas de Build:** Angular CLI
- **Gerenciador de Pacotes:** npm

### Como Começar

#### Pré-requisitos

- Node.js (v18 ou superior)
- Gerenciador de pacotes npm ou yarn

#### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Exploit-Experts/RickAndMorthy-client.git
```

2. Navegue até o diretório do projeto:

```bash
cd RickAndMorty-client
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
ng serve
```

5. Abra seu navegador e acesse `http://localhost:4200`

#### Build para Produção

```bash
npm run build
```

Os artefatos de build serão armazenados no diretório `dist/`.

### Integração com API

A aplicação integra-se com a [API do Rick and Morty](https://github.com/Exploit-Experts/RickAndMorty-Spring-API) para buscar dados sobre:

- Personagens: endpoint `/characters`
- Localizações: endpoint `/locations`
- Episódios: endpoint `/episodes`

Cada serviço de API é implementado no diretório `core/services` com interfaces TypeScript para tipagem forte.

### Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

1. Faça um fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/recurso-incrivel`)
3. Commit suas alterações (`git commit -m 'Adicionar algum recurso incrível'`)
4. Push para a branch (`git push origin feature/recurso-incrivel`)
5. Abra um Pull Request

### Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

<div align="center">
    <img src="https://capsule-render.vercel.app/api?type=waving&height=200&color=gradient&reversal=false&section=footer">
</div>
