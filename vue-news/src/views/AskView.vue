<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        포인트 영역
        <div class="points">
          {{ item.points }}
        </div>
        기타 정보 영역
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by {{ item.user }}
          </small> -->
        <!-- </div> -->
        <!-- <a v-bind:href="item.url">{{ item.title }}</a>
        <small>
          {{ item.time_ago }} by
          <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small> -->
      <!-- </li>
    </ul> -->

    <!-- <div v-for="item in fetchedAsk">{{ item.title }}</div> -->
    <!-- <p v-for="item in fetchedAsk"> -->
      <!-- <a v-bind:href="item.url">{{ item.title }}</a> -->
      <!-- <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p> -->
  </div>
</template>

<script>
// import { fetchAsksList } from '../api/index.js'
// import { mapState, mapGetters } from 'vuex';
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
  //     this.$store.dispatch("FETCH_ASK")
  //     .then(() => {
  //       console.log('fetched');
  //       bus.$emit('end:spinner'); // 이벤트를 spinner로 보냄
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   }, 3000);
  // }
  // data() {
  //   return {
  //     ask : []
  //   }
  // },
  // computed: {
  //   ...mapGetters([
  //     "fetchedAsk"
  //   ])
    // #2
    // ...mapState({
    //   fetchedAsk : state => state.ask
    // })
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  // },
  // created() {
  //   this.$store.dispatch("FETCH_ASK");
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