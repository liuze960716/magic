<template>
    <div class="sidebar">
      <magic-section-left></magic-section-left>
      <magic-section-right></magic-section-right>
    </div>

</template>

<script>
    import MagicSectionLeft from "./MagicSectionLeft";
    import MagicSectionRight from "./MagicSectionRight";
    export default {
      name: "MagicCommonSection",
      components: {
        MagicSectionRight,
        MagicSectionLeft
      },

    }
</script>

<style scoped>
  .sidebar{
    display: flex;
    width: 100%;
    min-height: 100%;
    padding-top: 50px;
  }


</style>
