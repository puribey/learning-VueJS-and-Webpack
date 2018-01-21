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
* **v-model.lazy="blog.title"** is to make the content output when we change inputs, press tab or move out of the input. 
---

## HTTP Requests in Vue


### POST blog 

1. Install vue resource: **npm install vue-resource --save**
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

* Are **directives** such as **v-for** or **v-if** created by us. 
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

     computed: {
       filteredBlogs: function(){
         return this.blogs.filter((blog) => {
           return blog.title.match(this.search);
         });
       }
     },

* See showBlogs.vue where I have created a search bar with a **v-model="search"**
* What this computed function does is to compare what is writen there with the content of the blogs and return true or false. 
* When it's false, it will not show the blog and when it's true it will. 


--- 

## Registering Things Locally


     <h2 v-rainbow>{{blog.title | to-uppercase }}</h2>

     filters: { // Filters Local
       toUppercase(val){ // Grabs filter name and uses Camel Case 
         return val.toUpperCase();
       }
     },

* We can store directives locally inside of the components. Ex: filters 
* With directives is different because they are not functions but objects. Ex: see showBlogs.vue

---

## Mixins 

* Chunk of code that we can reuse over and over and over again in different places. :)

1. Create a mixins folder inside src folder in project. 
2. Create searchMixin.js inside mixins folder. 
3. Inside searchMixin.js export default and put computed fuction there. 
4. Go to component and import mixin: **import searchMixin from '../mixins/searchMixin.js'**
5. Create mixin array and call for the mixin: **mixins: [searchMixin]**
6. Do this last two steps with every component you want. 

---
## Routing

### Setting up Routing 

* We first need to install: **npm install vue-router --save** 
* Import in main.js: **import VueRouter from 'vue-router'**
* And then state we are going to use it there too: **Vue.use(VueRouter);**
* Create a new instance of the VueRouter: **const router = new VueRouter({})**
* Create a **routes.js** file inside **src** folder. 
* Create routes there
* Import routes.js inside main.js: **import Routes from './routes.js'**
* Use it inside the object: **const router = new VueRouter({ routes: Routes })**
* Call instance inside App instance.
* Go to App.vue and erase hardcoding 

### Routing modes 

* When using # in a link we are not making any requests to the server. We are just targeting and id. 
* Without it, we would be doing requests to the server. 
* In other servers we may need to set up the server to use this but vue comes with the set up already made for us. 
* Inside router instance put: mode:'history'

### Route links 

     <nav>
        <ul>
            <li><router-link to="/" exact>Blog</router-link></li>
            <li><router-link to="/add" exact>Add Blog</router-link></li>
        </ul>
     </nav>

* Create a new component called header.vue and import it in App.vue so it can work. 
* Instead of using **anchors** inside our nav we are going to use router-link with a **to** attr.
* Also we are going to add the **exact** attr which will make the web to only react when route is exact to what its indicated. 

### Route parameters 

* See singleBlog.vue to see how this works. 
* Also go to showBlogs.vue to see how it's applied.   

---

#### This DB was made with firebase









