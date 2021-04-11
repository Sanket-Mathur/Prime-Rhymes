<template>
  <div id="wrapper" class="container-fluid">
    <Header :totalBooks="books.length" />
    <router-view @add-book="addBook" @add-rhyme="addRhyme" @delete-book="delBook" :rhymes="rhymes" :books="books" />
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
      books: [],
      rhymes: [],
      products: [],
    }
  },
  components: {
    Header,
    Footer
  },
  created() {
    this.rhymes = [
      {
        id: 1,
        title: 'Twinkle Twinkle Little Star',
        image: 'images/rhymes/1.jpg',
        video: 'https://www.youtube.com/embed/n38kGst16sI'
      },
      {
        id: 2,
        title: 'Ba Ba Black Sheep',
        image: 'images/rhymes/2.jpg',
        video: 'https://www.youtube.com/embed/MR5XSOdjKMA'
      },
      {
        id: 3,
        title: 'Humpty Dumpty',
        image: 'images/rhymes/3.jpg',
        video: 'https://www.youtube.com/embed/I-nLZ68-c3g'
      },
      {
        id: 4,
        title: 'Baby Shark',
        image: 'images/rhymes/4.jpg',
        video: 'https://www.youtube.com/embed/020g-0hhCAU'
      },
      {
        id: 5,
        title: 'Ring-a-Ring o\' Roses',
        image: 'images/rhymes/5.jpg',
        video: 'https://www.youtube.com/embed/uJI11ekrXy0'
      },
      {
        id: 6,
        title: '5 Little Monkeys',
        image: 'images/rhymes/6.jpg',
        video: 'https://www.youtube.com/embed/iqjbSMeL4t8'
      },
      {
        id: 7,
        title: 'Hush Little Baby',
        image: 'images/rhymes/7.jpg',
        video: 'https://www.youtube.com/embed/mk-LvVGhf38'
      },
      {
        id: 8,
        title: 'Jack and Jill',
        image: 'images/rhymes/8.jpg',
        video: 'https://www.youtube.com/embed/Mx6U2Z-i6ak'
      },
      {
        id: 9,
        title: 'Johny Johny Yes Papa',
        image: 'images/rhymes/9.jpg',
        video: 'https://www.youtube.com/embed/D1LDPmYoYm4'
      },
      {
        id: 10,
        title: 'Row Row Row your Boat',
        image: 'images/rhymes/10.jpg',
        video: 'https://www.youtube.com/embed/PZJS2_pWMpE'
      }
    ];
  },
  methods: {
    addBook(book) {
      this.books = [...this.books, book]
    },
    addRhyme(rhyme) {
      for(var i = 0; i < this.books.length; ++i) {
        if(this.books[i].id == rhyme.id) {
          this.books[i].rhymes = [...this.books[i].rhymes, rhyme.rhyme]
          this.books[i].rhymes = [...new Set(this.books[i].rhymes)]
        }
      }
    },
    delBook(id) {
      this.books = this.books.filter((book) => {
        return book.id !== id
      })
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