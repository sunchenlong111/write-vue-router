import Vue from 'vue'
import App from './App.vue'
import router from './router/myVueRouter'
import Home from './components/Home.vue'
import About from "./components/About.vue"

Vue.config.productionTip = false

Vue.use(router)

const router1 = new router({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

new Vue({
  router: router1,
  render: h => h(App),
}).$mount('#app')
