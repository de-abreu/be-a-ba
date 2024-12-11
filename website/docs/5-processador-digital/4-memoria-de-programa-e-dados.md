---
title: Memória de Programa e de Dados
description: Grupo 12
---

# Memória de Programa e de Dados
A Memória de Programa e a Memória de Dados são áreas de armazenamento de informações na CPU, que se comunicam com as unidades de controle (UC) e de lógica e aritimética (ULA).
A **Memória de Programa** é responsável por armazenar as intruções de programação, ou seja, o programa em si. Essas instruções são escritas pelo programador e definem as ações que a CPU deve executar.
A **Memória de Dados**, por sua vez, armazena os valores de variáveis utilizadas pelo programa. Ambos os valores de memória são posteriormente armazenados em registradores para o uso da CPU.

![pasted image 0 (2)](https://github.com/user-attachments/assets/26f4a7f2-7bef-4997-93c3-59fb72732004)


## Tipos de Memórias
![sram-and-dram (1)](https://github.com/user-attachments/assets/db441e8a-755f-4dd6-a81e-27e0ecf0510a)
Há diversos tipos de memórias, mas as mais comuns são:
  ### Memória RAM (Random Access Memory)
  É uma memória volátil, ou seja, perde o seu conteúdo uma vez que o sistema é desligado, por isso é necessário realizar o backup para evitar perda de dados. Por outro lado, ela permite escrita e leitura de forma eficiente e é a memória principal do computador.
    Há dois tipos principais de memória RAM:
  #### DRAM (Dynamic RAM)
  É necessário que os valores armazenados sejam atualizados (reescritos) periodicamente e após ser lido. Isso acontece porque os valores de bits são armazenados em um capacitor e, portanto, seu vazamento de carga (aos poucos, com o tempo, ou após uma leitura) afeta o valor armazenado.
  #### SRAM (Static RAM)
  Ao contrário da DRAM, os valores armazenados permanecem guardados de forma estática na memória, sem a necessidade de atualizar os valores dinamicamente. Isso ocorre porque, nesse caso, os valores são armazenados utilizando flip-flops.

  ### Memória ROM (Read Only Memory)
  É uma memória não volátil, ou seja, retém os dados mesmo que o sistema seja desligado. Ela permite leitura rápida, mas não permite escrita, com exceção de alguns tipos.

## Memórias na CPU
Agora que vimos os diferentes tipos de memórias, podemos classificar as memórias presentes na CPU, que citamos anteriormente.

**Memória de Programa:** Por ser usada para armazenar permanentemente o programa que está sendo executado e não haver necessidade de reescrevê-lo uma vez salvo, a Memória de Programa é do tipo **ROM**.

**Memória de Dado:** Já a Memória de Dados é usada para o armazenamento temporário de resultados imediatos e de variáveis, havendo a possibilade reescrever o conteúdo. Sendo assim, é usada a memória **RAM**.

## Arquitetura de Memória de Programa
### Endereço
  Os componentes de memória necessitam de um endereço para saber em qual de suas linhas está armazenado o valor desejado, para ter acesso à palavra de memória e retorná-la ao componente solicitante. Em geral, este endereço é fornecido pelo “Program Counter” ou por um valor de “JUMP”.

### Largura da palavra
  Agora que sabemos que para cada endereço na memória temos uma palavra, precisamos definir qual a largura dessa palavra, ou seja, a quantidade de bits que cada palavra de memória possui. Assim, para memória de largura oito, teremos oito bits em sequência para representar cada palavra de memória. A largura geralmente é definida como uma potência de dois.

### Profundidade da memória
  Sabemos como achar a linha da memória que queremos ler e a quantidade de informação que há dentro dela. Assim sendo, também temos que definir quantas palavras de memória queremos, que é a profundidade da memória. Normalmente, a profundidade também é dada em potência de dois e, de forma grosseira, dizemos que é o tamanho da memória.

### Ativação
  Podemos habilitar a leitura e escrita na memória com flags definidas na CPU, além do sincronismo que a mesma deve ter com o clock. Isso garante o funcionamento adequado de funções como escrita, leitura e busca na memória.

## Implementação em VHDL
No contexto de desenvolvimento em VHDL, a memória pode ser descrita através de diferentes abordagens:

### Declaração de Tipos
Em VHDL, a memória pode ser declarada utilizando arrays ou tipos personalizados, permitindo flexibilidade na definição da estrutura de armazenamento.

### Métodos de Descrição
**Descrição Comportamental:** Foca no comportamento funcional da memória, geralmente há um “process” dentro das mesmas.
**Descrição Estrutural:** Detalha a estrutura interna da memória, mais focada em como esta é construída a nível de hardware, com suas portas lógicas e blocos auxiliares.
**Descrição Sintética:** Detalha como é o fluxo de dados dentro do componente.

### Exemplos com Diferentes Abordagens

**Abordagem comportamental**
``` vhdl
architecture behavioral of memory is
  type mem_type is array (0 to 255) of std_logic_vector(7 downto 0);
  signal memory_array : mem_type;

  begin
    process(clk)
      begin
      if rising_edge(clk) then
        -- Lógica de escrita
        if we = '1' then
          memory_array(to_integer(unsigned(address))) <= data_in;
        end if;
        -- Lógica de leitura
        data_out <= memory_array(to_integer(unsigned(address)));
      end if;
    end process;
end architecture;
```

**Abordagem estrutural**
``` vhdl
architecture structural of memory is
  component storage_cell
  port(
    data_in : in std_logic;
    write_enable : in std_logic;
    data_out : out std_logic
  );
  end component;

  signal cell_connections : std_logic_vector(255 downto 0);
  begin
    -- Instanciação de células de memória individuais
    memory_cells: for i in 0 to 255 generate
      cell: storage_cell
      port map(
        data_in => data_in(i),
        write_enable => we,
        data_out => cell_connections(i)
      );
    end generate;
end architecture;

```
Esses são exemplos da implementação de memórias do tipo RAM em VHDL, você também pode obter implementações de memórias em vhdl em softwares como o “Quartus”. Um exemplo de implementação de uma memória ROM seria:
``` vhdl
architecture rom_behavior of program_memory is
  type rom_type is array (0 to 255) of std_logic_vector(15 downto 0);
  constant rom_content : rom_type := (
    0 => x"1234", -- Conteúdo pré-definido
    1 => x"5678",
    others => x"0000"
  );

  begin
    process(address)
      begin
      data_out <= rom_content(to_integer(unsigned(address)));
    end process;
end architecture;
```
Para o processador digital, você também pode optar por implementar apenas a memória RAM e definir a memória inicial a partir de um arquivo .mif ou .hex. Porém, a implementação é mais complexa, geralmente utiliza-se dessa técnica com blocos de memória gerados por programas como o “Quartus”.

## EXERCÍCIOS:
1) Precisando de uma memória que cubra pelo menos do endereço 0 a 255, quantos bits é necessário para representar a entrada de endereço?
   **Resp.:** _8 bits_

2) Supondo uma implementação de processador que necessite que todos os componentes se baseie no mesmo ciclo de clock, qual seria uma abordagem válida para evitar manipulações incorretas na memória?
    **Resp.:** _Utilizar flags de ativação para a escrita ou mesmo desabilitar o progresso da leitura da memória pela desativação temporária do "program counter", mantendo a memória no mesmo endereço._

3) Tendo uma memória que cubra do endereço 0 a 255, com palavras de 8 bits, quantos bits no máximo é possível armazenar nessa memória?
   **Resp.:** _2048 bits_

4) Qual seria outra forma de endereçar o progresso da leitura da memória sem utilizar um “program counter”?
  **Resp.:** _Utilizar outro endereço advindo de um componente, como por exemplo os JUMPs, geralmente valores advindos de um registrador._


### Referências:
BROWN, S.; VRANESIC, Z. **Fundamentals of Digital Logic with Verilog Design**. 3. ed. New York: McGraw-Hill, 2014.

INF-UFES. **Introdução à computação: Memória - Resumo**. Disponível em: http://www.inf.ufes.br/~zegonc/material/Introducao_a_Computacao/Memoria_Resumo.pdf. Acesso em: 10 dez. 2024.

POLO ELETRÔNICA. **O que é memória de programa em CLPs?** Disponível em: https://poloeletronica.com.br/glossario/o-que-e-memoria-de-programa-em-clps/. Acesso em: 10 dez. 2024.

MIKROE. **AVR Memory Organization**. Disponível em: https://download.mikroe.com/documents/compilers/mikroc/avr/help/avr_memory_organization.htm. Acesso em: 10 dez. 2024.

MORAIS, M. F. R. A. **Organização de Memória**. Disponível em: https://mfra98.wordpress.com/disciplinas/arquitetura-de-computadores/modulo-4/organizacao-de-memoria/. Acesso em: 10 dez. 2024.

NATIONIN. **SRAM and DRAM: Digital Electronics with Composite Memory**. Disponível em: https://www.nationin.com/post/sram-and-dram-digital-electronics-with-composite-memory. Acesso em: 10 dez. 2024.

MATHA ELECTRONICS. **A Complete Guide on 8051 Microcontroller Memory Organization**. Disponível em: https://www.mathaelectronics.com/a-complete-guide-on-8051-microcontroller-memory-organization/. Acesso em: 10 dez. 2024.

:::info Autores
- Beatriz Alves dos Santos
- Henrique Vieira Lima
:::

