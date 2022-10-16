<template>
  <InputComponent :inputs="inputs" name="User" @onClickHandler="addUser" />
  <Datatable :data="users" name="User" :order="inputs" />
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
        { label: 'lastName', value: '' },
        { label: "age", value: 0, type: "number" },
        { label: "email", value: "", required: true, type: "email" }
      ],
      users: []
    };
  },
  components: { InputComponent, Datatable },
  methods: {
    async addUser(val) {
      try {
        const user = {}
        for (let key of val) {
          user[key.label] = key.value
        }
        await API.users.addUser(user)
        this.searchUsers()
      } catch (e) {
        console.log(e)
      }
    },
    async searchUsers() {
      const { data } = await API.users.searchUsers()
      let arr = []
      for (let obj in data) {
        arr.push({ id: obj, ...data[obj] })
      }
      this.users = arr

    }
  },
  created() {
    this.searchUsers()
  }
}
</script>