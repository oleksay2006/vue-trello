<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Board v-bind:lists="lists" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Board from './components/Board.vue';

export default {
  name: 'App',
  components: {
    Board,
  },
  data() {
    return {
      lists: [
        {
          id: 1,
          title: 'Планы',
          cards: [
            { id: 1, title: 'помыть кота' },
            { id: 2, title: 'приготовить суп' },
            { id: 3, title: 'сходить в магазин' },
          ],
        },
        {
          id: 2,
          title: 'В процессе',
          cards: [{ id: 4, title: 'посмотреть сериал' }],
        },
        {
          id: 3,
          title: 'Сделано',
          cards: [
            { id: 5, title: 'сделать домашку' },
            { id: 6, title: 'погулять с собакой' },
          ],
        },
      ],
    };
  },
};
</script>

<style>
* {
  transition: 0.15s;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  /* min-height: 100vh; */
  /* width: 100%;
  height: 500px; */
}
a {
  text-decoration: none;
}
body {
  background-image: url(./assets/macos.jpeg);
  background-position: inherit;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
