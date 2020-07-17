<template>
  <div>
    <h1 class="page-title">Marketing plugins</h1>
    <div class="plugins-wrap">
      <div
        class="plugin-card-wrap"
        v-for="plugin of plugins"
        :key="plugin.id"
      >
        <plugin-card
          :plugin="plugin"
          :blocked="blockedAll"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from "../components/Sidebar/Sidebar";
  import PluginCard from "../components/Plugins/PluginCard";
  import {mapState} from 'vuex'

  export default {
    components: {
      Sidebar,
      PluginCard
    },
    computed: {
      ...mapState({
        plugins: state => state.plugins.plugins,
        blockedAll: state => state.plugins.blockedAll
      })
    },
    mounted() {
      this.$store.dispatch('plugins/fetchPlugins')
    }
  }
</script>

<style lang="scss" scoped>
  .page-title {
    font-weight: normal;
    margin-bottom: 0.5em;
  }
  .plugins-wrap {
    margin: -5px;
    display: flex;
    flex-wrap: wrap;

    .plugin-card-wrap {
      width: calc(33.3% - 20px);
      margin: 5px;
    }
  }


</style>

