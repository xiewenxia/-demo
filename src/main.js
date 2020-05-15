import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import './assets/style/base.css'
Vue.use(VueRouter);
Vue.use(iView)
import routes from './router';
import '../public-path.js';

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render() {
  console.log(window.__POWERED_BY_QIANKUN__,'+PPPPPPPPPPPPPPPPPP')
    router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? '/micro' : '/',
        mode: 'history',
        routes,
    });

    instance = new Vue({
        router,
        render: h => h(App),
    }).$mount('#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('vue app bootstraped');
}

export async function mount(props) {
    console.log('props from main app', props);
    Vue.prototype['qiankun'] = props.data.isqian
    render();
}

export async function unmount() {
    instance.$destroy();
    instance = null;
    router = null;
}