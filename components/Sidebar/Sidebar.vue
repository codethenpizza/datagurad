<template>
  <div class="sidebar">
    <Logo class="logo"/>
    <div class="menu-wrap">
      <Menu/>
    </div>
    <sidebar-footer/>
  </div>
</template>

<script>
  import Logo from "../Logo";
  import Menu from "./Menu";
  import SidebarFooter from "./SidebarFooter";

  export default {
    name: "Sidebar",
    components: {
      Logo,
      Menu,
      SidebarFooter
    }
  }
</script>

<style scoped>
  .sidebar {
    background-color: #eee;
    width: 20vw;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
  }

  .menu-wrap {
    flex-grow: 1;
  }

  .logo {
    margin: calc(1em - 10px);
  }


</style>
