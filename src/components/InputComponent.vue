<template>
    <div class="container mx-auto">
        <form @submit="onClick"
            class="border border-emerald-500 rounded-2xl flex flex-col justify-center items-center p-5">
            <h2 class="text-2xl">Add {{name}}</h2>
            <div v-for="input in inputs" :key="input" class="w-1/3 flex flex-col mb-3">
                <label :for="input.label" class="mb-1">{{separateCamelCaseString(input.label)}} :
                </label>
                <input :min="input.type === 'number' && 0" :required="input.required && true"
                    :type="input.type || 'text'" name="name" id="name" v-model="input.value"
                    class="p-2 outline-none border-2 text-black rounded hover:border-cyan-600 transition active:border-cyan-600 focus:border-cyan-600">
            </div>
            <button type="submit" class="bg-slate-600 hover:bg-slate-800 transition  py-2 px-5 rounded-lg">Add
                {{name}}</button>
        </form>
    </div>
</template>
  
<script>
export default {
    props: {
        inputs: {
            type: Array,
            required: true,
        },
        name: {
            type: String,
            required: true
        }
    },
    methods: {
        onClick(e) {
            e.preventDefault()
            this.$emit('onClickHandler', this.inputs.map((input) => {
                return { ...input, value: typeof input.value !== 'string' ? input.value : input.value.trim() }
            }))
        }
    },
    computed: {
        separateCamelCaseString() {
            return (string) => {
                const spaced = string.replace(/([a-z])([A-Z])/g, '$1 $2');
                return spaced.charAt(0).toUpperCase() + spaced.slice(1);
            }
        },
    }
}

</script>