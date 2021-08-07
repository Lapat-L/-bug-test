<template>
    <div>
        <m-question :id="this.id"/>
    </div>
</template>

<script>
import MQuestion from '../../components/qPage/MQuestion.vue'
export default {
    components:{
        MQuestion
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