<template>
  <div class="verNoticias">
      <TituloPage :title="title"></TituloPage> 
      
      <AcessarNoticia :info="verNoticia"></AcessarNoticia>
           
  </div>
</template>

<script>
import AcessarNoticia from '../components/AcessarNoticia.vue'
import TituloPage from '../components/TituloPage.vue'

export default {
  name: 'VerNoticias',
  components:{
    AcessarNoticia,
    TituloPage,
  },

  data(){
    return{ 
      verNoticia:[],
      title: "Ver Noticias",
    }
  },

  created(){
   
    const query = new URLSearchParams(this.$route.params.id).toString();

    this.$axios.get(`http://127.0.0.1:8000/api/vernoticias/${query}`)
    .then((response) => {
      this.verNoticia = response.data; 
    })    
  }, 

}
</script>

<style>

</style>
