import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';

// import App from './App.vue';
import MyCustomElement from './components/MyCustomElement.vue';
import 'tailwindcss/tailwind.css';

Vue.config.productionTip = false;

Vue.use(vueCustomElement);

Vue.customElement('my-custom-module', MyCustomElement, {
  shadow: true,
  beforeCreateVueInstance(root) {
    const rootNode = root.el.getRootNode();

    if (rootNode instanceof ShadowRoot) {
      console.debug('shadowRoot found! Using as root node ');
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = rootNode;
    } else {
      console.debug('shadowRoot not found! Using document head ');
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = document.head;
    }

    return root;
  },
});
