---
title: UC
---

# Unidade de Controle (UC)
## Exercícios
:::note
Pedro Calciolari Jardim - 11233668
Maicon Chaves Marques - 14593530
João Vitor Pereira Candido - 13751131
:::

O que é a Unidade de Controle?

A Unidade de Controle (UC) é o componente do processador responsável por interpretar as instruções de um programa e converter essas instruções em sinais de controle para os outros componentes do processador. Sua principal função é coordenar o funcionamento de elementos como a Unidade Lógica e Aritmética (ULA), memórias e dispositivos de entrada/saída, garantindo que cada operação seja executada na ordem correta.

Existem dois tipos principais de Unidade de Controle:

UC por Hardware: É feita com circuitos fixos, projetados para trabalhar com um conjunto específico de instruções. É muito rápida, mas não permite mudanças ou atualizações facilmente.

UC Microprogramada: Usa uma memória para guardar "micro-instruções", que são como pequenos comandos internos. É mais flexível e fácil de adaptar, mas pode ser um pouco mais lenta.

Como é feita a UC?

A UC tem algumas partes importantes que trabalham juntas:

Registradores: Guardam informações temporárias, como o endereço da próxima instrução ou dados a serem processados.

Decodificador de Instruções: Analisa a instrução e decide o que deve ser feito.

Circuitos Sequenciais: Garantem que as etapas (buscar, entender e executar) aconteçam na ordem certa.

Geradores de Sinais de Controle: Enviam comandos para os outros componentes, dizendo o que fazer.

Como a UC trabalha?

O funcionamento da UC segue um ciclo básico de três etapas:

Buscar (Fetch): A UC busca a próxima instrução na memória e a coloca em um registrador.

Decodificar (Decode): A instrução é analisada para entender o que precisa ser feito.

Executar (Execute): A UC envia sinais para os componentes envolvidos, como a ULA, para realizar a tarefa.

Exercícios

Somando números
A UC precisa somar dois números guardados em registradores. O que ela faz para:

Escolher os registradores certos?

Enviar os dados para a ULA?

Guardar o resultado em outro registrador?

Pulando para outro lugar
Quando a instrução é "SE X > 0, ENTÃO VÁ PARA O ENDEREÇO Y", o que a UC faz?

Fazendo o ciclo funcionar
Desenhe um diagrama simples que mostre como a UC alterna entre buscar, decodificar e executar instruções. Imagine que cada etapa acontece em um ciclo de clock.

Comparando tipos de UC
Qual a diferença entre uma UC por hardware e uma UC microprogramada em relação a:

Velocidade

Facilidade de mudança

Custo

Contador de Programa (PC)
O PC está no valor 1000 e a próxima instrução está no endereço 1004. O que acontece com o valor do PC depois de buscar a instrução?

Respostas sugeridas

A UC ativa os registradores corretos, envia os dados para a ULA, realiza a soma e guarda o resultado em outro registrador.

A UC verifica a condição e, se verdadeira, altera o valor do PC para o endereço indicado.

O diagrama deve incluir flip-flops para guardar o estado atual e uma lógica que decide a próxima etapa (buscar, decodificar ou executar).

UC por hardware: mais rápida, menos flexível; UC microprogramada: mais flexível, mas pode ser mais lenta e mais cara de implementar.

O PC passa a valer 1004 após buscar a instrução.
