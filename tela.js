AFRAME.registerComponent('tela', {
  schema: {
    largura: {default: 2},
    altura: {default: 1.2},
    imagem: {default: ''}
  },

  init: function () {
    var el = this.el;

    var telaEl = document.createElement('a-plane');
    telaEl.setAttribute('width', this.data.largura);
    telaEl.setAttribute('height', this.data.altura);
    telaEl.setAttribute('material', {
      color: '#FFFFFF',
      src: this.data.imagem || '',
      shader: 'flat'
    });

    var molduraEl = document.createElement('a-box');
    molduraEl.setAttribute('width', this.data.largura + 0.05);
    molduraEl.setAttribute('height', this.data.altura + 0.05);
    molduraEl.setAttribute('depth', 0.05);
    molduraEl.setAttribute('material', {color: '#222'});
    molduraEl.setAttribute('position', '0 0 -0.03');

    el.appendChild(molduraEl);
    el.appendChild(telaEl);

    this.telaEl = telaEl;
  },

  update: function (oldData) {
    if (oldData.imagem !== this.data.imagem && this.data.imagem) {
      this.telaEl.setAttribute('material', 'src', this.data.imagem);
    }
  }
});
