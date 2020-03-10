<template>
  <div class="homepage">
    <h1>{{ msg }}</h1>
    <div>
      <ul class="list">
        <li v-for="item in items" :key="item.id">
          <b-card
            :title="item.productName"
            :img-src="item.image"
            img-alt="Image"
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>{{item.description}}</b-card-text>
            <b-card-text>{{item.price}} €</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </li>
      </ul>
    </div>
    <b-button variant="primary" @click="goToAdd">Add your product</b-button>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Homepage',
  data () {
    return {
      msg: 'Welcome to my app homepage',
      items: []
    }
  },
  methods: {
    fetchItems () {
      fetch('http://localhost:8081/items')
        .then(stream => stream.json())
        .then(data => (this.items = data))
        .catch(error => console.error(error))
    },
    goToAdd () {
      this.$router.push('/item/create')
    }
  },
  mounted () {
    this.fetchItems()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  list-style: none;
}
</style>
