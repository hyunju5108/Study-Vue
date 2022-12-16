import ListView from './ListView.vue';
import bus from '../utils/bus.js';

// HOC(High Order Components)
export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        // el, ddata,compoenents
        name: name,       // JobsView, AskView,NewsView
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
            // }, 3000);
        },
        render(createElement) {
            return createElement(ListView);
        }
    
    }
}