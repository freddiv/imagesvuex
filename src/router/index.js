/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomePage from '../components/HomePage' 
import Authenticate from '../components/Authenticate' 
import AddImages from '../components/AddImages' 
import Gallery from '../components/Gallery'

export default new Router({
   mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/oath2/callback',
      name: 'Authenticate',
      component: Authenticate
    },
    {
      path: '/AddImages',
      name: 'AddImages',
      component: AddImages
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },
  ]
});
