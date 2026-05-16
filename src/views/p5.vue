<template>
  <div class="page-wrapper">
    <div class="content-reveal" :style="{ '--reveal-radius': `${revealRadius}px` }">
      <div class="head-logo">
        <img src="@/assets/img/mera-logo.png" alt="logo" />
      </div>
      <div class="top-left">
        <h1
          class="gradient-font"
          :class="currentH1Class"
          v-html="currentText.heading"
        ></h1>
        <p
          class="subtext"
          v-html="currentText.subtext"
          :class="currentH1Class"
        ></p>
        <router-link to="/" class="next-btn"> В начало </router-link>
      </div>

      <div class="mera-avatar">
        <img src="@/assets/img/mera-avatar.png" alt="" />
      </div>
      <div class="qrcode-img">
        <img src="@/assets/img/qrcode.png" alt="" />
      </div>
      <div class="qrcode-text">
        <h5>
          Пройди по QR-коду и получи<br />персональную скидку на свой<br />напиток!
        </h5>
      </div>

      <div class="bag">
        <img src="@/assets/img/bag.png" alt="" />
      </div>
      <div class="arrow">
        <img src="@/assets/img/arrow.png" alt="" />
      </div>

      <div
        v-for="brand in brands"
        :key="brand.id"
        class="beer-logo"
        :class="brand.cls"
        v-show="currentImageClass === brand.cls"
      >
        <img :src="brand.logo" alt="" />
      </div>

      <div
        v-for="brand in brands"
        :key="'img-' + brand.id"
        class="beer-img"
        :class="brand.cls"
        v-show="currentImageClass === brand.cls"
      >
        <img :src="brand.img" alt="" />
      </div>
    </div>

    <video
      v-if="isIntroVisible"
      ref="introVideo"
      class="intro-video"
      :style="{ '--hole-radius': `${revealRadius}px` }"
      :src="introVideoSrc"
      autoplay
      muted
      playsinline
      @timeupdate="onIntroTimeUpdate"
      @ended="onIntroEnded"
    ></video>
  </div>
</template>

<script>
import textsMatrix from "@/utils/textsMatrix";
import load01 from "@/assets/videos/load-01.webm";
import load02 from "@/assets/videos/load-02.webm";
import load03 from "@/assets/videos/load-03.webm";

export default {
  name: "p5",
  components: {},
  data() {
    return {
      textsMatrix: textsMatrix,
      brands: [
        {
          id: 1,
          cls: "res-1",
          logo: require("@/assets/img/logo-zeno.png"),
          img: require("@/assets/img/beer-zeno.png"),
        },
        {
          id: 2,
          cls: "res-2",
          logo: require("@/assets/img/logo-hoegarden.png"),
          img: require("@/assets/img/beer-hoegarden.png"),
        },
        {
          id: 3,
          cls: "res-3",
          logo: require("@/assets/img/logo-natahtari.png"),
          img: require("@/assets/img/beer-natahtari.png"),
        },
        {
          id: 4,
          cls: "res-4",
          logo: require("@/assets/img/logo-essa.png"),
          img: require("@/assets/img/beer-essa.png"),
        },
        {
          id: 5,
          cls: "res-5",
          logo: require("@/assets/img/logo-bud.png"),
          img: require("@/assets/img/beer-bud.png"),
        },
        {
          id: 6,
          cls: "res-6",
          logo: require("@/assets/img/logo-stella.png"),
          img: require("@/assets/img/beer-stella.png"),
        },
      ],
      introVideos: [load01, load02, load03],
      introVideoSrc: "",
      isIntroVisible: true,
      revealRadius: 0,
      revealAnimationFrame: null,
      revealStarted: false,
    };
  },
  computed: {
    currentImageClass() {
      const v1 = this.$store.state.canvas1Value;
      console.log(v1);
      if (v1) {
        return `res-${v1}`;
      }
      return "res-5"; // дефолтное значение
    },
    currentText() {
      const v1 = this.$store.state.canvas1Value
        ? this.$store.state.canvas1Value
        : 5;
      const v2 = this.$store.state.canvas2Value
        ? this.$store.state.canvas2Value
        : 1;

      if (v1 && v2) {
        return this.textsMatrix[v1 - 1][v2 - 1];
      }
      return this.textsMatrix[0][0]; // дефолтный текст
    },
    currentH1Class() {
      const v1 = this.$store.state.canvas1Value
        ? this.$store.state.canvas1Value
        : 5;
      const v2 = this.$store.state.canvas2Value
        ? this.$store.state.canvas2Value
        : 1;
      return `res-${v1}-${v2}`;
    },
  },
  mounted() {
    // Отправляем BroadcastChannel при загрузке p5
    const channel = new BroadcastChannel("page-load");
    channel.postMessage(5);
    this.introVideoSrc =
      this.introVideos[Math.floor(Math.random() * this.introVideos.length)];
    // setTimeout(() => {
    //   this.$router.push('/p1');
    // }, 60000);
  },
  methods: {
    onIntroTimeUpdate() {
      const video = this.$refs.introVideo;
      if (!video || this.revealStarted || !video.duration) return;

      const timeLeft = video.duration - video.currentTime;
      if (timeLeft <= 1.5) {
        this.startRevealAnimation();
      }
    },
    startRevealAnimation() {
      if (this.revealStarted) return;
      this.revealStarted = true;

      const durationMs = 1500;
      const maxRadius = Math.hypot(window.innerWidth / 2, window.innerHeight / 2);
      const startedAt = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startedAt) / durationMs, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        this.revealRadius = maxRadius * easedProgress;

        if (progress < 1) {
          this.revealAnimationFrame = requestAnimationFrame(tick);
          return;
        }

        this.isIntroVisible = false;
        this.revealAnimationFrame = null;
      };

      this.revealAnimationFrame = requestAnimationFrame(tick);
    },
    onIntroEnded() {
      this.isIntroVisible = false;
      this.revealRadius = Math.hypot(window.innerWidth / 2, window.innerHeight / 2);
    },
  },
  beforeUnmount() {
    if (this.revealAnimationFrame) {
      cancelAnimationFrame(this.revealAnimationFrame);
      this.revealAnimationFrame = null;
    }
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
  overflow: hidden;
}

.content-reveal {
  width: 100%;
  height: 100%;
  position: relative;
  clip-path: circle(var(--reveal-radius, 0px) at 50% 50%);
  -webkit-clip-path: circle(var(--reveal-radius, 0px) at 50% 50%);
}

.intro-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 100;
  pointer-events: none;
  -webkit-mask-image: radial-gradient(
    circle at 50% 50%,
    transparent var(--hole-radius, 0px),
    #000 calc(var(--hole-radius, 0px) + 1px)
  );
  mask-image: radial-gradient(
    circle at 50% 50%,
    transparent var(--hole-radius, 0px),
    #000 calc(var(--hole-radius, 0px) + 1px)
  );
}

.head-logo {
  width: 153px;
  height: 140px;
  position: absolute;
  z-index: 10;
  bottom: 40px;
  left: 40px;
}

.top-left {
  position: absolute;
  top: 40px;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 20;

  .subtext {
    font-size: 64px;
    color: #fff;
    font-weight: 500;
    line-height: 1.03;
    max-width: 50vw;
    margin: 46px 0 64px;
  }

  .res-2-1 {
    &.gradient-font {
      font-size: 139px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 64px;
    }
  }
  .res-2-2 {
    &.gradient-font {
      font-size: 107px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 50px;
      margin-bottom: 85px;
    }
  }
  .res-2-3 {
    &.gradient-font {
      font-size: 107px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 50px;
    }
  }
  .res-2-4 {
    &.gradient-font {
      font-size: 107px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 50px;
      margin-bottom: 75px;
    }
  }

  .res-3-1 {
    &.gradient-font {
      font-size: 97px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 56px;
    }
  }
  .res-3-2 {
    &.gradient-font {
      font-size: 156px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 64px;
    }
  }
  .res-3-3 {
    &.gradient-font {
      font-size: 156px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 64px;
    }
  }
  .res-3-4 {
    &.gradient-font {
      font-size: 156px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 64px;
    }
  }

  .res-4-1 {
    &.gradient-font {
      font-size: 131px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 56px;
    }
  }
  .res-4-2 {
    &.gradient-font {
      font-size: 139px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 64px;
    }
  }
  .res-4-3 {
    &.gradient-font {
      font-size: 107px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 64px;
    }
  }
  .res-4-4 {
    &.gradient-font {
      font-size: 95px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 50px;
    }
  }

  .res-5-1 {
    &.gradient-font {
      font-size: 107px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 56px;
    }
  }
  .res-5-2 {
    &.gradient-font {
      font-size: 149px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 64px;
    }
  }
  .res-5-3 {
    &.gradient-font {
      font-size: 97px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 50px;
    }
  }
  .res-5-4 {
    &.gradient-font {
      font-size: 139px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 50px;
    }
  }

  .res-6-1 {
    &.gradient-font {
      font-size: 131px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 56px;
    }
  }
  .res-6-2 {
    &.gradient-font {
      font-size: 107px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 56px;
    }
  }
  .res-6-3 {
    &.gradient-font {
      font-size: 107px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 50px;
    }
  }
  .res-6-4 {
    &.gradient-font {
      font-size: 129px;
      line-height: 0.98;
    }
    &.subtext {
      font-size: 50px;
    }
  }
}

h1 {
  font-size: 87px;
  line-height: 1.03;
  text-transform: uppercase;
  width: 1150px;
  padding-top: 10px;
}

.mera-avatar {
  position: absolute;
  top: 482px;
  left: 106px;
  z-index: 5;
  width: 302px;
  display: none;
}

.qrcode-img {
  position: absolute;
  z-index: 6;
  top: 668px;
  left: 320px;
  width: 269px;
  display: none;
}

.qrcode-text {
  position: absolute;
  z-index: 6;
  top: 559px;
  left: 442px;
  width: 380px;
  font-size: 25px;
  line-height: 1.03;
  letter-spacing: -0.02;
  color: #fff;
  display: none;
}

.bag {
  position: absolute;
  z-index: 4;
  top: 632px;
  left: 633px;
  width: 65px;
  display: none;
}
.arrow {
  position: absolute;
  z-index: 3;
  top: 545px;
  left: 580px;
  display: none;
}

.beer-logo {
  position: absolute;
  z-index: 1;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);

  width: 1040px;
}
.beer-img {
  position: absolute;
  z-index: 9;
  top: 15px;
  right: 50px;

  img {
    width: 620px;
  }
}

h1,
h5 {
  text-align: left;
}

.next-btn {
  position: relative;
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
      #9efca6 -61.15%,
      #aef9db -23.29%,
      #d5e53a -1.77%,
      #57fbf4 11.56%,
      #6eaeec 28.78%,
      #69e2ea 55.33%,
      #e7ecbd 68.53%,
      #ff8753 79.14%,
      #d5d632 108.98%,
      #aedb51 117.59%,
      #0cf1d4 130.19%
    );

    /* Магия вырезания центра */
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;

    mask-composite: exclude;

    pointer-events: none;
  }
}

.beer-logo {
  img {
    position: absolute;
    bottom: 0;
  }
}

.beer-logo.res-1 {
  img {
    width: 600px;
    right: 120px;
  }
}
.beer-img.res-1 {
  img {
    height: 100vh;
    margin-top: -15px;
    margin-right: 0;
  }
}
.beer-logo.res-2 {
  img {
    width: 1400px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.beer-img.res-2 {
  img {
    height: 100vh;
    margin-top: -15px;
    margin-right: 0;
  }
}

.beer-logo.res-3 {
  img {
    width: 1200px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.beer-img.res-3 {
  img {
    width: 800px;
    margin-right: -100px;
  }
}

.beer-logo.res-4 {
  img {
    width: 1550px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.beer-img.res-4 {
  img {
    // width: 800px;
    // margin-right: -100px;
  }
}
.beer-logo.res-5 {
  img {
    width: 1900px;
    left: -400px;
    bottom: 20px;
  }
}
.beer-img.res-5 {
  img {
    height: 100vh;
    width: auto;
    margin-top: -15px;
    margin-right: 10px;
  }
}
.beer-logo.res-6 {
  img {
    width: 1450px;
    left: -90px;
    bottom: -190px;
  }
}
.beer-img.res-6 {
  img {
    height: 100vh;
    width: auto;
    margin-top: -15px;
    margin-right: 10px;
  }
}
</style>
