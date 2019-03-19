<template>
  <div>
    <magic-type-header></magic-type-header>
    <magic-type-center></magic-type-center>
    <router-view></router-view>
  </div>
</template>
<script>
    import MagicTypeHeader from "./MagicTypeHeader";
    import MagicTypeCenter from "./MagicTypeCenter";
    export default {
      name: "MagicSystemType",
      components: {
        MagicTypeCenter,
        MagicTypeHeader,
      }
    }
</script>


<style scoped>

</style>
