<template>
  <div>
     <b-card
        :title="item.productName"
        :img-src="item.image"
        img-alt="Image"
        tag="article"
        style="max-width: 15rem;"
        class="mb-2"
      >
        <b-card-text>{{item.description}}</b-card-text>
        <b-card-text>{{item.price}} €</b-card-text>
        <b-button href="#" variant="primary">Add to the cart</b-button>
        <b-icon icon="trash" @click="deleteItem"></b-icon>
      </b-card>
  </div>
</template>

<script>
export default {
  props: ['item', 'reload'],
  methods: {
    deleteItem (evt) {
      evt.preventDefault()
      let url = `http://localhost:8081/items/delete/${this.item.id}`
      this.$http.delete(url).then(response => response.data)
      this.reload()
    }
  }
}
</script>

<style>

</style>
