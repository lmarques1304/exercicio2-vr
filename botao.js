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
      caixa.setAttribute('material', 'color', '#ff0000');
      const imagemId = el.getAttribute('data-imagem');
      if (imagemId) {
        const antigo = document.querySelector('#quadroAtivo');
        if (antigo) antigo.parentNode.removeChild(antigo);

        const quadro = document.createElement('a-image');
        quadro.setAttribute('id', 'quadroAtivo');
        quadro.setAttribute('src', imagemId);
        quadro.setAttribute('width', '2');
        quadro.setAttribute('height', '1.5');
        quadro.setAttribute('position', '0 2 -2.5');
        quadro.setAttribute('rotation', '0 0 0');
        quadro.setAttribute('side', 'double');

        document.querySelector('a-scene').appendChild(quadro);
      }
    });

    el.addEventListener('mouseleave', () => {
      caixa.setAttribute('material', 'color', d.color);
      const antigo = document.querySelector('#quadroAtivo');
      if (antigo) antigo.parentNode.removeChild(antigo);
    });
  }
});
