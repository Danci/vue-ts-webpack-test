import Vue from "vue";
import BootstrapVue from 'bootstrap-vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
import App from "./components/App.vue";

console.log("bootstrap vue: ", BootstrapVue);
Vue.use(BootstrapVue);
let v = new Vue({
    el: "#app",
    template: `
    <div>
        <b-btn variant="primary">sdfg</b-btn>
        <App />
    </div>
    `,
    //data: { name: "World" },
    components: {
        App
    }
});