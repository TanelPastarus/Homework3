<template>
  <h1> Main Page</h1>
  <div class="home">
    <get-data :posts ="posts"/>
    <button v-on:click="resetLikes"> Reset likes</button>
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

