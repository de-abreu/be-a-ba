---
title: Circuítos para Operações Lógicas
description: Grupo 17
---

### O são portas lógicas?
Portas lógicas são circuitos digitais básicos que recebem uma ou mais entradas binárias e geram uma saída binária. Esses circuitos são representados por símbolos com entradas (ou entrada) e saída indicadas. Normalmente, as entradas aparecem à esquerda (ou no topo) e as saídas à direita (ou na parte inferior). Designers digitais geralmente usam letras do início do alfabeto para as entradas e a letra S ou Q para a saída. A relação entre entradas e saídas pode ser representada por uma tabela-verdade ou uma equação booleana.
<br clear="left"/>
A tabela-verdade mostra as entradas à esquerda e as saídas correspondentes à direita, com uma linha para cada combinação de entradas. Já a equação booleana é uma expressão matemática usando variáveis binárias. 
<br clear="left"/>
Vejamos as principais portas lógicas e suas tabelas verdade:
<br clear="left"/>

## Porta NOT

<div style="display: flex;">
    <div style="margin-right: 20px;">
        <img align="left" width="230" height="230" src="https://github.com/user-attachments/assets/49b0cd00-3690-4f6d-98fb-3c7f480db75a">
    </div>
    <div style="margin-right: 20px;">
        <img align="left" width="230" height="230" src="https://github.com/user-attachments/assets/172ec57e-a936-484a-adf5-ba83f5747d2c">
    </div>
    </div>
    <div>
    <p>A porta NOT possui uma entrada A, e uma saída S, como mostra a Figura. A saída da porta NOT é o inverso de sua entrada, exemplo: se A é FALSO (0), S é VERDADEIRO (1); se A é VERDADEIRO, S é FALSO. Essa relação é mostrada na tabela-verdade e pela equação booleana na figura. A linha sobre A na equação booleana é pronunciada como NOT, sendo lido como "S é igual a NÃO A". A porta NOT também é chamada de inversora. Outras notações para NOT incluem S = ¬A, S = ~A, e S = !A. </p>
    </div>
</div>

<br clear="left"/>

## Porta AND

<div style="display: flex;">
    <div style="margin-left: 20px;">
        <div> 
             <img align="right" width="230" height="230" src="https://github.com/user-attachments/assets/c521a478-0e2e-4c83-ac30-622b710d6570">
        </div>
        <div> 
             <img align="right" width="230" height="230" src="https://github.com/user-attachments/assets/9841bc08-ed74-4bdb-b838-cbc684a3dd3a">
        </div>
    </div>
    <div>
        <p>A porta AND, mostrada na Figura, gera uma saída VERDADEIRA S, somente se ambas as entradas A e B forem VERDADEIRAS; caso contrário, a saída é FALSA. A convenção para listar as entradas é 00, 01, 10, 11, como na contagem binária. A equação booleana para uma porta AND pode ser escrita como S = A•B, S = AB, ou S = A ∩ B, com o símbolo ∩ sendo lido como "intersecção". Você também pode associar essa porta lógica com a operação usual de multiplicação, de maneira a facilitar sua compreensão acerca do resultado esperado na saída para diferentes entradas.</p>
    </div>
</div>

<br clear="left"/>

## Porta NAND

<div style="display: flex;">
    <div style="margin-right: 20px;">
        <img align="left" width="230" height="230" src="https://github.com/user-attachments/assets/81480ce5-5ec4-477f-a386-fff78f995a68">
    </div>
    <div style="margin-right: 20px;">
        <img align="left" width="230" height="230" src="https://github.com/user-attachments/assets/2d8e397b-7fbf-41ec-9a5d-6a122333abc2">
    </div>
    </div>
    <div>
    <p> Qualquer porta pode ter uma inversão (bola) para inverter sua operação. A porta NAND realiza a operação NOT AND, sendo FALSA a menos que ambas as entradas sejam VERDADEIRAS, ou seja, ela é o inverso da porta AND. </p>
    </div>
</div>

<br clear="left"/>
<br clear="left"/>

> 💡 **Dica:** Compare a tabela verdade da porta AND com a tabela verdade da NAND

<br clear="left"/>


## Porta OR

<div style="display: flex;">
    <div style="margin-left: 20px;">
        <div> 
             <img align="right" width="230" height="230" src="https://github.com/user-attachments/assets/990e4bf4-c9b5-44de-b350-ee753a8b0637">
        </div>
        <div> 
             <img align="right" width="230" height="230" src="https://github.com/user-attachments/assets/5fbb3cb0-e706-4692-a1c7-3e52783a2b67">
        </div>
    </div>
    <div>
        <p>A porta OR, ilustrada na Figura, gera uma saída VERDADEIRA S, se A, B ou ambos forem VERDADEIROS. A equação booleana para OR é S = A ∪ B. O símbolo ∪ é lido como "união", e a expressão S = A + B significa "S é igual a A ou B".</p>
    </div>
</div>

<br clear="left"/>
<br clear="left"/>
<br clear="left"/>


## Porta NOR

<div style="display: flex;">
    <div style="margin-right: 20px;">
        <img align="left" width="230" height="230" src="https://github.com/user-attachments/assets/907e24f1-f8fa-44ea-9da3-902aa58786a3">
    </div>
    <div style="margin-right: 20px;">
        <img align="left" width="230" height="230" src="https://github.com/user-attachments/assets/ab0b771d-d45a-4610-ab13-ff2dab410724">
    </div>
    </div>
    <div>
    <p> Segue a mesma lógica da porta NAND, sendo o inverso da porta OR, a porta NOR realiza a operação NOT OR, sendo VERDADEIRA se nem A e nem B forem VERDADEIROS. </p>
    </div>
</div>
<br clear="left"/>
<br clear="left"/>

> 💡 **Dica:** Compare a tabela verdade da porta OR com a tabela verdade da NOR

<br clear="left"/>

## Porta XOR

<div style="display: flex;">
    <div style="margin-left: 20px;">
        <div> 
             <img align="right" width="230" height="230" src="https://github.com/user-attachments/assets/955fd231-effe-4983-bbf9-0edb53df2c5a">
        </div>
        <div> 
             <img align="right" width="230" height="230" src="https://github.com/user-attachments/assets/64b39611-4078-4453-8d46-58b382f09717">
        </div>
    </div>
    <div>
        <p>A porta XOR (ou exclusiva, lida como "ex-OR") resulta em S VERDADEIRO, se A ou B, mas não ambos, forem VERDADEIROS.</p>
    </div>
</div>
<br clear="left"/>
<br clear="left"/>
<br clear="left"/>
<br clear="left"/>
<br clear="left"/>
<br clear="left"/>
<br clear="left"/>

## Operações com mais bits de entrada
Podemos fazer operacões usando as portas lógicas, como por exemplo, uma AND com 8 bits.
<br clear="left"/>
Considere as seguintes entradas: A = 00110001 e B = 01101101.
<br clear="left"/>
Olhando cada bit da entrada A, par a par, com a entrada B podemos realizar a opereção:
<br clear="left"/>
<br clear="left"/>
⚠️ **Atenção:** Compare os bits que estão na mesma posição em ambas as entradas
<br clear="left"/>
<br clear="left"/>
✅ **Dica:** Lembre-se que • significa a opereção AND
<br clear="left"/>
<br clear="left"/>
0•0 = 0 <br clear="left"/>
0•1 = 0 <br clear="left"/>
1•1 = 1 <br clear="left"/>
1•0 = 0 <br clear="left"/>
0•1 = 0 <br clear="left"/>
0•1 = 0 <br clear="left"/>
0•0 = 0 <br clear="left"/>
1•1 = 1 <br clear="left"/>
<br clear="left"/>
Assim, combinando os resultados obtemos:
<br clear="left"/>
🔍 **Resultado:** 00100001
<br clear="left"/>

## Exercícios

<br clear="left"/>

> 
> 1- Determine a expressão do circuito lógico abaixo.

<br clear="left"/>

<p align="center">
    <img width="420" height="250" src="https://github.com/user-attachments/assets/a044d985-9164-470a-af10-7f9ff836c3d0">
</p>

<br clear="left"/>

> 
> 2- Faça a tabela verdade do circuito abaixo.

<br clear="left"/>

<p align="center">
    <img width="420" height="250" src="https://github.com/user-attachments/assets/f6075e48-ac75-4559-834f-054e70a5c648">
</p>

> 
> Exercício 3 - Faça uma operação de OR com as entradas A = 01111101 e B = 01000100

<br clear="left"/>
<br clear="left"/>

> 
> 4- Faça a operação XOR com as entradas A = 00011101 e B = 11011100

<br clear="left"/>
<br clear="left"/>

<details>
<summary>Gabarito</summary>
Questão 1 -
|((A.B) . (C+D)) 
    
<br clear="left"/>

> 
> Tudo negado.
    
<br clear="left"/>

Questão 2 - 

|  A  |  B  |  C  |  S  |
|-----|-----|-----|-----|
|  0  |  0  |  0  |  0  |
|  0  |  0  |  1  |  1  |
|  0  |  1  |  0  |  0  |
|  0  |  1  |  1  |  1  |
|  1  |  0  |  0  |  0  |
|  1  |  0  |  1  |  1  |
|  1  |  1  |  0  |  1  |
|  1  |  1  |  1  |  1  |

<br clear="left"/>

Questão 3 - 
01111101

<br clear="left"/>

Questão 4 - 
11000001

<br clear="left"/>

</details>

<br clear="left"/>
<br clear="left"/>
<br clear="left"/>

:::note TODO

Grupo 17
:::
