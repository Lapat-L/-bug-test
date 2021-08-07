<template>
    <div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Heading</th>
                        <th>point</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="q in qs" :key="q.id">
                        <td>{{ q.question }}</td>
                        <td>{{ q.point }}</td>
                        <td>
                            <button @click="click(q)">view</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Test from '../store/test'
export default {
    data(){
        return{
            qs: [],
            path: 'math'
        }
    },
    created(){
        this.fetchQ()
    },
    methods:{
        async fetchQ(){
            await Test.dispatch('fetchQ', this.path)
            this.qs = Test.getters.qs
        },
        click(q){
            this.$router.push({name: 'Q',params: {id:q.id, path:this.path}})
        }
    }
}
</script>

<style>

</style>