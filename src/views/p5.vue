<template>
  <div class="page-wrapper">
    <div class="head-logo">
      <img src="@/assets/img/mera-logo.png" alt="logo">
    </div>
    <h1 class="gradient-font">Хорошим друзьям<br>не нужен клуб, чтоб<br>устроить настоящую<br>вечеринку</h1>

    <div class="mera-avatar">
      <img src="@/assets/img/mera-avatar.png" alt="">
    </div>
    <div class="qrcode-img">
      <img src="@/assets/img/qrcode.png" alt="">
    </div>
    <div class="qrcode-text">
      <h5>Пройди по QR-коду и получи<br>персональную скидку на свой<br>напиток!</h5>
    </div>

    <div class="bag">
      <img src="@/assets/img/bag.png" alt="">
    </div>
    <div class="arrow">
      <img src="@/assets/img/arrow.png" alt="">
    </div>

    <div class="beer-logo">
      <img src="@/assets/img/logo-essa.png" alt="">
    </div>
    <div class="beer-img">
      <img src="@/assets/img/beer-essa.png" alt="">
    </div>

    <router-link to="/" class="next-btn">
      В начало
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'p5',
  components: {},
  mounted() {
    // setTimeout(() => {
    //   this.$router.push('/p1');
    // }, 60000);
  },
};
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
  z-index: 10;
  top: 50px;
  left: 40px;

  font-size: 63px;
  line-height: 1.03;
  text-transform: uppercase;
  width: 840px;
}

.mera-avatar {
  position: absolute;
  top: 371px;
  left: 40px;
  z-index: 5;
  width: 245px;
}

.qrcode-img {
  position: absolute;
  z-index: 6;
  top: 532px;
  left: 202px;
  width: 269px;
}

.qrcode-text {
  position: absolute;
  z-index: 6;
  top: 425px;
  left: 310px;
  width: 380px;
  font-size: 25px;
  line-height: 1.03;
  letter-spacing: -0.02;
  color: #fff;
}

.bag {
  position: absolute;
  z-index: 4;
  top: 498px;
  left: 501px;
  width: 65px;
}
.arrow {
  position: absolute;
  z-index: 4;
  top: 523px;
  left: 523px;
}

.beer-logo {
  position: absolute;
  z-index: 1;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
}
.beer-img {
  position: absolute;
  z-index: 9;
  top: 75px;
  right: 0;
}

h1, h5 {
  text-align: left;
}

.next-btn {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;

  text-decoration: none;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 18px 60px;
  background: transparent;
  border: none;
  color: white;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 3px; /* толщина бордера */
    border-radius: 999px;

    background: linear-gradient(
        90deg,
        #9EFCA6 -61.15%,
        #AEF9DB -23.29%,
        #D5E53A -1.77%,
        #57FBF4 11.56%,
        #6EAEEC 28.78%,
        #69E2EA 55.33%,
        #E7ECBD 68.53%,
        #FF8753 79.14%,
        #D5D632 108.98%,
        #AEDB51 117.59%,
        #0CF1D4 130.19%
    );

    /* Магия вырезания центра */
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;

    mask-composite: exclude;

    pointer-events: none;
  }
}
</style>
