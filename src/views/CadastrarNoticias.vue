<template>
  <div class="cadastrarNoticias"> 
    
      <div class="row">
        <TituloPage :title="title"></TituloPage>
      </div>

        <FormPage></FormPage>
    
            
  </div>
</template>

<script>
import FormPage from '../components/Formulario.vue'
import TituloPage from '../components/TituloPage.vue'

export default {
  name: 'CadastrarNoticias',
  components:{
    FormPage,
    TituloPage,
  },

  data(){
    return{ 
      title:"Cadastrar Noticias",      
    }
  },
  
}
</script>

<style>

.divForm{
  border-radius: 10px;
}

.divAlert{
  display:flex; 
  align-items: center;  
  border-radius: 10px;

}

</style>
