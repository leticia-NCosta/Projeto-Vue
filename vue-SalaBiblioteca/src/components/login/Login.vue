<template>
  <div className="form-login">
    <div className = 'image'>
      <img src="../../assets/sptech_logo.png" >
    </div>
    
    <div className ='form-ra'>
      <p>RA:</p><Input />
    </div>
    <div className ='form-senha'>
      <p>Senha: </p> <Input />
    </div>
    <Botao :click='login'/>
  </div>
</template>
<script>
import Botao from '../form/Botao.vue'
import Input from '../form/Input.vue'

export default {
  components: { Input, Botao },
  name:'Login',
  methods:{
    login(ra, senha){
      this.$router.push('/home');
    }
  }
}
</script>
<style scoped>
@import 'css/login.css';

</style>