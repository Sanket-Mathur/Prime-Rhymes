<template>
  <footer>
    <h1>Prime Rhymes</h1>
    <router-link id="checkout" to="/checkout">
      <h3>Checkout</h3>
    </router-link>
    <hr>
    <router-link to="/">
      <h3>&#8226; Home</h3>
    </router-link><br>
    <router-link to="/books">
      <h3>&#8226; Build Books</h3>
    </router-link><br>
    <router-link to="/rhymes">
      <h3>&#8226; Rhymes</h3>
    </router-link><br>
    <router-link to="/products">
      <h3>&#8226; Products</h3>
    </router-link><br>
    <router-link to="/about">
      <h3>&#8226; About Us</h3>
    </router-link>
    <hr>
    <h3 class="d-inline">Copyright &copy; 2021 Sanket Mathur</h3>
    <a href="https://github.com/Sanket-Mathur/Prime-Rhymes" id="source" target="_blank">
      <img src="images/GitHub-Mark-120px-plus.png" alt="">&emsp;
      <h3>Source Code</h3>
    </a>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer {
    padding: 6vh 4vw;
    background-color: #BDBBBC;
    font-family: 'Poppins', sans-serif;
}
h1 {
    display: inline;
    font-size: 4vh;
}
h3 {
    display: inline;
    font-size: 2.5vh;
}
a {
    text-decoration: none;
    color: black;
}
img {
    height: 5vh;
}
hr {
    height: 0.5vh;
    border-radius: 0.25vh;
}
#checkout {
    float: right;
}
#source {
    float: right;
}
</style>