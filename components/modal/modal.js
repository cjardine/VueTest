Vue.component('modal', {
  template: `
  <div class="modal">
    <div class="modal-container">
      <div class="modal-header two-column two-column-left">
        <div><h3><slot name="modal-header"></slot></h3></div>
        <div>X</div>
      </div>
      <div class="modal-body">
          <slot name="modal-content"></slot>
      </div>
      <div class="modal-footer">
          <slot name="modal-buttons"></slot>
      </div>
    </div>
    <div class="backdrop" @click="close()"></div>
  </div>
  `,
  methods: {
    close() {
      this.$emit('modal-close');
    }
  }
});