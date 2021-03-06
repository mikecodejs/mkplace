<!-- PROJECT SHIELDS -->
<!-- ... -->

<!--
*** Estamos usando "reference style" do markdown para links por legibilidade.
*** Os links de referência são usados entre chaves [ ] ao invés de parênteses ( ).
*** @see https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- RESUMO -->
<br />
<p align="center">
  <a href="https://github.com/mikecodejs/mkplace">
    <img src="./docs/assets/logo.png" alt="Logo" width="450" height="auto" style="max-width: 100%;" />
  </a>

  <h3 align="center">MKPLACE</h3>
  <br />

  <p align="center">
    <a href="https://github.com/mikecodejs/mkplace/blob/master/README.md">
      <strong>Ver a Documentação »</strong>
    </a>
  </p>
</p>

## 🚀 Como usar

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 🔧 Instalando

Precisamos de algumas etapas para configurar o projeto.

Instale as dependências do projeto

```
yarn
# or
yarn install
```

Em seguida configure as variáveis de ambiente baseadas no `.env.example`

```
DATABASE_URL="mongodb+srv://username:password@cluster0.n6c0y.mongodb.net/database?retryWrites=true&w=majority"
```

Para executar a aplicação execute

```
yarn dev
```

Acesse seu `http://localhost:8080` para tera acesso aos endpoints da aplicação.

<img src="./docs/assets/screen.png" alt="Logo" height="auto" style="max-width: 100%" />

### ⚙️ Executando os testes

```
yarn test
```
