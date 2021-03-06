import Vue from 'vue'
import app from './app'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
})
