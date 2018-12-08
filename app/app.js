(function() {
  var elementSelector = '.dashboard-body';


  var element = document.querySelector(elementSelector);
  var template = document.createElement('template');
  template.setAttribute('v-for', '(child, index) in children');
  template.innerHTML = '<component :is="child" :key="child.name" @modal-open="modal" @modal-close="closeCallback" v-show="index === (children.length - 1)"></component>';

  element.appendChild(template);


  var app = new Vue({
    el: elementSelector,
    data: {
      children: [],
      firstName: 'Chris',
      lastName: 'Jardine',
      ready: false
    },
    listeners: {},
    mounted: function() {
      this.ready = true;
    },
    methods: {
      modal(modalObject) {
        if (this.children.length === 0 || modalObject.override) {
          this.children.push(window[modalObject.name]);
        }
      },
      log(event) {
        console.log(event);
      },
      closeCallback() {
        this.children.pop();
      }
    }
  });
})();