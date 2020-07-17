<template>
    <nuxt-link :to="menuItem.url" class="sidebar-item">
      <img class="icon" :src="menuItem.icon" alt="menu icon">
      <span>{{menuItem.title}}</span>
    </nuxt-link>
</template>

<script>
  export default {
    name: "SidebarItem",
    props: {
      menuItem: {
        required: true,
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar-item {
    padding: 1em;
    display: flex;
    border-left: 10px solid transparent;
    color: inherit;
    text-decoration: none;
    .icon {
      margin-right: 5px;
    }

    &:hover {
      background-color: #fff;
    }
  }
  .nuxt-link-active {
    background-color: #fff;
    border-left: 10px solid #c63140;
  }

</style>
