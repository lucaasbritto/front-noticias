<template>
  <div class="noticias">  
      <div class="row">
          <TituloPage :title="title"></TituloPage>       
      </div>
     
      <div class="row">
          <CaixaPage v-for="noticia in noticias" :key="noticia.id" :noticia="noticia"></CaixaPage>  
      </div>
      
  </div>
</template>

<script>
import CaixaPage from '../components/Caixa.vue'
import TituloPage from '../components/TituloPage.vue'

export default {
  name: 'NoticiasView',
  components:{
    CaixaPage,
    TituloPage,
  },
  
  data(){
    return{ 
      noticias:[],  
      title:"Noticias",
    }
  },

  created(){
    // Fazendo consulta no back e trazendo as Noticias
    this.$axios.get('http://127.0.0.1:8000/api/noticia')
    .then((response) => {
      this.noticias = response.data; 
    });

    // Recebendo Evento do MENU
    this.emitter.on('submit', (evt)=>{
        this.noticias = evt;
    });

    // Mandando True para exibir o search
    this.emitter.emit("inputSearch", true);
  
  }, 

  beforeUnmount(){
    // Mandado False ao sair do componente e sumir o search
    this.emitter.emit("inputSearch", false);
  }
  
}
</script>
