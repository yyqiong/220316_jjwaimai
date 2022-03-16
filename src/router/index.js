import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from "../pages/Login/Login.vue"
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
	routes:[
		{path:'/',component:Msite,meta:{isShow:true}},
		{path:'/msite',component:Msite,meta:{isShow:true}},
		{path:'/order',component:Order,meta:{isShow:true}},
		{path:'/profile',component:Profile,meta:{isShow:true}},
		{path:'/search',component:Search,meta:{isShow:true}},
		{path:'/login',component:Login}
	]
})

export default router