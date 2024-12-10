---
title: Registradores
description: Grupo 4
---

# Registradores

## Recapitulando

Na parte Circuitos com Registradores do capítulo Lógica Sequencial deste livro, vimos que registradores são circuitos digitais formados por flip-flops utilizados dentro da CPU para armazenar bits. Os registradores podem ser de deslocamento, em que o valor de cada flip-flop é passado para o próximo de maneira serial, ou de acesso paralelo, em que conjuntos de bits podem ser lidos e/ou escritos simultaneamente.

## Registradores na CPU

No processador do computador, os registradores recebem classificações de acordo com sua função:
- **Registrador de Dados:** armazena valores numéricos de operações aritméticas e lógicas;
- **Registrador de Endereço:** armazena endereços de memória;
- **Registrador de Controle:** armazena flags relacionadas a operações e sinais de controle, que são os diferentes tipos de ações que podem ou não ocorrer dependendo da instrução recebida;
- **Registrador de Instrução:** armazena a instrução que está sendo executada no momento;
- **Contador de Programa (Program Counter):** armazena o endereço da próxima instrução a ser executada pelo processador;
- **Registrador de Propósito Geral:** armazena qualquer tipo de dado, conforme for necessário de acordo com a instrução do programa.

## Exercícios

1. a) Explique a diferença entre um registrador de deslocamento e um registrador de propósito geral. <br/>
b) Por que os registradores são mais rápidos que a memória RAM?

2. Dado o circuito de um registrador de 4 bits com entradas paralelas e saídas paralelas: <br/>
a) Identifique os sinais necessários para carregar um valor no registrador. <br/>
b) Descreva como o sinal de reset influencia o comportamento do circuito.

3. Considere um registrador de deslocamento de 4 bits com entrada serial D. Entrada serial ao longo de 4 pulsos de clock: 1,0,1,1. <br/>
a) Qual será o conteúdo do registrador após os 4 pulsos? <br/>
b) Mostre o conteúdo do registrador após mais dois deslocamentos para a direita com D = 0.

4. Analise o seguinte diagrama temporal para um registrador de 4 bits com deslocamento à direita: <br/>
a) Preencha a última linha da tabela com o próximo estado do registrador. <br/>
b) Explique o comportamento do registrador no deslocamento.

| Ciclo de Clock | Entrada (D) | Saída Q3 Q2 Q1 Q0 |
|:---:|:---:|:---:|
| 0 | 1 | 0000 |
| 1 | 0 | 1000 |
| 2 | 1 | 0100 |
| 3 | 1 | 1010 |
| 4 | 1 |  |

5. a) Explique como o Program Counter (PC) utiliza registradores para determinar a próxima instrução a ser executada. <br/>
b) Por que registradores de propósito específico geralmente são mais rápidos que registradores de propósito geral?

6. Discuta as vantagens e desvantagens de implementar registradores de grande capacidade (ex: 128 bits) em um processador, comparado ao uso de memória cache.

Extra: Escreva um código em VHDL para implementar um registrador de 4 bits com entrada e saída paralelas. O registrador deve possuir os sinais de clock, reset, e enable.

## Gabarito

1. a) Um registrador de deslocamento move os bits armazenados para a direita ou esquerda a cada pulso de clock, enquanto um registrador de propósito geral armazena temporariamente dados para operações diversas no processador. <br/>
b) Os registradores estão fisicamente dentro do processador, tornando o acesso mais rápido devido à menor latência e maior largura de banda em comparação com a memória RAM.

2. a) Para carregar um valor, é necessário ativar o sinal de enable enquanto o clock fornece pulsos para sincronizar a operação. <br/>
b) O sinal de reset zera o conteúdo do registrador, independentemente do valor que estava armazenado anteriormente.

3. a) Após os 4 pulsos, o conteúdo será Q3, Q2, Q1, Q0 = 1011. <br/>
b) Após dois deslocamentos adicionais para a direita com D=0, o conteúdo será Q3,Q2,Q1,Q0=0010.

4. a) O próximo estado será Q3, Q2, Q1, Q0=1101. <br/>
b) O registrador desloca os bits para a direita, com a entrada D preenchendo o bit mais significativo e o menos significativo sendo descartado.

5. a) O Program Counter (PC) utiliza um registrador para armazenar o endereço da próxima instrução, incrementando-o a cada ciclo de clock ou mudando para um endereço específico em casos de desvios. <br/>
b) Registradores de propósito específico são otimizados para funções específicas, reduzindo a lógica adicional necessária para uso genérico.

6. Vantagens: Alta velocidade e menor latência. <br/>
Desvantagens: Consomem mais espaço no processador. Difícil de escalar para capacidades maiores devido ao custo e à complexidade.

Extra: Códgio em VHDL:
``` vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity registrador_4bits is
    Port (
        clk    : in std_logic;
        reset  : in std_logic;
        enable : in std_logic;
        data_in  : in std_logic_vector(3 downto 0);
        data_out : out std_logic_vector(3 downto 0)
    );
end registrador_4bits;

architecture Behavioral of registrador_4bits is
    signal reg : std_logic_vector(3 downto 0) := "0000";
begin
    process (clk, reset)
    begin
        if reset = '1' then
            reg <= "0000";
        elsif rising_edge(clk) then
            if enable = '1' then
                reg <= data_in;
            end if;
        end if;
    end process;
    data_out <= reg;
end Behavioral;
```

:::info Autores
- João Victor De Bortoli Prado
- Lucas Rodrigues Baptista
- Samuel Sandoval Bonachela
:::

