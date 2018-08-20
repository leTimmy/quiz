import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Quiz from './components/quiz/quiz.vue';
import Result from './components/result/result.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/quiz', component: Quiz},
    {path: '/result', name: 'result', component: Result, props: true}
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});