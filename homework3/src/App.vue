<template>
  <header-compo></header-compo>
  <footer-compo></footer-compo>
</template>


<script>
import HeaderCompo from "@/components/HeaderCompo.vue"
import FooterCompo from "@/components/FooterCompo.vue"

export default{
  name: 'App',
  components: {
    HeaderCompo,
    FooterCompo
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
