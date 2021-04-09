<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light">
      <router-link to="/" class="navbar-brand">
        <img src="logo/logo.png" class="d-inline-block align-top" alt="logo">
        <h3 class="mx-2 d-none d-md-inline">Prime Rhymes</h3>
      </router-link>
      <button class="navbar-toggler" type="button" @click="toggleDropdown">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="hide navbar-collapse nav justify-content-lg-end" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/books">
              <NavLink minor="Build custom" text="Books" />
            </router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/rhymes">
              <NavLink minor="Select your" text="Rhymes" />
            </router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/products">
              <NavLink minor="Browse our" text="Products" />
            </router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/about">
              <NavLink minor="Read more" text="About Us" />
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import NavLink from "./NavLink"
export default {
    name: 'Header',
    components: {
        NavLink
    },
    data() {
      return {
        dropdown: false
      }
    },
    methods: {
      toggleDropdown() {
        this.dropdown = !this.dropdown
        if(this.dropdown) {
          document.getElementById("navbarSupportedContent").classList.remove("hide")
        } else {
          document.getElementById("navbarSupportedContent").classList.add("hide");
        }
      }
    }
}
</script>

<style scoped>
.navbar {
  padding-left: 2vh;
  background-color: #FEE28E;
}
nav {
  padding: 1vh;
}
nav img {
  height: 5vh;
  width: auto;
}
nav h3 {
  font-family: 'Fredoka One', cursive;
  font-size: 4.5vh;
  color: #5A4088;
  text-transform: uppercase;
}
.nav * {
  text-decoration: none;
}
.hide {
  display: none;
}
</style>