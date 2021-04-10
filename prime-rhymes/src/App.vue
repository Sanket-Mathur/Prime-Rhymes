<template>
  <div id="wrapper" class="container-fluid">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
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