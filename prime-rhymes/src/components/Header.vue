<template>
  <header>
    <nav class="navbar fixed-top navbar-light">
      <router-link to="/" class="navbar-brand">
        <img src="logo/logo.png" class="d-inline-block align-top" alt="logo">
        <h3 class="mx-2 d-inline">Prime Rhymes</h3>
      </router-link>
      <div class="nav">
        <router-link to="/books">
            <NavLink minor="Build custom" text="Books" />
        </router-link>
        <router-link to="/rhymes">
            <NavLink minor="Select your" text="Rhymes" />
        </router-link>
        <router-link to="/products">
            <NavLink minor="Browse our" text="Products" />
        </router-link>
        <router-link to="/about">
            <NavLink minor="Read more" text="About Us" />
        </router-link>
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
  font-size: 5vh;
  color: #5A4088;
  text-transform: uppercase;
}

.nav {
    text-decoration: none;
}
.nav * {
    text-decoration: none;
}
</style>