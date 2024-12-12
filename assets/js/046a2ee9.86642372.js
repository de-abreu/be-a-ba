"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[265],{1127:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>n,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"ambiente-de-trabalho/a-tecnologia-FPGA","title":"A tecnologia FPGA","description":"Lucas Mello Ciosaki, Artur Domitti Camargo, Lucas Alves da Silva","source":"@site/docs/2-ambiente-de-trabalho/1-a-tecnologia-FPGA.md","sourceDirName":"2-ambiente-de-trabalho","slug":"/ambiente-de-trabalho/a-tecnologia-FPGA","permalink":"/be-a-ba/docs/ambiente-de-trabalho/a-tecnologia-FPGA","draft":false,"unlisted":false,"editUrl":"https://github.com/de-abreu/be-a-ba/edit/main/website/docs/2-ambiente-de-trabalho/1-a-tecnologia-FPGA.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"A tecnologia FPGA","description":"Lucas Mello Ciosaki, Artur Domitti Camargo, Lucas Alves da Silva"},"sidebar":"tutorialSidebar","previous":{"title":"Ambiente de Trabalho","permalink":"/be-a-ba/docs/category/ambiente-de-trabalho"},"next":{"title":"Ferramentas de Desenvolvimento de Projetos","permalink":"/be-a-ba/docs/ambiente-de-trabalho/ferramentas-de-desenvolvimento"}}');var o=i(4848),r=i(8453);const l={title:"A tecnologia FPGA",description:"Lucas Mello Ciosaki, Artur Domitti Camargo, Lucas Alves da Silva"},t="A tecnologia FPGA",n={},c=[{value:"O que \xe9 um FPGA?",id:"o-que-\xe9-um-fpga",level:2},{value:"Arquitetura de um FPGA",id:"arquitetura-de-um-fpga",level:2},{value:"Blocos L\xf3gicos Configur\xe1veis (CLBs):",id:"blocos-l\xf3gicos-configur\xe1veis-clbs",level:3},{value:"Look-Up Tables (LUTs):",id:"look-up-tables-luts",level:4},{value:"Flip-Flops:",id:"flip-flops",level:4},{value:"Uma imagem de um elemento l\xf3gico de uma placa FPGA:",id:"uma-imagem-de-um-elemento-l\xf3gico-de-uma-placa-fpga",level:4},{value:"Veja que ele possui um LUT, um Flip-Flop e dois multiplexadores.",id:"veja-que-ele-possui-um-lut-um-flip-flop-e-dois-multiplexadores",level:5},{value:"Interconex\xf5es Program\xe1veis:",id:"interconex\xf5es-program\xe1veis",level:3},{value:"Blocos de Entrada e Sa\xedda (I/O Blocks):",id:"blocos-de-entrada-e-sa\xedda-io-blocks",level:3},{value:"Uma imagem da estrutura geral de uma placa FPGA",id:"uma-imagem-da-estrutura-geral-de-uma-placa-fpga",level:3},{value:"Funcionamento e Desenvolvimento",id:"funcionamento-e-desenvolvimento",level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}];function d(e){const a={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"a-tecnologia-fpga",children:"A tecnologia FPGA"})}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:"https://www.intel.com.br/content/dam/www/central-libraries/us/en/images/max-10-dev-kit-top-photo.jpg.rendition.intel.web.480.270.jpg",alt:"Placa FPGA Intel Max 10"})}),"\n",(0,o.jsx)(a.h2,{id:"o-que-\xe9-um-fpga",children:"O que \xe9 um FPGA?"}),"\n",(0,o.jsx)(a.p,{children:"O Field-Programmable Gate Array (FPGA) \xe9 um tipo especial de circuito integrado que pode ser configurado pelo usu\xe1rio ap\xf3s a fabrica\xe7\xe3o. Essa caracter\xedstica faz dele uma ferramenta vers\xe1til e poderosa no design de sistemas digitais. Diferentemente de circuitos integrados de aplica\xe7\xe3o espec\xedfica (ASICs), cuja funcionalidade \xe9 fixa ap\xf3s a fabrica\xe7\xe3o, os FPGAs permitem uma reprograma\xe7\xe3o din\xe2mica, adaptando-se a novas funcionalidades sem a necessidade de um novo hardware."}),"\n",(0,o.jsx)(a.h2,{id:"arquitetura-de-um-fpga",children:"Arquitetura de um FPGA"}),"\n",(0,o.jsx)(a.p,{children:"A estrutura b\xe1sica de um FPGA \xe9 composta por tr\xeas elementos principais:"}),"\n",(0,o.jsx)(a.h3,{id:"blocos-l\xf3gicos-configur\xe1veis-clbs",children:"Blocos L\xf3gicos Configur\xe1veis (CLBs):"}),"\n",(0,o.jsx)(a.p,{children:"Esses blocos s\xe3o respons\xe1veis pela implementa\xe7\xe3o de fun\xe7\xf5es l\xf3gicas. Cada CLB pode ser programado para operar como diferentes tipos de portas l\xf3gicas (AND, OR, XOR, etc.) ou combina\xe7\xf5es mais complexas. Internamente, os CLBs possuem:"}),"\n",(0,o.jsx)(a.h4,{id:"look-up-tables-luts",children:"Look-Up Tables (LUTs):"}),"\n",(0,o.jsx)(a.p,{children:"Mem\xf3rias pequenas que implementam fun\xe7\xf5es l\xf3gicas tabeladas."}),"\n",(0,o.jsx)(a.h4,{id:"flip-flops",children:"Flip-Flops:"}),"\n",(0,o.jsx)(a.p,{children:"Elementos de mem\xf3ria que armazenam o estado das opera\xe7\xf5es."}),"\n",(0,o.jsx)(a.h4,{id:"uma-imagem-de-um-elemento-l\xf3gico-de-uma-placa-fpga",children:"Uma imagem de um elemento l\xf3gico de uma placa FPGA:"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"Elemento l\xf3gico de uma placa FPGA",src:i(5511).A+"",width:"339",height:"198"})}),"\n",(0,o.jsx)(a.h5,{id:"veja-que-ele-possui-um-lut-um-flip-flop-e-dois-multiplexadores",children:"Veja que ele possui um LUT, um Flip-Flop e dois multiplexadores."}),"\n",(0,o.jsx)(a.h3,{id:"interconex\xf5es-program\xe1veis",children:"Interconex\xf5es Program\xe1veis:"}),"\n",(0,o.jsx)(a.p,{children:"Redes de conex\xe3o que interligam os CLBs, permitindo a configura\xe7\xe3o de caminhos personalizados para o fluxo de dados. Essas interconex\xf5es oferecem alta flexibilidade e podem ser ajustadas para criar circuitos otimizados para diferentes aplica\xe7\xf5es."}),"\n",(0,o.jsx)(a.h3,{id:"blocos-de-entrada-e-sa\xedda-io-blocks",children:"Blocos de Entrada e Sa\xedda (I/O Blocks):"}),"\n",(0,o.jsx)(a.p,{children:"Estruturas que permitem que o FPGA interaja com o mundo externo, conectando-se a sensores, atuadores ou outros sistemas digitais. Esses blocos s\xe3o configur\xe1veis para suportar  diferentes padr\xf5es de comunica\xe7\xe3o."}),"\n",(0,o.jsx)(a.p,{children:"Al\xe9m desses componentes principais, FPGAs modernos frequentemente incluem recursos adicionais, como blocos de mem\xf3ria dedicados, multiplicadores, processadores embarcados e interfaces de comunica\xe7\xe3o de alta velocidade."}),"\n",(0,o.jsx)(a.h3,{id:"uma-imagem-da-estrutura-geral-de-uma-placa-fpga",children:"Uma imagem da estrutura geral de uma placa FPGA"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"Estrutura geral de uma placa FPGA",src:i(7814).A+"",width:"413",height:"415"})}),"\n",(0,o.jsx)(a.p,{children:"Aqui, observamos a integra\xe7\xe3o entre os I/O Blocks, as Interconex\xf5es e os CLBs"}),"\n",(0,o.jsx)(a.h2,{id:"funcionamento-e-desenvolvimento",children:"Funcionamento e Desenvolvimento"}),"\n",(0,o.jsx)(a.p,{children:"O processo de desenvolvimento para FPGAs utiliza linguagens de descri\xe7\xe3o de hardware (HDLs), como VHDL ou Verilog. A l\xf3gica desejada \xe9 descrita em n\xedvel de comportamento ou estrutural, traduzida para uma representa\xe7\xe3o l\xf3gica e ent\xe3o configurada no FPGA atrav\xe9s de um fluxo de ferramentas de s\xedntese e mapeamento."}),"\n",(0,o.jsx)(a.p,{children:"Uma das principais vantagens dos FPGAs \xe9 a sua capacidade de paraleliza\xe7\xe3o massiva, uma vez que diferentes partes do circuito podem operar simultaneamente, em contraste com as CPUs, que s\xe3o majoritariamente sequenciais."}),"\n",(0,o.jsx)(a.h2,{id:"conclus\xe3o",children:"Conclus\xe3o"}),"\n",(0,o.jsx)(a.p,{children:"Os FPGAs s\xe3o pilares fundamentais na l\xf3gica digital moderna, fornecendo uma plataforma robusta para projetos que variam desde o ensino b\xe1sico at\xe9 aplica\xe7\xf5es industriais avan\xe7adas."}),"\n",(0,o.jsx)(a.h1,{id:"exerc\xedcio",children:"Exerc\xedcio"}),"\n",(0,o.jsx)(a.p,{children:"Explique qual elemento dentro de um CLB da FPGA \xe9 respons\xe1vel por implementar fun\xe7\xf5es l\xf3gicas, e por que ele elimina a necessidade de se usar diretamente portas l\xf3gicas como AND e OR."}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Mostrar Resposta"}),(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Elemento respons\xe1vel:"}),"\nAs LUTs (Look-Up Tables) s\xe3o os elementos respons\xe1veis por implementar fun\xe7\xf5es l\xf3gicas em FPGAs."]}),(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Explica\xe7\xe3o:"}),"\nAs LUTs funcionam como tabelas pr\xe9-configuradas que armazenam os resultados de fun\xe7\xf5es l\xf3gicas para todas as combina\xe7\xf5es poss\xedveis das entradas. Isso elimina a necessidade de implementar diretamente portas l\xf3gicas individuais (como AND ou OR), porque qualquer fun\xe7\xe3o l\xf3gica pode ser representada pela configura\xe7\xe3o apropriada da LUT."]}),(0,o.jsx)(a.p,{children:"Por exemplo, uma LUT de 4 entradas pode implementar qualquer fun\xe7\xe3o l\xf3gica de 4 vari\xe1veis ao simplesmente configurar seus valores de sa\xedda para cada combina\xe7\xe3o de entrada."})]}),"\n",(0,o.jsx)(a.admonition,{title:"Contatos",type:"info",children:(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["Lucas Mello Ciosaki (14591305) - ",(0,o.jsx)(a.a,{href:"mailto:lucas.ciosaki@usp.br",children:"lucas.ciosaki@usp.br"})]}),"\n",(0,o.jsxs)(a.li,{children:["Artur Domitti Camargo (15441661) - ",(0,o.jsx)(a.a,{href:"mailto:arturdomitti@usp.br",children:"arturdomitti@usp.br"})]}),"\n",(0,o.jsxs)(a.li,{children:["Lucas Alves da Silva (11819553) - ",(0,o.jsx)(a.a,{href:"mailto:lucas.silva2002@usp.br",children:"lucas.silva2002@usp.br"})]}),"\n"]})})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7814:(e,a,i)=>{i.d(a,{A:()=>s});const s=i.p+"assets/images/fpga_general_structure-825c44b65f68e012375fa87563c1f697.png"},5511:(e,a,i)=>{i.d(a,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,a,i)=>{i.d(a,{R:()=>l,x:()=>t});var s=i(6540);const o={},r=s.createContext(o);function l(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);