<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-xl-8">
        <form @submit="onSubmit" class="mx-auto">
          <span class="heading">Title:</span>
          <div id="title">
            <input type="text" placeholder="Untitled" v-model="bName">
            <input type="color" v-model="bColor">
          </div>
          <br>
          <span class="heading">Cover:</span>
          <div>
            <span class="cover">
              <input type="radio" name="cover" value="1" checked v-model="bCover">
              <img src="images/covers/1.png" alt="">
            </span>
            <span class="cover">
              <input type="radio" name="cover" value="2" v-model="bCover">
              <img src="images/covers/2.png" alt="">
            </span>
            <span class="cover">
              <input type="radio" name="cover" value="3" v-model="bCover">
              <img src="images/covers/3.png" alt="">
            </span>
          </div>
          <br><br><br>
          <input type="submit" value="$5, Create Book">
        </form>
      </div>
      <div id="preview-container" class="col-12 col-xl-4">
        <div id="preview" :style="'background-image: url(\'images/covers/' + bCover + '.png\')'">
          <h1 :style="'color: ' + bColor">{{bName}}</h1>
          <img :src="'images/covers/' + bCover + '.png'" alt="preview">
        </div>
      </div>
    </div>
    <img id="added" alt="added">
    <img id="splash1" src="images/splash.png" alt="" class="d-none d-lg-block">
  </div>
</template>

<script>
export default {
  name: 'Books',
  props: {
    books: Array
  },
  data() {
    return {
      bName: '',
      bColor: '#000000',
      bCover: 1
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      if(!this.bName) {
        alert('Add a Title')
        return
      }

      const newBook = {
        id: this.books.length > 0 ? this.books[this.books.length - 1].id + 1 : 0,
        name: this.bName,
        color: this.bColor,
        cover: this.bCover,
        rhymes: []
      }
      
      this.$emit('add-book', newBook)

      this.bName = ''
      this.bColor = '#000000'
      this.bCover = 1

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
  padding: 15vh 0 5vh 2vw;
  background-color: #FEE28E;
}
.heading {
  font-family: 'Fredoka One', cursive;
  font-size: 6vh;
  color: #5A4088;
}
#title {
  margin-left: 2vh;
  max-width: 80vw;
}
form {
  width: fit-content;
}
input[type=text] {
  position: relative;
  top: -1vh;
  height: 8vh;
  width: 50vh;
  max-width: 60vw;
  padding-left: 2vh;
  border-radius: 4vh;
  font-family: 'Poppins', sans-serif;
  font-size: 4vh;
  background-color: #5A4088;
  color: white;
}
input[type=color] {
  position: relative;
  top: 1vh;
  margin-left: 1vh;
  height: 8vh;
  width: 8vh;
  border-radius: 50%;
  background-color: #5A4088;
}
input[type=color]::-webkit-color-swatch {
    border: none;
    border-radius: 100%;
}
input[type=color]::-moz-color-swatch {
    border: none;
    border-radius: 100%;
}
.cover {
  margin-left: 2vh;
}
.cover img {
  width: 22vh;
  max-width: 25vw;
}
.cover input {
  position: absolute;
  transform: scale(2);
}
input[type=submit] {
  position: relative;
  top: -1vh;
  height: 8vh;
  width: 60vh;
  max-width: 94vw;
  border-radius: 4vh;
  font-family: 'Poppins', sans-serif;
  font-size: 4vh;
  background-color: #5A4088;
  font-weight: 600;
  color: white;
}
#preview-container {
  padding: 10vh;
}
#preview {
  margin-top: 5vh;
  padding: 5vh;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
}
#preview img {
  height: 100%;
  width: 100%;
  visibility: hidden;
}
#preview h1 {
  text-align: center;
  max-height: 0vh;
  font-family: 'Fredoka One', cursive;
  font-size: 6vh;
}
#splash1 {
  position: absolute;
  height: 50vh;
  top: -20vh;
  left: -20vh;
}
#added {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 20vh;
  transform: translate(-50%, -50%);
  display: none;
}
</style>