# vuevolution

> Best way of learning Vuejs 

## Slots 

Slots allow us to input data from a parent component into a child component. 

    *in App.vue (parent)*
	     <div slot="form-header">
	        <h3>This is the title of the form</h3>
	        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
	     </div> 

    *in formHelper.vue (child)*
     	<slot name="form-header"></slot>

* In order to receive dynamic data we also have to define it on the parent component 
* Slots are useful when we want to create a general structure that can be modify. Ex: form template. 

## Dynamic Components

    *in App.vue*
    <keep-alive> <!-- keep info changed in the component when we go from one to another -->
      <component v-bind:is="component"></component>
    </keep-alive>
    <button @click="component= 'form-one'">Show form one</button>
    <button @click="component= 'form-two'">Show form one</button>

* We can dynamicly output components to the browser in particular places in our template.

## Input, checkbox and select binding


    *in addBlog.vue* --> see code
* We can use input binding to clone what we write in an input inside another section of our page.
* v-model.lazy="blog.title" is to make the content output when we change inputs, press tab or move out of the input. 
---

## HTTP Requests in Vue


### POST blog 

1. Install vue resource: npm install vue-resource --save
2. Create a button to submit blog post. 

    <button class="btnSubmit" @click.prevent="postForm">Add Blog</button>

3. Create method to post request. 

    methods: {
        postForm: function(){ // use of vue-resourse 
            this.$http.post('https://jsonplaceholder.typicode.com/posts',{
                title: this.blog.title,
                body: this.blog.content,
                userID: 1
            }).then(function(data){
                console.log(data);
                this.submitted = true; //shows text of success 
            });
        }
    }

### GET blogs 

    *in showBlogs.vue*

    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        // console.log(data);
        this.blogs = data.body.slice(0,10); // blogs is created in data()
       });
    }

1. Create a new component to output blogs in our data base. 
2. Inside "created" we are going to make the get request of info from the API. 

--- 

## Custom Directives 

     // Custom Directives 
     Vue.directive('rainbow', {
        bind(el,binding,vnode){
            el.style.color = "#" + Math.random().toString().slice(2,8);
        } 
     });

* Are directives such as v-for or v-if created by us. 
* It's like creating a function but different. Basically we create a Vue.directive in our main.js that will recieve a name and a function as parameters. 


---


## Filters

    <article>{{blog.body | snippet}}</article>

    Vue.filter('snippet', function(val){
        return val.slice(0,100) + "...";
    }); 

* We can use a filter to change the output of data to a browser. 
* They don't actually change the data directly. 
* In order to use it we need a | (pipe) and a filter name. 

---

## Custom Search Filter 

 





