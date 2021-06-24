<template>
  <div>
    <div class="first-board-nav">
      <div class="home">
        <a href="#">Домой</a>
      </div>
      <div class="name" href="#">
        <a href="#"><h1>My first board</h1></a>
      </div>
    </div>
    <div class="element">
      <List
        v-for="list in lists"
        v-bind:key="list.title"
        v-bind:list_data="list"
        v-bind:cards="list.cards"
      />
    </div>
  </div>
</template>

<script>
import List from '@/components/List.vue';

export default {
  name: 'Board',
  props: ['lists'],
  components: {
    List,
  },
};
</script>

<style scoped>
a {
  /* text-decoration: none; */
  color: #2c3e50;
  display: block;
}
.name h1 {
  font-size: 18px;
  margin: 0;
  font-weight: 700;
  line-height: 32px;
  padding: 0 12px;
}
.name {
  background-color: #ebecf0;
  border-radius: 3px;
  margin-left: 5px;
}
.name:hover {
  background-color: hsla(0, 0%, 100%, 0.5);
}
.first-board-nav {
  display: flex;
  margin-bottom: 15px;
}

.home {
  height: 32px;
  background-color: #ebecf0;
  /* width: 90px; */
  font-size: 15px;
  border: none;
  font-size: 17px;
  border-radius: 3px;
  transition: 0.15s;
}
.home:hover {
  background-color: hsla(0, 0%, 100%, 0.5);
}
.home a {
  padding: 5px;
}
/* .first-board-nav button:hover {
  background-color: #fff;
} */
.element {
  display: flex;
}
h1 {
  margin: 10px 0;
}
</style>
