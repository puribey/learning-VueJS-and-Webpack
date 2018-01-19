<template>
  <div id="app">
    <add-blog></add-blog>
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>
  </div>

  <!-- TUTORIAL 28 = Dynamic Components
  <div>
    <keep-alive> 
      <component v-bind:is="component"></component>
    </keep-alive>
    <button @click="component= 'form-one'">Show form one</button>
    <button @click="component= 'form-two'">Show form one</button>
  </div> 
  -->
  <!-- TUTORIAL 27 = Slots 
  <div id="app">
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      </div> 
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-control">
        <button @click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
  -->
</template>

<script>
// import formHelper from './components/formHelper.vue' // TUTORIAL 27 = Slots 
// import formOne from './components/formOne.vue'; // TUTORIAL 28 = Dynamic Components
// import formTwo from './components/formTwo.vue'; // TUTORIAL 28 = Dynamic Components
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';


export default {
  components: {
    //'form-helper': formHelper //  TUTORIAL 27 = Slots 
    //'form-one': formOne, // TUTORIAL 28 = Dynamic Components
    //'form-two': formTwo // TUTORIAL 28 = Dynamic Components
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs
  },
  data () {
    return {
      // component:'form-one' // TUTORIAL 28 = Dynamic Components
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}


label {
  text-align: left;
}

input {
  text-align: left;
  display: block;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 5px;
  margin-top: 5px;
}
</style>
