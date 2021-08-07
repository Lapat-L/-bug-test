<template>
  <div>
    <div class="point">{{ this.current_point }} points</div>
    <div class="show1">
      <div v-for="(reward, index) in rewards" :key="index">
        <div>
          <img src="http://localhost:1337${reward.image.url}" />
          <div>{{ reward.name }}</div>
          <div>{{ reward.point }} points</div>
          <div>Stock : {{ reward.amount }}</div>
          <button
            @click="
              exchange(
                reward,index
              )
            "
          >
            Exchange
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RewardApiStore from "@/store/RewardApi";
import AuthUser from "@/store/AuthUser";
import moment from "moment";
import HistoryApiStore from "@/store/history";
import Member from '../store/member'
export default {
  data() {
    return {
      rewards: [],
      user: {},
      current_point: 0,
      id:''
    };
  },

  async created() {
    this.fetchReward();
    this.id = JSON.parse(localStorage.getItem('auth-user')).user.id
    this.user = await  Member.dispatch('searchMe', {id:this.id})
    this.calPoint()
  },
  methods: {
    async fetchReward() {
      await RewardApiStore.dispatch("fetchReward");
      this.rewards = RewardApiStore.getters.rewards;
    },
    calPoint(){
      let get = 0
      let use = 0
      this.user.histories.forEach(element => {
          if(element.type==='get'){
            get += parseInt(element.point)
          }else{
            use += parseInt(element.point)
          }
      });
      this.current_point = get - use
    },
    async exchange(reward, index){
      let date = moment().toISOString()
      let payload1 = {
        date: moment(date).format('YYYY-MM-DD'),
        heading: `Buy a ${reward.name} ${reward.point}`,
        point: ''+reward.point,
        type: 'use',
        id: this.user.id
      }
      await HistoryApiStore.dispatch('addHistory', payload1)
      reward.amount -=1
      let payload = {
        amount: ''+reward.amount, 
        id: reward.id,
        index: index
      }
      await RewardApiStore.dispatch('exchangeReward', payload)
      this.id = await AuthUser.getters.user.id
      this.user = await  Member.dispatch('searchMe', {id:this.id})
      this.calPoint()
    }
    // async fetchUser() {
    //   this.a = AuthUser.getters.user;
    //   this.point = this.a.histories;
    //   this.calpoint();
    // },
    // calpoint() {
    //   this.total_get = 0;
    //   this.total_use = 0;
    //   this.point.forEach((element) => {
    //     if (element.type == "get") {
    //       this.total_get += parseInt(element.point);
    //     } else if (element.type == "use") {
    //       this.total_use += parseInt(element.point);
    //     }
    //   });
    //   this.current_point = this.total_get - this.total_use;
    // },
    // async exchange(
    //   reward_point,
    //   reward_name,
    //   reward_amount,
    //   reward_id,
    //   reward_index
    // ) {
    //   if (this.current_point >= reward_point) {
    //     let date = moment().toISOString();
    //     let payload1 = {
    //       date: moment(date).format("YYYY-MM-DD"),
    //       heading: "Exchange " + reward_name,
    //       point: ''+reward_point,
    //       type: "use",
    //       id: AuthUser.getters.user.id,
    //     };
    //     await HistoryApiStore.dispatch("addHistory", payload1);
    //     this.$swal({ title: "Exchange Success", icon: "success" });
    //     this.reward_decrease(reward_amount, reward_id, reward_index);
    //     this.fetchUser();

    //     location.reload();
    //   } else {
    //     this.$swal("Exchange Failed", "Not enough points", "error");
    //   }
    // },
    // async reward_decrease(amount, id, index) {
    //   amount = parseInt(amount) - 1;
    //   let payload2 = {
    //     amount: "" + amount,
    //     id: id,
    //     index: index,
    //   };
    //   await RewardApiStore.dispatch("exchangeReward", payload2);
    // },
  },
};
</script>

<style lang="scss" scoped>
.show1 {
  padding-top: 80px;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
.show1 > div {
  width: 20%;
}
.point {
  padding-top: 100px;
  text-align: right;
  padding-right: 30px;
  font-size: 20px;
}

.img {
  width: 160px;
  height: 160px;
}
</style>