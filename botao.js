AFRAME.registerComponent('botao', {
  schema: {
    label: {default: 'label'},
    width: {default: 0.15},
    height: {default: 0.15},
    depth: {default: 0.02},
    color: {default: 'black'},
    toggleable: {default: false}
  },

  init: function () {
    var el = this.el;
    var data = this.data;

    el.setAttribute('geometry', {
      primitive: 'box',
      width: data.width,
      height: data.height,
      depth: data.depth
    });

    el.setAttribute('material', {color: data.color});
    el.setAttribute('pressable', '');

    var labelEl = this.labelEl = document.createElement('a-entity');
    labelEl.setAttribute('position', '-0.6 0 0.03');
    labelEl.setAttribute('text', {
      value: data.label,
      color: 'black',
      align: 'right',
      width: 3
    });

    labelEl.setAttribute('scale', '0.75 0.75 0.75');
    el.appendChild(labelEl);

    this.bindMethods();
    el.addEventListener('pressedstarted', this.onPressedStarted);
    el.addEventListener('pressedended', this.onPressedEnded);
  },

  bindMethods: function () {
    this.onPressedStarted = this.onPressedStarted.bind(this);
    this.onPressedEnded = this.onPressedEnded.bind(this);
  },

  onPressedStarted: function () {
    this.el.setAttribute('material', {color: 'pink'});
    this.el.emit('botao-clicado', {label: this.data.label});
  },

  onPressedEnded: function () {
    this.el.setAttribute('material', {color: this.data.color});
  }
});
