description: Grupo 1
---

# Algebra booleana
## O que é?
Primeiramente, é preciso entender a principal diferença entre a álgebra convencional e a algebra booleana, que é o fato de que a álgebra booleana pode assumir somente dois valores, sendo eles: 0 ou 1, sendo que esses valores não representam realmente valores numéricos, mas o estado do nível de tensão que uma variável possui, ou seja, seu **nível lógico**.

# Álgebra Booleana
:::note
Grupo 1
:::
Nível Lógico
| 0 | 1 | 
|----------|----------|
| Falso  | Verdadeiro  | 
| Desligado  | Ligado |
| Baixo | Alto |
| Não | Sim |
| Fechado | Aberto |

Portanto, álgebra booleana não é nada mais que um modo de expressar o relacionamento de entradas e saídas dentro de um circuito lógico.

## Axiomas da Álgebra Booleana:
Como  na Álgebra convencional, a álgebra booleana é baseada em uma sequência de regras derivadas de um pequeno número de suposições. Essas suposições são os **Axiomas**. Assumindo, como anteriormente, dois valores (0 e 1) para cada variável, tem-se os seguintes axiomas:

| **Índice** | **Expressão**                |
|------------|------------------------------|
| 1(a)       | 0 * 0 = 0                    |
| 1(b)       | 1 + 1 = 1                    |
| 2(a)       | 1 * 1 = 1                    |
| 2(b)       | 0 + 0 = 0                    |
| 3(a)       | 0 * 1 = 1 * 0 = 0            |
| 3(b)       | 0 + 1 = 1 + 0 = 1            |
| 4(a)       | x = 0 ⇔ !x = 1               |
| 4(b)       | x = 1 ⇔ !x = 0               |

## Teoremas:
Dos axiomas, têm-se os teoremas, que são regras para lidar com as variáveis. Sendo eles:

### Teoremas para uma variável

| **Índice** | **Expressão**                |
|------------|------------------------------|
| 5(a)       | x * 0 = 0                    |
| 5(b)       | x + 1 = 1                    |
| 6(a)       | x * 1 = x                    |
| 6(b)       | x + 0 = x                    |
| 7(a)       | x * x = x                    |
| 7(b)       | x + x = x                    |
| 8(a)       | x * !x = 0                   |
| 8(b)       | x + !x = 1                   |
| 9          | !!x = x                      |

### Teoremas para duas e três variáveis

| **Índice** | **Expressão**                                | **Propriedade**       |
|------------|----------------------------------------------|-----------------------|
| 10(a)      | x * y = y * x                               | Comutativa            |
| 10(b)      | x + y = y + x                               | Comutativa            |
| 11(a)      | x * (y * z) = (x * y) * z                   | Associativa           |
| 11(b)      | x + (y + z) = (x + y) + z                   | Associativa           |
| 12(a)      | x * (y + z) = x * y + x * z                 | Distributiva          |
| 12(b)      | x + y * z = (x + y) * (x + z)               | Distributiva          |
| 13(a)      | x + x * y = x                               | Absorção              |
| 13(b)      | x * (x + y) = x                             | Absorção              |
| 14(a)      | x * y + x * !y = x                          | Combinação            |
| 14(b)      | (x + y) * (x + !y) = x                      | Combinação            |
| 15(a)      | !(x * y) = !x + !y                          | Teorema de DeMorgan   |
| 15(b)      | !(x + y) = !x * !y                          | Teorema de DeMorgan   |
| 16(a)      | x + !x * y = x + y                          | -                     |
| 16(b)      | x * (!x + y) = x * y                        | -                     |
| 17(a)      | x * y + y * x + !x * z = x * y + !x * z     | Consenso              |
| 17(b)      | (x + y) * (y + z) * (!x + z) = (x + y) * (!x + z) | Consenso          |

## Simplificando expressões:
A álgebra booleana é principalmente usada para simplificar expressões booleanas. Da seguinte forma como o exemplo abaixo:

a * c + b * c + a * c + b * c = a * b + a * b + a * b 

Manipulando o lado esquerdo:

esquerda = a + !c + a * c + !b * !c + !b * c  teorema 10(a)

= a * (!c + c) + !b * (!c + c)  teorema 12(a)

= a * 1 + !b * 1  = a + !b teorema 8(b) e 6(a)

Manipulando o lado direito:

direita = !a + !b + a * (b + !b)  usando 12(a)

= !a * !b + a  * 1 usando 8(b)

= !a * !b + a  usando 6(a)

= a + !a + !b  usando 10(b)

= a + !b usando 16(a)

## Diagrama de venn e  álgebra booleana:
O diagrama de Venn, conhecido também como diagrama de Venn-Euler, é uma maneira gráfica de representar um conjunto. Representamos com uma linha fechada que não possui auto-intersecção e  os elementos do conjunto ficam no interior dessa linha. Considerando um conjunto {0, 1} da álgebra booleana, pode-se representá-la como um diagrama de Venn para facilitar o entendimento das operações. 

Alguns exemplos de operações:

[![exemplos de diagramas de venn](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.researchgate.net%2Ffigure%2FFigura-2-Diagramas-de-Venn-e-as-aplicaes-de-operadores-de-lgica-booleana-Fonte_fig2_315825852&psig=AOvVaw1sNDJ1xo6qXgrEZEZDoGvZ&ust=1733969234419000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD50vPQnooDFQAAAAAdAAAAABBN)](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.researchgate.net%2Ffigure%2FFigura-2-Diagramas-de-Venn-e-as-aplicaes-de-operadores-de-lgica-booleana-Fonte_fig2_315825852&psig=AOvVaw1sNDJ1xo6qXgrEZEZDoGvZ&ust=1733969234419000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD50vPQnooDFQAAAAAdAAAAABBN))

## Referências:
- FUNDAMENTALS OF DIGITAL LOGIC WITH VERILOG DESIGN, THIRD EDITION Digital Design and Computer Architecture
- https://embarcados.com.br/algebra-booleana/
- https://brasilescola.uol.com.br/matematica/diagrama-de-venn.html
