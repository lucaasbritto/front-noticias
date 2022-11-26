<template id="form"> 
   <div v-show="alert" class="divAlert col-sm-6 offset-sm-3 mt-4 alert-success"> 
      <AlertMensagem :mensagem="mensagem"></AlertMensagem>
   </div>
   <div class="divForm col-sm-6 offset-sm-3 mt-4 bg-light">
      <form id="formNoticia" @submit="cadastrarNoticias">
        <div class="form-group">
          <label for="title">Titulo</label>
          <input type="text" class="form-control" id="title" name="title" v-model="title" placeholder="Titulo da Mensagem">
        </div>
        <div class="form-group">
          <label for="noticia">Noticia</label>
          <textarea class="form-control" id="noticia" name="noticia" v-model="noticia" rows="5"></textarea>
        </div>
        <div class="form-group">
          <label for="categoria">Categoria</label>
          <select class="form-control" id="categoria" name="categoria" v-model="categoria">
            <option disabled selected>Selecione uma categoria</option>
            <option value="1">Futebol</option>
            <option value="2">Politica</option>            
          </select>
        </div>
        
        <button type="submit" class="btn btn-primary">Salvar</button>
      </form>
      </div>
</template>

<script>
import AlertMensagem from './AlertMensagem.vue'


export default {
  name: 'FormPage',
  components:{
    AlertMensagem,
  },

  data(){
    return{
      title : "",
      noticia : "",
      categoria: "",
      mensagem: "Noticia cadastrada com sucesso",
      alert: false,
    }
  },

  methods:{
    async cadastrarNoticias(e){

      e.preventDefault();
      
      const data={
        title: this.title,
        noticia: this.noticia,
        categoria: this.categoria,
      };

      const dataJson = JSON.stringify(data);
      
      await fetch("https://teste.lucasbritto.com/api/public/api/cadastrarnoticias",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: dataJson
      });
      
      this.alert     = true;      
      this.title     = "";
      this.noticia   = "";
      this.categoria = "";

      setTimeout(()=> this.alert = false, 2000);

    }
  } 
}
</script>

