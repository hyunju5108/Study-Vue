<template>
  <div>
    <list-item></list-item>
  </div>
</template>

// 데이터를 블러올때는 컴포넌트를 등록해서 하는게 좋음.
<script>
// import { fetchNewsList } from '../api/index.js';
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
import ListMxin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem
  },
  mixins: [ListMxin]

  // created() {
  //   bus.$emit('start:spinner'); // 이벤트를 spinner로 보냄

  //   setTimeout(()=> {
  //     this.$store.dispatch("FETCH_NEWS")
  //     .then(() => {
  //       console.log('fetched');
  //       bus.$emit('end:spinner'); // 이벤트를 spinner로 보냄
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //    }, 3000);
  // }
  // data() {
  //   return {
  //     users : []
  //   }
  // },
  // created() {
  //   var vm = this;
    
    // axios.get('https://api.hnpwa.com/v0/news/1.json')
    // .then(function(response) {
    //   console.log(response);
    //   vm.users = response.data
    // })
    // .catch(function(error){
    //   console.log(error);
    // })
    // fetchNewsList()
    // .then(function(response) {
    //   console.log(response);
    //   vm.users = response.data
    // })
    // .catch(function(error){
    //   console.log(error);
    // })
  //   this.$store.dispatch("FETCH_NEWS");
  // }
}
</script>


<style scoped>
/* .news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282
} */
</style>