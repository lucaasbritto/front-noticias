<template id="caixa">     
      
  <div class="col-sm-4 mt-3">
    <div class="card bg-light divCaixa">
      <div class="card-header">
        <div class="row">
          <div class="col-sm-8"><h6><b>{{noticia.title}}</b></h6></div>
          <div class="col-sm-4 text-right"><small> ({{noticia.categorias.categoria}})</small></div>
        </div>
         
      </div>
        <div class="card-body">           
          <p class="card-text pBody">{{ noticia.body}}</p>
        </div>
        <div class="card-body divBotao">           
          <router-link :to="{name: 'vernoticias', params: { id: this.noticia.id}}" class="btn btn-sm btn-secondary">Acessar </router-link> 
        </div>
    </div>
  </div>
  <br>
</template>

<script>
export default {
name: 'CaixaPage',

data(){
return{ 
}
},

props:['noticia'],

methods:{
  verNoticia(){
    this.emitter.emit("verNoticia", this.noticia);    
  }
}

}
</script>

<style scoped>

.divCaixa{
max-width: 20rem; 
height:17rem;
overflow: hidden;
 white-space: normal;
}

.pBody{  
  text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;  
    overflow: hidden;
}

.titleNoticia{
font-Size:10px;
}

.divBotao{
display: flex;
align-items: flex-end;
justify-content: center;
}

</style>


