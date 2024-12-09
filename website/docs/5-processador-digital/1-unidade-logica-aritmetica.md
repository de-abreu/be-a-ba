
---
title: ULA

---

# Unidade Lógica e Aritmética (ULA)

A ULA, *Arithmetic Logic Unit* (ALU) em inglês, é um circuito digital que realiza operações matemáticas e de lógica, sendo, por isso, parte fundamental dos processadores (Sua relevância na CPU é demonstrada pela imagem abaixo). Ela é responsável por executar cálculos e operações lógicas necessários para o funcionamento de programas. A ULA é essencial para a execução de instruções aritméticas, como adição, subtração, multiplicação e divisão, bem como operações lógicas, como AND, OR, XOR e NOT.

<p align="center">
    <img width="420" height="250" src="https://github.com/user-attachments/assets/b7298738-6d7c-4eda-90b7-c6e67e293c1d"/>
</p>

## Como funciona?

A ULA opera recebendo dados da memória ou de registradores internos do processador, realizando a operação solicitada e enviando o resultado para um destino especificado. O controle do tipo de operação é realizado por sinais enviados pela Unidade de Controle (UC) do processador.

Na figura abaixo, é possível ver um esquema simplificado da ULA. 

<p align="center">
    <img width="420" height="250" src="https://github.com/user-attachments/assets/bb54a992-de80-429a-ad6c-59296189d575"/>
</p>

- **A** e **B** representam os barramentos de entrada, ou seja, as informações (operandos) que serão manipuladas pela ULA.
- **S** é o barramento de controle, usado para selecionar qual operação lógica ou aritmética será realizada.
- **R** representa o barramento de saída, onde o resultado das operações é enviado.
- **STATUS** representa as flags de controle (overflow, carry, zero ou negative)
- Operações adicionais, como comparações (maior, menor ou igual) e deslocamentos de bits (shift), também podem ser implementadas.


## Componentes principais da ULA

1. **Unidade Aritmética**:
   - Realiza operações matemáticas como adição, subtração, multiplicação e divisão.
   - Utiliza circuitos como somadores e subtratores.

2. **Unidade Lógica**:
   - Realiza operações lógicas como AND, OR, XOR, NOT, além de deslocamentos de bits.
   - É composta por portas lógicas que manipulam os bits dos operandos.

3. **Multiplexadores**:
   - Controlam qual operação será executada com base no sinal do barramento **S**.
   - Direcionam a saída apropriada (resultado lógico ou aritmético) para o barramento **R**.

4. **Sinalizador de Status (Flags)**:
   - Indica condições especiais resultantes das operações, como *overflow*, *carry*, *zero* ou *negative*. Essas informações são importantes para o controle de fluxo no processador.

## Importância da ULA

Como já mencionado, a ULA é uma das partes mais importantes da Unidade Central de Processamento (CPU). Todas as operações lógicas e aritméticas de um programa dependem dela. Por exemplo:
- Um somador binário na ULA é essencial para cálculos matemáticos.
- Operações lógicas são utilizadas para decisões condicionais em algoritmos.

# Exercícios
##### Teoria

1. Quais são os componentes da ULA?

2. Quais operações da ULA precisam de apenas 1 operando?

:::note Atenção
Usaremos números de 8 bits.
:::
##### Operações aritméticas:
3. Qual seria a saída no barramento **R** com essas entradas na ULA? Qual o status das flags de overflow, carry, zero e negative?
    ```
     Operação: SOMA
     A = 00000001
     B = 00000011
    ```
4. Qual seria a saída no barramento **R** com essas entradas na ULA? Qual o status das flags de overflow, carry, zero e negative? (Considere A-B)
    ```
     Operação: SUBTRAÇÃO
     A = 00000001
     B = 00000011
    ```
:::info Dica
Faça a conta com complemento de dois
:::

##### Operações lógicas:
5. Qual seria a saída no barramento **R** com essas entradas na ULA?
    ```
     Operação: XOR
     A = 00110001
     B = 01011011
    ```
6. Qual seria a saída no barramento **R** com essa entrada na ULA?
    ```
     Operação: NOT
     A = 01011011
    ```

## Gabarito
Questão 1:
- Unidade Aritmética
- Unidade Lógica
- Multiplexadores
- Sinalizador de Status (Flags)

Questão 2:
- NOT
- Bit shift

Questão 3:
R: 00000100
Overflow: 0
Carry: 0
Zero: 0
Negative: 0

Questão 4:
R: 11111110 (em complemento de dois)
Overflow: 0
Carry: 1
Zero: 0
Negative: 1

Questão 5:
R: 01101010

Questão 6:
R: 10100100

:::note Referências

https://www.icloud.com.br/20798/o-que-e-uma-unidade-logica-aritmetica
https://pt.wikipedia.org/wiki/Unidade_l%C3%B3gica_e_aritm%C3%A9tica
https://www2.pcs.usp.br/~labdig/pdffiles_2011/ula.pdf
https://www4.pucsp.br/~sdeng/ULA.pdf
:::

:::note Autores
Laura Fernandes Camargos - 13692334
Sandy da Costa Dutra - 12544570
Vitor Nishimura Vian - 5255289
:::
