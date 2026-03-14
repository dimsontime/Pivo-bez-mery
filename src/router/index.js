import { createRouter, createWebHistory } from 'vue-router';
import p1 from '@/views/p1.vue';
import p2 from '@/views/p2.vue';
import p3 from '@/views/p3.vue';
import p4 from '@/views/p4.vue';
import p5 from '@/views/p5.vue';

const routes = [
  {
    path: '/',
    name: 'p1',
    component: p1,
  },
  {
    path: '/p2',
    name: 'p2',
    component: p2,
  },
  {
    path: '/p3',
    name: 'p3',
    component: p3,
  },
  {
    path: '/p4',
    name: 'p4',
    component: p4,
  },
  {
    path: '/p5',
    name: 'p5',
    component: p5,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
