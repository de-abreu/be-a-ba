---
title: Componentes de Circuíto de Propósito Geral
description: Grupo 16
---

# Decoders

## Sobre

Dispositivos lógicos utilizados para conversão de determinada entrada de dados em um certo formato especificado, por exemplo, uma entrada de números binários que são convertidas para desejadas saídas. Um decoder de n inputs (entradas) tem 2^n outputs (saídas), assim a nomenclatura destes elementos associam-se de acordo com tais valores, 2:4 Decoder (2 entradas e 4 saídas).

<p align="center">
  <img src="https://github.com/Matheus-Rodriguez/be-a-ba/blob/main/images/3.png" alt="Descrição da Imagem">
</p>

w0, w1 - Entradas do 2:4 Decoder  
y0, y1, y2, y3 - Saídas do 2:4 Decoder

Agora, a tabela verdade dessas entradas:

<center>
<table>
  <thead>
    <tr>
      <th>w₁</th>
      <th>w₀</th>
      <th>y₀</th>
      <th>y₁</th>
      <th>y₂</th>
      <th>y₃</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</center>


Note como todas as saídas pelo menos possuem “1” como um dos valores - no primeiro caso y0, segundo caso y1 e assim sucessivamente - essas saídas chamam-se one-hot code, uma vez que cada possui somente um valor ativo.

## Circuito Lógico

A implementação do Decoder utilizando elementos de lógica digital segue a seguinte forma:

<p align="center">
  <img src="https://github.com/Matheus-Rodriguez/be-a-ba/blob/main/images/2.png" alt="Descrição da Imagem">
</p>

Veja que cada entrada representa um minterm (minitermo) - expressão booleana que resulta em único valor (0 ou 1). Neste caso são os seguintes:

y0 = !w0!w1  
y1 = w0!w1  
y2 = !w0w1  
y3 = w0w1  

Portanto, novamente verifica-se a tabela verdade descrita anteriormente 


## Uso prático

Em displays de 7 segmentos, utilizados para a representação de números em displays digitais, como painéis de horário encontrados na rua. Um decodificador de display de 7 segmentos converte códigos binários ou outros tipos de entrada em sinais que acendem os segmentos apropriados do display. Ademais, os decodificadores são usados para mostrar números em medidores de velocidade, temperatura e combustível.

---

# Encoder

## Sobre

Dispositivos lógicos que apresentam função contrária ao dos Decoders, ou seja, codifica uma determinada entrada de dados para certo formato especificado. Possui 2^n inputs (entradas) e n outputs (saídas), dos quais pelo menos um deles deve ter o valor 1.

<p align="center">
  <img src="https://github.com/Matheus-Rodriguez/be-a-ba/blob/main/images/4.png" alt="Descrição da Imagem">
</p>


Por exemplo, para um Encoder 4:2 (4 entradas e 2 saídas), as entradas são:

<center>
<table>
  <thead>
    <tr>
      <th>w₃</th>
      <th>w₂</th>
      <th>w₁</th>
      <th>w₀</th>
      <th>y₁</th>
      <th>y₀</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</center>



## Circuito Lógico

A implementação do Encoder utilizando elementos de lógica digital segue a seguinte forma:

<p align="center">
  <img src="https://github.com/Matheus-Rodriguez/be-a-ba/blob/main/images/1.png" alt="Descrição da Imagem">
</p>

Veja que a saída y0 depende somente das entradas w1 e w3, isto é, quando w1 ou w3 valem 1, y0 vale 1. Além disso, da mesma forma a saída y1 depende apenas das entradas w2 ou w3, quando w2 ou w3 valem 1, y1 vale 1 também.

Dessa forma, pode-se usar duas portas OR para obter as saídas y0 e y1, com (w1 OR w3) e (w2 OR w3), respectivamente. Por fim, nota-se que a entrada w0 não exerce influência, por isso não se liga a porta alguma.

## Uso prático

Em sistemas de comunicação digital, como a transmissão de dados pela internet via modem ou rede sem fio, os dados são frequentemente codificados para garantir uma transmissão eficiente e segura. O decodificador no modem ou roteador converte os dados codificados recebidos em um formato adequado, permitindo o acesso a websites, e-mails e outros serviços online. Dessa forma, os decoders diminuem o número de bits necessários para representação de determinada informação e também minimizam o número de cabos utilizados.

---

# Exercícios

## 1. Implemente a função f(w1, w2, w3) = ∑ m(0, 1, 2, 4, 5, 7) utilizando um encoder 3:8 e uma porta OR (inspirado no livro *Fundamentals of Digital Logic with Verilog Design*).

### Solução:

1. Fazer a tabela verdade dos mintermos.
<center>
<table>
  <thead>
    <tr>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>F</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>m₀</td>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>m₁</td>
    </tr>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>m₂</td>
    </tr>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>m₃</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>m₄</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0</td>
      <td>1</td>
      <td>m₅</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>m₆</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>m₇</td>
    </tr>
  </tbody>
</table>
</center>


2. Veja que somente interessam as entradas mintermos m0, m1, m2, m4, m5, m7. Agora, fazer a tabela verdade do Decoder 3:8.  



3. Perceba que para cada m_n (mintermo n) a saída w_n (saída w n) está ativada, ou seja, possui valor 1. Com isso, basta identificar quais entradas (y2, y1, y0) associam-se aos mintermos desejados (m0, m1, m2, m4, m5, m7). Considerando que cada entrada somente possuirá somente uma saída 1, utiliza-se a porta OR ligada aos mintermos de interesse.


<p align="center">
  <img src="https://github.com/Matheus-Rodriguez/be-a-ba/blob/main/images/5.png" alt="Descrição da Imagem">
</p>


---

## 2. Implemente a função f(w1, w2, w3) = ∑ m(1, 3, 5, 7) utilizando um decoder 3:8 e uma porta OR.
<center>
<table>
  <thead>
    <tr>
      <th>w₇</th>
      <th>w₆</th>
      <th>w₅</th>
      <th>w₄</th>
      <th>w₃</th>
      <th>w₂</th>
      <th>w₁</th>
      <th>w₀</th>
      <th>y₂</th>
      <th>y₁</th>
      <th>y₀</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</center>


---

# Gray Codes

Gray codes foram patenteados (U.S. Patent 2,632,058) por Frank Gray, pesquisador da Bell Labs, em 1953. Eles são úteis em encoders, pois uma pequena mudança em um único bit gera erro.

## 3. Faça um circuito que converta um código binário em Gray code de acordo com a tabela (semelhante ao exercício exemplo 4.27 no livro *Fundamentals of Digital Logic with Verilog Design*):

<center>
<table>
  <thead>
    <tr>
      <th>b₂</th>
      <th>b₁</th>
      <th>b₀</th>
      <th>g₂</th>
      <th>g₁</th>
      <th>g₀</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
</center>



### Solução:

1. Perceba que para cada valor em g2, o valor em b2 é semelhante, logo: g2 = b2.  
2. Além disso, a saída g1 resulta da operação XOR entre b1 e b2 (b1 XOR b2), logo: g1 = b1 XOR b2.  
3. Por fim, a saída g0 resulta da operação XOR entre b0 e b1 (b0 XOR b1), logo: g0 = b0 XOR b1.  

**Circuito final**

<p align="center">
  <img src="https://github.com/Matheus-Rodriguez/be-a-ba/blob/main/images/image18.png" alt="Descrição da Imagem">
</p>


---


# Componentes de Circuíto de Propósito Geral

## Multiplexadores

## Codificadores e Decodificadores
## Exercícios
:::note TODO
Grupo 16
:::
