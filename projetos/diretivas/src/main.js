import { createApp } from 'vue';
import App from './App.vue';

import information from './directives/information';
import position from './directives/position';
import test from './directives/test';
import text from './directives/text';

const Vue = createApp(App);

Vue.directive("teste", test);
Vue.directive("texto", text);
Vue.directive("position", position);
Vue.directive("information", information);

Vue.mount('#app');
