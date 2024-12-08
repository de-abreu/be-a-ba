---
title: Máquinas de Estados
description: Grupo 7
---

# Máquina de Estados
	
Uma máquina de estados finita ou *FSM* (*Finite States Machine*) é um modelo usado para representar e controlar o comportamento de sistemas que mudam de “estado” de acordo com certos eventos.

Um modelo *FSM* é composto por Estados, que representam as condições em que o sistema pode estar, eventos ou entradas, que são estímulos que fazem o sistema mudar de estado, transições que são as regras de como o sistema passa de um estado para outro, e ações, que alguns sistemas utilizam em certos estados ou transições.

Um exemplo simples de um sistema que pode ser representado por meio de uma de uma *FSM* é um semáforo, no qual os elementos seriam:

**Estados**: 
- Verde. 
- Vermelho. 
- Amarelo.

**Transições**: 
- Verde para amarelo.
- Amarelo para vermelho.
- Vermelho para verde.

Nesse caso, o evento que estimula as transições é o tempo, com uma quantidade variável dependendo da transição.

Agora, para entender melhor como as máquinas de estados podem ser representadas, vamos supor uma *FSM* que possui uma entrada **w**, uma saída **z**, e três estados, **A**, **B** e **C**, em relação ao funcionamento, o estado inicial é A, sempre que a entrada for w = 0, a máquina vai para o estado A, se o estado for A e w = 1, vai para o estado B, e se w = 1 novamente, vai para o estado C, a saída é z = 1 para o estado C e z = 0 para qualquer outro estado. Com essas informações, vamos representar a FSM por meio de um diagrama de estados, que é um diagrama que define o comportamento da máquina, onde os estados são representados por círculos e as transições por vetores direcionados, que ligam os estados. Dessa forma, o diagrama da máquina citada seria:

![Imagem do diagrama da máquina de estados]()

Outra maneira de representar máquinas de estados é por meio de uma tabela de estados, essa tabela mostra todas as transições possíveis entre estados para cada valor de entrada, além do valor da saída.

| Estado Atual | Próximo Estado (w = 0) | Próximo Estado (w = 1) | Saída (z) |
|--------------|------------------------|------------------------|-----------|
| A            | A                      | B                      | 0         |
| B            | A                      | C                      | 0         |
| C            | A                      | C                      | 1         |


## Moore
As máquinas de estados costumam ser divididas em dois tipos, o tipo Moore e o tipo Mealy, sendo a sua principal diferença a maneira como as saídas são geradas.

Em uma máquina Moore, as saídas dependem apenas do estado atual da máquina, isso significa que, enquanto a máquina não alterar seu estado, a sua saída será sempre fixa, independente de qual seja a entrada, as saídas são definidas em cada estado, o exemplo mostrado anteriormente é uma máquina do tipo Moore.

No diagrama de uma máquina Moore, as saídas são sempre associadas aos estados, então são indicadas ao lado de cada estado correspondente.

## Mealy
Numa máquina de estados Mealy, as saídas dependem tanto do estado atual quanto da entrada, o que torna a diferente da máquina Moore, que dependia apenas do estado. Isso permite que a saída mude apenas com a chegada de uma nova entrada, sem mudar o estado, dessa forma, as saídas são definidas nas transições entre estados.

No diagrama de estados de uma máquina Mealy, as saídas são representadas nas transições entre os estados, por exemplo, a máquina mostrada na figura anteriormente pode ser representada no formato Mealy da seguinte forma:

![Imagem do diagrama da máquina de estados Mealy]()

Pode-se notar por meio dessa imagem que na máquina Mealy, que é possível obter a mesma FSM, mas foi preciso 1 estado a menos para representá-la. Isso mostra que dependendo da situação, cada tipo de máquina de estados possui suas vantagens.

Também podemos representar a máquina Mealy na tabela de estados:

| Estado Atual | Próximo Estado (w = 0) | Próximo Estado (w = 1) | Saída (z) w = 0 | Saída (z) w = 1 |
|--------------|------------------------|------------------------|-----------| ---|
| A            | A                      | B                      | 0         | 0 |
| B            | A                      | B                      | 0         | 1 |

Como podemos ver, a tabela também mudou, já que agora a saída também depende da entrada, ou seja, a tabela possui uma coluna para cada valor possível na saída.

## Circuitos de Máquina de Estados
Os circuitos de uma *FSM* (também chamados de circuitos sequenciais) possuem a seguinte forma geral:

![Forma geral do circuito de uma máquina de estados]()
 
O circuito é formado por uma entrada (*input*), um circuito combinacional de lógica de transição de estados (*Next State Logic*), *Flip-Flops* que armazenam o estado atual da máquina, um circuito combinacional para determinar a saída (*Output Logic*), e por fim, uma saída (*output*). Note também que a linha tracejada é o fio que determina se a máquina é do tipo Moore ou Mealy, caso esse fio não exista, a máquina será do tipo Moore, já que a saída dependerá apenas do estado atual, caso o fio exista, a máquina será do tipo Mealy, pois nesse caso a saída depende tanto do estado quanto da entrada.

Em relação ao funcionamento do circuito, primeiro temos a lógica de transição de estados, que é um circuito combinacional que recebe dois valores, a entrada do circuito *FSM* e o valor do estado atual, esse circuito é responsável por reconhecer o estado atual e decidir com base na entrada recebida qual será a transição escolhida, podendo permanecer no mesmo estado ou não. Em seguida, os *Flip-Flops* recebem o valor de saída da lógica de transição de estados, que armazena na memória o estado atual, em seguida, o valor armazenado nos *Flip-Flops* é passado para o circuito de transição de estados (a saída desse circuito só será recebida no próximo ciclo de *Clock*) e para o circuito de saída, que será responsável por determinar a saída do circuito, podendo depender da entrada ou não.

Para criar um circuito combinacional, podemos utilizar um passo a passo:
1. Obtenha as especificações do circuito.
2. A partir das especificações, derive os estados que estarão presentes no circuito, escolha qual será o estado inicial e defina as transições entre eles.
3. Para facilitar os próximos passos, crie o diagrama de estados e a tabela de estados da FSM.
4. Defina a quantidade de Flip-Flops que será necessário para armazenar todos os estados, em seguida, derive as expressões da lógica de transição de estados e da lógica de saída, essa etapa pode ser feita por meio de um mapa de Karnaugh.

Como um exemplo prático, vamos tentar desenvolver o circuito da máquina Moore mostrada como exemplo no começo do capítulo. Primeiramente, a máquina possui 3 estados, A, B e C, ou seja, serão necessários 2 Flip-Flops (y1 e y2) para armazenar esses valores, vamos atribuir um valor para cada estado, como A é o inicial faremos da seguinte forma: A = 00, B = 01, C = 10. Chamando as saídas da lógica de transição de estados de Y1 e Y2 podemos reescrever a tabela de estados.

|Estado Atual (y2y1)| Próximo Estado w = 0 (Y1Y2) | Próximo Estado w = 1 (Y1Y2) | Saída (z) |
| ----------------- | --------------------------- | --------------------------- | --------- |
| 00                | 00                          | 01                          | 0         |
| 01                | 00                          | 10                          | 0         |
| 10                | 00                          | 10                          | 1         |

No caso de y2y1 = 00, podemos considerar Y2Y1 e z como d (don't care), pois existem só 3 estados e isso simplifica as expressões. Após derivar as expressões teremos que:
- Y1 = w !y1 !y2
- Y2 = w(y1 + y2)
- z = y2

Agora que temos as expressões, basta desenhar o circuito, isso fica como exercício para praticar.

# Exercícios
### 1) 
Considere uma máquina de estados simples que controla um portão automático de garagem. Ela possui os seguintes estados:
  - Aberto: o portão está completamente aberto.
  - Fechado: o portão está completamente fechado.
  - Abrindo: o portão está abrindo.
  - Fechando: o portão está fechando.

A máquina responde a dois tipos de eventos:
  - Botão pressionado: inverte o movimento do portão (se estiver abrindo começa a fechar e vice-versa).
  -Fim do curso: indica que o portão chegou ao fim do movimento.

Com base nessas informações:
  - Liste as transições entre os estados e os eventos que as acionam.
  - Desenhe o diagrama de estados dessa máquina.

### 2)
Um distribuidor automático de balas aceita moedas de 5 e 10 centavos até acumular um total de 15 centavos, momento em que ele libera uma bala. Se o valor inserido ultrapassar 15 centavos, a máquina não devolve troco, mas libera a bala. Os estados da máquina são:
  - S0: saldo 0 centavos.
  - S5: saldo 5 centavos.
  - S10: saldo 10 centavos.

Tarefas:
  - Desenhe o diagrama de estados para uma máquina de Mealy que atenda a esse comportamento, com as transições e saídas dependentes das entradas (moedas de 5 ou 10 centavos).
  - Explique o porquê de essa máquina ser uma máquina de Mealy.
  - Liste as transições de cada estado e as saídas resultantes.

### 3)
Um sistema de alarme residencial é ativado por um sensor de movimento. Ele possui os seguintes estados:
  - Inativo: o alarme está desativado.
  - Ativação: o alarme é ativado quando detecta movimento.
  - Ativo: o alarme permanece ligado até que seja desativado manualmente.
  - A saída "alarme soando" ocorre apenas no estado Ativo.

Tarefas:
  - Desenhe uma máquina de estados de Moore para esse sistema.
  - Converta essa máquina de Moore em uma máquina de Mealy.
  - Explique as diferenças principais entre as duas versões, destacando como a saída se comporta em cada modelo.

## Resolução dos exercícios

### 1)
Transições:
  - Fechado -> Abrindo: Botão pressionado.
  - Abrindo -> Aberto: Terminou de abrir.
  - Aberto -> Fechando: Botão pressionado.
  - Fechando -> Fechado: Terminou de fechar.

### 2)
Essa máquina é uma máquina Mealy pois a saída (“Bala”) depende tanto do estado atual quanto da entrada (“Moeda”).
Transições:
  - S0 -> S5: inserido 5 centavos.
  - S0 -> S10: inserido 10 centavos.
  - S5 -> S10: inserido 5 centavos.
  - S5 -> S0: inserido 10 centavos, bala liberada.
  - S10 -> S0: inserido qualquer moeda, bala liberada.
   
### 3)
A diferença é que, na máquina Moore, a saída está ligada apenas ao estado “Ativo”, enquanto a máquina Mealy pode gerar a saída “soando” na transição para o estado “Ativo”, dependendo da entrada e não apenas do estado atual.
  
# Bibliografia
- Livro - Fundamentals of Digital Logic with Verilog Design, THIRD EDITION, Stephen Brown and Zvonko Vranesic

:::note Autores
- João Gabriel Araujo de Bastos (15462633)
- Marcelo Martins Conti (15474629)
- Luis Guilherme Zanetti (15652750)
:::

:::note Todo
Colocar imagens
:::
