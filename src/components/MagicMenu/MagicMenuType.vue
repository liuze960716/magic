<template>
  <div>
    <magic-System-header></magic-System-header>
    <magic-System-center></magic-System-center>
    <router-view></router-view>
  </div>
</template>
<script>
    import MagicSystemHeader from "./MagicMenuHeader";
    import MagicSystemCenter from "./MagicMenuCenter";
    export default {
      name: "MagicMenuType",
      components: {
        MagicSystemCenter,
        MagicSystemHeader,
      }
    }
</script>


<style scoped>

</style>
