import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import AllToDo from './components/AllToDo.vue';
import ToDo from './components/Todo.vue';
import Doing from './components/Doing.vue';
import Done from './components/Done.vue';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
    '/all': {
        component: AllToDo
    },
    '/todo': {
        component: ToDo
    },
    '/doing': {
        component: Doing
    },
    '/done': {
        component: Done
    }
});

router.start(App, '.app_area')
