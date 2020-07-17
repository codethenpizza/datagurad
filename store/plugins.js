import axios from 'axios'

export const state = () => ({
  plugins: [],
  blockedAll: null
});

export const mutations = {
  setPlugins (state, payload) {
    state.plugins = payload
  },

  //block all plugins
  setBlockedAll (state, payload) {
    state.blockedAll = payload
  },

  changePluginState(state, {id, isAllowed}) {
    const plugin = state.plugins.find((plugin) => plugin.id === id);
    if (plugin) plugin.isAllowed = isAllowed;
  }
};

export const actions = {
  async fetchPlugins({commit, dispatch}) {
    const {data} = await axios.get('/api/plugins');
    commit('setPlugins', data);
    dispatch('fetchBlockedState');
  },


  async fetchBlockedState({commit}) {
    const {data} = await axios.get('/api/blockedState');
    commit('setBlockedAll', data)
  },

  //change plugin state
  async changePluginState({commit}, payload) {
    const res = await axios.post('/api/changePluginState', payload);
    commit('changePluginState', payload);
  },

  //block all plugins
  async setAllPlugins({commit}, data) {
    const res = await axios.post('/api/blockedState', {data});
    commit('setBlockedAll', data);
  }
};

