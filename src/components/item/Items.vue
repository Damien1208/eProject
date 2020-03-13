<template>
   <div>
      <ul class="list">
        <li v-for="item in items" :key="item.id">
         <Item :item="item" :reload="fetchItems"/>
        </li>
      </ul>
      <b-button variant="primary" @click="goToAdd">Sell your product</b-button>
    </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'Items',
  components: {
    Item
  },
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
  height: 10rem;
}
</style>
