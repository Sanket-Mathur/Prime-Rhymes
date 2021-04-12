<template>
  <div v-if="product.age === age" class="col-lg-4 col-md-6 col-12">
    <div class="prod">
      <img :src="product.image" alt="cover">
      <div class="details">
        <h3>$ {{ product.age == 1 ? '12' : product.age == 2 ? '14' : '16' }}</h3>
        <h4>Age: {{ product.age == 1 ? '0-2' : product.age == 2 ? '3-5' : '6-7' }}</h4>
        <h4>Category:<br>{{ product.category }}</h4>
      </div>
      <h3 class="text-center">{{ product.name }}</h3>
      <h4 :key="rhyme" v-for="rhyme in product.rhymes">{{ rhyme }}</h4>
      <form @submit="onSubmit">
        <input type="submit" :value="'$' + (product.age == 1 ? '12' : product.age == 2 ? '14' : '16') + ', Add'">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object,
    age: Number
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$emit('add-book', this.product)
    }
  }
}
</script>

<style scoped>
#screen {
  position: absolute;
  background-color: white;
}
.prod {
  background-color: #484FA2;
  margin: 1vw;
  padding: 5%;
  color: #FEE28E;
  overflow: hidden;
}
img {
  width: 45%;
  border: 0.5vh solid #FEE28E;
}
.details {
  width: 50%;
  display: inline;
  float: right;
}
.details h3 {
  margin: 0;
  text-align: right;
}
h3 {
  margin-top: 2vh;
  font-family: 'Fredoka One', cursive;
  font-size: 4vh;
}
h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 2vh;
}
input {
  position: relative;
  top: 10vh;
  height: 5vh;
  width: 100%;
  padding-left: 1vh;
  border-radius: 4vh;
  font-family: 'Poppins', sans-serif;
  font-size: 3vh;
  font-weight: 600;
  background-color: #5A4088;
  color: white;
  transition: top .5s;
}
.prod:hover input {
  top: 0;
}
</style>