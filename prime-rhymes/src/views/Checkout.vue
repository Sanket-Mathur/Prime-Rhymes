<template>
  <div class="container-fluid">
    <h1 class="text-center" v-if="books.length === 0">No Item Added</h1>
    <Item @delete-book="$emit('delete-book', book.id)" :key="book.id" :book="book" v-for="book in books" />
    <h2 @click="buy" v-if="books.length !== 0">BUY</h2>
  </div>
</template>

<script>
import Item from "../components/Item"

export default {
  name: 'Checkout',
  props: {
      books: Array
  },
  components: {
    Item
  },
  methods: {
    buy() {
      alert('This webiste is just a demo and not providing any services')
    }
  }
}
</script>

<style scoped>
.container-fluid {
  padding-top: 15vh;
  padding-bottom: 5vh;
  background-color: #E0E0E0;
  min-height: 100vh;
}
h1 {
  font-family: 'Fredoka One', cursive;
  font-size: 10vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h2 {
    float: right;
    padding: 2vh 4vh;
    background: white;
    cursor: pointer;
}
h2:hover {
    background: black;
    color: white;
}
</style>