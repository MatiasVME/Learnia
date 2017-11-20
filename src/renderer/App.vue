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
    },
    data: () => ({
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'LearniaInteractive'
    })
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */
</style>
