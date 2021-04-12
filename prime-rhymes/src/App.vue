<template>
  <div id="wrapper" class="container-fluid">
    <Header :totalBooks="books.length" />
    <router-view @add-book="addBook" @add-rhyme="addRhyme" @delete-book="delBook" :rhymes="rhymes" :books="books" :products="products" />
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
        title: 'Ring Around the Rosy',
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
      },
      {
        id: 11,
        title: 'A Wise Old Owl',
        image: 'images/rhymes/11.jpg',
        video: 'https://www.youtube.com/embed/MYNJyg78Jmc'
      },
      {
        id: 12,
        title: 'Three Little Pigs',
        image: 'images/rhymes/12.jpg',
        video: 'https://www.youtube.com/embed/2s7cz6p7jew'
      }
    ];
    this.products = [
      {
        id: 1,
        name: 'Sleepy Time',
        image: 'images/products/1.jpg',
        age: 1,
        category: 'Sleep',
        rhymes: ['Ba Ba Black Sheep', 'Hush Little Baby', 'A Wise Old Owl', 'Three Little Pigs', 'Twinkle Twinkle Little Star']
      },
      {
        id: 2,
        name: 'Love to Play',
        image: 'images/products/2.jpg',
        age: 1,
        category: 'Play',
        rhymes: ['Ring Around the Rosy', 'Humpty Dumpty', '5 Little Monkeys', 'Three Little Pigs', 'Jack and Jill']
      },
      {
        id: 3,
        name: 'Friends',
        image: 'images/products/3.jpg',
        age: 1,
        category: 'Play',
        rhymes: ['Baby Shark', 'Hush Little Baby', 'Johny Johny Yes Papa', 'Humpty Dumpty', 'A Wise Old Own']
      },
      {
        id: 4,
        name: 'Bed Time',
        image: 'images/products/4.jpg',
        age: 2,
        category: 'Sleep',
        rhymes: ['5 Little Monkeys', 'Hush Little Baby', 'A Wise Old Owl', 'Three Little Pigs', 'Jack and Jill']
      },
      {
        id: 5,
        name: 'I\'m Playing',
        image: 'images/products/5.jpg',
        age: 2,
        category: 'Play',
        rhymes: ['Johny Johny Yes Papa', '5 Little Monkeys', 'Ring Around the Rosy', 'Three Little Pigs', 'Humpty Dumpty']
      },
      {
        id: 6,
        name: 'KG Rhymes',
        image: 'images/products/6.jpg',
        age: 2,
        category: 'KinderGarden',
        rhymes: ['Ba Ba Black Sheep', 'Humpty Dumpty', 'Ring Around the Rosy', 'Three Little Pigs', 'Jack and Jill']
      },
      {
        id: 7,
        name: 'Rhyme Master',
        image: 'images/products/7.jpg',
        age: 3,
        category: 'Play',
        rhymes: ['Johny Johny Yes Papa', 'Ring Around the Rosy', 'Row Row Row your Boat', 'Baby Shark', 'Jack and Jill']
      },
      {
        id: 8,
        name: 'Course 001',
        image: 'images/products/8.jpg',
        age: 3,
        category: 'School',
        rhymes: ['Ring Around the Rosy', 'Humpty Dumpty', 'A Wise Old Owl', 'Johny Johny Yes Papa', 'Jack and Jill']
      },
      {
        id: 9,
        name: 'English',
        image: 'images/products/9.jpg',
        age: 3,
        category: 'School',
        rhymes: ['Ba Ba Black Sheep', 'Hush Little Baby', 'A Wise Old Owl', 'Three Little Pigs', 'Jack and Jill']
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