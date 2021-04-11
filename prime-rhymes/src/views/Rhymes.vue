<template>
  <div class="container-fluid">
    <div class="row">
      <Rhyme class="item" @click="show(rhyme)" :item="rhyme" :key="rhyme.id" v-for="rhyme in rhymes" />
    </div>
    <div id="popup">
      <h4 @click="remove()">&nbsp;x&nbsp;</h4>
      <h1></h1>
      <iframe width="1280" height="720" src="" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <form @submit="onSubmit">
        <select name="book" v-model="bName">
          <option :value="book.id" :key="book.id" v-for="book in books">{{ book.name }}</option>
          <option value="-1">Create New Book</option>
        </select>
        <input type="submit" value="1$, Add">
      </form>
    </div>
    <img id="splash1" src="images/splashinv.png" alt="" class="d-none d-lg-block">
  </div>
</template>

<script>
import Rhyme from "../components/Rhyme"
export default {
  name: 'Rhymes',
  data() {
    return {
      bName: '',
      rName: ''
    }
  },
  props: {
    rhymes: Array,
    books: Array
  },
  components: {
    Rhyme
  },
  methods: {
    show(rhyme) {
      var popup = document.getElementById('popup')
      popup.style.display = 'block'
      popup.children[1].innerText = rhyme.title
      popup.children[2].setAttribute('src', rhyme.video)
      this.rName = rhyme.title
    },
    remove() {
      var popup = document.getElementById('popup')
      popup.style.display = 'none'
    },
    onSubmit(e) {
      e.preventDefault()
      if(this.bName === '-1' || this.bName === '') {
        this.$router.push('/books')
        return
      }

      const newRhyme = {
        id: this.bName,
        rhyme: this.rName
      }

      this.$emit('add-rhyme', newRhyme)
      alert('Added')

      this.remove()
    }
  }
}
</script>

<style scoped>
.container-fluid {
  background-color: #5A4088;
  padding: 20vh 10vw 5vh 10vw;
}
.item {
  cursor: pointer;
}
.item:hover {
  transform: scale(1.1);
}
#popup {
  position: fixed;
  top: 55%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  background-color: aliceblue;
  padding: 2vh;
  border-radius: 2vh;
  display: none;
}
#popup h4 {
  float: right;
  border: 0.5vh solid black;
  width: fit-content;
  border-radius: 50%;
  cursor: pointer;
}
#popup h1 {
  font-family: 'Fredoka One', cursive;
  font-size: 7vh;
}
#popup iframe {
  max-width: 80vw;
  max-height: 50vh;
}
@media only screen and (orientation: landscape) {
  #popup iframe {
    max-height: 60vh;
  }  
}
#popup form * {
  height: 8vh;
  width: 50vh;
  max-width: 40vw;
  padding-left: 2vh;
  border-radius: 4vh;
  font-family: 'Poppins', sans-serif;
  font-size: 4vh;
  background-color: #5A4088;
  color: white;
}
#popup select {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  background-size: 6vh;
}
#splash1 {
  position: absolute;
  height: 50vh;
  top: -15vh;
  left: -15vh;
  transform: rotate(80deg);
}
</style>