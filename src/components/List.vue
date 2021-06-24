<template>
  <div class="dont">
    <!-- <p class="id">{{ list_data.id }}</p> -->

    <h2 class="title">{{ list_data.title }}</h2>
    <Card v-for="card in cards" v-bind:key="card.id" v-bind:card_data="card" />
    <a href="#"
      ><div class="addNew"><p>+ Добавить карточку</p></div></a
    >
  </div>
</template>
<script>
import Card from '@/components/Card.vue';

export default {
  name: 'List',
  // props: ['cards'],
  props: {
    list_data: {
      type: Object,
      default() {
        return {};
      },
    },
    cards: Array,
  },
  components: {
    Card,
  },
};
</script>
<style scoped>
.dont {
  background-color: #ebecf0;
  border-radius: 3px;
  width: 25%;
  margin-right: 10px;
}
.addNew {
  text-align: center;

  margin-bottom: 8px;
  padding: 4px 8px;
  margin-left: 5px;
  margin-right: 5px;
  color: #5e6c84;
}
.addNew:hover {
  background-color: #d6d6d6;
}
.addNew p {
  margin: 0;
}
h2 {
  font-size: 17px;
  line-height: 24px;
  font-weight: 600;
  text-align: left;
  margin: 7px 0 7px 15px;
}
/* .id {
  text-align: left;
  margin: 5px 0 5px 10px;
} */
</style>
