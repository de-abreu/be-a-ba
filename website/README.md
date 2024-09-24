# Site do livro *O Bê-á-bá do FPGA: Práticas na construção de um processador digital*

> Primeira publicação por [Guilherme de Abreu Barreto](https://github.com/de-abreu/), aluno do curso de graduação em Ciência da Computação, de número USP 12543033.

O referido [site](https://de-abreu.github.io/be-a-ba) trata-se de uma publicação feita pelo uso das ferramentas [Docusaurus](https://docusaurus.io/) e [GitHub Pages](https://pages.github.com/).

Ao final de cada página do site encontra-se um link "**Editar esta página**" onde o usuário pode, em uma sequência de passos, realizar o envio de alterações propostas na forma de [*Pull Requests*](https://docs.github.com/pt/pull-requests). Todas as páginas desta documentação são escritas e formatadas usando a linguagem de marcação [markdown](https://www.markdownguide.org), um guia completo para a sintaxe desta pode ser encontrado [aqui](https://www.markdownguide.org/basic-syntax/).

Não obstante, ao realizar um [fork](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) no [repositório](https://github.com/de-abreu/Processador-ICMC) do projeto, muitas outras alterações da documentação, mesmo estruturais, podem ser propostas. Para tal, recomenda-se a leitura da documentação do Docusaurus, em especial seu [tutorial](https://docusaurus.io/docs#fast-track).
### Instalação

Para instalar o Docusaurus e todas as suas dependências, basta executar o seguinte comando após adentrar a pasta `/website`:

```sh
yarn
```

### Realizando o desenvolvimento localmente

O seguinte comando inicializa um servidor local e em seguida abre uma janela apontando para seu endereço usando o navegador padrão:

```sh
yarn start
```

As alterações feitas à documentação são refletidas nesta visualização em tempo real, sem a necessidade de se reinicializar o servidor.

Obs.: para se editar o site noutras linguagens, como `en` (English), por exemplo, utilize este comando da seguinte maneira:

```sh
yarn start -- --locale en
```

### Gerando o site

O seguinte comando gera um o conteúdo estático do site na pasta `website/build`, de forma que ele esteja pronto para publicação em qualquer dado serviço de hospedagem:
```sh
yarn build
```

### Publicação usando GitHub Pages

Havendo acesso ao repositório do projeto, tanto a geração e publicação do site pode ser feita a partir de um dos seguintes comandos:

```sh
USE_SSH=true yarn deploy
```

para realizar o acesso usando uma [conexão ssh](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh), ou senão;

```sh
GIT_USER=<Your GitHub username> yarn deploy
```

Para realizar o acesso usando uma conexão HTTPS (em seguida ao uso deste comando você terá de prover sua senha de usuário para efetivar o acesso). O resultado da geração do site constará na *branch* `gh-pages`.
