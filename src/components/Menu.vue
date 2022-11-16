<template id="Menu">     
      <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="navbar-brand" href="#">LOGO</a>
            </li>           
            <li class="nav-item">
              <router-link to="/cadastrarnoticias">Cadastrar Noticias | </router-link>   
            </li>
            <li class="nav-item">              
              <router-link to="/noticias"> Exibir Noticias </router-link> 
            </li>            
            
          </ul>
          <form v-show="inputSearch" class="form-inline my-2 my-lg-0" @submit.prevent>
            <input class="form-control mr-sm-2" type="search" id="search" name="search" v-model="filter.search" placeholder="Pesquisar" aria-label="Pesquisar">
            </form>
</template>

<script>
import { debounce } from 'lodash';

export default {
  name: 'MenuPage',

  data(){
    return{
      filter:{
        search : "",        
      },
      inputSearch: false,
    }
  },

  
  created(){
    this.getProducts();

    // Recebendo evento para exibir ou nao o search
    this.emitter.on('inputSearch', (evt)=>{
        this.inputSearch = evt;
    });
  },

  watch:{
    filter:{
      handler(){
        this.debounceProduct();
      },
      deep: true,
    },
  },

  methods:{
    debounceProduct: debounce(function(){
      this.getProducts();
    },300),


    getProducts(){
      const query = new URLSearchParams(this.filter).toString();

      this.$axios.get(`http://127.0.0.1:8000/api/noticia?${query}`)
          .then((response) => {
              this.verNoticia = response.data; 
              this.emitter.emit("submit", response.data);
          })  
    },
    
  }, 
}
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration:none;
  display: flex;
  align-items: center;
  padding-top:7px;
  padding-left:3px;
}

nav a.router-link-exact-active {
  color: #42b983;

}

</style>


