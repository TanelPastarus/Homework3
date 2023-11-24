<template>
  <div class="home">
    <get-data :posts ="posts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import getData from "@/components/getData.vue"

export default {
  name: 'HomeView',
  components: {
    getData
  },
  data: function() {
    return {
    }
  },
  mounted() {
        fetch('https://api.npoint.io/48609dec2ba5b143263c')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    }
};
</script>

