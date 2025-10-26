Exercício 2 — Visualizador 3D Interativo de Imagens

Autora: Lara Costa
Unidade Curricular: Interação em Amientes Virtuais


- Objetivo

Desenvolver uma interface de utilizador (UI) tridimensional num ambiente de Realidade Virtual (VR) que permita selecionar e visualizar conteúdos multimédia (imagens ou vídeos) num ecrã virtual de grandes dimensões.
O projeto foi implementado com A-Frame, uma framework baseada em HTML e JavaScript para criação de experiências VR na Web.


- Descrição da Implementação

O ambiente 3D recria uma sala virtual com chão, teto, paredes e iluminação ambiente.
Dentro desse espaço, existe uma interface de menu interativa composta por botões que permitem visualizar quadros famosos.
Cada botão representa um quadro.
Ao olhar (posicionar o cursor) sobre um botão:
  - O botão muda de cor (para vermelho), indicando interatividade.
  - O quadro correspondente aparece no espaço virtual, simulando um ecrã ou moldura.
Ao sair do botão, o quadro desaparece e o botão volta à sua cor original.


- Componentes Principais

`menu.js` - Cria o painel do menu onde estão posicionados os botões interativos.

`botao.js` - Define o comportamento dos botões:
  - Criação do botão e do texto descritivo.
  - Mudança de cor ao passar o cursor.
  - Exibição temporária da imagem correspondente.

`tela.js` - Responsável pela criação de uma estrutura de moldura virtual, composta por:
  - Um plano de fundo.
  - Uma moldura 3D (a-box).
  - Um plano frontal ligeiramente transparente (simulando vidro).


- Imagens Utilizadas

Os quadros encontram-se na pasta `Textures/Quadros/`, são os seguintes:
1. Mona Lisa — Leonardo da Vinci
2. O Grito — Edvard Munch
3. Noite Estrelada — Vincent van Gogh
4. Guernica — Pablo Picasso
5. A Persistência da Memória — Salvador Dalí
6. A Rapariga com Brinco de Pérola — Johannes Vermeer


- Interação

O utilizador interage com o menu através de um cursor branco (controlado pelo olhar ou pelo rato).
A experiência é compatível com:
  - Controlo por olhar (desktop/mobile)
  - Laser-controls em dispositivos VR compatíveis.


- Tecnologias Utilizadas

  - A-Frame
  - HTML5 / JavaScript
  - Componentes personalizados (`botao`, `menu`, `tela`)


- Como Executar

1. Abrir o link através do telemóvel ou headset VR.
2. Posicionar o cursor sobre um botão — o quadro correspondente aparecerá no ambiente.


- Link para a experiência VR: https://lmarques1304.github.io/exercicio2-vr/