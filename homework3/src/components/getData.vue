<template>
  <body>
    <main id="main-content">
      <div class="posts" v-for="post in jsonData" :key="post.index">
        <a class="pic">
          <img :src="post.profilepic" width="50" height="50" />
        </a>
        <div class="author">{{post.author}}</div>
        <div class="pic2">
          <img :src="post.picture" />
        </div>
        <p>{{post.text}}</p>
        <div class="date">{{post.date}}</div>
            <button v-on:click="incrementCounter(post.id)" class="like">
              <img v-bind:src="post.likepic" width="70" height="50" />
            </button>
            <span>Clicked: {{ post.counter }}</span>
      </div>
    </main>
  </body>
</template>

<script>
export default {
    name: "getData",
    computed: {
        jsonData() {
            return this.$store.state.jsonData
        }
    },

    methods: {
    incrementCounter(elementId) {
      this.$store.dispatch("incrementCounter", elementId);
    },
  },

    mounted() {
    this.$store.dispatch('fetchJson');
  }
}
</script>

<style scoped>
* {
    font-family: sans-serif;
    box-sizing: border-box;
}

body {
    line-height: 1.6;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.posts {
    position: relative;
    border-radius: 10px;
    margin: 20px auto;
    width: 65%;
    border: 1px solid #746161;
    background-color: #ddd;
    display: grid;
    grid-template-columns: auto;
    gap: 10px;
}

/* Descendant selector*/
.posts p {
    padding-left: 20px;
    color: black;
    text-align: left;
    text-shadow: 1px 1px 2px #73c0f8
}

/* Child selector*/
div > p {
    font-family: arial;

}

/*::first-letter pseudo-element*/
.posts p::first-letter {
    font-size: large;
}

.pic {
    text-align: left;
    padding-left: 20px;
    padding-top: 5px;
}

.date {
    position: absolute;
    top: 10px;
    right: 10px;
    color: black;
    padding: 5px;
    font-size: 12px;
}

.posts .pic2 img {
    width: 95%;
    height: auto;
    display: block;
    margin: 0 auto;
    padding: 20px;
}

/* General Sibling selector */
p ~ .date {
    font-style: italic;
}

@media all and (max-width: 600px) {
    .date {
        top: 0px;
        right: 5px;
        font-size: 12px;
    }
}

.like {
    text-align: left;
}

.author {
    position: absolute;
    top: 14px;
    left: 75px;
    color: black;
    padding: 5px;
    font-size: 18px;
}

button {
    display:flex;
    justify-content: center;
    left: 4%;
    bottom: 10px;
    background:  #7cb6e0;
    width: 10%;
    border-radius: 10%;
    position: relative;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}
/*https://www.w3schools.com/howto/howto_css_animate_buttons.asp*/
.like:after {
    content: "";
    background: #2ca1f4;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.like:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}

span {
    display:flex;
    bottom: 10px;
    left: 15%;
    width: 15%;
    position: absolute;
    font-style: italic;
}
</style>
