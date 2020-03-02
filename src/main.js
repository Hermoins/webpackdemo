import './assets/index.css'
import Vue from 'vue'
import App from './app'

console.log('call me sssshhhmmm')
new Vue({
    render: h=>h(App)
}).$mount('#app')