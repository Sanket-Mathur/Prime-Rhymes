<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
    <img :src="item.image" alt="">
    <h1>{{ item.title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Rhyme',
  props: {
    item: Object
  }
}
</script>

<style scoped>
div {
  margin-bottom: -10vw;
  z-index: 1;
}
img {
  width: 100%;
  border: 0.5vh solid #FEE28E;
}
h1 {
  font-family: 'Fredoka One', cursive;
  font-size: 8vw;
  color: #f00;
  text-align: center;
  text-shadow: 0px 0px 5px black;
  margin: -40vw 0.5vw 40vw 0.5vw;
}
@media only screen and (min-width: 768px) {
  h1 {
    font-size: 4vw;
    margin: -15vw 0.5vw 20vw 0.5vw;
  }
}
@media only screen and (min-width: 992px) {
  h1 {
    font-size: 3.5vw;
    margin: -15vw 0.5vw 15vw 0.5vw;
  }
}
</style>