<template>
    <div>
        <h1>{{ this.path }}#</h1>
        <h2>{{q.question}}</h2>
        <div class="choice">
            <div>
                <button @click="select(q.c1)" v-if="!status">1</button>
                <h2>{{ q.c1 }}</h2>
            </div>
            <div>
                <button @click="select(q.c2)" v-if="!status">2</button>
                <h2>{{ q.c2 }}</h2>
            </div>
            <div>
                <button @click="select(q.c3)" v-if="!status">3</button>
                <h2>{{ q.c3 }}</h2>
            </div>
            <div>
                <button @click="select(q.c4)" v-if="!status">4</button>
                <h2>{{ q.c4 }}</h2>
            </div>
        </div>
        <div>
            <button v-if="status" @click="back">BACK</button>
        </div>
        <div>
            <h2 v-if="status">You already do this question!</h2>
        </div>
        <div>
            <h2 v-if="status">Answer is {{ q.ans}}</h2>
        </div>
    </div>
</template>

<script>
import DocService from '../services/DocService'
import AuthUser from '../store/AuthUser'
import Member from '../store/member'
import History from '../store/history'
import moment from 'moment'
export default {
    name: 'MQuestion',
    props:{
        id: '',
        path: ''
    },
    data(){
        return{
            q:{
                question: '',
                c1: '',
                c2: '',
                c3: '',
                c4: '',
                ans: '',
                point: 0
            },
            user: {},
            i: false,
            status: false // ค่ามาจากการเช็คเช็คว่ายูเซอมีความสัมพันนี้ไหม
        }
    },
    async created(){
        let question = await DocService.getWaitApproveById(this.id, this.path)
        this.q.heading = question.question
        this.q.c1 = question.c1
        this.q.c2 = question.c2
        this.q.c3 = question.c3
        this.q.c4 = question.c4
        this.q.ans = question.ans
        this.q.point = question.point
        this.user = AuthUser.getters.user
        this.checkDo()
    },
    methods:{
        back(){
            this.$router.push({name: 'T', params: {id:this.id, path:this.path}})
        },
        async select(c){
            if(c=== this.q.ans){
                if(this.path === 'math'){
                    //ระบบเพิ่มแต้มเมื่อตอบถูก
                    let d = moment().toISOString()
                    let payload1 = {
                        date: moment(d).format("YYYY-MM-DD"),
                        heading: "Do math quiz correctly",
                        point: ''+this.q.point,
                        type: 'get',
                        id: this.user.id
                    }
                    await History.dispatch('addHistory', payload1)
                    // code เปลี่ยนเป็นทำเกือบเสดเหลือแค่ให้อัพเดทแบบไม่ต้อง logout
                    let m = this.user.maths.map(it =>it.id)
                    m.push(this.id)
                    let payload = {
                        id: this.user.id,
                        maths: m
                    }
                    // await Member.dispatch('addDoMQuestion', payload)
                    await AuthUser.dispatch('doMQuiz', payload)

                    
                    
                }
                this.$swal("Your answer is correct!", `You get ${this.q.point} point!`,'success')
            }else{
                if(this.path === 'math'){
                    let m = this.user.maths.map(it =>it.id)
                    m.push(this.id)
                    let payload = {
                        id: this.user.id,
                        maths: m
                    }
                    await AuthUser.dispatch('doMQuiz', payload)
                }
                this.$swal({title: "Your answer is incorrect!", icon: 'error'})
            }
            // if(this.path === 'math'){
            //     let m = this.user.maths.map(it =>it.id)
            //     let payload = {
            //         id: this.user.id,
            //         maths: m.push(this.id),
            //     }
            //     await Member.dispatch('addDoMQuestion', payload)
            //     await History.dispatch()
            // }
            // else if(this.path === 'sci'){

            // }else if(this.path === 'ex'){

            // }
            if(this.path=== "math"){
                this.$router.push({name: "M", params: {path:this.path}})
            }
            
        },
        checkDo(){
            if(this.path === 'math'){
                this.checkM(this.id)
                if(this.i){
                    this.status = true
                }
            }else if(this.path === 'ex'){
                this.checkX(this.id)
                if(this.i){
                    this.status = true
                }
            }else if(this.path === 'sci'){
                this.checkS(this.id)
                if(this.i){
                    this.status = true
                }
            }
        },
        checkM(id){
            this.user.maths.forEach(element => {
                if(id==element.id){
                    this.i = true
                }
            });
        },
        checkS(id){
            this.i = false
            this.s.forEach((element) =>{
                if(id===element){
                    return true
                }
            })
        },
        checkX(id){
            this.i = false
            this.x.forEach((element) =>{
                if(id===element){
                    return true
                }
            })
        }
    }

}
</script>

<style>

</style>