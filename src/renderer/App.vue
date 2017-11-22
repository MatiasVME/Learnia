<template>
  <div id="app">
    <main-sign></main-sign>
  </div>
</template>

<script>
  import MainSign from '@/components/MainSign'

  export default {
    name: 'learnia',
    components: {
      MainSign
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  @import url("../../node_modules/firebaseui/dist/firebaseui.css");
  /* Global CSS */
</style>
