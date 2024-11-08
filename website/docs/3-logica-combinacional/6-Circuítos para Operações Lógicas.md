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

<br clear="left"/>

## Porta NOT
<br clear="left"/>

<div style="display: flex;">
    <div style="margin-right: 20px;">
        <img align="left" width="230" height="230" src="https://github.com/user-attachments/assets/3e1e5f4c-b684-4a6b-857c-89685eaab878">
    </div>
    <div style="margin-right: 20px;">
        <img align="left" width="230" height="230" src="https://github.com/user-attachments/assets/92c21331-a350-41a5-83e2-58ce40907cb9">
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
             <img align="right" width="230" height="230" src="https://github.com/user-attachments/assets/50924142-4799-4345-be18-95f03df36251">
        </div>
        <div> 
             <img align="right" width="230" height="230" src="https://github.com/user-attachments/assets/895c0fcb-5cc8-4d9b-b2a5-855448025a59">
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
        <img align="left" width="230" height="230" src="https://github.com/user-attachments/assets/3ed2b1ec-d3eb-4b88-b828-e03674513679">
    </div>
    <div style="margin-right: 20px;">
        <img align="left" width="230" height="230" src="https://github.com/user-attachments/assets/8fc2aa82-3ddf-4c3a-9f31-62466679a94a">
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
             <img align="right" width="230" height="230" src="https://github.com/user-attachments/assets/8d36e4ea-ea92-429e-b55c-ec25a7f7aca9">
        </div>
        <div> 
             <img align="right" width="230" height="230" src="https://github.com/user-attachments/assets/5ede0655-42b4-446a-abd5-f98a648d237c">
        </div>
    </div>
    <div>
        <p>A porta OR, ilustrada na Figura, gera uma saída VERDADEIRA S, se A, B ou ambos forem VERDADEIROS. A equação booleana para OR é S = A ∪ B. O símbolo ∪ é lido como "união", e a expressão S = A + B significa "S é igual a A ou B".</p>
    </div>
</div>

<br clear="left"/>
<br clear="left"/>
<br clear="left"/>
<br clear="left"/>
<br clear="left"/>


## Porta NOR

<div style="display: flex;">
    <div style="margin-right: 20px;">
        <img align="left" width="230" height="230" src="https://github.com/user-attachments/assets/8cd66769-44d7-425d-ab7e-b81814c6fee9">
    </div>
    <div style="margin-right: 20px;">
        <img align="left" width="230" height="230" src="https://github.com/user-attachments/assets/15538303-d4d4-473f-b209-3de661287ce3">
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
             <img align="right" width="230" height="230" src="https://github.com/user-attachments/assets/6fcd812e-36c1-47dd-a1a6-2aeeddc3db33">
        </div>
        <div> 
             <img align="right" width="230" height="230" src="https://github.com/user-attachments/assets/e13bf3a1-c9ab-4d09-ac67-fbe2c4b4443f">
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
    <img width="420" height="250" src="https://github.com/user-attachments/assets/2aa6893f-b205-4742-861e-3a7ce67628f8">
</p>

<br clear="left"/>

> 
> 2- Faça a tabela verdade do circuito abaixo.

<br clear="left"/>

<p align="center">
    <img width="420" height="250" src="https://github.com/user-attachments/assets/e0d19456-ecb7-43ab-942c-accc542525a7">
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
