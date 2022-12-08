<template>
  <div :class="currentRouteName !== 'login' ? 'flex flex-row w-full' : '' ">
    <SideBar :route-name="currentRouteName"/>

    <div :class="currentRouteName !== 'login' ? 'ml-[220px] h-full w-full z-10' : '' ">
      <router-view/>
    </div>
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
