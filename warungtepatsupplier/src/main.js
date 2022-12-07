import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import store from './store'


router.beforeEach(async (to, from, next) => {
    await store.restored;
    next();
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!localStorage.getItem("token")) {
        next({
          path: "/login",
        });
      } else if (localStorage.getItem("token")) {
        next();
      }
    } else if (to.matched.some((record) => record.meta.alreadyLogged)) {
      if (localStorage.getItem("token")) {
        next({
          path: "/",
        });
      } else {
        next();
      }
    } else {
      next();
    }
  })

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
  
