<template>
  <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Product:"
        label-for="input-1"
        description="What do you sell..."
      >
        <b-form-input
          id="input-1"
          v-model="form.product"
          required
          placeholder="Enter your product"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.description"
          placeholder="Enter a description"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Image:"
        label-for="input-3"
        description="Picture of your product"
        placeholder="Download your image"
      >
        <b-form-input
          id="input-3"
          v-model="form.image"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Price:"
        label-for="input-4"
        description="Enter your price">
        <b-form-input
          v-model="form.price"
          id="input-4"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <b-button variant="danger" @click="goBack">Go back</b-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        product: '',
        description: '',
        image: '',
        price: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      let url = 'http://localhost:8081/items/create'
      this.$http.post(url, JSON.stringify(this.form)).then(response => response.data)
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.product = ''
      this.form.description = ''
      this.form.image = ''
      this.form.price = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
