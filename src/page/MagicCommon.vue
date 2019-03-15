<template>
  <div class="box">
    <magic-common-header></magic-common-header>
    <magic-common-section></magic-common-section>
  </div>
</template>

<script>
  import MagicCommonHeader from "../components/common/MagicCommonHeader";
  import MagicCommonSection from "../components/common/MagicCommonSection";
  // import page from "../../api/UserApi"
  export default {
    name: "MagicCommon",
    components: {
      MagicCommonSection,
      MagicCommonHeader
    },
    // data(){
    //   return {
    //     data:{},
    //   }
    // },
    // methods: {
    //   _initData() {
    //     page.getData(data => {
    //       console.log(data);
    //       this.data = data;
    //     })
    //   },
    // },
    // created(){
    //   this._initData()
    // },
  }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
  }

</style>
