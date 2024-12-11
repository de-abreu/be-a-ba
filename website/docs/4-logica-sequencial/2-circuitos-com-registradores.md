---
Title: Circuitos com registradores
Description: O que são registradores, tipos de registradores e aplicações.
---
# Circuitos com Registradores

## O que são Registradores?

Registradores são componentes fundamentais na lógica digital, usados para armazenar temporariamente um conjunto de bits. Eles são formados por um agrupamento de flip-flops, geralmente do tipo D (Data), que permitem o armazenamento de **n** bits de dados simultaneamente.

### Relembrando o Flip-Flop Tipo D

Antes de explorarmos o funcionamento de registradores, é importante relembrar a respeito do Flip-Flop do tipo D. Este componente armazena o valor presente na entrada de dados (**D**) na borda ativa do sinal de clock, mantendo o dado armazenado até que ocorra a próxima borda.

#### Funcionamento
1. **Bordas de subida e descida do clock:**
   - O flip-flop tipo D opera na transição do sinal de clock. Ele pode operar na borda de subida (0 → 1), sendo chamado de _positive-edge-trggered_ ou, quando funciona na borda de descida (1 → 0), é chamado de _negative-edge-triggered_.

![](https://d2nchlq0f2u6vy.cloudfront.net/20/03/15/60ffc0fe98872100c981d6629540ce2d/dac6a03b9dddc5699e3b08aedf793faa/image_scan.png)
> Flip-flop do tipo D com de borda de descida

![](https://gotolasopa900.weebly.com/uploads/1/2/5/5/125523448/169554668.gif)
> Flip-flop do tipo D com clear e preset com borda de subida

2. **Gráfico de Tempo:**
   O diagrama de tempo mostra a relação entre o clock, entradas e saídas ao longo do tempo.

![](https://www.build-electronic-circuits.com/wp-content/uploads/2022/11/clock-4-500x312.png)
> Gráfico de tempo do flip flop D com borda de subida

### Registradores: Nada mais do que vários Flip-Flops

Um registrador é, essencialmente, um conjunto de flip-flops que, diferentemente dos flip-flops, estão organizados de modo a armazenar múltiplos bits de dados simultaneamente. Isso é feito em resposta às bordas do clock. Para um maior controle sobre isso, é comum que os registradores tenham um _enable_ para ativar o registro.


Os registradores, portanto, desempenham um papel crucial no design de circuitos digitais, viabilizando o armazenamento e a manipulação eficiente de dados em diversos contextos tecnológico como armazenamento de operandos e resultados algébricos, armazenamento de localizações de memória, armazenamento de sinais de controle, etc.

![](https://www.newtoncbraga.com.br/images/stories/artigo2019/cur5011_0009.png)

> Exemplo de registrador a partir de Flip-Flops tipo D


---

## Transferências paralela e serial:

As transferências de entrada ou de saída podem ser de forma paralela ou serial. Isso depende de como os dados se comportam. Se vários dados podem ser inseridos ao mesmo tempo tempos uma entrada paralela e se temos apenas um fio para inserir vários dados temos uma entrada em série.

### Transferência paralela:

Todos os bits são transferidos ao mesmo tempo. Embora esse método seja muito rápido acabamos usando muitos fios (um para cada bit).

![](https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/sequential-seq24.gif)
> Registrador shift com paralel-in paralel-out

### Transferência serial:

Os bits são enviados um por vez utilizando apenas um fio economizando fios, mas levando mais tempo já que precisamos de n ciclos de clock para realizar a operação

![](https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/sequential-seq22.gif)

> Registrador shift com serial-in serial-out

### Resumo e comparação:

- **Paralela:** Alta velocidade, mas com maior custo.
- **Serial:** Menor custo, mas é mais lenta.
 **OBS:** Trazendo isso para a realidade, é válido postular que a transferência serial é necessária em certas aplicações, como comunicação de longa distância, devido à limitação física de conexões, enquanto a paralela é limitada a curtas distâncias, pela maior suscetibilidade ao ruído e atenuação.

### Registradores shift:

Um numero de n bits é multiplicado por 2 se seus digitos são movidos para a direita e dividido por dois se seus digitos são movidos para a esquerda. Tendo isso em mente, existe um circuito capaz de realizar essa operação: O registrador shift.

A figura (a) exibe um exemplo de registrador shift formado por 4 flip-flops do tipo D encadeados. note que todos eles possuem um clock em comum e que a entrada D do próximo é a saída Q do anterior. Note também que temos apenas um fio de Data para iserir dados. O conteúdo de cada flip-flop é transferido para o próximo.

Os registradores shift movem os bits armazenados para a esquerda ou direita. Esse deslocamento ocorre de forma sincronizada com o clock, transferindo o valor de cada flip-flop para o anterior ou próximo. Esse comportamento é útil em operações como multiplicação e divisão por potências de 2.

![](https://www.electricalelibrary.com/wp-content/uploads/2021/02/shift_register.jpg)

> Exemplo de um Registrador shift de 4 bits

### Tipos de shift:
Pensando em números que ficam armazenas em binário nos registradores, os registradores de shift são alternativas viáveis para fazer operações simples de divisão e multiplicação em potências de dois.
- **Shift para a Esquerda:** multiplica o número por 2.
- **Shift para a Direita:** divide o número por 2.
É necessário lembrar que pode ser desejado extender o sinal, visto que o bit mais significativo será
perdido ao deslocar os bits à esquerda, e o bit menos significativo será perdido ao deslocar o
conteúdo à direita.
---

### Exercícios resolvidos

1. Projete um circuito que possa ser utilizado para controlar uma máquina de vendas automática. O circuito possui cinco entradas: Q (moeda de 25 centavos), D (moeda de 10 centavos), N (moeda de 5 centavos), Coin, e Resetn. Quando uma moeda é depositada na máquina, um mecanismo de detecção de moedas gera um pulso na entrada correspondente (Q, D ou N). Para indicar a ocorrência do evento, o mecanismo também gera um pulso na linha Coin.

O circuito é reiniciado usando o sinal Resetn (ativo em nível baixo). Quando pelo menos 30 centavos são depositados, o circuito ativa sua saída, Z. Não é fornecido troco caso o valor depositado exceda 30 centavos.

Projete o circuito necessário utilizando os seguintes componentes:

- Um somador de seis bits;
- Um registrador de seis bits;
- Qualquer número de portas AND, OR e NOT.

**Resolução**

![](https://i.imgur.com/croQhCC.png)

> Exemplo da máquina de vendas automática.

A figura acima (Fundamentals of Digital Logic with Verilog Design, THIRD EDITION) apresenta um circuito possível para implementar o controle de uma máquina de vendas automática. Vamos detalhar o funcionamento:

Cada tipo de moeda (N, D, Q) é representado por um número de cinco bits. Estes valores correspondem a:
- N (5 centavos): Representado como 00005.
- D (10 centavos): Representado como 001010.
- Q (25 centavos): Representado como 011001.
Quando uma moeda é depositada, o mecanismo de detecção gera um pulso na linha correspondente (N, D ou Q) e na linha Coin.
Os valores das moedas são somados ao valor total atual armazenado no registrador S.
O resultado da soma é atualizado no registrador após a borda negativa do sinal Coin.
O registrador S mantém o total acumulado das moedas depositadas e é atualizado a cada pulso na linha Coin, garantindo que a soma tenha sido processada corretamente pelo somador antes de ser armazenada.
A atualização é sincronizada com a borda negativa do sinal Coin, o que permite o tempo necessário para a propagação do somador e evita erros.
O sinal Resetn (ativo baixo) é usado para reiniciar o circuito, zerando o registrador S.
Saída do Circuito (Z):

A saída Z é ativada (em nível alto) quando o total acumulado é de 30 centavos ou mais.
Sabendo que 30 e 31 em binário são, respectivamente, 011110 e 011111, a condição para Z é dada pela fórmula:
Z = S5 + (S4 . S3 . S2. S1)

O registrador é atualizado na borda negativa do sinal Coin. Esse comportamento garante que o somador tenha tempo suficiente para calcular o novo total antes que ele seja armazenado no registrador.
Assim, evita inconsistências ou erros devido a atrasos de propagação.

---

## Exercícios conceituais:

1. Considere a sequência 0100 em um registrador de 4 bits. Depois de 2 deslocamentos para a direita, qual será a sequência?

2. Um sistema precisa transferir 16 bits de informações. Quantos fios serão necessários para fazer isso de forma paralela? E de forma serial?

3. Desenhe um registrador de 4 bits utilizando flip-flops do tipo D.

4. O que acontece com um número em binário, ao deslocá-lo por meio de um shift register para a esquerda? E para a direita?

---

## Respostas:

1. R: `0010`
2. R: Paralela: 16 fios. Serial: 1 fio.
3. R: O diagrama deve incluir 4 flip-flops D interconectados em série, com uma entrada de clock comum.
4. R: Ao deslocar para a direita, dividimos o número por 2. Ao deslocar para a esquerda, multiplicamos por 2

## Propostas para implementação na FPGA:

1. Faça a implementação de um registrador de borda de subida que recebe os inputs do usuário pelos Switches SW0 - SW7 e imprima o resultado recebido nos LEDs LED0 - LED7 da FPGA. Utilize o clock no botão.

2. Faça a mesma implementação agora utilizando a borda de descida. Quais diferenças você notou?

3. Implemente na FPGA de modo que se faça a soma de dois valores lidos pelos SW-0 e SW-7 e mostre o resultado nos LED's.

# Contadores

Os contadores são circuitos digitais utilizados para realizar operações de incremento ou decremento de contagem por 1. Eles têm ampla aplicação em sistemas digitais, como contar eventos, gerar intervalos de temporização e acompanhar o tempo decorrido. Apesar de poderem ser implementados usando somadores/subtratores e registradores sua simplicidade de operação permite a utilização de circuitos mais básicos, como flip-flops do tipo T ou D, reduzindo custos e complexidade.

### Contadores assíncronos:

Os contadores assíncronos são uma das formas mais simples de contadores e utilizam flip-flops T devido à sua característica natural de alternar estados com os pulsos de clock. Cada flip-flop no contador é conectado em cascata:

![](https://i.imgur.com/c7QjcT6.png)

> Contador Assíncrono


#### Limitações

- Por serem assíncronos, esses contadores sofrem com atrasos cumulativos, pois cada flip-flop depende da mudança do estado do anterior.

#### Vantagens

- Os contadores assíncronos são simples, econômicos e úteis em aplicações onde atrasos cumulativos não são críticos, como em contagens de baixa velocidade. Para aplicações que exigem alta precisão ou operação em alta velocidade, contadores síncronos seriam mais apropriados.


### Detecção de Máximo
- Para identificar quando o contador atinge seu valor máximo (todos os bits em 1), um **gate AND** pode ser utilizado.
- Essa detecção é útil, por exemplo, para concatenar vários contadores ou reiniciar a contagem após atingir o valor limite. Assim nós formamos um contador com base no módulo de |n|.

# Contadores síncronos

Os contadores assíncronos são simples, mas apresentam limitações de velocidade, especialmente quando o número de bits aumenta. Isso ocorre devido aos atrasos acumulados na propagação dos sinais no esquema de clock em cascata. Apesar de ainda haver atrasos relacionados ao tempo de propagação interno de cada flip-flop e da lógica combinacional associada, para superar essa limitação, utilizamos **contadores síncronos**, onde todos os flip-flops recebem o sinal de clock ao mesmo tempo.

![](https://i.imgur.com/yUofqhq.png)

Mostraremos abaixo dois tipos de contadores práticos: o contador BCD e o contador em anel.



## 1. Contador BCD

O **contador BCD (Binary-Coded Decimal)** conta em decimal (0 a 9) representado em binário.

![](https://i.imgur.com/CiM2kE5.png)

- **Funcionamento**:
  - Cada dígito decimal é implementado como um contador módulo-10, a partir de lógica entre as saídas Q0 e Q3, que indicam o número 9, em binário.
  - Após alcançar o número 9, os flip-flops são redefinidos para 0.
  - Quando o primeiro dígito (BCD₀) chega a 9, ele habilita o segundo dígito (BCD₁) para incrementar.

- **Controle**:
  - Um sinal de controle `Clear` pode zerar o contador.
  - A lógica garante que o próximo dígito só incrementa quando o anterior atinge 9.


## 2. Ring counter

O **ring counter** utiliza um registro de deslocamento circular para gerar uma sequência única de códigos.

![](https://i.imgur.com/jGKatqk.png)

> Exemplo de contador ripple (assíncrono) de 4 bits

- **Inicialização**:
  - Um sinal `Start` define o primeiro flip-flop como `1` e os demais como `0`.

- **Funcionamento**:
  - À medida que novos clocks acontecem, os registradores shiftam em uma posição. Por exemplo, começa em:
  `1000`, `0100`, `0010`...


## Propostas de sugestão de implementação na FPGA:

1. Implemente um contador assíncrono e um contador síncrono na FPGA.

2. Implemente um contador automático, ajustado ao clock da placa, de modo que a contagem seja atualizada a cada 1 segundo (Slow Counter).

3. Implemente o BCD counter utilizando os displays de 7 segmentos.

4. Implemente um Ring counter utilizando os LED's da FPGA.

# Circuitos Sequenciais:

Circuitos sequenciais combinam lógica combinacional com elementos de armazenamento, como flip-flops, para processar informações que dependem tanto do **passado** quanto do **presente** dos sinais de entrada.

Os **registradores** são usados em circuitos sequenciais para armazear informações de estados, assim, os circuitos sequenciais dependem da entrada e dos dados armazenados nos registradores e permitem manipular dados. Em circuitos sequenciais síncronos, um sinal de clock controla a mudança de estado dos flip-flops.

Existem dois tipos principais de circuitos sequenciais:
- **Moore:** Saídas dependem apenas do estado atual.
- **Mealy:** Saídas dependem do estado atual e das entradas.

Esses circuitos são fundamentais em sistemas digitais para memória e controle e trataremos dele nos próximos capítulos.


---

- Heitor Gomes de Oliveira - 15458350
- Dante Brito Lourenço - 15447326
- João Gabriel Pieroli da Silva - 15678578

Fontes:

Fundamentals of Digital Logic with Verilog Design, Brown. S.

https://www.allaboutcircuits.com/textbook/digital/chpt-12/introduction-to-shift-registers/
