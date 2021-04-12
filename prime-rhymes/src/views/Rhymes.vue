<template>
  <div class="container-fluid">
    <input id="search" type="text" @keyup="search" v-model="searchText">
    <div class="row">
      <Rhyme class="item" @click="show(rhyme)" :item="rhyme" :key="rhyme.id" v-for="rhyme in rhymelist" />
    </div>
    <div id="popup">
      <h4 @click="remove()">&nbsp;x&nbsp;</h4>
      <h1></h1>
      <iframe width="1280" height="720" src="" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <form @submit="onSubmit">
        <select name="book" v-model="bName">
          <option :value="book.id" :key="book.id" v-for="book in books.filter((book) => { return !book.age })">{{ book.name }}</option>
          <option value="-1">Create New Book</option>
        </select>
        <input type="submit" value="$1, Add">
      </form>
    </div>
    <img id="added" alt="added">
    <img id="splash1" src="images/splashinv.png" alt="" class="d-none d-lg-block">
  </div>
</template>

<script>
import Rhyme from "../components/Rhyme"
export default {
  name: 'Rhymes',
  data() {
    return {
      rhymelist: [],
      searchText: '',
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
  created() {
    this.rhymelist = this.rhymes
  },
  methods: {
    search() {
      this.rhymelist = this.rhymes.filter((rhyme) => {
        return rhyme.title.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
      })
    },
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

      this.remove()

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
  background-color: #5A4088;
  padding: 15vh 10vw 5vh 10vw;
  min-height: 100vh;
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
  font-weight: 600;
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
#added {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 20vh;
  transform: translate(-50%, -50%);
  display: none;
  z-index: 2;
}
#search {
  width: 60vw;
  height: 6vh;
  margin: 0 10vw 10vh 10vw;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTYuOTY2IDU2Ljk2NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTYuOTY2IDU2Ljk2NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMNCglzMTAuMzE4LDIzLDIzLDIzYzQuNzYxLDAsOS4yOTgtMS40MzYsMTMuMTc3LTQuMTYybDEzLjY2MSwxNC4yMDhjMC41NzEsMC41OTMsMS4zMzksMC45MiwyLjE2MiwwLjkyDQoJYzAuNzc5LDAsMS41MTgtMC4yOTcsMi4wNzktMC44MzdDNTYuMjU1LDU0Ljk4Miw1Ni4yOTMsNTMuMDgsNTUuMTQ2LDUxLjg4N3ogTTIzLjk4NCw2YzkuMzc0LDAsMTcsNy42MjYsMTcsMTdzLTcuNjI2LDE3LTE3LDE3DQoJcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=);
  background-repeat: no-repeat;
  background-size: 4vh;
  background-position-x: 100%;
  background-position-y: 1vh;
  font-family: 'Poppins', sans-serif;
  font-size: 4vh;
  font-weight: 600;
  padding: 1vh;
}
</style>