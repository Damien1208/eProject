<template>
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
      <b-button variant="primary" @click="goToAdd">Add your product</b-button>
    </div>
</template>

<script>
export default {
  name: 'Items',
  data () {
    return {
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

<style scoped>
.list {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 80%;
  height: 90%;
}

.list li {
  margin-left: 20px;
}
</style>
