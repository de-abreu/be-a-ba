---
title: Representação Numérica
description: Grupo 10
---


# Representação Numérica
O sistema numérico decimal apresenta 10 algarismos (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) e cada número é composto por uma combinação desses dígitos. Essa combinação representa o somatório de cada dígito multiplicado pela base, o número 10, elevado por um índice correspondente ao seu posicionamento. Por exemplo, o número $168_{10}$ significa:
1•100 + 6•10 + 8•1 = $1•10^2$ + $6•10^1$ + $8•10^0$. No entanto, esse sistema não é o único disponível para representações numéricas, visto que podemos substituir a base usada na formação de um número para outro número. Usando o número 2 como base, também conhecida como base binária, estaremos limitados a dois algarismos: (0, 1). Esse sistema é usado extensivamente na computação e eletrônica, já que seus 2 algarismos, também chamdos de bits, representam os dois estados de um sistema digital: alto e baixo. Note que o subscrito abaixo de um número representa sua base numérica.
## Inteiros
Qualquer inteiro na base decimal pode ser representado na base binária generalizando a mesma regra da base decimal para essa base. Por exemplo, podemos representar o número $6_{10}$ na base 2 com o número $110_2$, já que 
$110_2$ = $1•2^2$ + $1•2^1$ + $0•2^0$ = 4 + 2 + 0 = $6_{10}$. O número $1111_2$ é outro exemplo de um número na base 2. Sua conversão para a base decimal é: $1111_2$ = $1•2^3$ + $1•2^2$ + $1•2^1$ + $1•2^0$ = 8 + 4 + 2 + 1 = $15_{10}$. Podemos representar números negativos ou positivos usando o complemento de 2, em que a convenção diz que um número negativo possui seu dígito mais significativo(MSB) igual a 1 e corresponde ao complemento de 1 do número positivo somado ao número 1, em que complemento de 1 corresponde a troca de cada bit do número pelo seu inverso ou complemento, enquanto um número positivo possui MSB igual a 0 e mantém a representação convencional de números inteiros binários. Por exemplo, o número $0101_2$ representa $+5_{10}$, enquanto $1011_2$ representa $-5_{10}$.
## Ponto fixo
Números com parte fracionária também podem ser representados usando a base binária. Um dos métodos para realizar essa representção é a do ponto fixo. Nela, definimos um número binário $B = b_{n-1}b_{n-2} \dots b_1b_0.b_{-1}b_{-2} \dots b_{-k}$, em que $b_{k}$ pode ser 0 ou 1, tal que qualquer $b_i$ à esquerda do ponto representa a parte inteira de um número, e cada $b_j$ depois do ponto representa a parte fracionária do número. A formação da parte fracionária do número segue a mesma regra da parte decimal, com a diferença de que os expoentes associados às bases são negativos. A título de exemplo, $110.101_2$ representa o número $6.625_{10}$, pois $110.101$ = $1•2^2$ + $1•2^1$ + $0•2^0$ + $1•2^{-1}$ + $0•2^{-2}$ + $1•2^{-3}$ = 4 + 2 + 0 + 0.5 + 0.125 = $6.625_{10}$. 

## Ponto flutuante
A representação por ponto fixo tem suas limitações, já que o intervalo de números que podem ser representados é limitado pelo número de dígitos da parte inteira usado para representar os números. Por exemplo, um número do tipo $b_0.b_{-1}b_{-2} \dots b_{-7}$ está limitado ao intervalo $\left[ 0, 1.9921875 \right]$, mas, em aplicações reais, precisamos representar números que podem ser muito grandes ou muito pequenos. Para contornar isso, usa-se a representação por ponto flutuante, que pode delimitar o seu alcance livremente da seguinte forma: seja N um número de ponto flutuante no padrão IEEE 754, N = $(-1)^s \cdot (F + 1) \cdot 2^{E - 127}$, em que s corresponde ao bit que define o sinal em complemento de 2, F corresponde a parte fracionária de um número, e E corresponde ao número que ao ser subtraído 127, resulta no expoente. Um número que segue esse padrão possuiŕa 32 bits no total, sendo que, do total, 1 bit será usado para o sinal, s, 8 bits para E, e 23 bits para a parte fracionária, F.

## Exercícios
### 1)
Converta os seguintes números em complemento de 2 para o sistema decimal:
<br >a) 01010 <br>
b) 11101 <br>
c) 00001 <br>


### 2) 
Mostre a representação binária do número $-0.75_{10}$ segundo o padrão IEEE 754.

## Resolução dos exercícios

### 1)
<br>a) 01010 <br>
O MSB desse número é 0, logo, é um número positivo. Para representá-lo na base 10, basta calcular o somatório de cada dígito multiplicado por 2 elevado por um índice correspondente ao seu posicionamento. Nesse caso, $01010_2$ = $1•2^3$ + $0•2^2$ + $1•2^1$ + $0•2^0$ = $5_{10}$. <br>

b) 11101 <br> O MSB desse número é 1, logo, é um número negativo. Para representá-lo na base 10, precisamos calcular seu correspondente em complemento de 2 e convertê-lo para base com o sinal negativo. Assim, o complemento de 2 de $11101_2$ é $00011_2$, que é $3_{10}$, mas como esse número é negativo, $11101_2$ = $-3_{10}$ <br>

c) 00001 <br> Esse é um número positivo, logo, seu correspondente na base 10 é igual a $0•2^3$ + $0•2^2$ + $0•2^1$ + $1•2^0$ = $1_{10}$. <br>

### 2)
$-0.75_{10}$ pode ser escrito como $-0.11_2$, que em notação científica é igual a $-1.1•2^{-1}$. Logo, F = $10000000000000000000000$, E = $126_{10}$ = $01111110_2$ e s = 1. Assim, sua representação por bits seria 10111111010000000000000000000000. Na base 10, -0.75 é calculado como  $(-1)^1 \cdot (0.1_2 + 1) \cdot 2^{01111110_2- 01111111_2}$ = $(-1)•(1.5_{10})•2^{-1}$ = $-0.75{10}$. Isso prova que essa representação por bits representa $-0.75_{10}$.

# Bibliografia
- Livro - Fundamentals of Digital Logic with Verilog Design, THIRD EDITION, Stephen Brown and Zvonko Vranesic <br>
- Livro - Computer Organization and Design, FIFTH EDITION, David A. Patterson, John LeRoy Hennessy <br>

## Autores
- Artur Oliveira Arraes (14745532)
- Fernando Lucas Vieira Souza (12703069)
