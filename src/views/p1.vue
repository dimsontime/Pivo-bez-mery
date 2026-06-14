<template>
  <div class="page-wrapper">
    <div class="head-logo">
      <img src="@/assets/img/mera-logo.png" alt="logo">
      <img src="@/assets/img/vmeste-logo.png" alt="logo" />
    </div>

    <h1 class="gradient-font">
      найди напиток для&nbsp;своего вечера
    </h1>
    <h4>
      Твой вечер — твои ощущения,<br>твой вкус.
    </h4>

    <div class="mera">
      <div class="mera-bg">
        <img src="@/assets/img/mera-io.png" alt="bg" />
      </div>
      <div class="mera-img">
        <img src="@/assets/img/mera-img-1.png" alt="bg" />
      </div>
    </div>

    <router-link to="p2" class="start-btn">
        Начать
    </router-link>
  </div>
</template>

<script>
import gsap from 'gsap';
import HomeSlider from "@/components/HomeSlider.vue";

export default {
  name: 'p1',
  components: {
    HomeSlider
  },
  mounted() {
    // Отправляем BroadcastChannel при загрузке p1
    const channel = new BroadcastChannel('page-load');
    channel.postMessage(1);
    // Сбрасываем значения canvas при загрузке p1
    this.$store.commit('setCanvas1Value', null);
    this.$store.commit('setCanvas2Value', null);

    // GSAP анимация для mera-bg и mera-img
    const meraBgImg = this.$el.querySelector('.mera-bg');
    const meraImg = this.$el.querySelector('.mera-img');

    if (meraBgImg) {
      gsap.to(meraBgImg, {
        scale: 1,
        duration: 9,
        ease: 'power3.inOut',
        repeat: -1,
        yoyo: true
      });
    }

    if (meraImg) {
      gsap.to(meraImg, {
        scale: 0.93,
        duration: 10,
        ease: 'power3.inOut',
        repeat: -1,
        yoyo: true
      });
    }
  },
  methods: {
    openMeraScreen() {
      const meraUrl = `${window.location.origin}/mera`;

      if (!window.meraScreen || window.meraScreen.closed) {
        window.meraScreen = window.open(meraUrl, "meraScreen");
      } else {
        window.meraScreen.focus();
      }

      const channel = new BroadcastChannel("page-load");
      channel.postMessage({ type: "unlock-audio" });
    },
  },
};
</script>

<style scoped lang="scss">
.page-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.head-logo {
  position: absolute;
  left: 40px;
  top: 40px;
  right: 40px;
  display: flex;
  justify-content: space-between;

  img {
    width: 140px;
  }
}

h1 {
  position: absolute;
  top: 364px;
  left: 951px;
  text-align: center;
  width: 850px;
}
h4 {
  position: absolute;
  top: 530px;
  left: 1069px;
  width: 620px;
  text-align: center;
  color: #fff;
  line-height: 1.2;
}

.start-btn {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);

  text-decoration: none;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 18px 60px;
  border-radius: 100px;
  background: rgba(#fff, .2);
  border: none;

  &::before {
    content: "";
    --angle: 0deg;
    position: absolute;
    inset: 0;
    padding: 3px; /* толщина бордера */
    border-radius: 999px;

    background: linear-gradient(
        var(--angle),
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

    animation: 5s gradient-b linear infinite;

    /* Магия вырезания центра */
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;

    mask-composite: exclude;

    pointer-events: none;
  }
}

@keyframes gradient-b {
  to {
    --angle: 360deg;
  }
}

.slider-conatiner {
  position: absolute;
  top: 480px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mera {
  position: absolute;
  top: -60px ;
  left: -120px;
  height: 100%;

  .mera-bg {
    position: absolute;
    height: 100%;
    left: 60px;
    transform-origin: center;
    transform: scale(.93);
      mix-blend-mode: screen;


    img {
      height: 110%;
    }
  }

  .mera-img {
    position: absolute;
    height: 100%;

    img {
      height: 120%;
    }
  }
}

.start-btn {
  top: 680px;
  left: 1260px;
  bottom: auto;
  transform: none;
}
</style>
