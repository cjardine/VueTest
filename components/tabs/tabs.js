Vue.component('ev-tabs', {
  template: `
    <div class="tabs tabs-left">
    <ul class="tabs-navigation">
        <li v-for="tab in tabs" @click="activateTab(tab)" v-bind:key="tab.index" v-bind:class="{active: tab.isActive}">
            {{ tab.name }}
        </li>
    </ul>
    <div class="tabs-content two-row two-row-top">
    <div class="tabs-inner-content">   
    <slot></slot>
    </div>
    <div class="two-column tabs-buttons">
        <div><button @click="previousTab()" :disabled="previousDesabled">previous</button></div>
        <div><button @click="nextTab()" :disabled="nextDisabled">next</button></div>
    </div>
    </div>
    </div>
    `,
  mounted: function(el) {
    let tabsElements = Array.prototype.slice.call(this.$el.querySelectorAll('.tab'));
    let tabs = [];
    tabsElements.forEach(function(tab, index, array) {
      tabs.push({
        isActive: false,
        isDisabled: false,
        name: tab.querySelector('h1.title').innerText,
        id: index,
        el: tab
      });
    });
    this.tabs = tabs;
    this.activateTab(this.tabs[0]);
  },
  data: () => {
    return {
      tabs: function() {
        return [];
      },
      activateTabIndex: 0
    }
  },
  computed: {
    previousDesabled: function() {
      return !(this.activateTabIndex > 0);
    }
    ,
    nextDisabled: function() {
      return !(this.activateTabIndex < (this.tabs.length - 1));
    }
  },
  methods: {
    activateTab: function(tab) {
      this.tabs.forEach((currentTab, currentIndex, array) => {
        currentTab.isActive = (currentTab === tab);
        if (currentTab.isActive) {
          this.activateTabIndex = currentIndex;
          currentTab.el.style.display = 'block'
        } else {
          currentTab.el.style.display = 'none'
        }
      });
      this.$el.querySelector('.tabs-inner-content').scrollTop = 0;
    },
    nextTab: function() {
      if (this.activateTabIndex < (this.tabs.length - 1)) {
        this.activateTab(this.tabs[this.activateTabIndex + 1]);
      }
    },
    previousTab: function() {
      if (this.activateTabIndex > 0) {
        this.activateTab(this.tabs[this.activateTabIndex - 1]);
      }
    }
  }
});
