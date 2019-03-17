<template>
  <div class="bgbox">
    <div class="box">
      <img src="../../assets/img/666.jpg">
      <img src="../../assets/img/666.jpg">
      <img src="../../assets/img/666.jpg">
      <img src="../../assets/img/666.jpg">
      <img src="../../assets/img/666.jpg">
      <img src="../../assets/img/666.jpg">
      <img src="../../assets/img/666.jpg">
      <img src="../../assets/img/666.jpg">
      <img src="../../assets/img/666.jpg">
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
    export default {
      name: "MagicAlbum"
    }
</script>

<style scoped>
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    background:black;
  }
  .bgbox{
    /*margin-left: 100px;*/
    width: 100%;
    background: -webkit-linear-gradient(rgb(000, 000, 226), rgba(250, 520, 520, 0.2));
  }
  .box{
    width: 250px;
    height: 150px;
    transform-style: preserve-3d;
    animation: photo 20s linear infinite;
    position: relative;
    top: 200px;
    left: 500px;
  }
  .box:hover{
    animation: photo 20s linear infinite paused;

  }
  @keyframes photo{
    0%{
      transform:rotateX(-20deg) rotateY(0deg) rotateY(0deg);
    }
    100%{
      transform:rotateX(-20deg) rotateY(360deg) rotateY(360deg);
    }
  }
  .box img{
    display: block;
    width: 250px;
    height: 150px;
    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
    border-radius: 20px;
    -webkit-box-reflect:below 2px linear-gradient(rgba(255,255,255,0) 14%,rgba(255,255,255,1) 90%);
    box-shadow: 0 5px 5px #333;


  }
  .box img:nth-child(1){
    transform:translateZ(400px);
  }
  .box img:nth-child(2){
    transform: rotateY(40deg) translateZ(400px);
  }
  .box img:nth-child(3){
    transform: rotateY(80deg) translateZ(400px);
  }
  .box img:nth-child(4){
    transform: rotateY(120deg) translateZ(400px);
  }
  .box img:nth-child(5){
    transform: rotateY(160deg) translateZ(400px);
  }
  .box img:nth-child(6){
    transform: rotateY(200deg) translateZ(400px);
  }
  .box img:nth-child(7){
    transform: rotateY(240deg) translateZ(400px);
  }
  .box img:nth-child(8){
    transform: rotateY(280deg) translateZ(400px);
  }
  .box img:nth-child(9){
    transform: rotateY(320deg) translateZ(400px);
  }
</style>
