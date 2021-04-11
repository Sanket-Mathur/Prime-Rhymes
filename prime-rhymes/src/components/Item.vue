<template>
  <div class="item col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
    <h2>$ {{ 5 + book.rhymes.length }}</h2>
    <h1>{{ book.name }}</h1>
    <img @click="$emit('delete-book')" alt="del" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMCwwKSI+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTU2LjM3MTA5NCAzMC45MDYyNWg4NS41NzAzMTJ2MTQuMzk4NDM4aDMwLjkwMjM0NHYtMTYuNDE0MDYzYy4wMDM5MDYtMTUuOTI5Njg3LTEyLjk0OTIxOS0yOC44OTA2MjUtMjguODcxMDk0LTI4Ljg5MDYyNWgtODkuNjMyODEyYy0xNS45MjE4NzUgMC0yOC44NzUgMTIuOTYwOTM4LTI4Ljg3NSAyOC44OTA2MjV2MTYuNDE0MDYzaDMwLjkwNjI1em0wIDAiIGZpbGw9IiNmZjAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zNDQuMjEwOTM4IDE2Ny43NWgtMjkwLjEwOTM3NmMtNy45NDkyMTggMC0xNC4yMDcwMzEgNi43ODEyNS0xMy41NjY0MDYgMTQuNzA3MDMxbDI0LjI1MzkwNiAyOTkuOTA2MjVjMS4zNTE1NjMgMTYuNzQyMTg4IDE1LjMxNjQwNyAyOS42MzY3MTkgMzIuMDkzNzUgMjkuNjM2NzE5aDIwNC41NDI5NjljMTYuNzc3MzQ0IDAgMzAuNzQyMTg4LTEyLjg5NDUzMSAzMi4wOTM3NS0yOS42NDA2MjVsMjQuMjUzOTA3LTI5OS45MDIzNDRjLjY0NDUzMS03LjkyNTc4MS01LjYxMzI4Mi0xNC43MDcwMzEtMTMuNTYyNS0xNC43MDcwMzF6bS0yMTkuODYzMjgyIDMxMi4yNjE3MTljLS4zMjQyMTguMDE5NTMxLS42NDg0MzcuMDMxMjUtLjk2ODc1LjAzMTI1LTguMTAxNTYyIDAtMTQuOTAyMzQ0LTYuMzA4NTk0LTE1LjQwNjI1LTE0LjUwMzkwN2wtMTUuMTk5MjE4LTI0Ni4yMDcwMzFjLS41MjM0MzgtOC41MTk1MzEgNS45NTcwMzEtMTUuODUxNTYyIDE0LjQ3MjY1Ni0xNi4zNzUgOC40ODgyODEtLjUxNTYyNSAxNS44NTE1NjIgNS45NDkyMTkgMTYuMzc1IDE0LjQ3MjY1N2wxNS4xOTUzMTIgMjQ2LjIwNzAzMWMuNTI3MzQ0IDguNTE5NTMxLTUuOTUzMTI1IDE1Ljg0NzY1Ni0xNC40Njg3NSAxNi4zNzV6bTkwLjQzMzU5NC0xNS40MjE4NzVjMCA4LjUzMTI1LTYuOTE3OTY5IDE1LjQ0OTIxOC0xNS40NTMxMjUgMTUuNDQ5MjE4cy0xNS40NTMxMjUtNi45MTc5NjgtMTUuNDUzMTI1LTE1LjQ0OTIxOHYtMjQ2LjIxMDkzOGMwLTguNTM1MTU2IDYuOTE3OTY5LTE1LjQ1MzEyNSAxNS40NTMxMjUtMTUuNDUzMTI1IDguNTMxMjUgMCAxNS40NTMxMjUgNi45MTc5NjkgMTUuNDUzMTI1IDE1LjQ1MzEyNXptOTAuNzU3ODEyLTI0NS4zMDA3ODItMTQuNTExNzE4IDI0Ni4yMDcwMzJjLS40ODA0NjkgOC4yMTA5MzctNy4yOTI5NjkgMTQuNTQyOTY4LTE1LjQxMDE1NiAxNC41NDI5NjgtLjMwNDY4OCAwLS42MTMyODItLjAwNzgxMi0uOTIxODc2LS4wMjM0MzctOC41MTk1MzEtLjUwMzkwNi0xNS4wMTk1MzEtNy44MTY0MDYtMTQuNTE1NjI0LTE2LjMzNTkzN2wxNC41MDc4MTItMjQ2LjIxMDkzOGMuNS04LjUxOTUzMSA3Ljc4OTA2Mi0xNS4wMTk1MzEgMTYuMzMyMDMxLTE0LjUxNTYyNSA4LjUxOTUzMS41IDE1LjAxOTUzMSA3LjgxNjQwNiAxNC41MTk1MzEgMTYuMzM1OTM3em0wIDAiIGZpbGw9IiNmZjAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zOTcuNjQ4NDM4IDEyMC4wNjI1LTEwLjE0ODQzOC0zMC40MjE4NzVjLTIuNjc1NzgxLTguMDE5NTMxLTEwLjE4MzU5NC0xMy40Mjk2ODctMTguNjQwNjI1LTEzLjQyOTY4N2gtMzM5LjQxMDE1NmMtOC40NTMxMjUgMC0xNS45NjQ4NDQgNS40MTAxNTYtMTguNjM2NzE5IDEzLjQyOTY4N2wtMTAuMTQ4NDM4IDMwLjQyMTg3NWMtMS45NTcwMzEgNS44NjcxODguNTg5ODQ0IDExLjg1MTU2MiA1LjM0Mzc1IDE0LjgzNTkzOCAxLjkzNzUgMS4yMTQ4NDMgNC4yMzA0NjkgMS45NDUzMTIgNi43NSAxLjk0NTMxMmgzNzIuNzk2ODc2YzIuNTE5NTMxIDAgNC44MTY0MDYtLjczMDQ2OSA2Ljc1LTEuOTQ5MjE5IDQuNzUzOTA2LTIuOTg0Mzc1IDcuMzAwNzgxLTguOTY4NzUgNS4zNDM3NS0xNC44MzIwMzF6bTAgMCIgZmlsbD0iI2ZmMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
    <button @click="expand" type="button" class="collapsible">Show Rhymes</button>
    <div class="content">
      <ul>
        <li :key="rhyme.id" v-for="rhyme in book.rhymes">{{ rhyme }}</li>
      </ul>
    </div>
    <h5 id="warning" v-if="book.rhymes.length === 0">Warning: No Rhyme</h5>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    book: Object
  },
  methods: {
    expand() {
      var coll = document.getElementsByClassName("collapsible");
      var i;
      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
            this.innerText = 'Show Rhymes'
          } else {
            content.style.display = "block";
            this.innerText = 'Hide Rhymes'
          }
        });
      }
    }
  }
}
</script>

<style scoped>
.item {
  background-color: white;
  padding: 2vh;
  margin-bottom: 2vh;
}
h1 {
  font-family: 'Fredoka One', cursive;
  font-size: 5vh;
}
h2 {
  font-family: 'Fredoka One', cursive;
  font-size: 4vh;
  font-weight: lighter;
  float: right;
}
h5 {
    color: #FFC700;
}
img {
  height: 4vh;
  float: right;
  cursor: pointer;
}
.collapsible {
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: 2vh;
}
.content {
  padding: 0 1vh;
  display: none;
  overflow: hidden;
}
ul {
  padding: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 2vh;
}
</style>