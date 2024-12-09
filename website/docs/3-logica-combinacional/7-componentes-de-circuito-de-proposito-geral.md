---
title: Componentes de Circuíto de Propósito Geral
description: Grupo 16
---


# Componentes de Circuíto de Propósito Geral

## Multiplexadores

### Sobre
O multiplexador ou como é comumente chamado, MUX, é um bloco que tem como objetivo selecionar uma informação dentre as várias possíveis entradas, em que a seleção da entrada depende de uma ou mais chaves seletoras. Ou seja, o bloco é simplesmente um **seletor de dados.**

![mux_conceito](https://github.com/user-attachments/assets/7a18b371-0829-4d97-bc7d-0c203a88f655)

Para representar o bloco utilizamos dois números, em que o primeiro representa a quantidade de entradas e o segundo o número de saídas. Tome um MUX 4:1 como exemplo

<iframe
  src="https://circuitverse.org/simulator/embed/conceito-multiplexador?theme=default&display_title=false&clock_time=true&fullscreen=true&zoom_in_out=true"
  style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}
  name="myiframe"
  id="projectPreview"
  scrolling="no"
  frameBorder="1"
  marginHeight="0px"
  marginWidth="0px"
  height="500"
  width="500"
  allowFullScreen
></iframe>

As entradas  $I_0, I_1, I_2$ e assim por diante são selecionadas quando o valor representado em binário pelas chaves seletoras é igual a seu seu índice, note que o bit mais significativo das chaves de seleção encontra-se representado a esquerda, enquanto as entradas estão ordenadas de ordem crescente de cima para baixo.

De maneira geral, o número de entradas em um MUX podem ser tantas quanto seja necessário, no entanto, por conveniência sempre as utilizamos como potências de 2. Note que, **k chaves podem reduzir 2^k entradas a uma única saída**, assim, para **n entradas serão necessárias log2(n) chaves seletoras**.

### Circuito Combinacional
De início, por simplicidade, vamos nos concentrar no MUX 2:1 para entender a lógica por trás do bloco.

<iframe
  src="https://circuitverse.org/simulator/embed/mux-2-1-283fec78-6a00-4b07-b871-f455e0a458f1?theme=default&display_title=false&clock_time=true&fullscreen=true&zoom_in_out=true"
  style={{ borderWidth: '1px', borderStyle: 'ridge', borderColor: 'gray' }}
  name="myiframe"
  id="projectPreview"
  scrolling="no"
  frameBorder="1"
  marginHeight="0px"
  marginWidth="0px"
  height="500"
  width="500"
  allowFullScreen
></iframe>

#### Tabela Verdade MUX 2:1
| $$S $$  | $$Z$$    |
|---------|----------|
| 0       | $$I_0$$  |
| 1       | $$I_1$$  |

A fim de escalar o circuito, podemos expandir o número de entradas. Desse modo, para desenvolver um **MUX 4:1** temos duas saídas: podemos simplesmente expandir a lógica utilizada anteriormente ou é possível utilizar os próprios multiplexadores 2:1 anteriormente desenvolvidos. Observe as duas implementações respectivamente:
<iframe src="https://circuitverse.org/simulator/embed/mux-4-1-6964f3c6-610a-460c-81db-56c1721442d7?theme=default&display_title=false&clock_time=true&fullscreen=true&zoom_in_out=true" style={{ borderWidth: '1px', borderStyle: 'ridge', borderColor: 'gray' }}
  name="myiframe"
  id="projectPreview"
  scrolling="no"
  frameBorder="1"
  marginHeight="0px"
  marginWidth="0px"
  height="500"
  width="500"
  allowFullScreen></iframe>

#### Tabela Verdade MUX 4:1
| $$s_1$$ | $$s_0$$ |    $$z$$  |
|---------|---------|-----------|
|    0    |     0   |   $$I_0$$ |
|    0    |     1   |   $$I_1$$ |
|    1    |     0   |   $$I_2$$ |
|    1    |     1   |   $$I_3$$ |


Observe a função booleana resultante da soma dos produtos na primeira implementação
- $$Z = s_1 s_0 i_0 + s_1 s_0 i_1 + s_1 s_0 i_2 + s_1 s_0 i_3 $$

Note que a partir da segunda implementação é possível cascatear quantos multiplexadores forem necessários, de forma que qualquer MUX do formato 2^n:1 pode ser representado a partir de outros MUX.

### Circuitos Lógicos através de Multiplexadores
Multiplexadores podem ser utilizados para um propósito mais geral através da simplificação de circuitos lógicos, exploraremos esse axioma em prática nos exercícios ao final do capítulo, antes vamos entender a ideia por trás da afirmação.

### Teorema da expansão de Shannon
Não iremos realizar a demonstração do teorema e ficará ao cargo do leitor se aprofundar no tema.
O teorema implica que qualquer função booleana $f (x_1,\dots , x_n)$ pode ser reescrita da seguinte forma:
$ f(x_1, x_2,\dots , x_n) = \bar{x_1}  f (0, x_2,\dots , x_n) + x_1 f (1, x_2,\dots , x_n) $

Por exemplo
$$ f(x_1,x_2,x_3) = \bar{x_1} \bar{x_3} + x_1x_2 + x_1x_3 $$
$$f(x_1,x_2,x_3) = \bar{x_1}(\bar{x_3}) + x_1(x_2 +  x_3)$$

É importante ressaltar que a complexidade final da expressão booleana dependerá da escolha de $x_i$, podendo ser mais ou menos complexa que a lógica inicial, de modo que é vantajoso explorar diferentes escolhas de $x_i$ para otimização. Veja a seguir um má escolha para o circuito anterior:
$$ f(x_1,x_2,x_3) = \bar{x_1} \bar{x_3} + x_1x_2 + x_1x_3 $$
$$f(x_1,x_2,x_3)  = \bar{x_2}(\bar{x_1}\bar{x_3} + x_1x_3) + x_2(\bar{x_1}\bar{x_3} + x_1 + x_1x_3) = \bar{x_2}(\bar{x_1}\bar{x_3} + x_1x_3) + x_2(\bar{x_1}\bar{x_3} + x_1) $$

Veja que podemos realizar a expansão com mais de uma variável em evidencia, de modo que essas variáveis podem representar as diversas chaves seletoras em um MUX n:1

$$ f(x_1, \dots, x_n) = x_1 x_2 \cdot f(0, 0, x_3, \dots, x_n) + x_1 x_2 \cdot f(0, 1, x_3, \dots, x_n) + x_1 x_2 \cdot f(1, 0, x_3, \dots, x_n) + x_1 x_2 \cdot f(1, 1, x_3, \dots, x_n) $$

Finalmente, podemos concluir que a expansão de Shannon pode ser feita recursivamente:

$$ f(x_1, x_2, \dots, x_n) = \bar{x_1} \cdot f(0, x_2, \dots, x_n) + x_1 \cdot f(1, x_2, \dots, x_n) $$

$$ f(0, x_2, \dots, x_n) = \bar{x_2} \cdot f(0, 0, \dots, x_n) + x_2 \cdot f(0, 1, \dots, x_n) $$

$$ f(1, x_2, \dots, x_n) = \bar{x_2} \cdot f(1, 0, \dots, x_n) + x_2 \cdot f(1, 1, \dots, x_n) $$

$$ f(x_1, x_2, \dots, x_n) = \bar{x_1} \cdot \left( \bar{x_2} \cdot f(0, 0, \dots, x_n) + x_2 \cdot f(0, 1, \dots, x_n) \right) + x_1 \cdot \left( \bar{x_2} \cdot f(1, 0, \dots, x_n) + x_2 \cdot f(1, 1, \dots, x_n) \right) $$

Dessa forma em muitos casos a reorganização de circuitos para utilização de multiplexadores podem simplificar a lógica, além disso qualquer circuito pode ser representado utilizando apenas multiplexadores


## Demultiplexador
O material não irá se aprofundar nesse circuito, contudo, como o nome sugere, podemos inferir que sua função é **transmitir uma única entrada de sinal por uma de suas saídas**. Assim, podemos classificá-lo como **direcionador de um dado**.

<iframe src="https://circuitverse.org/simulator/embed/demultiplexador-7b213900-cbf6-4a9b-b1df-2916de60862e?theme=default&display_title=false&clock_time=true&fullscreen=true&zoom_in_out=true" style={{ borderWidth: '1px', borderStyle: 'ridge', borderColor: 'gray' }}
  name="myiframe"
  id="projectPreview"
  scrolling="no"
  frameBorder="1"
  marginHeight="0px"
  marginWidth="0px"
  height="500"
  width="500"
  allowFullScreen></iframe>

#### Tabela Verdade Demux 1:2
| $$s$$ |   $$z_0$$  |   $$z_1$$  |
|-------|------------|------------|
|   0   |    $$I$$   |      0     |
|   1   |       0    |    $$I$$   |

#### Tabela Verdade Demux 1:4
| $$s_1$$ | $$s_0$$ | $$z_0$$       |$$z_1$$          | $$z_2$$       | $$z_3$$   |
|---------|---------|---------------|---------------|---------------|-----------|
|    0    |    0    | $$I$$         | 0             | 0             | 0         |
|    0    |    1    | 0             | $$I$$         | 0             | 0         |
|    1    |    0    | 0             | 0             | $$I$$         | 0         |
|    1    |    1    | 0             | 0             | 0             | $$I$$     |


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


## Codificadores e Decodificadores
### Exercícios
1. Através da seguinte tabela verdade, construa um circuito utilizando apenas um multiplexador 2:1

|  A  |  B  |  C  |  f  |
|-----|-----|-----|-----|
|  0  |  0  |  0  |  0  |
|  0  |  0  |  1  |  0  |
|  0  |  1  |  0  |  1  |
|  0  |  1  |  1  |  1  |
|  1  |  0  |  0  |  0  |
|  1  |  0  |  1  |  1  |
|  1  |  1  |  0  |  0  |
|  1  |  1  |  1  |  1  |

2. Utilize a seguinte função $f(x_1,x_2,x_3,x_4) = x_1x_2\bar{x_3} + x_1\bar{x_3}x_4 + \bar{x_1}x_2x_3 + x_1x_3 + \bar{x_1}\bar{x_3}x_4$ para derivar um circuito através da expansão de shannon com duas variaveis em evidência, faça a escolha mais eficiente.
3. O crossbar switch é um circuito útil em diversas aplicações que conectam dois grupos de fios nas quais o padrão de conexão muda de tempo em tempo. Observe sua lógica de funcionamento através da figura :

![crossbar_switch](https://github.com/user-attachments/assets/df6e2412-314c-4512-873e-7ff398b87708)

A entrada $S$ controla a conexão das entradas $A_i$ e as saídas $B_i$. Se $S = 0$ o circuito conecta $A_1$ com $B_1$ e $A_2$ com $B_2$, caso $S = 1$ a conexão é invertida. **Construa um crossbar switch 2x2 através de dois multiplexadores 2:1**

3. Implemente a função f(w1, w2, w3) = ∑ m(0, 1, 2, 4, 5, 7) utilizando um encoder 3:8 e uma porta OR (inspirado no livro *Fundamentals of Digital Logic with Verilog Design*).

4. Implemente a função f(w1, w2, w3) = ∑ m(1, 3, 5, 7) utilizando um decoder 3:8 e uma porta OR.

5. Faça um circuito que converta um código binário em Gray code de acordo com a tabela (semelhante ao exercício exemplo 4.27 no livro *Fundamentals of Digital Logic with Verilog Design*):

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

### Gabarito

<iframe src="https://circuitverse.org/simulator/embed/gabarito?theme=default&display_title=false&clock_time=true&fullscreen=true&zoom_in_out=true"
style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}
name="myiframe"
id="projectPreview"
scrolling="no"
frameborder="1"
marginheight="0px"
marginwidth="0px"
height="500"
width="500"
allowFullScreen></iframe>

4.

1- Fazer a tabela verdade dos mintermos.
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


2- Veja que somente interessam as entradas mintermos m0, m1, m2, m4, m5, m7. Agora, fazer a tabela verdade do Decoder 3:8.  

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




3- Perceba que para cada m_n (mintermo n) a saída w_n (saída w n) está ativada, ou seja, possui valor 1. Com isso, basta identificar quais entradas (y2, y1, y0) associam-se aos mintermos desejados (m0, m1, m2, m4, m5, m7). Considerando que cada entrada somente possuirá somente uma saída 1, utiliza-se a porta OR ligada aos mintermos de interesse.


<p align="center">
  <img src="https://github.com/Matheus-Rodriguez/be-a-ba/blob/main/images/5.png" alt="Descrição da Imagem">
</p>

5. Semelhante ao exercício 4

6.

1- Perceba que para cada valor em g2, o valor em b2 é semelhante, logo: g2 = b2.  
2- Além disso, a saída g1 resulta da operação XOR entre b1 e b2 (b1 XOR b2), logo: g1 = b1 XOR b2.  
3- Por fim, a saída g0 resulta da operação XOR entre b0 e b1 (b0 XOR b1), logo: g0 = b0 XOR b1.  

<p align="center">
  <img src="https://github.com/Matheus-Rodriguez/be-a-ba/blob/main/images/image18.png" alt="Descrição da Imagem">
</p>


:::info Autoria
- Felipe Camargo Cerri - 15451119
- Rodrigo Silva de Almeida - 15645380
- Matheus Aparecido de Almeida Rodriguez - 14597868
:::

:::info Referencias
- FUNDAMENTALS OF DIGITAL LOGIC WITH VERILOG DESIGN, THIRD EDITION
Digital Design and Computer Architecture
- https://eaulas.usp.br/portal/video.action?idItem=7419
- https://circuitverse.org/

:::

