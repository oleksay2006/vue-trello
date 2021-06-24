<template>
  <div>
    <p>{{ card_data.title }}</p>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    card_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
div {
  text-align: left;
  background-color: #fff;
  box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
  margin-bottom: 8px;
  padding: 4px 8px;
  margin-left: 5px;
  margin-right: 5px;
}
div:hover {
  background-color: #dcdcdc;
}
div p {
  margin: 0;
}
</style>
