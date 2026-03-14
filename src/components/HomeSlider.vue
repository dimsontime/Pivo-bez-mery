<template>
  <div class="carousel" ref="carousel">
    <div class="group" ref="track">
      <div
        v-for="(item, index) in slides"
        :key="index"
        class="card"
      >
        <img :src="item" alt="slide"/>
      </div>
    </div>
    <div class="group" ref="track">
      <div
        v-for="(item, index) in slides"
        :key="index"
        class="card"
      >
        <img :src="item" alt="slide"/>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap"

export default {
  name: "HomeSlider",

  data() {
    return {
      slides: [
        new URL('@/assets/img/slider/ss1.png', import.meta.url).href,
        new URL('@/assets/img/slider/ss6.png', import.meta.url).href,
        new URL('@/assets/img/slider/ss5.png', import.meta.url).href,
        new URL('@/assets/img/slider/ss7.png', import.meta.url).href,
        new URL('@/assets/img/slider/ss4.png', import.meta.url).href,
        new URL('@/assets/img/slider/ss8.png', import.meta.url).href,
        new URL('@/assets/img/slider/ss3.png', import.meta.url).href,
        new URL('@/assets/img/slider/ss9.png', import.meta.url).href,
        new URL('@/assets/img/slider/ss2.png', import.meta.url).href,
        new URL('@/assets/img/slider/ss10.png', import.meta.url).href,
      ],
    };
  },
};
</script>

<style scoped>
.carousel {
  margin: 0 auto;
  padding: 20px 0;
  max-width: 1920px;
  overflow: hidden;
  display: flex;

  & > * {
    flex: 0 0 100%;
  }
}

.group {
  display: flex;
  gap: 40px;
  padding-right: 40px;
  will-change: transform;
  animation: scrolling 35s linear infinite;
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.card {
  width: 300px;
  color: white;
  justify-content: center;
  align-items: center;
  height: 550px;

  img {
    width: 100%;
  }
}
</style>
