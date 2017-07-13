import Vue from 'vue'
import VueRouter from 'vue-router'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'

import homePage from '../components/home_page/home_page.vue'
import allproduct from '../components/all_product/all_product.vue'
import stroll from '../components/stroll/stroll.vue'
import shopcart from '../components/shop_cart/shop_cart.vue'
import usercenter from '../components/user_center/user_center.vue'
import pagecontent from '../components/page_content/pege_content.vue'
import newProduct from '../components/new_product/new_product.vue'
import housework from '../components/housework/housework.vue'
import toCook from '../components/to_cook/to_cook.vue'
import homeClothes from '../components/home_clothes/home_clothes.vue'
import life from '../components/life/life.vue'
import softOutfit from '../components/soft_outfit/soft_outfit.vue'
import bedding from '../components/bedding/bedding.vue'
import workAndTravel from '../components/work_and_travel/work_and_travel.vue'
import knowLifevc from '../components/know_lifevc/know_lifevc.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'

Vue.use(VueRouter,vueg)

export default new VueRouter({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      redirect:'/homePage/page_content'
    },
    {
      path: '/homePage',
      component:homePage,
      children:[
        {
          path: '/homePage/page_content',
          component:pagecontent
        },
        {
          path: '/homePage/newProduct',
          component:newProduct
        },
        {
          path: '/homePage/housework',
          component:housework
        },
        {
          path: '/homePage/toCook',
          component:toCook
        },
        {
          path: '/homePage/homeClothes',
          component:homeClothes
        },
        {
          path: '/homePage/life',
          component:life
        },
        {
          path: '/homePage/softOutfit',
          component:softOutfit
        },
        {
          path: '/homePage/bedding',
          component:bedding
        },
        {
          path: '/homePage/workAndTravel',
          component:workAndTravel
        },
        {
          path: '/knowLifevc',
          component:knowLifevc
        }
      ]

    },
    {
      path: '/allproduct',
      component:allproduct
    },
    {
      path: '/shopcart',
      component:shopcart
    },
    {
      path: '/stroll',
      component:stroll
    },
    {
      path: '/usercenter',
      component:usercenter
    },
    {
      path: '/login',
      component:login
    },
    {
      path: '/register',
      component:register
    }
  ]
})
