# Teste Front-End Jr Javascript

> [![Logo Easy Carros](./assets/easy-carros-logo.png)](https://easycarros.com/)
>
> Olá, nesse teste vamos analisar seus conhecimentos como desenvolvedor Front-end utilizando as tecnologias: HTML, CSS, JavaScript

Olá Dev! Tudo bem?

Nós estamos sempre em busca de profissionais interessantes e interessados, com boa capacidade de aprendizado, adaptação e principalmente bom senso!

Este teste tem como objetivo avaliar e desafiar você. Não é obrigatório realizá-lo completamente, queremos apenas reconhecer seu esforço e potencial para aprender, se adaptar e tomar decisões.

Este desafio deve ser feito por você em sua casa. Gaste o tempo que você quiser, porém normalmente você não deve precisar de mais do que alguns dias.

Qualquer dúvida relacionada ao teste pode entrar em contato pelo email people@easycarros.com.

## Por onde começo?

1. Primeiro, faça um fork deste projeto para sua conta no Github (crie uma se você não possuir).
2. Em seguida, implemente o projeto tal qual descrito abaixo, em seu próprio fork.
3. Por fim, empurre todas as suas alterações para o seu fork no Github.
4. Envie um pull request para este repositório original.
5. Nos avise por email sobre o pull request.

## Alternativas de entrega do desafio:

Esta alternativa é direcionada aos candidatos(as) que não queiram que a submissão seja pública e/ou não saibam usar o Git.

1. Faça um clone deste repositório.
2. Em seguida, implemente o projeto tal qual descrito abaixo, em seu clone local.
3. Comprima o projeto todo em um arquivo .zip.
4. Por fim envie o arquivo .zip anexado por email para people@easycarros.com.

Se preferir faça o download clicando no no botão "Download ZIP" na barra lateral direita nesta página, baixe o .zip do projeto, modifique-o, comprima novamente em um novo arquivo .zip e mande por email para people@easycarros.com.

## Consigo fazer?

Consegue sim! Só precisa saber (ou aprender agora) um pouco sobre as seguintes tecnologias:

- HTML
- CSS
- Javascript
- Git

> Diferencial: React ou React Native, utilizamos esses frameworks aqui.

## Desafio:

O desafio consiste em desenvolver um CRUD de Ordem de serviços automotivos realizados em uma placa.

- Você pode criar uma aplicação Web Responsiva ou criar uma aplicação Mobile;
- Persistir os dados do CRUD localmente utilizando um Array ou LocalStorage/AsyncStorage;

## Layout

Você pode seguir a nossa sugestão de layout nesses [clique aqui](https://xd.adobe.com/view/fd762ae3-ba7d-43a5-9c45-3c51cdb17978-a825/)

Caso o link acima não funcione você pode acessar esta pasta no google drive com o arquivo .xd

[Google drive - clique aqui](https://drive.google.com/drive/folders/1MRGb6owzQzL4_4gGwe2LXkpqgJTcX8G_?usp=sharing)

Os icones e imagens que você vai precisar para seguir nosso layout estão na pasta assets neste repositório.

### Tela de boas vindas;

![Tela Boas Vindas](./assets/FRONT01.png)

### Tela para listagem e inserção de novas ordens

![Tela Boas Vindas](./assets/FRONT02.png)

> Você também pode criar suas proprias telas, tem total liberdade para desenvolver o teste sguindo nossa sugestão de layout ou criando suas proprias telas.

## Requisitos:

- A aplicação deve salvar a lista de ordem de serviço localmente, utilizando Array, LocalStorage/AsyncStorage
- A aplicação deve ter 2 telas - Telas de boas vindas e tela do CRUD

### O que o usuário pode fazer?

```
Atributos da ordem de serviço:
{
  "placa": "ZZZ-1234",
  "serviço_realizado": "Lavagem a seco",
  "data_agendamento": "25/07/2020 12:30",
  "data_execucao": "25/07/2020 12:30",
}
```

- Usuario deve poder cadastrar uma nova ordem de serviço;
- Usuario deve poder ver a lista de ordem de serviços cadastradas;
- Usuario deve poder atualizar a data de execução de uma ordem de serviço, finalizando o serviço;
- Usuario deve poder deletar uma ordem de serviço;

Não foque 100% nos requisitos, gostamos de quem vai além do esperado!

Tente pensar o que mais poderia adicionar ao teste que melhoraria a experiencia do usuário.

## Só isso?

Só! Mas se estiver motivado, tente preparar o projeto para ser executado e testado de maneira prática, usando alguma ferramenta que facilite isso (ex: npm, yarn, docker, etc...).

Se preferir, pode publicá-lo em algum servidor de sites estáticos (ex: Github Pages, Firebase, Netlify...), esses exemplos são gratuitos, mas você pode usar um Cloud próprio também (ex: AWS, Digital Ocean, Linode...).
