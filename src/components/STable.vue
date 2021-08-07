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
                            <button @click="clickA">view</button>
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
            path: 'sci'
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
            this.$router.push({name: 'Q',params: {id:q.id, path: 'sci'}})
        },
        clickA(){
            this.$swal({title: 'Are you want',icon: 'question',showCancelButton: true,
            confirmButtonText: 'Delete',showReverseButtons: true, cancelButtonText: 'No',
            confirmButtonColor: 'red'})
        }
    }
}
</script>

<style>

</style>