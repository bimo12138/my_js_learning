import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        login_status: false,
        username: "",
        auth_info: null,
        permission: 0,
    },
    mutations: {
        increment(state) {
            state.count ++;
        },
        auth_login(state, auth_info) {
            sessionStorage.setItem("username", auth_info.username);
            sessionStorage.setItem("login_status", true);
            sessionStorage.setItem("permission", auth_info.permission);
            state.username = auth_info.username;
            state.login_status = true;
            state.permission = auth_info.permission;
        },
        logout(state) {
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("login_status");
            sessionStorage.removeItem("permission");
            state.username = "";
            state.login_status = false;
            state.permission = 0;
        },
        get_auth_info(state, data) {
            sessionStorage.setItem("auth_info", data);
            state.auth_info = data;
        }
    },
    getters: {
        is_login(state) {
            if(!state.login_status) {
                state.login_status = !!sessionStorage.getItem("login_status");
                state.username = sessionStorage.getItem("username");
                state.permission = Number(sessionStorage.getItem("permission"));
            }
            return state.login_status
        }
    }
})

export default store;