<template>
  <div class="container-fluid">
    <section id="landing">
      <img src="images/landing-background.jpg" alt="background">
      <div class="row d-flex justify-content-center">
        <h1 class="text-center">Prime Rhymes</h1>
        <h3 class="text-center">Customize your book with Rhymes your kid likes</h3>
      </div>
    </section>
    <section id="build">
      <img id="splash1" src="images/splash.png" alt="" class="d-none d-lg-block">
      <img id="splash2" src="images/splash.png" alt="" class="d-none d-lg-block">
      <div class="row">
        <div class="col-12 col-lg-8 d-flex align-items-center">
          <div>
            <h3 class="text-center">Build Your Book</h3><br>
            <p class="text-center">We respect different tastes of children when it comes to rhymes and that's why we give you the option to customize your rhyme book. Generate a rhyme book, add rhymes of your choice, order the book which will be delivered to your doorstep.</p>
            <form @submit="onSubmit">
              <input v-model="bookName" type="text" placeholder="Name Your Book">
              <input type="submit" class="d-inline" value="&rarr;">
            </form>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-flex align-items-center">
          <img src="images/kid-with-umbrella.jpg" alt="kid" class="d-none d-lg-block">
        </div>
      </div>
    </section>
    <section id="select">
      <img id="splash1" src="images/splashinv.png" alt="" class="d-none d-lg-block">
      <img id="splash2" src="images/splashinv.png" alt="" class="d-none d-lg-block">
      <div class="row">
        <div class="col-12 col-lg-8 d-flex align-items-center">
          <div>
            <h3 class="text-center">Select Rhymes</h3><br>
            <p class="text-center">Let your little one select the rhymes he like or just select the ones you think fits his age group the best :-)</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-flex align-items-center">
          <table>
            <tr>
              <td> <img src="images/check.gif" alt="kid"> </td>
              <td> <h1>Humpty Dumpty</h1> </td>
            </tr>
            <tr>
              <td> <img src="images/uncheck.gif" alt="kid"> </td>
              <td> <h1>Ba Ba Black Sheep</h1> </td>
            </tr>
            <tr>
              <td> <img src="images/check.gif" alt="kid"> </td>
              <td> <h1>Twinkle Twinkle Little Star</h1> </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
    <section id="products">
      <img id="splash1" src="images/splash.png" alt="" class="d-none d-lg-block">
      <img id="splash2" src="images/splash.png" alt="" class="d-none d-lg-block">
      <div class="row">
        <div class="col-12 col-lg-8 d-flex align-items-center">
          <div>
            <h3 class="text-center">Our products</h3><br>
            <p class="text-center">Not everyone wants to go through all the rhymes to select their favorite ones. For them we have special rhyme booklets with the rhymes we think will be the best for your children based on different age groups.</p>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-flex align-items-center">
        <table>
          <tr>
              <router-link to="/products">
                <td> <img src="images/children/children0-2.jpeg" alt="kid"> </td>
                <td> <h1>Between 0 and 2</h1> </td>
              </router-link>
            </tr>
            <tr>
              <router-link to="/products">
                <td> <img src="images/children/children3-5.jpeg" alt="kid"> </td>
                <td> <h1>Between 3 and 5</h1> </td>
              </router-link>
            </tr>
            <tr>
              <router-link to="/products">
                <td> <img src="images/children/children6-8.jpeg" alt="kid"> </td>
                <td> <h1>Between 6 and 8</h1> </td>
              </router-link>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      bookName: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault() 
      console.log(this.bookName)
      this.bookName = ''
    }
  }
}
</script>

<style scoped>
.container-fluid {
  min-height: 100vh;
  padding: 0;
}
section {
  height: 100vh;
  position: relative;
}
#landing {
  background-color: #5A4088;
}
#landing img[alt=background] {
  position: absolute;
  top: 2%;
  left: 2%;
  height: 96%;
  width: 96%;
  opacity: 0.2;
}
#landing div {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
#landing div h1 {
  font-family: 'Fredoka One', cursive;
  font-size: 10vh;
  color: #FEE28E;
  text-transform: uppercase;
  margin-left: 5vh;
}
#landing div h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 4vh;
  color: #5A4088;
  background-color: #FEE28E;
  text-transform: uppercase;
  width: fit-content;
  padding: 1vw;
  margin: 2vh;
  margin-left: 5vh;
}

#build {
  background: #FEE28E;
  overflow: hidden;
}
#build .row {
  height: 100vh;
}
#build .row div {
  margin: 2vh 0;
  max-width: 100vw;
}
#build .row div:first-child {
  padding: 0 5vw;
}
#build .row div h3 {
  font-family: 'Fredoka One', cursive;
  font-size: 7vh;
  color: #5A4088;
  text-transform: uppercase;
}
#build .row div p {
  font-family: 'Poppins', sans-serif;
  font-size: 3vh;
  font-weight: 500;
  color: #5A4088;
  margin: 1vw;
}
#build .row div img {
  width: 20vw;
}
#build #splash1 {
  position: absolute;
  height: 50vh;
  top:-25vh;
  left:-25vh;
  transform: rotate(-60deg);
}
#build #splash2 {
  position: absolute;
  height: 50vh;
  bottom: -30vh;
  left: 70vh;
  transform: rotate(120deg);
}
input[type=text] {
    height: 8vh;
    width: 50vh;
    max-width: 80vw;
    padding-left: 2vh;
    margin-left: 2vh;
    border-radius: 4vh;
    font-family: 'Poppins', sans-serif;
    font-size: 4vh;
    background-color: #5A4088;
    font-weight: 600;
    color: white;
}
#build input[type=submit] {
  height: 8vh;
  width: 8vh;
  background: #5A4088;
  color: #FEE28E;
  border-radius: 50%;
  font-family: 'Poppins', sans-serif;
  font-size: 4vh;
  background-color: #5A4088;
  font-weight: 600;
  margin-left: 2vh;
}
#build form {
  margin-top: 5vh;
}

#select {
  background: #5A4088;
  overflow: hidden;
}
#select .row {
  height: 100vh;
}
#select .row div:first-child {
  padding: 0 5vw;
}
#select .row div h3 {
  font-family: 'Fredoka One', cursive;
  font-size: 7vh;
  color: #FEE28E;
  text-transform: uppercase;
}
#select .row div p {
  font-family: 'Poppins', sans-serif;
  font-size: 3vh;
  font-weight: 500;
  color: #FEE28E;
  margin: 1vw;
}
#select .row div img {
  width: 10vw;
  margin-left: 2vh;
}
#select #splash1 {
  position: absolute;
  height: 50vh;
  top: -20vh;
  left: -20vh;
  transform: rotate(80deg);
}
#select #splash2 {
  position: absolute;
  height: 50vh;
  bottom: -25vh;
  left: 70vh;
  transform: rotate(40deg);
}
#select table h1 {
  font-family: 'Fredoka One', cursive;
  font-size: 4vh;
  color: #FEE28E;
  text-transform: uppercase;
  margin-right: 2vh;
  margin-bottom: 2vh;
}

#products {
  background: #FEE28E;
  overflow: hidden;
  height: auto;
  min-height: 100vh;
}
#products .row {
  min-height: 100vh;
}
#products .row div {
  margin: 2vh 0;
}
#products .row div:first-child {
  padding: 0 5vw;
}
#products .row div h3 {
  font-family: 'Fredoka One', cursive;
  font-size: 7vh;
  color: #5A4088;
  text-transform: uppercase;
}
#products .row div p {
  font-family: 'Poppins', sans-serif;
  font-size: 3vh;
  font-weight: 500;
  color: #5A4088;
  margin: 1vw;
}
#products .row div img {
  max-width: 20vw;
}
#products #splash1 {
  position: absolute;
  height: 50vh;
  top: -20vh;
  left: -20vh;
  transform: rotate(-20deg);
}
#products #splash2 {
  position: absolute;
  height: 50vh;
  bottom: -30vh;
  left: 70vh;
  transform: rotate(70deg);
}
#products table a {
  text-decoration: none;
  cursor: pointer;
}
#products table h1 {
  font-family: 'Fredoka One', cursive;
  font-size: 3.5vh;
  color: #5A4088;
  text-transform: uppercase;
  margin-right: 2vh;
}
#products table img {
  height: 15vh;
  border-radius: 50%;
  margin: 2vh;
}
</style>