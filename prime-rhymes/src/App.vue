<template>
  <div id="wrapper" class="container-fluid">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header"

export default {
  name: 'App',
  components: {
    Header
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