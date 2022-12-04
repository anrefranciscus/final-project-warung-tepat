<template>
  <div class="relative flex min-h-screen">
    <SideBar :route-name="currentRouteName" :class="currentRouteName !== 'login' ? '' : 'hidden' "/>
      <router-view/>
  </div>

</template>

<script>
import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    SideBar
  },
  props: ["routeName"],
  computed: {
    currentRouteName(){
      return this.$route.name
    }
  }
}
</script>

<style>

</style>
