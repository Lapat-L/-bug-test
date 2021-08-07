<template>
    <div>
        <check :id="this.id"/>
    </div>
</template>

<script>
    import Check from '../../components/Extra/Check.vue'
    export default {
        components:{
            Check
        },
        data(){
            return{
                id:''
            }
        },
        async created(){
            this.id = this.$route.params.id
        }
    }
</script>

<style>

</style>