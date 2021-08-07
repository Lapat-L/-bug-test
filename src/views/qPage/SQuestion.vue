<template>
    <div>
        <question :id="this.id"/>
    </div>
</template>

<script>
import Question from '../../components/qPage/SQuestion.vue'
export default {
    components:{
        Question
    },
    data(){
        return{
            id: ''
        }
    },
    async created(){
        this.id = this.$route.params.id
    }
}
</script>

<style>

</style>