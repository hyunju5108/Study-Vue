import {fetchUserInfo, fetchItemInfo, fetchList} from '../api/index.js'

export default {
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //     .then(response => {
    //         context.commit('SET_NEWS', response.data);       // 이 기능을 이용해서 mutations에 값을 넘길 수 있음
    //         return response;
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     });
    // },

    // FETCH_ASK({commit}) {
    //     return fetchAsksList()
    //     .then(({data}) => {
    //         commit('SET_ASK', data);
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     })
    // },

    // FETCH_JOBS({commit}) {
    //     return fetchJobsList()
    //     .then(({data}) => {
    //         console.log(data);
    //         commit('SET_JOBS', data);
    //         // this.jobs = response.data;
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     })
    // },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
        .then(({data}) => {
            commit('SET_USER', data);   // mutations.js
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_ITEM({ commit }, name) {
        return fetchItemInfo(name)
        .then(({data}) => {
            commit('SET_ITEM', data);   // mutations.js
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
        
        .then((response) => {
            console.log(response);
            commit("SET_LIST", response.data)
            return response;
        })
        .catch(error=>console.log(error));
    }

}