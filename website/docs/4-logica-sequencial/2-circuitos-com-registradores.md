---
title: Circuítos com Registradores
description: Grupo 8
---


# Circuítos com Registradores
Grupo 8
## O que são Registradores?
Registradores são conjuntos de flip-flops conectados de tal forma que armazenam n bits de informação, todos sincronizados por um clock comum. Eles funcionam como uma memória volátil, especialmente na unidade central de processamento (CPU), onde são utilizados durante a execução dos programas. Apesar de serem rápidos, possuem uma capacidade de armazenamento muito limitada.
## Registradores Shift:
Em registradores shift, os valores armazenados em sequência são deslocados, fazendo com que o valor de cada flip-flop seja "empurrado" para o próximo. Esse deslocamento pode multiplicar ou dividir um número binário por 2 a cada pulso de clock, pois os valores avançam a cada subida do clock.
## Acesso Paralelo:
Em muitas aplicações, é necessário transferir dados de n bits. Isso pode ser feito de duas maneiras principais: transferência paralela ou transferência serial.
<ul>
  <li><b>Transferência Paralela: </b>Todos os bits são transferidos ao mesmo tempo, em um único pulso de clock, mas isso requer n fios, um para cada bit.</li>
  <li><b>Transferência Serial: </b>Alternativamente, podemos usar apenas um fio para enviar os bits um a um, usando um registrador shift. Esse método leva n ciclos de clock para transferir todos os bits, mas reduz a quantidade de fios necessários.</li>
</ul>

## Exercícios:
<ol><li>Considere a sequência 0101 em um registrador de 4 bits. Depois de 2 deslocamentos para a direita, qual será a sequência?</li>
<li>Um sistema precisa transferir 16 bits de informações. Quantos fios serão necessários para fazer isso de forma paralela? e de forma serial?</li>
<li>Faça um registrador de 4 bits utilizando flip-flops do tipo D.</li>
<li>Algebricamente o que ocorre com um número ao deslocarmos ele para a esquerda? e para a direita?</li></ol>

## Respostas:
<ol>
  <li>R: 0001</li>
  <li>R: paralela: 16 fios, serial: 1 fio</li>
  <li>R: </li>
  <li>R: Ao deslocar para a direita dividimos o numero por 2 e ao deslocar para a esquerda, multiplicamos ele por 2.</li>
</ol>

:::
