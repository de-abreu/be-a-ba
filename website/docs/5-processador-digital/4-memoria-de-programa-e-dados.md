---
title: Memória de Programa e de Dados
description: Grupo 12
---

# Memória de Programa e de Dados
A memória de programa e a memória de dados são áreas de armazenamento de informações na CPU, onde se comunicam com as unidades de controle (UC) e de lógica e aritimética (ULA).   
A **memória de programa** é responsável por armazenar as intruções de programação. Essas instruções são escritas pelo programador e definem as ações que a CPU deve executar.  
A **memória de dados**, por sua vez, armazena os valores de variáveis utilizadas pelo programa.  
(ADICIONAR IMAGEM)
## Tipos de Memórias
Há diversos tipos de memórias, mas as mais comuns são:
  ### Memória RAM (Random Access Memory)  
  É uma memória volátil, ou seja, perde o seu conteúdo uma vez que o sistema é desligado, por isso é necessário realizar o backup para evitar perda de dados. Por outro lado, ela permite escrita e leitura de forma eficiente e é a memória principal do computador.  
    Há dois tipos principais de memória RAM:  
  #### DRAM (Dynamic RAM)  
  É necessário que os valores armazenados sejam atualizados (reescritos) periodicamente e após ser lido. Isso acontece porque os valores de bits são armazenados em um capacitor e, portanto, seu vazamento de carga (aos poucos, com o tempo, ou após uma leitura) afeta o valor armazenado.  
    (ADICIONAR IMAGEM)
  #### SRAM (Static RAM)  
  Ao contrário da DRAM, os valores armazenados permanecem guardados de forma estática na memória, sem a necessidade de atualizar os valores dinamicamente. Isso ocorre porque, nesse caso, os valores são armazenados utilizando flip-flops.  
    (ADICIONAR IMAGEM)
  ### Memória ROM (Read Only Memory)
  É uma memória não volátil, ou seja, retém os dados mesmo que o sistema seja desligado. Ela permite leitura rápida, mas não permite escrita, com exceção de alguns tipos.
  
## Memórias na CPU
Agora que vimos os diferentes tipos de memórias, podemos classificar as memórias presentes na CPU, que citamos anteriormente.  
### Memória de Programa
Por ser usada para armazenar permanentemente o programa que está sendo executado e não haver necessidade de reescrevê-lo uma vez salvo, a Memória de Programa é do tipo **ROM**. 
### Memória de Dados
Já a Memória de Dados é usada para o armazenamento temporário de resultados imediatos e de variáveis, havendo a possibilade reescrever o conteúdo. Sendo assim, é usada a memória **RAM**.

## É pra colocar exemplo em vhdl??
## Exercícios
:::note TODO
Beatriz Alves dos Santos  
Henrique Vieira Lima  
:::

(Fontes até o momento:
https://edisciplinas.usp.br/pluginfile.php/8658482/mod_resource/content/1/aula%2020%20-%20memoria_harris_book.pdf,
http://www.inf.ufes.br/~zegonc/material/Introducao_a_Computacao/Memoria_Resumo.pdf,
https://poloeletronica.com.br/glossario/o-que-e-memoria-de-programa-em-clps/,
https://download.mikroe.com/documents/compilers/mikroc/avr/help/avr_memory_organization.htm,
https://mfra98.wordpress.com/disciplinas/arquitetura-de-computadores/modulo-4/organizacao-de-memoria/)
