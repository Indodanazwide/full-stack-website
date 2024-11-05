<template>
  <div class="layout">
    <!-- header -->
    <Header />

    <!-- main -->
    <Main />

    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Main,
    Footer
  }
}
</script>