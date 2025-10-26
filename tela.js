AFRAME.registerComponent('tela', {
  schema: {
    largura: { default: 2 },
    altura:  { default: 1.2 },
    corMoldura: { default: '#222' },
    corFundo: { default: '#000' },
    imagem:  { default: '' }
  },

  init: function () {
    const d = this.data;
    const el = this.el;

    const plano = document.createElement('a-plane');
    plano.setAttribute('width', d.largura);
    plano.setAttribute('height', d.altura);
    plano.setAttribute('material', { color: d.corFundo, shader: 'flat' });
    plano.setAttribute('position', '0 0 0');

    const moldura = document.createElement('a-box');
    moldura.setAttribute('width', d.largura + 0.05);
    moldura.setAttribute('height', d.altura + 0.05);
    moldura.setAttribute('depth', 0.05);
    moldura.setAttribute('material', { color: d.corMoldura });
    moldura.setAttribute('position', `0 0 -0.03`);

    el.appendChild(moldura);
    el.appendChild(plano);

    this.plano = plano;
  },

  update: function (oldData) {
    if (oldData.imagem !== this.data.imagem && this.data.imagem) {
      this.plano.setAttribute('material', 'src', this.data.imagem);
    }
  }
});
