<template>
  <div>
    <!-- <div v-for="item in fetchedAsk">{{ item.title }}</div> -->
    <p v-for="item in fetchedAsk">
      <!-- <a v-bind:href="item.url">{{ item.title }}</a> -->
      <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
// import { fetchAsksList } from '../api/index.js'
import { mapState, mapGetters } from 'vuex';

export default {
  // data() {
  //   return {
  //     ask : []
  //   }
  // },
  computed: {
    ...mapGetters([
      "fetchedAsk"
    ])
    // #2
    // ...mapState({
    //   fetchedAsk : state => state.ask
    // })
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  }
}
</script>

<style>

</style>