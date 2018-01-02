// creating components 
Vue.component('greeting',{
	template: '<p>Hey there, I am a resuable component. My name is {{name}}! <button @click="changeName">Change Name</button></p>',
	data: function(){ //same as data(){}
		return {
			name: 'Yoshi'
		}
	},
	methods: {
		changeName: function(){
			this.name = 'Mario';
		}
	}
});

// making many instances

var one = new Vue({
	// bring element from html
	el:'#vue-app-one',
	// stored data for this vue instance 
	data: {
		title: 'Vue one'
	},
	methods: {
		
	},
	computed: {
		greet: function(){
			return 'Hello from app one';
		}
	}
});

var two = new Vue({
	// bring element from html
	el:'#vue-app-two',
	// stored data for this vue instance 
	data: {
		title: 'Vue two',
		output: 'Your fav food is: '
	},
	methods: {
		changeTitle: function(){
			one.title = 'Title changed';
		},
		readRefs: function (){
			console.log(this.$refs.input.value);
			this.output = this.$refs.input.value
		}
	},
	computed: {
		greet: function(){
			return 'Hello from app two';
		}
	}
});


two.title = "Change title from outside!";