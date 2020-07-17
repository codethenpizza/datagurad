<template>
    <div class="footer-wrap" :class="{ disabled: !isPluginsAllowed }">
        <span>All plugins {{isPluginsDisabled}}</span>
        <switcher
          v-model="isPluginsAllowed"
          :show-text="false"
        />
    </div>
</template>

<script>
  import Switcher from "../Switcher";

  export default {
    name: "SidebarFooter",
    components: {
      Switcher
    },
    computed: {
      isPluginsDisabled() {
        return this.isPluginsAllowed ? 'enabled' : 'disabled'
      }
    },
    data() {
      return {
        isPluginsAllowed: true
      }
    },
    watch: {
      isPluginsAllowed(newVal) {
        console.log(newVal)
        //store emit
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer-wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 2em;
    background: linear-gradient(transparent 30%, #5ac88d);
    &.disabled {
      background: linear-gradient(transparent 30%, #c63140);
    }

    span {
      color: #616161;
    }
  }
</style>
