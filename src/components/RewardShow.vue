<template>
    <div>
        <h1>All Rewards</h1>
        <div class="container1">
            <div class="show">
                <!-- <div style="color: yellow;">
                    <img src="https://i.pinimg.com/474x/b5/51/49/b551491e3ae4b6a2c50fb568c7392a91--kawaii-things-kawaii-stuff.jpg" alt="pencil">
                    <div style="margin: 10px 0px">Item 1</div>
                    <div style="margin-bottom: 10px"> Points</div>
                    <div style="margin-bottom:10px;">
                        <button>Edit</button>
                    </div>
                </div> -->
                <div v-for="reward in rewards" :key="reward.id">
                    <div style="color: yellow;">
                        <img v-bind:src="reward.image" v-bind:alt="reward.name">
                        <div>{{reward.name}}</div>
                        <div>{{reward.point}} points</div>
                        <div>
                            <button>EDIT</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="select">
                <div>
                    <button @click="addReward">ADD</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RewardList from '../store/rewardList'
export default {
    data(){
        return{
            rewards: []
        }
    },
    created(){
        this.fetchReward()
    },
    methods:{
        async fetchReward(){
            await RewardList.dispatch("fetchReward")
            this.rewards = RewardList.getters.rewards
        },addReward(){
            return this.$router.push({ path: '/add-reward'})
        }
    }
}
</script>

<style>
    .container1{
        display: grid;
        grid-template-columns: 80% 20%;
    }
    .show{
        margin: 20px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
    }
    .show > div{
        width: 270px;
        margin: 30px;
    }
    img{
        margin-top: 10px;
        width:150px;
        height:150px;
    }
    /* position: fixed;  ไปตามหน้าเลื่อนลงก็ลงตาม*/
</style>