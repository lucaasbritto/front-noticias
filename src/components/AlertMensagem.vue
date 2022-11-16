<template id="caixa">     
      <div class="col-sm-10 offset-sm-1 textAlert"  >
          <h5>{{mensagem}}</h5>
      </div>
      <br>
</template>

<script>
export default {
  name: 'AlertMensagem',

  data(){
    return{
      
    }
  },

  props:{
    mensagem:{
      type: String,
      default: ""
    }
  }

  
}
</script>

<style scoped>
.textAlert{
  display:flex; 
  justify-content: center; 
   align-items: center;
  padding-top:10px;
  
}

</style>


