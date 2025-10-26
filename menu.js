AFRAME.registerComponent('menu', {
  schema: {
    width:  { default: 2 },
    height: { default: 1 },
    depth:  { default: 0.06 },
    color:  { default: '#333' }
  },

  init: function () {
    const d = this.data;
    const el = this.el;

    const painel = document.createElement('a-box');
    painel.setAttribute('width', d.width);
    painel.setAttribute('height', d.height);
    painel.setAttribute('depth', d.depth);
    painel.setAttribute('material', { color: d.color });
    painel.setAttribute('position', '0 0 0');

    el.appendChild(painel);

  }
});
