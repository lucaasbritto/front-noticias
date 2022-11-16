<template id="caixa"> 
  <div class="row">
    <div class="col-sm-8 bg-dark text-white">
        <h3>{{ info.title}}</h3>
    </div>
    <div class="col-sm-4 bg-dark text-right text-white" >
        <p>Categoria: {{ info.categorias?.categoria}}</p>
    </div>
    <div class="col-sm-12 bg-light" style="height:20rem; border:1px solid #343a40">
        <p>
          {{ info.body}}
        </p>
    </div>
   </div>

      
</template>

<script>
export default {
  name: 'AcessarNoticia',

  data(){
    return{
      
    }
  },

  props:['info'],

  
}
</script>


