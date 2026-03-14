<template>
  <div class="page-wrapper">
    <div class="head-logo">
      <img src="@/assets/img/mera-logo.png" alt="logo">
    </div>
    <h1 class="gradient-font">Выбери настроение<br>грядущего вечера</h1>

    <router-link to="/p3" class="btn-prev">
      <div class="btn-icon">
        <img src="@/assets/img/icon-prev.png" alt="icon">
      </div>
    </router-link>

    <router-link to="p5">
      Финиш
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'p4',
  components: {}
}
</script>

<style scoped lang="scss">
* img {
  width: 100%;
}

.page-wrapper {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.head-logo {
  width: 112px;
  height: 102px;
  position: absolute;
  z-index: 10;
  bottom: 40px;
  left: 40px;
}

h1 {
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
}

.btn-prev {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 400px;
  width: 136px;

  background-image: url('../assets/img/prev-bg.png');
  background-size: contain;

  .btn-icon {
    width: 92px;
    height: 92px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
