<template>
  <div className="container">
    <navbar/>
    <titulo />
  </div>
    
</template>
<script>
import Navbar from '../Layout/Navbar.vue'
import Titulo from '../Layout/Titulo.vue'
export default {
  components: { Navbar, Titulo },
  name: 'Home'
}
</script>
<style scoped>
@import 'css/Home.css';
</style>