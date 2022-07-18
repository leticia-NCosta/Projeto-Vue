<template>
 <button @click='click'>Enviar</button>
</template>
<script>

export default {
  name:'Botao',
 props: [
  "click"
 ]
}
</script>
<style scoped>
@import 'css/Botao.css';
</style>