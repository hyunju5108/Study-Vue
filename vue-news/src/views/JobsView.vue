<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        포인트 영역
        <div class="points">
          {{ job.points || 0 }}
        </div>
        기타 정보 영역
        <div>
          <p class="news-title">
            <a v-bind:href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by
            <a :href="job.url">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul> -->

    <!-- <div v-for="job in this.$store.state.jobs">{{ job.title }}</div> -->
    <!-- <p v-for="job in this.$store.state.jobs">
      <a v-bind:href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
// import { fetchJobsList } from '../api/index.js'
import ListMxin from '../mixins/ListMixin.js';

export default {
  // data() {
  //   return {
  //     jobs : []
  //   }
  // },

  // created() {
  //   this.$store.dispatch("FETCH_JOBS");
  // }
  components: {
    ListItem
  },
  // mounted() {
  //   bus.$emit('end:spinner'); 
  // }
  mixins: [ListMxin]
  // created() {
  //   bus.$emit('start:spinner'); // 이벤트를 spinner로 보냄

  //   setTimeout(()=> {
  //     this.$store.dispatch("FETCH_JOBS")
  //     .then(() => {
  //       console.log('fetched');
  //       bus.$emit('end:spinner'); // 이벤트를 spinner로 보냄
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   }, 3000);
    
    
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