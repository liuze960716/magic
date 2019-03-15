<template>
    <div class="sidebar">
      <magic-section-left></magic-section-left>
      <router-view></router-view>
      <!--<magic-section-right></magic-section-right>-->
    </div>
</template>

<script>
    import MagicSectionLeft from "./MagicSectionLeft";
    // import MagicSectionRight from "./MagicSectionRight";
    export default {
      name: "MagicCommonSection",
      components: {
        // MagicSectionRight,
        MagicSectionLeft
      },
    }
</script>

<style scoped>
  .sidebar{
    display: flex;
    width: 100%;
    height: 100%;
    padding-top: 50px;
  }
  @media screen and (max-width: 945px){
    .sidebar{
      margin-top: 50px;
    }
  }

</style>
