AFRAME.registerComponent('botao', {
  schema: {
    width:  { default: 0.15 },
    height: { default: 0.15 },
    depth:  { default: 0.02 },
    color:  { default: 'black' },
    label:  { default: '' }
  },

  init: function () {
    const d = this.data;
    const el = this.el;

    const caixa = document.createElement('a-box');
    caixa.setAttribute('width', d.width);
    caixa.setAttribute('height', d.height);
    caixa.setAttribute('depth', d.depth);
    caixa.setAttribute('material', { color: d.color });
    caixa.setAttribute('position', '0 0 0');
    caixa.classList.add('clickable');
    el.appendChild(caixa);

    if (d.label) {
      const texto = document.createElement('a-text');
      texto.setAttribute('value', d.label);
      texto.setAttribute('align', 'left');
      texto.setAttribute('width', 2);
      texto.setAttribute('color', 'white');
      texto.setAttribute('position', `${d.width / 2 + 0.08} 0 ${d.depth / 2 + 0.001}`);
      el.appendChild(texto);
    }

    el.addEventListener('mouseenter', () => {
      console.log('Cursor passou por cima!');
      caixa.setAttribute('material', 'color', '#ff0000');
    });

    el.addEventListener('mouseleave', () => {
      caixa.setAttribute('material', 'color', d.color);
    });

    el.addEventListener('click', () => {
      console.log('Botão clicado!');
      const imagem = el.getAttribute('data-imagem');
      const tela = document.querySelector('#tela');
      if (tela && imagem) {
        tela.setAttribute('tela', 'imagem', imagem);
      }
    });
  }
});
