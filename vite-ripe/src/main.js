import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

console.log(' HI: ', import.meta.env.HI);
console.log(' VITE_HI: ', import.meta.env.VITE_HI);
console.log(' HELLO: ', import.meta.env.HELLO);
console.log(' VITE_HELLO: ', import.meta.env.VITE_HELLO);
console.log(' MD: ', import.meta.env.MD);
console.log(' VITE_MD: ', import.meta.env.VITE_MD);

