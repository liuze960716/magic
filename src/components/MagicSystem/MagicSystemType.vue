<template>
  <div>
    <magic-system-header></magic-system-header>
    <magic-system-center></magic-system-center>
    <router-view></router-view>
  </div>
</template>
<script>
    import MagicSystemCenter from "./MagicSystemCenter";
    import MagicSystemHeader from "./MagicSystemHeader";
    export default {
      name: "MagicSystemType",
      components: {
        MagicSystemHeader,
          MagicSystemCenter
        }
    }
</script>


<style scoped>

</style>
