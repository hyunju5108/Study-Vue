import {fetchNewsList, fetchJobsList, fetchAsksList} from '../api/index.js'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            console.log(response);
            context.commit('SET_NEWS', response.data);       // 이 기능을 이용해서 mutations에 값을 넘길 수 있음
        })
        .catch(function(error){
            console.log(error);
        });
    },

    FETCH_ASK({commit}) {
        fetchAsksList()
        .then(({data}) => {
            commit('SET_ASK', data);
        })
        .catch(function(error) {
            console.log(error);
        })
    },

    FETCH_JOBS({commit}) {
        fetchJobsList()
        .then(({data}) => {
            console.log(data);
            commit('SET_JOBS', data);
            // this.jobs = response.data;
        })
        .catch(function(error) {
            console.log(error);
        })
    },

}