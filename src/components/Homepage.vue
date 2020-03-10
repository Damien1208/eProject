<template>
  <div class="homepage">
    <h1>{{ msg }}</h1>
    <Items/>
  </div>
</template>

<script>

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
  .homepage {
    text-align: center;
  }
</style>
