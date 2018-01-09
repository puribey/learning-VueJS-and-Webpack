<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>


<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  components: {
    
  },
  data() {
    return {
      title: 'Vue Ninjas'
    }
  }, 
  methods: {
    changeTitle: function(){
      this.$emit('changeTitle', 'Vue Magic'); // emiting events with a function and the info is emiting 
    }
  }
}
</script>

<style scoped>

header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color:#222;
  text-align: center;
}

</style>
