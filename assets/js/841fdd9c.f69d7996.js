"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4090],{3887:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>t});const o=JSON.parse('{"id":"processador-digital/memoria-de-programa-e-dados","title":"Mem\xf3ria de Programa e de Dados","description":"Grupo 12","source":"@site/docs/5-processador-digital/4-memoria-de-programa-e-dados.md","sourceDirName":"5-processador-digital","slug":"/processador-digital/memoria-de-programa-e-dados","permalink":"/be-a-ba/docs/processador-digital/memoria-de-programa-e-dados","draft":false,"unlisted":false,"editUrl":"https://github.com/de-abreu/be-a-ba/edit/main/website/docs/5-processador-digital/4-memoria-de-programa-e-dados.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Mem\xf3ria de Programa e de Dados","description":"Grupo 12"},"sidebar":"tutorialSidebar","previous":{"title":"Registradores","permalink":"/be-a-ba/docs/processador-digital/registradores"},"next":{"title":"Integra\xe7\xe3o","permalink":"/be-a-ba/docs/processador-digital/integracao"}}');var s=r(4848),i=r(8453);const n={title:"Mem\xf3ria de Programa e de Dados",description:"Grupo 12"},d="Mem\xf3ria de Programa e de Dados",m={},t=[{value:"Tipos de Mem\xf3rias",id:"tipos-de-mem\xf3rias",level:2},{value:"Mem\xf3ria RAM (Random Access Memory)",id:"mem\xf3ria-ram-random-access-memory",level:3},{value:"DRAM (Dynamic RAM)",id:"dram-dynamic-ram",level:4},{value:"SRAM (Static RAM)",id:"sram-static-ram",level:4},{value:"Mem\xf3ria ROM (Read Only Memory)",id:"mem\xf3ria-rom-read-only-memory",level:3},{value:"Mem\xf3rias na CPU",id:"mem\xf3rias-na-cpu",level:2},{value:"Arquitetura de Mem\xf3ria de Programa",id:"arquitetura-de-mem\xf3ria-de-programa",level:2},{value:"Endere\xe7o",id:"endere\xe7o",level:3},{value:"Largura da palavra",id:"largura-da-palavra",level:3},{value:"Profundidade da mem\xf3ria",id:"profundidade-da-mem\xf3ria",level:3},{value:"Ativa\xe7\xe3o",id:"ativa\xe7\xe3o",level:3},{value:"Implementa\xe7\xe3o em VHDL",id:"implementa\xe7\xe3o-em-vhdl",level:2},{value:"Declara\xe7\xe3o de Tipos",id:"declara\xe7\xe3o-de-tipos",level:3},{value:"M\xe9todos de Descri\xe7\xe3o",id:"m\xe9todos-de-descri\xe7\xe3o",level:3},{value:"Exemplos com Diferentes Abordagens",id:"exemplos-com-diferentes-abordagens",level:3},{value:"EXERC\xcdCIOS:",id:"exerc\xedcios",level:2},{value:"Refer\xeancias:",id:"refer\xeancias",level:3}];function l(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"mem\xf3ria-de-programa-e-de-dados",children:"Mem\xf3ria de Programa e de Dados"})}),"\n",(0,s.jsxs)(a.p,{children:["A Mem\xf3ria de Programa e a Mem\xf3ria de Dados s\xe3o \xe1reas de armazenamento de informa\xe7\xf5es na CPU, que se comunicam com as unidades de controle (UC) e de l\xf3gica e aritim\xe9tica (ULA).\nA ",(0,s.jsx)(a.strong,{children:"Mem\xf3ria de Programa"})," \xe9 respons\xe1vel por armazenar as intru\xe7\xf5es de programa\xe7\xe3o, ou seja, o programa em si. Essas instru\xe7\xf5es s\xe3o escritas pelo programador e definem as a\xe7\xf5es que a CPU deve executar.\nA ",(0,s.jsx)(a.strong,{children:"Mem\xf3ria de Dados"}),", por sua vez, armazena os valores de vari\xe1veis utilizadas pelo programa. Ambos os valores de mem\xf3ria s\xe3o posteriormente armazenados em registradores para o uso da CPU."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"https://github.com/user-attachments/assets/26f4a7f2-7bef-4997-93c3-59fb72732004",alt:"pasted image 0 (2)"})}),"\n",(0,s.jsx)(a.h2,{id:"tipos-de-mem\xf3rias",children:"Tipos de Mem\xf3rias"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.img,{src:"https://github.com/user-attachments/assets/db441e8a-755f-4dd6-a81e-27e0ecf0510a",alt:"sram-and-dram (1)"}),"\nH\xe1 diversos tipos de mem\xf3rias, mas as mais comuns s\xe3o:"]}),"\n",(0,s.jsx)(a.h3,{id:"mem\xf3ria-ram-random-access-memory",children:"Mem\xf3ria RAM (Random Access Memory)"}),"\n",(0,s.jsx)(a.p,{children:"\xc9 uma mem\xf3ria vol\xe1til, ou seja, perde o seu conte\xfado uma vez que o sistema \xe9 desligado, por isso \xe9 necess\xe1rio realizar o backup para evitar perda de dados. Por outro lado, ela permite escrita e leitura de forma eficiente e \xe9 a mem\xf3ria principal do computador.\nH\xe1 dois tipos principais de mem\xf3ria RAM:"}),"\n",(0,s.jsx)(a.h4,{id:"dram-dynamic-ram",children:"DRAM (Dynamic RAM)"}),"\n",(0,s.jsx)(a.p,{children:"\xc9 necess\xe1rio que os valores armazenados sejam atualizados (reescritos) periodicamente e ap\xf3s ser lido. Isso acontece porque os valores de bits s\xe3o armazenados em um capacitor e, portanto, seu vazamento de carga (aos poucos, com o tempo, ou ap\xf3s uma leitura) afeta o valor armazenado."}),"\n",(0,s.jsx)(a.h4,{id:"sram-static-ram",children:"SRAM (Static RAM)"}),"\n",(0,s.jsx)(a.p,{children:"Ao contr\xe1rio da DRAM, os valores armazenados permanecem guardados de forma est\xe1tica na mem\xf3ria, sem a necessidade de atualizar os valores dinamicamente. Isso ocorre porque, nesse caso, os valores s\xe3o armazenados utilizando flip-flops."}),"\n",(0,s.jsx)(a.h3,{id:"mem\xf3ria-rom-read-only-memory",children:"Mem\xf3ria ROM (Read Only Memory)"}),"\n",(0,s.jsx)(a.p,{children:"\xc9 uma mem\xf3ria n\xe3o vol\xe1til, ou seja, ret\xe9m os dados mesmo que o sistema seja desligado. Ela permite leitura r\xe1pida, mas n\xe3o permite escrita, com exce\xe7\xe3o de alguns tipos."}),"\n",(0,s.jsx)(a.h2,{id:"mem\xf3rias-na-cpu",children:"Mem\xf3rias na CPU"}),"\n",(0,s.jsx)(a.p,{children:"Agora que vimos os diferentes tipos de mem\xf3rias, podemos classificar as mem\xf3rias presentes na CPU, que citamos anteriormente."}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Mem\xf3ria de Programa:"})," Por ser usada para armazenar permanentemente o programa que est\xe1 sendo executado e n\xe3o haver necessidade de reescrev\xea-lo uma vez salvo, a Mem\xf3ria de Programa \xe9 do tipo ",(0,s.jsx)(a.strong,{children:"ROM"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Mem\xf3ria de Dado:"})," J\xe1 a Mem\xf3ria de Dados \xe9 usada para o armazenamento tempor\xe1rio de resultados imediatos e de vari\xe1veis, havendo a possibilade reescrever o conte\xfado. Sendo assim, \xe9 usada a mem\xf3ria ",(0,s.jsx)(a.strong,{children:"RAM"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"arquitetura-de-mem\xf3ria-de-programa",children:"Arquitetura de Mem\xf3ria de Programa"}),"\n",(0,s.jsx)(a.h3,{id:"endere\xe7o",children:"Endere\xe7o"}),"\n",(0,s.jsx)(a.p,{children:"Os componentes de mem\xf3ria necessitam de um endere\xe7o para saber em qual de suas linhas est\xe1 armazenado o valor desejado, para ter acesso \xe0 palavra de mem\xf3ria e retorn\xe1-la ao componente solicitante. Em geral, este endere\xe7o \xe9 fornecido pelo \u201cProgram Counter\u201d ou por um valor de \u201cJUMP\u201d."}),"\n",(0,s.jsx)(a.h3,{id:"largura-da-palavra",children:"Largura da palavra"}),"\n",(0,s.jsx)(a.p,{children:"Agora que sabemos que para cada endere\xe7o na mem\xf3ria temos uma palavra, precisamos definir qual a largura dessa palavra, ou seja, a quantidade de bits que cada palavra de mem\xf3ria possui. Assim, para mem\xf3ria de largura oito, teremos oito bits em sequ\xeancia para representar cada palavra de mem\xf3ria. A largura geralmente \xe9 definida como uma pot\xeancia de dois."}),"\n",(0,s.jsx)(a.h3,{id:"profundidade-da-mem\xf3ria",children:"Profundidade da mem\xf3ria"}),"\n",(0,s.jsx)(a.p,{children:"Sabemos como achar a linha da mem\xf3ria que queremos ler e a quantidade de informa\xe7\xe3o que h\xe1 dentro dela. Assim sendo, tamb\xe9m temos que definir quantas palavras de mem\xf3ria queremos, que \xe9 a profundidade da mem\xf3ria. Normalmente, a profundidade tamb\xe9m \xe9 dada em pot\xeancia de dois e, de forma grosseira, dizemos que \xe9 o tamanho da mem\xf3ria."}),"\n",(0,s.jsx)(a.h3,{id:"ativa\xe7\xe3o",children:"Ativa\xe7\xe3o"}),"\n",(0,s.jsx)(a.p,{children:"Podemos habilitar a leitura e escrita na mem\xf3ria com flags definidas na CPU, al\xe9m do sincronismo que a mesma deve ter com o clock. Isso garante o funcionamento adequado de fun\xe7\xf5es como escrita, leitura e busca na mem\xf3ria."}),"\n",(0,s.jsx)(a.h2,{id:"implementa\xe7\xe3o-em-vhdl",children:"Implementa\xe7\xe3o em VHDL"}),"\n",(0,s.jsx)(a.p,{children:"No contexto de desenvolvimento em VHDL, a mem\xf3ria pode ser descrita atrav\xe9s de diferentes abordagens:"}),"\n",(0,s.jsx)(a.h3,{id:"declara\xe7\xe3o-de-tipos",children:"Declara\xe7\xe3o de Tipos"}),"\n",(0,s.jsx)(a.p,{children:"Em VHDL, a mem\xf3ria pode ser declarada utilizando arrays ou tipos personalizados, permitindo flexibilidade na defini\xe7\xe3o da estrutura de armazenamento."}),"\n",(0,s.jsx)(a.h3,{id:"m\xe9todos-de-descri\xe7\xe3o",children:"M\xe9todos de Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Descri\xe7\xe3o Comportamental:"})," Foca no comportamento funcional da mem\xf3ria, geralmente h\xe1 um \u201cprocess\u201d dentro das mesmas.\n",(0,s.jsx)(a.strong,{children:"Descri\xe7\xe3o Estrutural:"})," Detalha a estrutura interna da mem\xf3ria, mais focada em como esta \xe9 constru\xedda a n\xedvel de hardware, com suas portas l\xf3gicas e blocos auxiliares.\n",(0,s.jsx)(a.strong,{children:"Descri\xe7\xe3o Sint\xe9tica:"})," Detalha como \xe9 o fluxo de dados dentro do componente."]}),"\n",(0,s.jsx)(a.h3,{id:"exemplos-com-diferentes-abordagens",children:"Exemplos com Diferentes Abordagens"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Abordagem comportamental"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-vhdl",children:"architecture behavioral of memory is\n  type mem_type is array (0 to 255) of std_logic_vector(7 downto 0);\n  signal memory_array : mem_type;\n\n  begin\n    process(clk)\n      begin\n      if rising_edge(clk) then\n        -- L\xf3gica de escrita\n        if we = '1' then\n          memory_array(to_integer(unsigned(address))) <= data_in;\n        end if;\n        -- L\xf3gica de leitura\n        data_out <= memory_array(to_integer(unsigned(address)));\n      end if;\n    end process;\nend architecture;\n"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Abordagem estrutural"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-vhdl",children:"architecture structural of memory is\n  component storage_cell\n  port(\n    data_in : in std_logic;\n    write_enable : in std_logic;\n    data_out : out std_logic\n  );\n  end component;\n\n  signal cell_connections : std_logic_vector(255 downto 0);\n  begin\n    -- Instancia\xe7\xe3o de c\xe9lulas de mem\xf3ria individuais\n    memory_cells: for i in 0 to 255 generate\n      cell: storage_cell\n      port map(\n        data_in => data_in(i),\n        write_enable => we,\n        data_out => cell_connections(i)\n      );\n    end generate;\nend architecture;\n\n"})}),"\n",(0,s.jsx)(a.p,{children:"Esses s\xe3o exemplos da implementa\xe7\xe3o de mem\xf3rias do tipo RAM em VHDL, voc\xea tamb\xe9m pode obter implementa\xe7\xf5es de mem\xf3rias em vhdl em softwares como o \u201cQuartus\u201d. Um exemplo de implementa\xe7\xe3o de uma mem\xf3ria ROM seria:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-vhdl",children:'architecture rom_behavior of program_memory is\n  type rom_type is array (0 to 255) of std_logic_vector(15 downto 0);\n  constant rom_content : rom_type := (\n    0 => x"1234", -- Conte\xfado pr\xe9-definido\n    1 => x"5678",\n    others => x"0000"\n  );\n\n  begin\n    process(address)\n      begin\n      data_out <= rom_content(to_integer(unsigned(address)));\n    end process;\nend architecture;\n'})}),"\n",(0,s.jsx)(a.p,{children:"Para o processador digital, voc\xea tamb\xe9m pode optar por implementar apenas a mem\xf3ria RAM e definir a mem\xf3ria inicial a partir de um arquivo .mif ou .hex. Por\xe9m, a implementa\xe7\xe3o \xe9 mais complexa, geralmente utiliza-se dessa t\xe9cnica com blocos de mem\xf3ria gerados por programas como o \u201cQuartus\u201d."}),"\n",(0,s.jsx)(a.h2,{id:"exerc\xedcios",children:"EXERC\xcdCIOS:"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Precisando de uma mem\xf3ria que cubra pelo menos do endere\xe7o 0 a 255, quantos bits \xe9 necess\xe1rio para representar a entrada de endere\xe7o?\n",(0,s.jsx)(a.strong,{children:"Resp.:"})," ",(0,s.jsx)(a.em,{children:"8 bits"})]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Supondo uma implementa\xe7\xe3o de processador que necessite que todos os componentes se baseie no mesmo ciclo de clock, qual seria uma abordagem v\xe1lida para evitar manipula\xe7\xf5es incorretas na mem\xf3ria?\n",(0,s.jsx)(a.strong,{children:"Resp.:"})," ",(0,s.jsx)(a.em,{children:'Utilizar flags de ativa\xe7\xe3o para a escrita ou mesmo desabilitar o progresso da leitura da mem\xf3ria pela desativa\xe7\xe3o tempor\xe1ria do "program counter", mantendo a mem\xf3ria no mesmo endere\xe7o.'})]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Tendo uma mem\xf3ria que cubra do endere\xe7o 0 a 255, com palavras de 8 bits, quantos bits no m\xe1ximo \xe9 poss\xedvel armazenar nessa mem\xf3ria?\n",(0,s.jsx)(a.strong,{children:"Resp.:"})," ",(0,s.jsx)(a.em,{children:"2048 bits"})]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Qual seria outra forma de endere\xe7ar o progresso da leitura da mem\xf3ria sem utilizar um \u201cprogram counter\u201d?\n",(0,s.jsx)(a.strong,{children:"Resp.:"})," ",(0,s.jsx)(a.em,{children:"Utilizar outro endere\xe7o advindo de um componente, como por exemplo os JUMPs, geralmente valores advindos de um registrador."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"refer\xeancias",children:"Refer\xeancias:"}),"\n",(0,s.jsxs)(a.p,{children:["BROWN, S.; VRANESIC, Z. ",(0,s.jsx)(a.strong,{children:"Fundamentals of Digital Logic with Verilog Design"}),". 3. ed. New York: McGraw-Hill, 2014."]}),"\n",(0,s.jsxs)(a.p,{children:["INF-UFES. ",(0,s.jsx)(a.strong,{children:"Introdu\xe7\xe3o \xe0 computa\xe7\xe3o: Mem\xf3ria - Resumo"}),". Dispon\xedvel em: ",(0,s.jsx)(a.a,{href:"http://www.inf.ufes.br/~zegonc/material/Introducao_a_Computacao/Memoria_Resumo.pdf",children:"http://www.inf.ufes.br/~zegonc/material/Introducao_a_Computacao/Memoria_Resumo.pdf"}),". Acesso em: 10 dez. 2024."]}),"\n",(0,s.jsxs)(a.p,{children:["POLO ELETR\xd4NICA. ",(0,s.jsx)(a.strong,{children:"O que \xe9 mem\xf3ria de programa em CLPs?"})," Dispon\xedvel em: ",(0,s.jsx)(a.a,{href:"https://poloeletronica.com.br/glossario/o-que-e-memoria-de-programa-em-clps/",children:"https://poloeletronica.com.br/glossario/o-que-e-memoria-de-programa-em-clps/"}),". Acesso em: 10 dez. 2024."]}),"\n",(0,s.jsxs)(a.p,{children:["MIKROE. ",(0,s.jsx)(a.strong,{children:"AVR Memory Organization"}),". Dispon\xedvel em: ",(0,s.jsx)(a.a,{href:"https://download.mikroe.com/documents/compilers/mikroc/avr/help/avr_memory_organization.htm",children:"https://download.mikroe.com/documents/compilers/mikroc/avr/help/avr_memory_organization.htm"}),". Acesso em: 10 dez. 2024."]}),"\n",(0,s.jsxs)(a.p,{children:["MORAIS, M. F. R. A. ",(0,s.jsx)(a.strong,{children:"Organiza\xe7\xe3o de Mem\xf3ria"}),". Dispon\xedvel em: ",(0,s.jsx)(a.a,{href:"https://mfra98.wordpress.com/disciplinas/arquitetura-de-computadores/modulo-4/organizacao-de-memoria/",children:"https://mfra98.wordpress.com/disciplinas/arquitetura-de-computadores/modulo-4/organizacao-de-memoria/"}),". Acesso em: 10 dez. 2024."]}),"\n",(0,s.jsxs)(a.p,{children:["NATIONIN. ",(0,s.jsx)(a.strong,{children:"SRAM and DRAM: Digital Electronics with Composite Memory"}),". Dispon\xedvel em: ",(0,s.jsx)(a.a,{href:"https://www.nationin.com/post/sram-and-dram-digital-electronics-with-composite-memory",children:"https://www.nationin.com/post/sram-and-dram-digital-electronics-with-composite-memory"}),". Acesso em: 10 dez. 2024."]}),"\n",(0,s.jsxs)(a.p,{children:["MATHA ELECTRONICS. ",(0,s.jsx)(a.strong,{children:"A Complete Guide on 8051 Microcontroller Memory Organization"}),". Dispon\xedvel em: ",(0,s.jsx)(a.a,{href:"https://www.mathaelectronics.com/a-complete-guide-on-8051-microcontroller-memory-organization/",children:"https://www.mathaelectronics.com/a-complete-guide-on-8051-microcontroller-memory-organization/"}),". Acesso em: 10 dez. 2024."]}),"\n",(0,s.jsx)(a.admonition,{title:"Autores",type:"info",children:(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Beatriz Alves dos Santos"}),"\n",(0,s.jsx)(a.li,{children:"Henrique Vieira Lima"}),"\n"]})})]})}function c(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,a,r)=>{r.d(a,{R:()=>n,x:()=>d});var o=r(6540);const s={},i=o.createContext(s);function n(e){const a=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),o.createElement(i.Provider,{value:a},e.children)}}}]);