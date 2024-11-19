---
title: O Mapa de Karnaugh
description: Grupo 11
---

# O Mapa de Karnaugh

### O que é um Mapa de Karnaugh?
O mapa de Karnaugh é o método de simplificação de tabelas verdades mais humano. Além de minimizar o custo de um circuito combinacional com menos esforço mental, é mais rápido do que a simplificação por mintermo, maxtermo e DeMorgan; Consegue simplificar em apenas uma aplicação. O método consiste em plotar a tabela verdade em um outro modelo, padrão do mapa de Karnaugh, e circular os pontos mais relevantes, que podem ser tanto os aglomerados de um's ou zeros, dependendo da lógica escolhida pelo usuário. A equação das variáveis já sai com o menor custo possível dentro da lógica escolhida. Por ter menos etapas, reduz também a chance de erro, caso esteja sendo realizado sem a ajuda de softwares especializados em resolver equações pelas definições de DeMorgan.

### Como fazer o mapa?

**1. Entenda as variáveis**
Antes de começar, é importante entender as variáveis envolvidas em uma função lógica e saber que o número total de combinações possíveis é sempre 2 elevado à quantidade de variáveis. Por exemplo, para duas variáveis (A e B), você terá 2<sup>2</sup>=4 combinações. Para três variáveis (A, B e C), 2<sup>3</sup>=8, e assim por diante.

**2. Monte a tabela-verdade**
Elabore a tabela-verdade para a função que deseja simplificar. Liste todas as combinações de entrada e a saída correspondentes.

Defina o número de variáveis e o tamanho do mapa.
- Para duas variáveis: uma grade 2×2 (4 células)
- Para três variáveis: uma grade 2×4 (8 células)
- Para quatro variáveis: uma grade 4×4 (16 células)

**3. Desenhe a grade do mapa**

O K-map organiza as variáveis em linhas e colunas, seguindo a sequência do código Gray (onde apenas um bit muda de uma célula para a adjacente).

Exemplo para duas variáveis (**A** e **B**):

!IMPORTANT
adicionar tabela exemplo duas variáveis


Exemplo para 3 variáveis (**A**, **B**, **C**):

!IMPORTANT
adicionar tabela exemplo três variáveis

**4. Preencha o mapa**

Transfira os valores da tabela-verdade para o mapa:

- Cada célula do K-map corresponde a uma combinação única de entradas.
- Insira os valores da saída (0 ou 1) nas células correspondentes.

**5. Agrupe os 1s**

Procure formar grupos de 1, 2, 4, 8, etc. células adjacentes que contenham 1s:

- Os grupos devem ser quadriláteros.
- Eles podem envolver células na borda oposta do mapa (adjacência "circular").
- Cada célula contendo 1 deve estar em pelo menos um grupo.

**6. Extraia a expressão simplificada**

Para cada grupo:

- Identifique as variáveis fixas (que não mudam dentro do grupo).
- Escreva um termo lógico com as variáveis fixas.
- Combine os termos com OR (++) para formar a expressão simplificada.

~//~

## Exercícios
:::note TODO
Grupo 11
:::
