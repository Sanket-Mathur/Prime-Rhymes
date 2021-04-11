<template>
  <div class="container-fluid text-center">
    <div class="text-center col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
      <h1>Our Initiative</h1>
      <h5>Idea</h5>
      <p>In supermarkets we get a limited amount of options when selecting rhyme books for children. Rhyme books come packed with specific poems and rhymes which makes you go through several books before selecting one that might not even satisfy all your expectations but you will have to compromise on some.</p>
      <p>We have a solution for your problem. On our application, you can select exactly all the rhymes you want in your book and not just that, you can even customize your book to match your needs.</p>
      <h5>Implementaion</h5>
      <p>We respect different tastes of children when it comes to rhymes and that's why we give you the option to customize your rhyme book. Generate a rhyme book, add rhymes of your choice, order the book which will be delivered to your doorstep.</p>
      <h1>Contact Us</h1>
      <h5>Developer</h5>
      <p>Sanket Mathur</p>
      <h5>Email Address</h5>
      <p><a href="mailto:rajeev.sanket@gmail.com">rajeev.sanket@gmail.com</a></p>
      <h5>Phone Number</h5>
      <p><a href="tel:+919815972109">(+91) 98159 72109</a></p>
    </div>
    <img id="splash1" src="images/splashyellow.png" alt="" class="d-none d-lg-block">
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.container-fluid {
  padding: 8vh 1vh 5vh 1vh;
  background-color: #5A4088;
}
h1 {
  font-family: 'Fredoka One', cursive;
  font-size: 8vh;
  color: #FEE28E;
  text-transform: uppercase;
  margin-top: 10vh;
}
h5 {
  font-family: 'Poppins', sans-serif;
  font-size: 4vh;
  color: #FEE28E;
  margin: 5vh 0 2vh 0;
}
p {
  font-family: 'Poppins', sans-serif;
  font-size: 3vh;
  color: white;
}
a {
  color: inherit;
  text-decoration: none;
}
#splash1 {
  position: absolute;
  top: -20vh;
  left: -20vh;
  height: 50vh;
  transform: rotate(-40deg);
}
</style>