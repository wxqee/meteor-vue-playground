export default [
  {
    path: '/',
    name: 'home',
    component: '/imports/client/ui/pages/TodoMVC.vue'
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: '/imports/client/ui/pages/accounts/Login.vue',
    children: [
      {
        path: 'login',
        name: 'login',
        component: '/imports/client/ui/pages/accounts/Login.vue'
      },
      {
        path: 'register',
        name: 'register',
        component: '/imports/client/ui/pages/accounts/Register.vue'
      },
    ]
  },
  {
    path: '/examples',
    name: 'examples',
    component: '/imports/client/ui/pages/SessionStateExample.vue',
    children: [
      {
        path: 'session-state',
        name: 'session-state.example',
        component: '/imports/client/ui/pages/SessionStateExample.vue'
      },
      {
        path: 'vue',
        name: 'vue.example',
        component: '/imports/client/ui/pages/VueExample.vue'
      }
    ]
  }

];
