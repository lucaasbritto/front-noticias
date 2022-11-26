<template>
  <div class="home">    
    <HelloPage></HelloPage>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HelloPage from '@/components/HelloPage.vue'

export default {
  name: 'HomeView',
  components: {
    HelloPage
  }
}
</script>
