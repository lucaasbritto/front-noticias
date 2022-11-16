<template>

    <CabecalhoPage></CabecalhoPage>  
    
    <ContainerComp>
        <router-view/>
    </ContainerComp>

</template>

<script>
import CabecalhoPage from './components/Cabecalho.vue'
import ContainerComp from './components/Container.vue'


export default {
  name: 'App',  
  components:{
    CabecalhoPage,
    ContainerComp,
  }, 
  
  
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
