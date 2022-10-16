<template>
  <InputComponent :inputs="inputs" name="Product" @onClickHandler="addProduct" />
  <Datatable :data="products" name="Product" :order="inputs" />
</template>

<script>
import InputComponent from "@/components/InputComponent.vue";
import Datatable from "../components/Datatable.vue";
import API from '@/api'
export default {
  data() {
    return {
      inputs: [
        { label: "name", value: "" },
        { label: "price", value: 0, type: "number" },
        { label: "category", value: "", required: true }
      ],
      products: []
    };
  },
  components: { InputComponent, Datatable },
  methods: {
    async addProduct(val) {
      try {
        //We have to loop on val because val is an array of object that can all data (label, value, type, required)
        //We need only to get the label and value as object
        const product = {}
        for (let key of val) {
          product[key.label] = key.value
        }
        await API.products.addProduct(product)
        this.searchProducts()
      } catch (e) {
        console.log(e)
      }
    },

    //We have to use for in loop because when we use firebase realtime the response is an object not an array of object 
    async searchProducts() {
      try {
        const { data } = await API.products.searchProducts()
        let arr = []
        for (let obj in data) {
          arr.push({ id: obj, ...data[obj] })
        }
        this.products = arr
      } catch (e) {
        console.log(e)
      }

    }
  },
  created() {
    this.searchProducts()
  }
}
</script>