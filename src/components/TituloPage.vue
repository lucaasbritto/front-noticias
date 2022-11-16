<template id="tituloPage">     
     <div class="col-sm-12 mt-3 text-center bg-light">
          <h3>{{title}}</h3>
      </div>
      <br>
</template>

<script>
export default {
  name: 'TituloPage',

  data(){
    return{

    }
  },

  props:{
    title:{
      type: String,
      default:""
    }
  }

  
}
</script>


