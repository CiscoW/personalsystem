import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import AppTemplate from '../components/structure/AppTemplate'
// import ChangePassword from '../components/personalcenter/ChangePassword'
import CustomTimeLine from '../components/timeline/CustomTimeLine'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppTemplate',
      component: AppTemplate,
      children: [
        {
          path: "/",
          name: "CustomTimeLine",
          component: CustomTimeLine
        },
        // {
        //   path: '/changePassword',
        //   name: 'ChangePassword',
        //   component: ChangePassword
        // }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]

});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('user');
  }
  let user = sessionStorage.getItem('user');
  if (!user && to.path !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next();
  }
});

export default router
