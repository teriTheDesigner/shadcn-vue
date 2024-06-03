import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Drag from './views/Drag.vue'
import Home from './views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/drag-and-drop',
    name: 'DragAndDrop',
    component: Drag
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
