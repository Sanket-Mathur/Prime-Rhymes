<template>
  <div class="container-fluid">
    <h1 id="c0-2" class="text-center">Age : 0 to 2 Years</h1>
    <div class="row">
      <Product @add-book="addBook" :key="product.id" v-for="product in products" :product="product" :age="1" />
    </div>
    <h1 id="c3-5" class="text-center">Age : 3 to 5 Years</h1>
    <div class="row">
      <Product @add-book="addBook" :key="product.id" v-for="product in products" :product="product" :age="2" />
    </div>
    <h1 id="c6-8" class="text-center">Age : 6 to 8 Years</h1>
    <div class="row">
      <Product @add-book="addBook" :key="product.id" v-for="product in products" :product="product" :age="3" />
    </div>
    <img id="added" alt="added">
    <img id="splash1" src="images/splash.png" alt="" class="d-none d-lg-block">
  </div>
</template>

<script>
import Product from "../components/Product"

export default {
  name: 'Products',
  props: {
    products: Array
  },
  components: {
    Product
  },
  methods: {
    addBook(book) {
      this.$emit('add-book', book)
      var added = document.getElementById('added')
      added.setAttribute('src','images/check.gif')
      added.style.display = 'block'
      setTimeout(() => {
        added.style.display = 'none'
        added.removeAttribute('src')
      },3000);
    }
  }
}
</script>

<style scoped>
.container-fluid {
  padding: 10vh 20vw 5vh 20vw;
  background-color: #FEE28E;
}
h1 {
  font-family: 'Fredoka One', cursive;
  font-size: 6vh;
  color: #5A4088;
  text-transform: uppercase;
  margin-top: 10vh;
  margin-bottom: 5vh;
}
#splash1 {
  position: absolute;
  transform: rotate(-50deg);
  height: 50vh;
  top: -20vh;
  left: -20vh;
}
#added {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 20vh;
  transform: translate(-50%, -50%);
  display: none;
}
</style>