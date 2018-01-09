<template>
  <div id="app">
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
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
</template>

<script>
import formHelper from './components/formHelper.vue'

export default {
  components: {
    'form-helper': formHelper
  },
  data () {
    return {
      title: 'I am the slot H2 title'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  display: block;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 5px;
  margin-top: 5px;
}
</style>
