AFRAME.registerComponent('menu', {
  init: function () {
    var el = this.el;
    var menuBackGroundEl = document.createElement('a-entity');
    menuBackGroundEl.setAttribute('geometry', {
      primitive: 'box',
      width: 2,
      height: 1,
      depth: 0.06
    });
    menuBackGroundEl.setAttribute('material', {
      color: 'white'
    });
    menuBackGroundEl.setAttribute('position', '0 0 -0.025');
    el.appendChild(menuBackGroundEl);
  }
});