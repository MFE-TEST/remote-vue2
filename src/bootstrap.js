import Vue from 'vue';
import App from './App.vue';

function mount(el) {
  const app = new Vue({
    render: h => h(App),
  }).$mount(el);
}

const root = document.getElementById('_vue2_remote');

if (root) {
  mount(root);
}

export { mount };
