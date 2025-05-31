 <div align="center" text-align="center">
    <img src="https://capsule-render.vercel.app/api?type=waving&height=200&color=gradient&text=RickAndMorty%20Client&reversal=false">
</div>

# 🌐 RickAndMorty-Client

Este repositório contém a interface web da aplicação Rick and Morty, desenvolvida com Angular. Ele consome a API RESTful criada no repositório [RickAndMorty-Spring-API](https://github.com/Exploit-Experts/RickAndMorty-Spring-API) e permite aos usuários navegar, filtrar e visualizar informações sobre personagens da série.

## 🎯 Objetivo

Desenvolver uma aplicação front-end com Angular, que consuma a API RESTful, permitindo a visualização e filtragem dos personagens da série Rick and Morty.

## 🛠️ Tecnologias Utilizadas

- Angular
- TypeScript
- HTML5
- CSS3/SCSS
- Bootstrap
- npm

[Live Web](https://rick-and-morthy-client.vercel.app/) | [Screenshots](#screenshots)

1. Clone o repositório:

```bash
git clone https://github.com/Exploit-Experts/RickAndMorthy-client.git
```

2. Navegue até o diretório do projeto:

```bash
cd RickAndMorty-Client
```

3. Instale as dependências do projeto:

```bash
npm install
```

4. Execute a aplicação:

```bash
ng serve
```

Acesse a aplicação no navegador em: `http://localhost:4200`

## 🔍 Funcionalidades

- **Listagem de personagens:** Exibe todos os personagens da API.
- **Busca por nome:** Filtra personagens com base no nome.
- **Detalhes do personagem:** Visualiza mais informações de cada personagem ao clicar.

## ⚖️ Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais informações.

## 📁 Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── config/
│   │   ├── models/
│   │   └── services/
│   ├── features/
│   │   ├── characters/
│   │   ├── episodes/
│   │   ├── home/
│   │   └── locations/
│   ├── shared/
│   │   └── components/
│   ├── app.component.*
│   ├── app.routes.ts
│   └── main.ts
```

## 🔌 API Integration

The application integrates with the [Rick and Morty API](https://rickandmortyapi.com) to fetch data about:

- **Characters:** `/character` endpoint with filtering capabilities
- **Locations:** `/location` endpoint with type and dimension filters
- **Episodes:** `/episode` endpoint with season information

### API Services

Each API service is implemented in the `core/services` directory with TypeScript interfaces for strong typing:

- `CharacterService` - Handles character data fetching and filtering
- `LocationService` - Manages location data and resident information
- `EpisodeService` - Handles episode data and character appearances

### Data Models

Type-safe interfaces are defined in `core/models/`:

- `Character` - Character data structure
- `Location` - Location data structure
- `Episode` - Episode data structure
- `ApiInfo` - API pagination information

## ⚙️ Environment Configuration

The application uses environment configuration for API endpoints:

```typescript
// src/app/core/config/environment.ts
export const environment = {
  apiBaseUrl: "https://rickandmortyapi.com/api",
};
```

## 📱 Screenshots

### Screenshots

<div align="center">
  <details>
    <summary>Home Page</summary>
    <img src="./public/screenshots/home.png" alt="Home Page" width="800px">
    <p><em>Home page with hero section and navigation</em></p>
  </details>

  <details>
    <summary>Character List</summary>
    <img src="./public/screenshots/list.png" alt="Character List" width="800px">
    <p><em>Character browser with filtering options</em></p>
  </details>

  <details>
    <summary>Mobile View</summary>
    <img src="./public/screenshots/mobile.png" alt="Mobile View" width="400px">
    <p><em>Responsive design for mobile devices</em></p>
  </details>
</div>

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. **Fork the repository**
2. **Create your feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes:**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style

- Follow Angular style guide conventions
- Use TypeScript strict mode
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📞 Support

If you have any questions or need help with the project:

- **Issues:** [GitHub Issues](https://github.com/brunoliratm/RickAndMorthy-Client/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Rick and Morty API** - [https://rickandmortyapi.com](https://rickandmortyapi.com) for providing the comprehensive API
- **Angular Team** - For the excellent framework and development tools
- **PrimeNG** - For the beautiful UI components
- **Open Source Community** - For the amazing tools and libraries

---

<div align="center">
  Made with ❤️ for Rick and Morty fans everywhere
</div>
