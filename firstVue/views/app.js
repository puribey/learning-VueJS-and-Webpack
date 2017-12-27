// making an instance 

new Vue({
	// bring element from html
	el:'#vue-app',
	// stored data for this vue instance 
	data: {
		name: 'Puri',
		job: 'Front-end dev',
		website: 'https://vuejs.org/v2/guide/',
		websiteTag: '<a href="https://vuejs.org/v2/guide/">Vue web</a>',
		age: 25,
		x:0,
		y:0,
		txtOne: '',
		txtTwo: '',
		number: 20,
		a: 0,
		b: 0,
		available: false,
		nearby: false,
		error: false,
		success: false,
		characters:["Mario","Luigi","Yoshi","Bowser"],
		ninjas: [
			{name:"Ryu", age:25},
			{name:"Yoshi", age:35},
			{name:"Ken", age:40}
		]
	},
	methods: {
		greet: function(time){
			return 'Good ' + time + ' ' + this.name; // this takes whatever is on this intance data
		},
		add: function(inc){
			this.age += inc;
		},
		subtract: function(dec) {
			this.age -= dec;
		},
		updateXY: function(e){
			// console.log(e);
			this.x= e.offsetX;
			this.y= e.offsetY;
		},
		alertSth: function(){
			alert("This is an alert");
		},
		logName: function(){
			console.log('you entered your name');
		},
		logAge: function(){
			console.log('you entered your age');
		}
	},
	computed: {
		addToA: function(){
			console.log("addToA");
			return this.a + this.number;
		},
		addToB: function(){
			console.log("addToB");
			return this.b + this.number;
		},
		compClasses: function(){
			return {
				available: this.available,
				nearby: this.nearby
			}
		}
	}
});