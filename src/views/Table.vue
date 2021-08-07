<template>
    <div>
        <q-table :path="this.path" />
    </div>
</template>

<script>
import QTable from '../components/Table.vue'
export default {
    components:{
        QTable
    },
    data(){
        return{
            path: ''
        }
    },
    created(){
        this.path = this.$route.params.path
    }
}
</script>

<style>

</style>