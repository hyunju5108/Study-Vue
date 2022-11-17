<template>
  <div>
    <section>
      <!-- 질문상세정보 -->
      <div>
        <div>
          User
        </div>
        <div>
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div>
            {{ fetchedItem.time_ago }}
          </div>
        </div>
        <h2>{{ fetchedItem.title }}</h2>
      </div>

    </section>
    <section>

    </section>

    <!-- {{ fetchedItem.content }} -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  created() {
    console.log(this.$store.state.item);

    const itemId = this.$route.params.id; 
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
  computed: {
      ...mapGetters(['fetchedItem']),
  }
}
</script>

<style>

</style>