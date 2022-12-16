import bus from '../utils/bus.js'

// mixin
export default {
    // 재사용할 컴포넌트 옵션 & 로직

    created() {
        bus.$emit('start:spinner'); // 이벤트를 spinner로 보냄

        // setTimeout(()=> {
            this.$store.dispatch("FETCH_LIST", this.$route.name)
            .then(() => {
                console.log('fetched');
                bus.$emit('end:spinner'); // 이벤트를 spinner로 보냄
            })
            .catch((error) => {
                console.log(error);
            });
        //
  }
}