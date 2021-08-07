<template>
    <div>
        <h1>{{ this.path }}</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>points</th>
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
    props:{
        path: ''
    },
    data(){
        return{
            qs:[]
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
            this.$router.push({name: 'Q', params: {id:q.id, path:this.path}})
        }
    }
}
</script>

<style>

</style>