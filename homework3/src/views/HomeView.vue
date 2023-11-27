<template>
  <h1>Main Page</h1>
  <div class="home">
    <get-data :posts="posts" />
    <button v-on:click="resetLikes">Reset likes</button>
  </div>
</template>

<script>
// @ is an alias to /src
import getData from "@/components/getData.vue"

export default {
  name: 'HomeView',
  props: ["posts"],
  components: {
    getData
  },
  data: function() {
    return {
    }
  },
  methods: {
    resetLikes :function() {
      this.$store.dispatch("resetLikes")
    }
  }
};
</script>

<style scoped>
button{
  background:  rgb(31, 163, 163);
  border: 0;
  padding: 10px 20px 10px 20px;
  margin-top:  20px;
  margin-bottom:  20px;
  margin-right:  10px;
  color: white;
  border-radius: 20px;
  }
</style>
