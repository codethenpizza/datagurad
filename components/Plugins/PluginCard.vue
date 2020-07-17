<template>
    <div class="plugin-card">
      <div class="card-heading">
        <h2>{{plugin.title}}</h2>
        <switcher
          v-model="allowed"
        />
      </div>
      <p>{{plugin.desc}}</p>
    </div>
</template>

<script>
  import Switcher from "../Switcher";

  export default {
    name: "PluginCard",
    components: {
      Switcher
    },
    props: {
      plugin: {
        required: true,
      }
    },
    data() {
      return {
        allowed: null
      }
    },
    watch: {
      allowed(isAllowed) {
        this.$store.dispatch('plugins/changePluginState', {...this.plugin, isAllowed})
      }
    },
    mounted() {
      this.allowed = this.plugin.isAllowed
    }
  }
</script>

<style lang="scss" scoped>
  .plugin-card {
    padding: 1em;
    border: 5px solid #eee;
    border-radius: 10px;
    height: 100%;
    .card-heading {
      display: flex;
      justify-content: space-between;
    }
  }

</style>
