<template>
  <div>
    <app-header></app-header>
    <app-ninjas></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>


<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Ninjas from './Ninjas.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
</style>
