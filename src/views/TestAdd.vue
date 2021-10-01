<template>
    <div>
        <div>
            <button @click="kk">kk</button>
            <div v-for="q in qs" :key="q.id">
                <h1>{{q.id}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import Ex from '../store/proposition'
export default {
    data(){
        return{
            qs: []
        }
    },
    created(){
        this.fetch()
    },
    methods:{
        async kk(){
            let payload = {
                q: 'test',
                c1: '1',
                c2: '2',
                c3: '3',
                c4: '4',
                ans: '1',
                id: '2'
            }
            await Ex.dispatch('addQuestion', payload)
            console.log('kk');
            // this.fetch()
        },
        async fetch(){
            await Ex.dispatch('fetchQuestion')
            this.qs = Ex.getters.questions
        }
    }
}
</script>

<style>

</style>