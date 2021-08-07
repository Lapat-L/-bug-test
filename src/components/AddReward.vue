<template>
    <div>
        <h1>Add Reward</h1>
        <div class="main">
            <div>
                <img v-bind:src="image" alt="" style="width: 300px;height: 300px">
            </div>
            <div>
                <label for="name">Name: </label>
                <input type="text" v-model: form.name>
            </div>
            <div>
                <label for="point">Points: </label>
                <input type="number" v-model: form.point>
            </div>
            <div>
                <label for="url">Image url (url from browser): </label>
                <input type="text" v-model: form.url>
            </div>
            <div>
                <button @click="back">Cancel</button>
                <button>Add</button>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            form:{
                name: '',
                point: 0,
                url: '',
            },
        }
    },methods:{
        back(){
            return this.$router.go(-1)
        },setImage(){
            this.image = form.url
        }
    },computed:{
        setImg: function(){
            const image = ''
            this.image = form.url
            return image
        }
    }
}
</script>

<style>
    .main > div{
        margin: 30px;
        color: white;
    }
    button{
        margin: 20px;
    }
</style>