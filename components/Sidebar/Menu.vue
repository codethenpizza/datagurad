<template>
  <ul>
    <li
      v-for="(menuItem, i) of menu"
      :key="i"
    >
      <sidebar-item
        :menuItem="menuItem"
      />
    </li>
  </ul>
</template>

<script>
  import SidebarItem from "./SidebarItem";


  export default {
    name: "Menu",
    components: {
      SidebarItem
    },
    data() {
      return {
        menu: [{
          title: 'Marketing',
          url: '/',
          icon: 'marketing_icon.svg'
        }, {
          title: 'Finance',
          url: '/finance',
          icon: 'finance_icon.svg'
        }, {
          title: 'Personnel',
          url: '/personnel',
          icon: 'personnel_icon.svg'
        }]
      }
    }
  }
</script>

<style scoped>
  ul {
    padding: 0;
    margin: 0;
  }
</style>
