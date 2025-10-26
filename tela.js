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

    // Fundo escuro da tela (parte "interna")
    const fundo = document.createElement('a-plane');
    fundo.setAttribute('width', d.largura);
    fundo.setAttribute('height', d.altura);
    fundo.setAttribute('material', { color: d.corFundo, shader: 'flat' });
    fundo.setAttribute('position', '0 0 0');

    // Moldura
    const moldura = document.createElement('a-box');
    moldura.setAttribute('width', d.largura + 0.05);
    moldura.setAttribute('height', d.altura + 0.05);
    moldura.setAttribute('depth', 0.05);
    moldura.setAttribute('material', { color: d.corMoldura });
    moldura.setAttribute('position', '0 0 0');

    // Plano transparente à frente (onde aparecem as imagens)
    const vidro = document.createElement('a-plane');
    vidro.setAttribute('width', d.largura);
    vidro.setAttribute('height', d.altura);
    vidro.setAttribute('position', '0 0 -0.03'); // ligeiramente à frente do fundo
    vidro.setAttribute('material', {
      color: '#222',
      opacity: 0.8,
      transparent: true,
      shader: 'flat',
      side: 'double'
    });

    // Montar tudo
    el.appendChild(moldura);
    el.appendChild(fundo);
    el.appendChild(vidro);

    this.vidro = vidro; // guardar referência
  },

  update: function (oldData) {
    if (oldData.imagem !== this.data.imagem && this.data.imagem) {
      // aplicar imagem ao vidro transparente
      this.vidro.setAttribute('material', 'src', this.data.imagem);
    }
  }
});
