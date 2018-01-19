<template>
  <div  id="show-blogs">
    <h1>List Blog titles</h1>
    <input class="searchBar" type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{blog.title | to-uppercase }}</h2> <!-- custom directive and filter --> 
      <article>{{blog.body | snippet}}</article>
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
  mixins: [searchMixin],
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      // console.log(data);
      this.blogs = data.body.slice(0,10);

    });
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
}
.searchBar {
  width: 97%;
  text-align: left;

}
</style>