---
title: Memória Digital
description: Importante componente em sistemas eletrônicos e digitais, responsável por armazenar informações temporárias ou permanentes.
---

# Memória Digital

A memória digital é um componente essencial em sistemas eletrônicos e digitais, sendo responsável por armazenar informações temporárias ou permanentes. Iremos apresentar três componentes fundamentais da memória digital: **latches**, **flip-flops** e **registradores**.

## Latches

### O que é um Latch?

Um **latch** é um tipo de circuito de memória simples que pode armazenar um bit de informação. Ele mantém o valor (0 ou 1) até que um novo sinal de clock(controle) seja enviado para alterar esse valor, ou seja o **latch** é sensível ao nível do clock, quando o clock está em nível lógico 1 as entradas serão copiadas na saída, ele é considerado **combinacional** devido a dependência da entrada e do sinal do clock para decisão de estados, mas é também considerado **sequencial**, quando seu comportamento depende do estado anterior.

### Tipos de Latches

- **Latch**: Tem duas entradas, **S (Set)** e **R (Reset)**. Quando a entrada **S** é ativada, o latch "guarda" o valor 1 em Qa e Qb armazena o complemento de 1 que é 0, e quando a entrada **R** é ativada, ele guarda o valor 0 em Qa e Qb armazena o complemento de 0 que é 1, já quando ambos **S (Set)** e **R (Reset)** são igual a 1, caimos em um caso indeterminado.

> Imagem do Latch tipo SR com portas NOR


- **Latch SR**: Funciona de forma semelhante ao que foi descrito acima, com uma diferença que agora terá três entradas, **S (Set)**, **R (Reset)** e (**E-Clock**). Sendo o clock o sinal de controle do latch.

> Imagem do Latch tipo SR síncrono

- **Latch D**: Com apenas uma entrada e a entrada do sinal de controle(**E-Clock**)

> Imagem do Latch tipo D

### Características Importantes

- **Transparente**: Quando ativado, o latch permite que as entradas modifiquem diretamente a saída.
- **Memória**: O latch "lembra" do estado enquanto não for alterado por novos sinais.

## 2. Flip-Flops

### O que é um Flip-Flop?

Um **flip-flop** é um tipo mais avançado de latch que mantém o estado até que seja explicitamente alterado, com a diferença de que ele responde apenas a **bordas** de um sinal de controle (**clock**), o que o torna mais estável para uso em circuitos digitais temporizados. Eles são utilizados para criar memória de longo prazo, ou seja cada unidade de flip-flop tem a capacidade de armazenar um bit na memória.

### Tipos de Flip-Flops

O **D Flip-Flop** (também conhecido como **Data Flip-Flop**) é um tipo de flip-flop muito simples e utilizado frequentemente em circuitos digitais. Ele possui uma única entrada **D** (Data), uma entrada de controle **Clock (CLK)**, e duas saídas: **Q** e **Q'** (invertida).

> Imagem do Flip-flop tipo D

#### Tabela Verdade

A tabela verdade do **D Flip-Flop** é a seguinte:

| **D** | **CLK (Borda de Subida)** | **Q (Saída)** | **Q' (Saída Invertida)** |
| ----- | ------------------------- | ------------- | ------------------------ |
| 0     | ↑                         | 0             | 1                        |
| 1     | ↑                         | 1             | 0                        |

#### Explicação

- **D = 0**: Quando o sinal de **Clock** ativa (borda de subida), a saída **Q** será 0.
- **D = 1**: Quando o sinal de **Clock** ativa, a saída **Q** será 1.
- O flip-flop **D** simplesmente **replica o valor de D** na sua saída **Q** quando o clock é ativado, o que o torna ideal para o armazenamento de dados.

#### Características Importantes

- O D Flip-Flop **armazena um bit de informação** e é muito útil em **registro de dados**, como em registradores de processadores e sistemas de memória temporária.
- Ele é **sincronizado** pela borda de subida do **Clock**.

O **JK Flip-Flop** é uma versão aprimorada do SR Flip-Flop, que resolve o problema de condições de entrada inválidas (onde as entradas **S** e **R** são ambas ativadas). Ele possui duas entradas, **J** e **K**, e uma entrada de controle, o **Clock** (geralmente chamado de **CLK**).

> Imagem do Flip-flop tipo JK

#### Tabela Verdade

A tabela verdade do **JK Flip-Flop** é a seguinte:

| **J** | **K** | **CLK (Borda de Subida)** | **Q (Saída)** | **Q' (Saída Invertida)** |
| ----- | ----- | ------------------------- | ------------- | ------------------------ |
| 0     | 0     | ↑                         | Q(t)          | Q'(t)                    |
| 0     | 1     | ↑                         | 0             | 1                        |
| 1     | 0     | ↑                         | 1             | 0                        |
| 1     | 1     | ↑                         | Inverte       | Inverte                  |

#### Explicação

- **J = 0, K = 0**: O flip-flop mantém seu estado atual. Ou seja, a saída **Q** continua igual ao valor do estado anterior (**Q(t)**).
- **J = 0, K = 1**: A saída **Q** será definida como 0.
- **J = 1, K = 0**: A saída **Q** será definida como 1.
- **J = 1, K = 1**: A saída **Q** inverte seu estado atual. Ou seja, se **Q** estava em 0, passará a ser 1, e vice-versa.

#### Características Importantes

- O JK Flip-Flop é **sensível à borda de subida** do sinal de **Clock (CLK)**, ou seja, ele muda seu estado quando ocorre a transição de 0 para 1.
- Quando **J** e **K** são ambos 1, o flip-flop entra em uma operação de **toggle** (inversão de estado).

#### Aplicação

- O JK Flip-Flop é muito útil em circuitos temporizados, como contadores e divisores de frequência, devido à sua capacidade de alternar o estado em resposta a entradas específicas.

O **T Flip-Flop** (Toggle Flip-Flop) é uma versão simplificada do JK Flip-Flop. Ele possui uma única entrada **T**, uma entrada de controle **Clock (CLK)** e duas saídas: **Q** e **Q'** (invertida).

> Imagem do Flip-flop tipo T

#### Tabela Verdade

A tabela verdade do **T Flip-Flop** é a seguinte:

| **T** | **CLK (Borda de Subida)** | **Q (Saída)** | **Q' (Saída Invertida)** |
| ----- | ------------------------- | ------------- | ------------------------ |
| 0     | ↑                         | Q(t)          | Q'(t)                    |
| 1     | ↑                         | Inverte       | Inverte                  |

#### Explicação

- **T = 0**: O flip-flop mantém seu estado atual (**Q(t)**).
- **T = 1**: O flip-flop inverte seu estado (**toggle**), ou seja, **Q** troca de valor (de 0 para 1 ou de 1 para 0).

#### Características Importantes

- O T Flip-Flop é **sensível à borda de subida** do sinal de **Clock**.
- Sua principal característica é a operação de **toggle**, que é útil em contadores binários e aplicações de divisão de frequência.

#### Aplicação

- Muito utilizado em contadores de frequência e circuitos temporizados, devido ao comportamento de alternância de estados.

## 3. Registradores

### O que é um Registrador?

Um **registrador** é um grupo de flip-flops, geralmente com a mesma função de armazenar dados, mas que pode armazenar múltiplos bits simultaneamente. Ele é um bloco fundamental para a operação de processadores e outros dispositivos digitais.

### Tipos de Registradores

- **Registrador de Deslocamento**: Usado para mover bits dentro do registrador ou entre diferentes registradores, geralmente com a operação de deslocamento (shift). Pode ser de **deslocamento para a direita** ou **deslocamento para a esquerda**.
- **Registrador de Dados**: Armazena dados temporários durante o processamento de informações. Pode ser acessado diretamente e é utilizado para passar dados entre diferentes partes de um sistema digital.

### Características Importantes

- **Armazenamento de Múltiplos Bits**: Um registrador pode armazenar 8, 16, 32 bits ou mais, dependendo do sistema.
- **Utilização em Processadores**: Em um processador, os registradores são usados para armazenar dados temporários, como resultados intermediários de cálculos.

### Diferenças entre Latches, Flip-Flops e Registradores

| **Características** | **Latches**                               | **Flip-Flops**                               | **Registradores**                                                   |
| ------------------- | ----------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------- |
| **Armazenamento**   | Armazenam 1 bit                           | Armazenam 1 bit                              | Armazenam múltiplos bits                                            |
| **Controle**        | Dependem de sinais de controle constantes | Dependem da borda de um sinal de clock       | Conjunto de flip-flops, com operações de controle                   |
| **Função**          | Memória simples                           | Memória sincronizada com clock               | Memória de múltiplos bits, usada para dados temporários             |
| **Uso**             | Armazenar um estado simples               | Sincronizar estados em circuitos sequenciais | Armazenar e manipular dados em processadores e sistemas de controle |

# Exercícios

### Exercício 1: Latch SR

Considere um latch SR (Set-Reset), onde as entradas são **Set** e **Reset**.

- O que acontece quando ambos os sinais **Set** e **Reset** são acionados ao mesmo tempo?
- Explique o comportamento do latch quando apenas o sinal **Set** é acionado e, em seguida, o sinal **Reset** é acionado.

### Exercício 2: Flip-Flop T

Considere um flip-flop tipo T (Toggle).

- Como o flip-flop T reage quando a entrada **T** é 1 e o sinal de **Clock** ativa (borda de subida)?
- O que acontece quando a entrada **T** é 0? Explique o comportamento do flip-flop nas duas situações.

### Exercício 3: Flip-Flop D

Considere um flip-flop tipo D:

- Quando a entrada **D** recebe o valor 1, o que acontece na saída **Q** durante a borda de subida do sinal de **Clock**?
- Se a entrada **D** for 0, qual será o valor da saída **Q** após a borda de subida do **Clock**?

### Exercício 4: Flip-Flop JK

Considere um flip-flop tipo JK, que possui as entradas **J** e **K**.

- O que acontece quando a entrada **J** é 1 e **K** é 0, e o sinal de **Clock** está na borda de subida?
- E quando **J** é 0 e **K** é 1? Explique o comportamento do flip-flop JK em ambos os casos.

## Exercício 5: Diferenças entre Latches, Flip-Flops e Registradores

**Pergunta:**

- Explique as principais diferenças entre latches, flip-flops e registradores. Cite exemplos de onde cada um seria mais apropriado em um sistema digital.


:::note AUTORES
- Luis Henrique (15577760)
- Gabriel de Araujo (14571376)
- Gabriel Demba (15618344)
:::
