<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input class="searchBar" type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/'+blog.id" class="anchor"><h2 v-rainbow>{{blog.title | to-uppercase }}</h2></router-link> <!-- custom directive and filter --> 
      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>


<script>
import searchMixin from '../mixins/searchMixin.js'

export default {
  props: {
    
  },
  components: {
    
  },
  data() {
    return {
      blogs: [],
      search: ""
    }
  },
  computed: {
   
  },
  filters: { // Filters Local
    toUppercase(val){ // Grabs filter name and uses Camel Case 
      return val.toUpperCase();
    }
  },
  directives: { // Directives Local , NOT functions 
    'rainbow':{
      bind(el,binding,vnode){
        el.style.color = "#" + Math.random().toString().slice(2,8);
      } 
    }
  },
  created(){
    this.$http.get('https://vuejs-db-a5a56.firebaseio.com/posts.json').then(function(data){
      return data.json();
      //console.log(data.json());
      //this.blogs = data.body.slice(0,10);

    }).then(function(data){
      console.log(data);
      var blogsArray = [];
      for(let key in data){
        //console.log(data[key]);
        data[key].id = key
        blogsArray.push(data[key]);
      }
      //console.log(blogsArray);
      this.blogs = blogsArray;
    })
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}


.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    transition: .3s background ease-in;
}

.single-blog:hover {
  background-color: white;
}

.searchBar {
  width: 97%;
  text-align: left;
  padding: 15px 10px;
  border: 0;
}

.anchor {
  text-decoration: none;
}

</style>