<template>
    <div>
        <q-table></q-table>
    </div>
</template>

<script>
import QTable from '../components/MTable.vue'
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