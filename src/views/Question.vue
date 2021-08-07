<template>
    <div>
        <question :id="this.id" :path="this.path" />
    </div>
</template>

<script>
import Question from '../components/Question.vue'
export default {
    components:{
        Question
    },
    data(){
        return{
            id: '',
            path: ''
        }
    },
    async created(){
        this.id = this.$route.params.id
        this.path = this.$route.params.path
    }
}
</script>

<style>

</style>