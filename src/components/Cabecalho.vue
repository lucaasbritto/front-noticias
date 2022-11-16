<template id="cabecalho">     
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ContainerComp>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <MenuPage></MenuPage>
        </div>
      </ContainerComp>
      </nav>
</template>

<script>
import ContainerComp from './Container.vue'
import MenuPage from './Menu.vue'

export default {
  name: 'CabecalhoPage',
 

  components:{
    ContainerComp,
    MenuPage
  },

  data(){
    return{
      
    }
  },  

}
</script>


