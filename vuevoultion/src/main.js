import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
	routes: Routes,
	mode: 'history'
});

// Custom Directives Global
Vue.directive('theme', {
	bind(el,binding,vnode){
		if(binding.value == 'wide'){
			el.style.maxWidth = "1200px"
		} else if(binding.value == 'narrow'){
			el.style.maxWidth = "800px"
		}
		if (binding.arg == 'column'){
			el.style.background = "#ddd"
			el.style.padding = "20px"
		}
	}
});

// Filters Global
Vue.filter('snippet', function(val){
	return val.slice(0,100) + "...";
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
