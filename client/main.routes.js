export default [
  {
    path: '/',
    name: 'home',
    component: '/imports/client/ui/pages/TodoMVC.vue'
  },
  {
    path: '/examples',
    name: 'examples',
    component: '/imports/client/ui/pages/SessionStateExample.vue',
    children: [
      {
        path: 'session-state',
        name: 'session-state',
        component: '/imports/client/ui/pages/SessionStateExample.vue'
      },
      {
        path: 'vue',
        name: 'vue',
        component: '/imports/client/ui/pages/VueExample.vue'
      }
    ]
  }

];
