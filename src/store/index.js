import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/**
 * 模块1，可以单独把这个对象放到一个文件中
 */
const mo1 =
{
    namespaced: true, // 带命名空间的模块. 如果不添加这个，actions mutations getters 还是放在一块的.
    actions:
    {
        test1: function (content, val)
        {
            console.log('这是actions中的test1函数，');
            content.commit('TEST1', val);
        }
    },
    mutations:
    {
        TEST1: function (state, val)
        {
            console.log('这是mutations中的TEST1函数');
            state.sum = val;
        }
    },
    state:
    {
        sum: 20
    },
    getters:
    {
        sumOf10 : function (state)
        {
            return state.sum * 10;
        }
    }
};

/**
 * 模块2
 */
const mo2 =
{
    namespaced: true,
    actions:
    {
        test2: function (content, val)
        {
            console.log('这是actions中的test2函数，');
            content.commit('TEST2', val);
        }
    },
    mutations:
    {
        TEST2: function (state, val)
        {
            console.log('这是mutations中的TEST2函数');
            state.name = val;
        }
    },
    state:
    {
        name: '王二楞'
    },
    getters:
    {
        nameOf10: function (state)
        {
            return state.name + '10';
        }
    }
};

export default new Vuex.Store
(
    {
        modules:
        {
            my1: mo1,
            my2: mo2
        }
    }
);