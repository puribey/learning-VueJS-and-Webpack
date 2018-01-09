<template>
  <section id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" @click="ninja.show =! ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
    <button @click="deletNinja">Delete</button>
  </section>
</template>


<script>
export default {
  props: {
    // testing props
    ninjas: {
      // making sure the prop is an Array or whatever we need it to be 
      type: Array, 
      // making sure we pass it through the parent component
      required: true
    }
  }, 
  components: {
    
  },
  data() {
    return {

    }
  },
  methods: {
    deletNinja: function(){
      this.ninjas.pop();
    }
  }

}
</script>

<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid purple;
    box-shadow: 2px 2px 5px #ccc;
    margin: 10px;
}

h3 {
  color: purple;
}
</style>
