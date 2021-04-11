import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Books from '../views/Books'
import Rhymes from '../views/Rhymes'
import Products from '../views/Products'
import Checkout from '../views/Checkout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/rhymes',
    name: 'Rhymes',
    component: Rhymes
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
