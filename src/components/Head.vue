<script>
export default {};
</script>

<template>
  <div class="head">
    <router-link to="/">
      <img src="@/assets/home-head.svg" alt="">
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.head {
  position: absolute;
  top: 145px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 40px;

  img {
    height: 92px;
  }
}

@media (min-aspect-ratio: 1/1) {
  .head {
    position: static;
    transform: none;
    padding: 40px 0;

    img {
      height: 48px;
    }
  }
}

@media screen and (max-width: 500px) {
  .head {
    top: 35px;
    height: 22px;

    a {
      line-height: 1;
      font-size: 25px;
    }

    img {
      height: 25px;
    }
  }
}
</style>
