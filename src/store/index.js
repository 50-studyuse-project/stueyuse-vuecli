import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const actions = {};

const mutations = {};

const state =
{
    zs:
    {
        name: '张三',
        address: ['济南', '北京']
    },
    long: '18cm',
    sum: 20
};

export default new Vuex.Store( { actions, mutations, state} );