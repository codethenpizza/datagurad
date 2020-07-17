<template>
  <div class="container">
    <sidebar/>
    <div class="content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import Sidebar from "../components/Sidebar/Sidebar";

  export default {
    name: "PluginCard",
    components: {
      Sidebar
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    min-height: 100vh;
  }
  .content {
    width: 100%;
    padding: 2em;
  }

</style>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>

