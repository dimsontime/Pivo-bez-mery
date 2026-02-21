<script>
import Head from "@/components/Head.vue";
import {gsap} from "gsap";
import store from '@/store/index.js';

let Timer;
let frameCount = 120;

let idle;
let frameCount2 = 128;
let currentFrame2 = (index) => `/boom2-w/boom_${(index + 1).toString().padStart(5, "0")}.webp`;
const images2 = [];
for (let i = 0; i < frameCount2; i++) {
  const img = new Image();
  img.src = currentFrame2(i);
  images2.push(img);
}
export default {
  data() {
    return {
      clicked: false,
    };
  },
  components: {
    Head,
  },
  mounted() {
    // const canvas = this.$refs.canv;
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    let heroscreen = document.querySelector("body");
    const sequence = {
      frame: 0,
    };

    function render() {
      canvas.width = heroscreen.clientWidth;
      canvas.height = heroscreen.clientHeight;
      context.clearRect(0, 0, canvas.width, canvas.height);
      const iw = store.state.boxImages[sequence.frame].width;
      const ih = store.state.boxImages[sequence.frame].height;
      const cw = canvas.width;
      const ch = canvas.height;
      const f = Math.max(cw / iw, ch / ih);
      context.setTransform(
        /*     scale x */ f,
        /*      skew x */ 0,
        /*      skew y */ 0,
        /*     scale y */ f,
        /* translate x */(cw - f * iw) / 2,
        /* translate y */(ch - f * ih) / 2,
      );
      context.drawImage(store.state.boxImages[sequence.frame], 0, 0);
    }

    idle = gsap.to('.canv-wrapper', {
      y: -50,
      scale: 0.96,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      delay: 0.4,
      ease: "power1.inOut",
      repeatRefresh: true,
    });
    setTimeout(() => {
      let anim = gsap.to(sequence, {
        frame: frameCount - 1,
        snap: "frame",
        duration: 4,
        onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
      });
      render();
    }, 1)

    gsap.to(".hand", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 1
    });
    gsap.fromTo('.ladon', {
      rotate: "-20deg",
    }, {
      rotate: "20deg",
      transformOrigin: "50% 80%",
      ease: "power0.inOut",
      repeat: -1,
      yoyo: true,
      duration: 0.8
    })

    gsap.fromTo('.box-bg', {
      y: 1200,
      scale: 0.7
    }, {
      y: 0,
      scale: 1,
      duration: 1.8,
      ease: "power1.inOut"
    })
  },
  methods: {
    canvasClick() {
      idle.pause();
      gsap.to(".hand", {
        opacity: 0,
        duration: 0.4,
      });
      if (this.clicked) {
        return;
      }
      this.clicked = true;
      // const canvas = this.$refs.canv;
      const canvas = document.querySelector("canvas");
      gsap.to(canvas, {
        y: 0,
      });
      const context = canvas.getContext("2d");
      let heroscreen = document.querySelector("body");
      const sequence = {
        frame: 0,
      };
      const iw = images2[sequence.frame].width;
      const ih = images2[sequence.frame].height;
      const cw = canvas.width;
      const ch = canvas.height;
      const f = Math.max(cw / iw, ch / ih);
      //canvas.width = heroscreen.clientWidth;
      //canvas.height = heroscreen.clientHeight;
      function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.setTransform(
          /*     scale x */ f,
          /*      skew x */ 0,
          /*      skew y */ 0,
          /*     scale y */ f,
          /* translate x */ (cw - f * iw) / 2,
          /* translate y */ (ch - f * ih) / 2
        );
        context.drawImage(images2[sequence.frame], 0, 0);
      }
      setTimeout(() => {
        let anim = gsap.to(sequence, {
          frame: frameCount2 - 1,
          snap: "frame",
          ease: "linear",
          duration: 2.5,
          onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
        });
        images2[126].onload = render;
      }, 100);

      setTimeout(() => {
        gsap.to(".main-button", {
          opacity: 1,
          duration: 0.3,
        });
      }, 2000);

      // Timer = setTimeout(() => {
      //   this.$router.push("/");
      //   clearTimeout(Timer);
      // }, 25000);
    },
  },
  beforeUnmount() {
    this.$store.commit("changeChosenId", null);
    clearTimeout(Timer);
  },
};
</script>

<template>
  <div>
    <Head></Head>
    <div class="canv-wrapper">
      <canvas id="canvas-container" @click="canvasClick(1, false)">
      </canvas>
    </div>

    <div class="hand">
      <img src="@/assets/ladon.png" alt="" class="ladon" />
      <p>Нажмите чтобы взаимодействовать</p>
    </div>

    <router-link to="/" class="main-button">
      Вернуться в начало
    </router-link>

    <div class="box-bg">
      <img src="@/assets/kv-Back.svg" alt="">
    </div>

  </div>
</template>

<style scoped lang="scss">
  canvas {
    position: relative;
    z-index: 1;
  }
  .main-button {
    position: absolute;
    z-index: 10;
    bottom: 180px;
    left: 50%;
    color: #fff;
    transform: translateX(-50%);
    border-radius: 80px;
    background: rgba(255, 255, 255, 0.46);
    font-size: 65px;
    letter-spacing: -0.04em;
    font-weight: 400;
    line-height: 1.2;
    padding: 38px 72px 42px;
    text-decoration: none;
    opacity: 0;
  }

  .hand {
    opacity: -1;

    position: absolute;
    bottom: 180px;
    left: 50%;
    transform: translateX(-50%) translateY(150px);
    text-align: center;

    p {
      font-size: 106px;
      color: #fff;
      max-width: 1200px;
      margin: -15px 0 0;
    }
  }

  .canv-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .box-bg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    width: 160%;
    height: 100%;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    .hand {
      bottom: 40px;

      img {
        width: 100px;
      }

      p {
        font-size: 30px;
      }
    }
  }
</style>
