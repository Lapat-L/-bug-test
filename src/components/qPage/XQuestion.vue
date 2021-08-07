<template>
    <div>
        <h1>Extra#</h1>
        <h2>{{q.heading}}</h2>
        <div class="choice">
            <div><h2>{{ q.c1 }}</h2></div>
            <div><h2>{{ q.c2 }}</h2></div>
            <div><h2>{{ q.c3 }}</h2></div>
            <div><h2>{{ q.c4 }}</h2></div>
        </div>
        <div>
            <button @click="back">BACK</button>
        </div>
    </div>
</template>

<script>
import DocService from '../../services/DocService'
export default {
    name: 'XQuestion',
    props:{
        id: '',
        path: ''
    },
    data(){
        return{
            q:{
                heading: '',
                c1: '',
                c2: '',
                c3: '',
                c4: '',
                ans: '',
                point: 0
            }
        }
    },
    async created(){
        let question = await DocService.getWaitApproveById(this.id, '/exes/')
        this.q.heading = question.heading
        this.q.c1 = question.c1
        this.q.c2 = question.c2
        this.q.c3 = question.c3
        this.q.c4 = question.c4
        this.q.ans = question.ans
        this.point = question.point
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }

}
</script>

<style>

</style>