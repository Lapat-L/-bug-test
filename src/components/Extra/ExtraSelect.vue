<template>
    <div>
        <h1>EXTRA PLANET</h1>
        <div class="mode">
            <div>
                <button @click="add">Add Exercise</button>
            </div>
            <div>
                <button @click="doEx">Do Exercise</button>
            </div>
        </div>
        <h2>Please select your action</h2>
    </div>
    
</template>

<script>
export default {
    methods:{
        add(){
            return this.$router.push({path: '/add-extra'})
        },
        doEx(){
            return this.$router.push({path: '/extra-question'})
        }
    }
}
</script>

<style>
    .mode{
        display: grid;
        grid-template-columns: 50% 50%;
    }
</style>