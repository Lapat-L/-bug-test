<template>
    <div>
        <h1>ADD EXTRA QUESTION</h1>
        <div style="margin-bottom: 50px">
            <label for="head" style="font-size: 2em">Question: </label>
            <input type="text" v-model="form.q" style="width: 700px;font-size: 2em;">
        </div>
        <div class="choice" style="width: 100%">
            <div>
                <label for="c1" style="font-size: 2em;">Choice 1: </label>
                <input type="text" v-model="form.c1" style="width: 400px;font-size: 2em">
            </div>
            <div>
                <label for="c2" style="font-size: 2em;">Choice 2: </label>
                <input type="text" v-model="form.c2" style="width: 400px;font-size: 2em">
            </div>
            <div>
                <label for="c3" style="font-size: 2em;">Choice 3: </label>
                <input type="text" v-model="form.c3" style="width: 400px;font-size: 2em">
            </div>
            <div>
                <label for="c4" style="font-size: 2em;">Choice 4: </label>
                <input type="text" v-model="form.c4" style="width: 400px;font-size: 2em">
            </div>
        </div>
        <div style="margin: 50px 0px">
            <label for="ans" style="font-size: 2em;">Answer: </label>
            <input type="text" v-model="form.ans" style="width: 400px;font-size: 2em">
        </div>
        <div>
            <button style="font-size: 2em;width: 130px" @click="send">SEND</button>
            <button style="font-size: 2em;width: 130px" @click="back">CANCEL</button>
        </div>
    </div>
</template>

<script>
import AuthUser from '../../store/AuthUser'
import Proposation from '../../store/proposition'
export default {
    data(){
        return{
            form:{
                q: '',
                c1: '',
                c2: '',
                c3: '',
                c4: '',
                ans: ''
            }
        }
    },
    methods:{
        back(){
            return this.$router.go(-1)
        },
        async send(){
            let payload = {
                q: this.form.q,
                c1: this.form.c1,
                c2: this.form.c2,
                c3: this.form.c3,
                c4: this.form.c4,
                ans: this.form.ans,
                id: AuthUser.getters.user.id
            }
            let res = await Proposation.dispatch('addQuestion', payload)
            if(res.success){
                this.$swal({title: "Send Success",icon: 'success'})
                this.$router.push('/extra')
            }else{
                this.$swal('Send Failed!', res.message, 'error')
            }
        }
    }
}
</script>

<style>

</style>