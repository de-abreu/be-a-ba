---
title: Circuítos para Operações Aritméticas
description: Grupo 13
---


## Soma e Subtração


### Meio Somador

O **meio somador** (Half-Adder) é um circuito digital básico projetado para realizar a soma de dois números binários de 1 bit cada. Ele é fundamental para operações aritméticas simples e serve como base para circuitos mais complexos, como o somador completo.

#### Estrutura do Meio Somador
- **Entradas:**
  - `A`: Primeiro bit a ser somado.
  - `B`: Segundo bit a ser somado.

- **Saídas:**
  - **S** (soma): Representa o resultado da soma dos bits `A` e `B`, sem considerar um "vai um" (carry). É calculada utilizando a operação lógica `A ⊕ B` (XOR), que resulta em:
    - `S = 0`, quando `A` e `B` são iguais.
    - `S = 1`, quando `A` e `B` são diferentes.
  - **Cout** (carry): Indica se há um "vai um", ou seja, se a soma ultrapassa 1. É calculado com `A ⋅ B` (AND), sendo:
    - `Cout = 1`, quando `A = 1` e `B = 1`.
    - `Cout = 0` nos outros casos.

#### Funcionamento
O meio somador realiza a soma de dois bits de forma simples:
- Se ambos os bits são `0`, a soma (`S`) é `0` e não há carry (`Cout`).
- Se apenas um dos bits é `1`, a soma (`S`) é `1` e `Cout` continua `0`.
- Quando ambos os bits são `1`, a soma (`S`) é `0` e o carry (`Cout`) é `1`.

#### Tabela Verdade

| `A` | `B` | `S` (Soma) | `Cout` (Carry) |
|:---:|:---:|:----------:|:--------------:|
|  0  |  0  |     0      |       0        |
|  0  |  1  |     1      |       0        |
|  1  |  0  |     1      |       0        |
|  1  |  1  |     0      |       1        |

#### Aplicações
O meio somador é utilizado em circuitos aritméticos para somar bits individuais, como no cálculo de somas parciais em somadores de múltiplos bits. Para operações mais completas, como a soma de números binários maiores, é necessário o uso de **somadores completos**, que consideram o "carry in" de somas anteriores.

![image](https://github.com/user-attachments/assets/0a081f67-cfa6-4657-b101-ea14f78e1549)


### Somador Completo

O **somador completo** (Full-Adder) é um circuito digital capaz de somar dois números binários de 1 bit cada e considerar um "carry in" (Cin) vindo de uma soma anterior. Ele é fundamental para operações de soma em números binários maiores.

#### Estrutura do Somador Completo
- **Entradas:**
  - `A`: Primeiro bit a ser somado.
  - `B`: Segundo bit a ser somado.
  - `Cin`: Carry in (resultado de um "vai um" vindo da soma anterior).

- **Saídas:**
  - **S** (soma): Representa o resultado da soma dos bits `A`, `B` e `Cin`. É calculada com a operação lógica:
    - `S = A ⊕ B ⊕ Cin` (XOR).
  - **Cout** (carry out): Indica se há um "vai um" gerado pela soma, calculado como:
    - `Cout = (A ⋅ B) + (A ⋅ Cin) + (B ⋅ Cin)`.

#### Funcionamento
O somador completo realiza a soma considerando três valores de entrada (`A`, `B` e `Cin`):
- Se a soma dos três bits for menor que 2, `Cout = 0`.
- Se a soma dos três bits for maior ou igual a 2, `Cout = 1`.
- O bit menos significativo do resultado é representado por `S`.

#### Tabela Verdade

| `A` | `B` | `Cin` | `S` (Soma) | `Cout` (Carry) |
|:---:|:---:|:-----:|:----------:|:--------------:|
|  0  |  0  |   0   |     0      |       0        |
|  0  |  0  |   1   |     1      |       0        |
|  0  |  1  |   0   |     1      |       0        |
|  0  |  1  |   1   |     0      |       1        |
|  1  |  0  |   0   |     1      |       0        |
|  1  |  0  |   1   |     0      |       1        |
|  1  |  1  |   0   |     0      |       1        |
|  1  |  1  |   1   |     1      |       1        |

#### Aplicações
O somador completo é utilizado em circuitos de somadores de múltiplos bits, como os somadores de 4, 8 ou mais bits. Para isso, os "carry out" de cada somador são conectados ao "carry in" do próximo bit. Ele é essencial para operações em processadores e sistemas digitais que demandam cálculos binários complexos.

![image](https://github.com/user-attachments/assets/8b87104d-d3d6-4bfa-a07c-46fafea0fcae)



### Meio Subtrator

O **meio subtrator** (Half-Subtractor) é um circuito digital básico projetado para realizar a subtração de dois números binários de 1 bit. Ele é essencial para operações aritméticas simples e serve como base para circuitos subtratores mais complexos.

#### Estrutura do Meio Subtrator
- **Entradas:**
  - `A`: Minuendo (valor do qual será subtraído).
  - `B`: Subtraendo (valor a ser subtraído).

- **Saídas:**
  - **S** (subtração): Representa o resultado da subtração dos bits `A` e `B`. É calculada com a operação lógica:
    - `S = A ⊕ B` (XOR).
  - **Bout** (borrow out): Indica se foi necessário "emprestar" um bit para realizar a subtração, calculado como:
    - `Bout = ¬A ⋅ B` (NOT de A AND B).

#### Funcionamento
O meio subtrator realiza a subtração de dois bits binários:
- Se `A` for maior ou igual a `B`, a subtração (`S`) reflete a diferença, e `Bout` é `0`.
- Se `B` for maior que `A`, o resultado (`S`) considera o empréstimo, e `Bout` será `1`.

#### Tabela Verdade

| `A` | `B` | `S` (Subtração) | `Bout` (Borrow) |
|:---:|:---:|:---------------:|:---------------:|
|  0  |  0  |        0        |        0        |
|  0  |  1  |        1        |        1        |
|  1  |  0  |        1        |        0        |
|  1  |  1  |        0        |        0        |

#### Aplicações
O meio subtrator é usado em circuitos que realizam subtrações simples entre dois bits individuais. No entanto, para subtrações envolvendo números binários maiores ou operações que exigem o controle de "borrow in", é necessário o uso de subtratores completos.


![image](https://github.com/user-attachments/assets/8f472768-6bd3-4f95-aa15-2e3f9e03c1da)


### Subtrator Completo

O **subtrator completo** (Full-Subtractor) é um circuito digital que realiza a subtração de dois números binários de 1 bit, considerando um "borrow in" (Bin) proveniente de uma subtração anterior. Ele é essencial para operações de subtração em números binários maiores.

#### Estrutura do Subtrator Completo
- **Entradas:**
  - `A`: Minuendo (valor do qual será subtraído).
  - `B`: Subtraendo (valor a ser subtraído).
  - `Bin`: Borrow in (empréstimo de uma subtração anterior).

- **Saídas:**
  - **S** (subtração): Representa o resultado da subtração de `A`, `B` e `Bin`. É calculada com a operação lógica:
    - `S = A ⊕ B ⊕ Bin` (XOR).
  - **Bout** (borrow out): Indica se foi necessário "emprestar" um bit para realizar a subtração, calculado como:
    - `Bout = (¬A ⋅ B) + (¬A ⋅ Bin) + (B ⋅ Bin)`.

#### Funcionamento
O subtrator completo realiza a subtração considerando as três entradas (`A`, `B` e `Bin`):
- Se `A` for suficientemente grande para subtrair `B` e `Bin`, `Bout = 0`.
- Caso contrário, `Bout = 1`, indicando que foi necessário "emprestar" um bit de uma subtração mais significativa.

#### Tabela Verdade

| `A` | `B` | `Bin` | `S` (Subtração) | `Bout` (Borrow) |
|:---:|:---:|:-----:|:---------------:|:---------------:|
|  0  |  0  |   0   |        0        |        0        |
|  0  |  0  |   1   |        1        |        1        |
|  0  |  1  |   0   |        1        |        1        |
|  0  |  1  |   1   |        0        |        1        |
|  1  |  0  |   0   |        1        |        0        |
|  1  |  0  |   1   |        0        |        1        |
|  1  |  1  |   0   |        0        |        0        |
|  1  |  1  |   1   |        1        |        1        |

#### Aplicações
O subtrator completo é usado em circuitos que realizam subtrações entre números binários de múltiplos bits. Para isso, os "borrow out" de cada subtrator são conectados ao "borrow in" do próximo bit. Ele é amplamente utilizado em sistemas digitais e processadores para operações aritméticas mais complexas.

![image](https://github.com/user-attachments/assets/e7e7f88c-45af-4e5a-ab34-a232583a10c0)


## Multiplicação

# Multiplicador Simples Usando Ripple Carry

O **ripple carry** pode ser utilizado para implementar um multiplicador binário básico. Este circuito é composto por portas **AND** para gerar os produtos parciais e somadores completos (**full adders**) para realizar a soma desses produtos de forma sequencial, propagando os *carries* entre os estágios.

---

## Estrutura do Circuito

### Entradas:
- **Multiplicando**: `A = A3 A2 A1 A0` (4 bits)
- **Multiplicador**: `B = B3 B2 B1 B0` (4 bits)

### Saída:
- **Produto**: `P = P7 P6 P5 P4 P3 P2 P1 P0` (8 bits)

### Etapas do Processo:
1. **Geração de Produtos Parciais**:
   - Cada bit do multiplicador (`B`) é multiplicado por cada bit do multiplicando (`A`) usando portas AND.
   
2. **Soma dos Produtos Parciais**:
   - Os produtos parciais são somados utilizando somadores completos (*full adders*).
   - O ripple carry é utilizado para propagar o *carry* de um estágio para o próximo, resultando no produto final.

---

## Implementação do Circuito

### Geração dos Produtos Parciais
Os produtos parciais são calculados da seguinte forma:
- `P0 = A0 AND B0`  
- `P1` a `P7`: Calculados adicionando os produtos parciais com base na posição e no bit correspondente.

### Circuito de Soma com Ripple Carry
O ripple carry é usado para somar os produtos parciais. Cada estágio utiliza um **full adder** para combinar os bits de soma com o *carry* do estágio anterior. O atraso na propagação do *carry* ocorre sequencialmente ao longo dos estágios, até que o valor final seja calculado.

### Diagrama do Full Adder
Cada somador completo no ripple carry segue o seguinte esquema:

![image](https://github.com/user-attachments/assets/bc1bc28f-0249-4982-9174-39b36b449ed0)

#### Entradas e Saídas:
- **Entradas**:
  - `A`, `B`: Bits a serem somados.
  - `Cin`: Carry de entrada do estágio anterior.
- **Saídas**:
  - `Sum`: Soma dos bits.
  - `Cout`: Carry de saída para o próximo estágio.

---

### Diagrama do Multiplicador Completo
O diagrama abaixo ilustra o funcionamento de um multiplicador completo usando ripple carry:

![image](https://github.com/user-attachments/assets/e82110b8-8f5d-47e8-8c32-68fd6564688d)


Neste circuito:
- As portas **AND** geram os produtos parciais.
- Os somadores completos realizam a soma dos produtos parciais.
- O ripple carry conecta os somadores para propagar o carry entre os estágios.

---

## Exemplo Prático

### Multiplicação de `A = 1010` e `B = 1101`
1. **Produtos Parciais**:
   - Primeira linha: `1010 × 1 = 1010`
   - Segunda linha (shiftada): `1010 × 0 = 0000`
   - Terceira linha (shiftada): `1010 × 1 = 1010`
   - Quarta linha (shiftada): `1010 × 1 = 1010`

2. **Soma dos Produtos Parciais**:
   - A soma é realizada com os somadores em ripple carry.
   - Resultado final: `10011110` (158 em decimal).

---



## Divisão

### **Divisão binária**: por comparações e subtrações
A divisão binária realiza divisões entre números inteiros, obtendo quociente e resto entre dois números. Funciona comparando dois números e subtraindo o segundo do primeiro, caso este seja menor, de modo que contar quantas vezes isso foi possível, é o quociente, enquanto o valor em que não foi possível mais dividir, é o resto.

### Estrutura do Circuito

- **Entradas:**
  - **Dividendo**: `A = An An-1 ... A1 A0` (n bits)
  - **Divisor**: `B = Bn Bn-1 ... B1 B0` (até n bits)

- **Saídas:**
  - **Quociente**: `Q = Qn Qn-1 ... Q1 Q0` (n bits)
  - **Resto**: `R = Rn Rn-1 ... R1 R0` (n bits)

### Funcionamento
#### Etapas:

1. **Desloque** (usando circuito shift) os bits do divisor para a esquerda até o n - 1 bits, da direita para esquerda

2. **Compare** (usando circuito comparador) esse número deslocado, com o dividendo anterior (atual resto), se o número for menor ou igual, **subtraia** (usando circuito subtrator) obtendo um novo dividendo e adicione o bit '1' à esquerda do quociente, senão adicione o bit '0' à esquerda do quociente

3. **Desloque** o divisor 1 bit para a direita e repita o processo começando do passo 2, até chegar ao último bit do quociente

4. Você tem o **Quociente**

5. O dividendo que restou, é o próprio **Resto**

### Exemplo Prático

#### Divisão de `1011` (11 em decimal) por `0011` (3 em decimal):
- **Passo 1**:
Desloca `0011`, 3 ( =  4 - 1) bits à esquerda

- **Passo 2**:
Compara: `11000` > `1011`
=> bit 3 do quociente é `0`
Desloca `11000`, 1 bit à direita -> `1100`

- **Passo 3**:
Compara: `1100` > `1011`
=> bit 2 do quociente é `0`
Desloca `1100`, 1 bit à direita -> `0110`

- **Passo 4**:
Compara: `0110` < `1011`
=> bit 1 do quociente é `1`
=> subtrai: `1011 - 0110 = 0101`
Desloca `0110`, 1 bit à direita -> `0011`

- **Passo 5**:
Compara: `0011` < `1011`
=> bit 0 do quociente é `1` (último bit do quociente)
=> subtrai: `0101 - 0011 = 0010`
Não é mais possível deslocar => Fim

- **Resultado final**:
  - Quociente = `0011` (3 em decimal)
  - Resto = `0010` (2 em decimal)

### Aplicações

O Divisor Binário é usado em todas as áreas da computação, responsável pela base de operações como: divisões inteiras, cálculos numéricos, operações entre números de ponto flutuante. Também possibilita sistemas de criptografia e conversores de diferentes bases numéricas.

---

## Exercícios
:::note TODO
Grupo 17
:::
