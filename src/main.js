import Vue from 'vue';
import App from './app.vue';
import 'bootstrap';

import './style/app.scss';

import '../node_modules/animate.css';

var body = document.getElementsByTagName('body')[0];
var removeLoading = function() {

  setTimeout(function() {
    body.className = '';

  }, 3000);
};
removeLoading();
new Vue({
  el: '#app',
  render: h => h(App),
});