import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
// import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import {store} from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode : 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
        // path : url주소
        // component: url주소로 갔을때 표시될  컴포넌트(페이지)
        path: '/news',
        name: 'news',
        component: NewsView,
        // component : createListView('NewsView')
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner'); // 이벤트를 spinner로 보냄

        // setTimeout(()=> {
          store.dispatch("FETCH_LIST", to.name)
          .then(() => {
              console.log('fetched');
              bus.$emit('end:spinner'); // 이벤트를 spinner로 보냄
              next();
          })
          .catch((error) => {
              console.log(error);
          });
        },
    },
    {
        path: '/ask',
        name: 'ask',
        component: AskView,
        // component : createListView('AskView')
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner'); // 이벤트를 spinner로 보냄

        // setTimeout(()=> {
          store.dispatch("FETCH_LIST", to.name)
          .then(() => {
              console.log('fetched');
              //bus.$emit('end:spinner'); // 이벤트를 spinner로 보냄
              next();
          })
          .catch((error) => {
              console.log(error);
          });
        }
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView,
        // component : createListView('JobsView')
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner'); // 이벤트를 spinner로 보냄

        // setTimeout(()=> {
          store.dispatch("FETCH_LIST", to.name)
          .then(() => {
              next();
          })
          .catch((error) => {
              console.log(error);
          });
        }
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    }
  ]
});