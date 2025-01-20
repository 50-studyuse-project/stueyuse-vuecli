import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router"; // 引入 VueRouter 插件
import School from './components/School.vue';
import Student from './components/Student.vue';

Vue.use(VueRouter); // 使用插件

new Vue
(
    {
        el: '#app',
        render: h => h(App),
        router: new VueRouter // 引入 VueRouter 插件后，在创建vm时就可以添加一个 router 配置，值是路由器对象，路由器对象创建一般放在 src/vue-router/index.js 中
        (
            {
                routes:
                [
                    {
                        path: '/mSchool', // #号后边的路径
                        component: School // 要展示的组件，值是.vue文件暴露的，也就是说是那个 VueComponent构造函数. 如果使用简写的话就是获取这个构造函数时的对象参数.
                    },
                    {
                        path: '/mStudent/aa/bb',
                        component: Student
                    }
                ]
            }
        )
    }
);
