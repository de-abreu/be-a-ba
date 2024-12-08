---
title: Registradores
description: Grupo 4
---

# Registradores

## Exercícios

1. a) Explique a diferença entre um registrador de deslocamento e um registrador de propósito geral. <br/>
b) Por que os registradores são mais rápidos que a memória RAM?

2. Dado o circuito de um registrador de 4 bits com entradas paralelas e saídas paralelas: <br/>
a) Identifique os sinais necessários para carregar um valor no registrador. <br/>
b) Descreva como o sinal de reset influencia o comportamento do circuito.

3. Considere um registrador de deslocamento de 4 bits com entrada serial D. Entrada serial ao longo de 4 pulsos de clock: 1,0,1,1. <br/>
a) Qual será o conteúdo do registrador após os 4 pulsos? <br/>
b) Mostre o conteúdo do registrador após mais dois deslocamentos para a direita com D = 0.

4. Projete um registrador de 8 bits com entrada paralela e saída serial (PISO). Desenhe o circuito e explique o funcionamento.

5. Analise o seguinte diagrama temporal para um registrador de 4 bits com deslocamento à direita: <br/>
a) Preencha a última linha da tabela com o próximo estado do registrador. <br/>
b) Explique o comportamento do registrador no deslocamento.

| Ciclo de Clock | Entrada (D) | Saída Q3 Q2 Q1 Q0 |
|:---:|:---:|:---:|
| 0 | 1 | 0000 |
| 1 | 0 | 1000 |
| 2 | 1 | 0100 |
| 3 | 1 | 1010 |

6. Escreva um código em VHDL para implementar um registrador de 4 bits com entrada e saída paralelas. O registrador deve possuir os sinais de clock, reset, e enable.

7. a) Explique como o Program Counter (PC) utiliza registradores para determinar a próxima instrução a ser executada. <br/>
b) Por que registradores de propósito específico geralmente são mais rápidos que registradores de propósito geral?

8. Discuta as vantagens e desvantagens de implementar registradores de grande capacidade (ex: 128 bits) em um processador, comparado ao uso de memória cache.

## Gabarito

1. a) Um registrador de deslocamento move os bits armazenados para a direita ou esquerda a cada pulso de clock, enquanto um registrador de propósito geral armazena temporariamente dados para operações diversas no processador. <br/>
b) Os registradores estão fisicamente dentro do processador, tornando o acesso mais rápido devido à menor latência e maior largura de banda em comparação com a memória RAM.

2. a) Para carregar um valor, é necessário ativar o sinal de enable enquanto o clock fornece pulsos para sincronizar a operação. <br/>
b) O sinal de reset zera o conteúdo do registrador, independentemente do valor que estava armazenado anteriormente.

3. a) Após os 4 pulsos, o conteúdo será Q3,Q2,Q1,Q0=1011. <br/>
b) Após dois deslocamentos adicionais para a direita com D=0, o conteúdo será Q3,Q2,Q1,Q0=0010.

4. O circuito pode ser desenhado usando 8 flip-flops tipo D conectados em paralelo para entrada, com uma saída serial obtida do flip-flop mais significativo. A explicação incluiria como cada bit é carregado simultaneamente na entrada e deslocado para a saída serial a cada pulso de clock. (*ADICIONAR IMAGEM DO CIRCUITO*)

5. a) O próximo estado será Q3,Q2,Q1,Q0=1101. <br/>
b) O registrador desloca os bits para a direita, com a entrada D preenchendo o bit mais significativo e o menos significativo sendo descartado.

6. Códgio em VHDL:
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

7. a) O Program Counter (PC) utiliza um registrador para armazenar o endereço da próxima instrução, incrementando-o a cada ciclo de clock ou mudando para um endereço específico em casos de desvios. <br/>
b) Registradores de propósito específico são otimizados para funções específicas, reduzindo a lógica adicional necessária para uso genérico.

8. Vantagens: Alta velocidade e menor latência. <br/>
Desvantagens: Consomem mais espaço no processador. Difícil de escalar para capacidades maiores devido ao custo e à complexidade.

:::info Autores
- João Victor De Bortoli Prado
- Samuel Sandoval Bonachela
- Lucas Rodrigues Baptista
:::

