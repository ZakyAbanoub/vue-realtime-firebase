<template>
    <div class="flex flex-col items-center mt-5" v-if="dataArray.length">
        <table class="border-collapse border border-slate-500 table-fixed w-2/3">
            <thead>
                <tr>
                    <th v-for="dataHeader in dataObject" :key="dataHeader"
                        class="border-2 border-slate-500 text-[1.25rem] p-3">
                        {{separateCamelCaseString(dataHeader)}}</th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr class="border border-slate-700" v-for="singleMook in dataArray" :key="singleMook">
                    <td class="border border-slate-700 p-2" v-for="singleKey in singleMook" :key="singleKey">
                        {{singleKey || ' - '}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else class="mt-5 text-2xl flex justify-center">
        There's No {{name}} Found
    </div>
</template>

<script>
export default {
    computed: {
        // We use the regular expression to uppercase the first letter and separate the string when we have camelcase case (ex: lastName => Last Name)
        separateCamelCaseString() {
            return (string) => {
                const spaced = string.replace(/([a-z])([A-Z])/g, '$1 $2');
                return spaced.charAt(0).toUpperCase() + spaced.slice(1);
            }
        },
        // This Logic is wrong because maybe an object contains the hightes length but not all keys
        //Detect the object that has the highest length
        // dataObject() {
        //     let obj = {}
        //     let max = 0;
        //     for (let singleMook of this.data) {
        //         let length = Object.keys(singleMook).length
        //         if (length > max) {
        //             max = length
        //             obj = singleMook
        //         }
        //     }
        //     return obj
        // }


        // Get All keys of all Objects
        dataObject() {
            // If the the order prop is an array of strings return this because we can choose the order we want,
            // if it is an array of objects we have to map it to get the same order of inputs
            if (this.order.length) {
                if (typeof this.order[0] === 'string') {
                    return this.order
                } else {
                    return ['id', ...this.order.map(obj => obj.label)]
                }
            }
            let arr = []
            for (let singleMook of this.data) {
                for (let singleKey in singleMook) {
                    if (!arr.includes(singleKey)) {
                        arr.push(singleKey)
                    }
                }
            }
            return arr
        },

        //Loop on All Keys to add undefined if a key is undefined
        dataArray() {
            let arr = []
            for (let singleMook of this.data) {
                let obj = {}
                for (let singleKey of this.dataObject) {
                    obj[singleKey] = singleMook[singleKey] || undefined
                }
                arr.push(obj)
            }
            return arr
        }
    },
    props: {
        data: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            required: false,
            default: 'Thing'
        },
        order: {
            type: Array,
            required: false,
            default: []
        }
    }
}
</script>

<style>

</style>