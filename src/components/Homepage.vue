<template>
  <div class="homepage">
    <h1>{{ msg }}</h1>
    <Items/>
  </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import Items from './item/Items'

export default {
  name: 'Homepage',
  components: {
    Items
  },
  data () {
    return {
      msg: 'Our products'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
