import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import * as element from '@element-plus/icons-vue';
import elementplus from 'element-plus';
import router_1 from './components/router_1.vue';
import router_2 from './components/router_2.vue';
import shopList from './components/shopList.vue';
import 'element-plus/dist/index.css'
import blog_details from './components/blog_details.vue';
import shopDetail from './components/shopDetail.vue';
import blog_edit from './components/blog_edit.vue';
import user_info from './components/user_info.vue';
import other_user_info from './components/other_user_info.vue';
import user_info_edit from './components/user_info_edit.vue';
import login from './components/login.vue';
import login_password from './components/login_password.vue';
const routes = [{
    path: '/1', component: router_1,
},
{
    path: '/', component: router_1,
},
{
    path: '/2', component: router_2,
},
{
    path: '/shopList', component: shopList
},
{
    path: '/blog_details', component: blog_details,
},
{
    path: '/shop_details', component: shopDetail,
},
{ path: '/blog_edit', component: blog_edit },
{ path: '/user_info', component: user_info },
{ path: '/other_user_info', component: other_user_info },
{ path: '/user_info_edit', component: user_info_edit },
{ path: '/login', component: login },
{ path: '/login_password', component: login_password },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
const app = createApp(App);
for (const [key, component] of Object.entries(element)) {
    app.component(key, component)
}
app.use(elementplus);
app.use(router).mount('#app');
//记住 所有的use都应该在mount之前啊

