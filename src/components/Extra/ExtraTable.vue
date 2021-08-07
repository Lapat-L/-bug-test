<template>
    <div>
        <div>
            <h1>EXTRA QUESTION</h1>
            <div>
                <button @click="back">back</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Heading</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="q in extras" :key="q.id">
                        <td>{{ q.heading }}</td>
                        <td>{{ q.point }}</td>
                        <td>
                            <button>Check</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import Extra from '../../store/extra'
    export default {
        data(){
            return{
                extras: []
            }
        },
        created(){
            this.fetchExtra()
        },
        methods:{
            async fetchExtra(){
                await Extra.dispatch('fetchExtra')
                this.extras = Extra.getters.extras
            },back(){
                this.$router.push('/extra')
            }
        }
    }
</script>

<style>

</style>