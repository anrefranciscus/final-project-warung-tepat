import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import store from './store'
import Vuex from "vuex"
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import VeeValidate from 'vee-validate'

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.use(Vuex)
// router.beforeEach(async (to, from, next) => {
//     await store.restored;
//     next();
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//       if (!localStorage.getItem("token")) {
//         next({
//           path: "/login",
//         });
//       } else if (localStorage.getItem("token")) {
//         next();
//       }
//     } else if (to.matched.some((record) => record.meta.alreadyLogged)) {
//       if (localStorage.getItem("token")) {
//         next({
//           path: "/",
//         });
//       } else {
//         next();
//       }
//     } else {
//       next();
//     }
//   })

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if(authRequired && !loggedIn){
    next('/login')
  }else {
    next()
  }
})
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
  
