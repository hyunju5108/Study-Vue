<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    console.log(this.$route.params.id);   // ex)bluejekyll
    // id를 api 태움
    // axios.get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}.json`);   -> 이거를 store에 구현

    const userName = this.$route.params.id; 
    this.$store.dispatch('FETCH_USER', userName);   // -> actions.js로 userName을 인자로 보냄
  }
}
</script>

<style>

</style>