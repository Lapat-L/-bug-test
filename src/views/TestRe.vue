<template>
    <div>
        <div>
          <label for="type">Upload image</label>
          <input class='fileimage' type="file" id="img" accept="image/*" @change="handleChange" />
        </div>
        <div>
            <img id="img-preview">
        </div>
        <div>
            <button @click="addReward">add Reward</button>
        </div>
    <!-- <div class="point">{{ this.current_point }} points</div> -->
    <div class="show1">
      <div v-for="(reward, index) in rewards" :key="index">
        <div>
          <img src="http://localhost:1337${reward.image.url}" />
          <div>{{ reward.name }}</div>
          <div>{{ reward.point }} points</div>
          <div>Stock : {{ reward.amount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RewardApiStore from "@/store/RewardApi";
import Upload from "../services/UploadService";
import Member from '../store/member'
export default {
    data(){
        return{
            rewards: [], response:''
        }
    },
    methods:{
    async fetchReward() {
        await RewardApiStore.dispatch("fetchReward");
        this.rewards = RewardApiStore.getters.rewards;
    },
    handleChange(event) {
        this.file = event.target.files[0];
        if(this.file){
            var src = URL.createObjectURL(event.target.files[0])
            var preview = document.getElementById('img-preview')
            preview.src = src
        }
    },
    async uploadImage() {
        const data = new FormData();
        data.append("files", this.file);
        this.response = await Upload.uploadImage(data);

        // this.respone = await Axios.post(
        //   "http://localhost:1337" + "/upload",
        //   data,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${AuthService.getJwt()}`,
        //     },
        //   }
        // );
    },
    async addReward() {
    if (this.file) {
        await this.uploadImage();
    }
    this.postReward();
    },
    async postReward() {
    let payload = {
        name: 'name3',
        point: '120',
        amount: '20',
        image: this.response.data[0].id,
        };
        await RewardApiStore.dispatch("addReward", payload);
        this.$swal({ title: "Add Success", icon: "success" });
        // this.$router.push({ path: "/re" });
    },
},
async created() {
    this.fetchReward();
    this.id = JSON.parse(localStorage.getItem('auth-user')).user.id
    this.user = await  Member.dispatch('searchMe', {id:this.id})
},
}
</script>

<style>

</style>