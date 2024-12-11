---
title: Portas e Funções Lógicas
description: Uma introdução à lógica combinacional pela apresentação das principais funções lógicas
---


# Portas e Funções Lógicas

Portas lógicas são componentes fundamentais da eletrônica digital, responsáveis por realizar operações lógicas básicas em circuitos. Elas operam com valores binários (0 e 1), onde 0 representa o estado baixo ou falso, e 1 representa o estado alto ou verdadeiro. O resultado de uma porta lógica depende das entradas fornecidas e do tipo específico de operação lógica que a porta realiza.


### AND
A porta AND pode ser representada pelo sinal de multiplicação, ou seja, supondo duas entradas x e y e uma saída z, para a porta retornar verdadeiro, ou z = 1, é necessário que x e y sejam 1.

Representação matemática desse exemplo seria:
<p align="center">x * y = z</p>

Representação do exemplo em uma tabela verdade:
|x|y|z|
|--|--|--|
|0|0|0|
|1|0|0|
|0|1|0|
|1|1|1|

Esboço da porta:
![alt text](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh8CoHVtqiI8GR7jAvvsc8uvdYvQM86QL-m7f634MTdHkM1yWofUw4onI0rQFP_zKm3cnvU2wxp12jR6O__sxLfViU3mQyx8JguGvxHNomSH0XFds8SpV3NYYoDZ7bp64CodTLxJh0Jh4/s477/logicgate-14.png)

### OR
A porta OR pode ser representada pelo sinal de adição, ou seja, supondo duas entradas x e y e uma saída z, para a porta retornar verdadeiro, ou z = 1, é necessário que x ou y sejam 1.

Representação matemática desse exemplo seria:
<p align="center">x + y = z</p>

Representação do exemplo em uma tabela verdade:
|x|y|z|
|--|--|--|
|0|0|0|
|1|0|1|
|0|1|1|
|1|1|1|

Esboço da porta:
![alt text](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8ITpHeUBtoVI1QtJ9W34X7CoXGcR4jwdImHJASvpDBIqb-NnNMQE6HLOautusHx0QKASSvGw2PGYuEI68LhmKND2mq_Ge727McNo4uUchnIIU38O7JOZTIFT8x2BKkH8qhGj9UKspVJ0/s466/logicgate-15.png)

### NOT
A porta NOT pode ser representada pelo sinal de exclamação e representa a inversão, ou seja, supondo uma entrada x e uma saída z, para a porta retornar verdadeiro, ou z = 1, é necessário que x seja 0.

Representação matemática desse exemplo seria:
<p align="center">!x = z</p>

Representação do exemplo em uma tabela verdade:
|x|z|
|--|--|
|0|1|
|1|0|

Esboço da porta:
![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_9DhBPYmCY6s3S5A-FfMOf56omd3UNoiuw&s)

Observações:
- É possível representar a porta NOT colocando um traço em cima da variável que se deseja negar. Exemplo:

### XOR
A porta XOR representa um "ou exclusivo". Desta forma, supondo duas entradas x e y e uma saída z, para a porta retornar verdadeiro, ou z = 1, é necessário que x seja diferente de y, logo quando x = y = 1 ou x = y = 0 z retorna falso, ou z = 0.

Representação matemática desse exemplo seria:
<p align="center">x ⊕ y = z</p>

Representação do exemplo em uma tabela verdade:
|x|y|z|
|--|--|--|
|0|0|0|
|1|0|1|
|0|1|1|
|1|1|0|

Esboço da porta:
![alt text](https://upload.wikimedia.org/wikipedia/commons/c/c9/Logic-gate-xor-us.png)

Observações:
- É possível construir uma porta XOR usando portas AND, OR e NOT. A representação matemática seria desta forma:
<p align="center">(!x * y) + (x * !y) = z</p>

- Esboço usando portas AND, OR e NOT:
![alt text](https://cdn.sparkfun.com/assets/learn_tutorials/2/1/6/43-xor_circuit.png)

- É possível construir uma porta XOR usando somente portas NAND. Esboço usando somente portas NAND:
![alt text](https://www.gsnetwork.com/wp-content/uploads/2023/01/xor-gate-made-with-nand-gates.jpg)

- Esboço de outra forma de construir uma porta XOR:
![alt text](https://cdn1.byjus.com/wp-content/uploads/2020/06/xor-equivalent-circuit.png)

### NAND
A porta NAND pode ser representado pela negação da porta lógica AND, ou seja, supondo duas entradas x e y e uma saída z, para a porta retornar verdadeiro, ou z = 1, é necessário que x e y sejam diferentes de 1.

Representação matemática desse exemplo seria:
<p align="center">x ↑ y = z</p>

Representação do exemplo em uma tabela verdade:
|x|y|z|
|--|--|--|
|0|0|1|
|1|0|1|
|0|1|1|
|1|1|0|

Esboço da porta:
![alt text](https://media.rs-online.com/image/upload/w_620,h_413,c_crop,c_pad,b_white,f_auto,q_auto/dpr_auto/v1482269960/R0442892-03.jpg)

### NOR
A porta NOR pode ser representada pela negação da porta lógica OR, ou seja, supondo duas entradas x e y e uma saída z, para a porta retornar verdadeiro, ou z = 1, é necessário que x ou y sejam diferentes de 1.

Representação matemática desse exemplo seria:
<p align="center">x ↓ y = z</p>

Representação do exemplo em uma tabela verdade:
|x|y|z|
|--|--|--|
|0|0|1|
|1|0|0|
|0|1|0|
|1|1|0|

Esboço da porta:
![alt text](https://lh6.googleusercontent.com/unXnCZU5_qDS8gcGAAtBl_a7SW_C19c1p4ffWJDIyMaUo8LdsF-aBNmqyEBF5nHs9Cykcg3XPViSWzLVaWH6DsAjvUupzBet5zdTMnggVbyKLzCzSFh-Y8dzQ3OcyV93fzXnC52bNEHgAfzh60XL0PE)

### XNOR
A porta XNOR, sendo um "ou exclusivo-não", representa a negação da porta lógica XOR. Desta forma, supondo duas entradas x e y e uma saída z, para a porta retornar verdadeiro, ou z = 1, é necessário que x seja igual ao y, logo quando x = y = 1 ou x = y = 0 z retorna verdadeiro, ou z = 1.

Representação matemática desse exemplo seria:
<p align="center">x ⊙ y = z</p>

Representação do exemplo em uma tabela verdade:
|x|y|z|
|--|--|--|
|0|0|1|
|1|0|0|
|0|1|0|
|1|1|1|

Esboço da porta:
![alt text](https://upload.wikimedia.org/wikipedia/commons/9/9b/Logic-gate-xnor-us.png)


## Exercícios
1. Faça esboços das portas lógicas aprendidas nesse capítulo.
2. Tente reproduzir as tabelas verdade de cada função.
3. Monte a tabela verdade do circuito abaixo:
![alt text](https://hermes.dio.me/assets/articles/6745fd09-934b-423b-958f-aff2d9505c94.jpg)
4. Faça os exercícios de lógica booleana do capítulo seguinte, montando o desenho de cada circuito através das portas apresentadas nesse capítulo.

:::info Contato
- Frederico Scheffel Oliveira - frederico.scheffel@usp.br
- Leonardo Massuhiro Sato - leonardo.m.sato@usp.br
- Pedro Henrique Perez Dias - pedro.perez@usp.br
:::
