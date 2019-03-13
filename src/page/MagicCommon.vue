<template>
  <div class="box">
    <magic-common-header></magic-common-header>
    <magic-common-section></magic-common-section>
  </div>

</template>

<script>
  import MagicCommonHeader from "../components/common/MagicCommonHeader";
  import MagicCommonSection from "../components/common/MagicCommonSection";
  export default {
    name: "MagicCommon",
    components: {
      MagicCommonSection,
      MagicCommonHeader
    },

  }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
  }



</style>
