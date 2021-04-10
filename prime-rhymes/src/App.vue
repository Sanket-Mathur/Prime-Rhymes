<template>
  <div id="wrapper" class="container-fluid">
    <Header />
    <router-view @add-book="addBook" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer";

export default {
  name: 'App',
  data() {
    return {
      books: []
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    addBook(book) {
      this.books = [...this.books, book]
      console.log(this.books)
    }
  }
}
</script>

<style scoped>
#wrapper {
  padding: 0;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>