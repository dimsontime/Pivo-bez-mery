<template>
  <div class="choose-hobbie">
    <Head></Head>

    <h3>
      Выберите интерес
    </h3>
    <div class="hobbies">
      <div
        class="hobbies__item"
        v-for="(hobbie, index) in this.$store.state.hobbies"
        :key="index"
        @click="hobbieClick(index)">
        <img alt=""
             :src="require(`@/assets/icons/${hobbie.icon}`)">
        <span>{{ hobbie.name }}</span>
      </div>
    </div>
    <div class="stars">
      <img src="@/assets/star.png" alt="" class="star1">
      <img src="@/assets/star.png" alt="" class="star2">
      <img src="@/assets/ball.png" alt="" class="star3">
      <img src="@/assets/ball.png" alt="" class="star4">
    </div>
  </div>
</template>

<script>
import {gsap} from "gsap";
import Head from "@/components/Head.vue";
export default {
  components: {Head},
  data() {
    return {
    }
  },
  methods: {
    hobbieClick(index) {
      this.$store.commit('incrementCount', index);
      this.$store.commit('changeChosenId', index);
      let stringed = JSON.stringify(this.$store.state.hobbies)
      window.localStorage.setItem('hobbies', stringed);
      this.$router.push('/result');
    },
  },
  beforeMount() {
  },
  mounted() {
    this.$store.commit("changePageID", 1);
    gsap.to(".bg-3", {
      opacity: 1,
      duration: 0.3,
      ease: "power1.inOut",
    })
    gsap.to(".stars", {
      y: "random(-30,30,5)",
      x: "random(-20,20,4)",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      repeatRefresh: true,
    })
    let startl = gsap.timeline({
      repeat: -1,
      ease: "power1.inOut",
      yoyo: true,
      repeatRefresh: true
    })
    startl.to(".star1, .star3, .star4", {
      y: "random(-60,60,10)",
      duration: 2.8,
    })

    startl.to(".star1, .star3, .star4", {
      x: "random(-30,30,10)",
      duration: 1.9,
    }, "<")
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 2100px) and (min-height: 3000px) {
  .choose-hobbie {
    overflow: hidden;
    width: 100svw;
    height: 100svh;
  }
}

.choose-hobbie {
  h3 {
    color: #fff;
    text-align: center;
    font-size: 106px;
    margin: 476px 0 112px;
    font-weight: 400;
  }
}

.stars {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
}

.stars img {
  z-index: 0;
  position: absolute;
}

.star1 {
  width: 136px;
  top: 170px;
  left: 150px;
}

.star2 {
  width: 196px;
  bottom: 1050px;
  right: 706px;
  display: none;
}

.star3 {
  width: 60px;
  top: 330px;
  right: 496px;
}

.star4 {
  width: 44px;
  bottom: 161px;
  right: 1662px;
}

.hobbies {
  padding: 0 80px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  &__item {
    background: rgba(#fff, .2);
    padding: 0 60px;
    height: 138px;
    cursor: pointer;
    border-radius: 100px;
    color: #fff;
    font-size: 70px;
    backdrop-filter: blur(32px);

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    img {
      width: 72px;
    }
  }
}

@media (min-aspect-ratio: 1/1) {
  .choose-hobbie {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hobbies {
    padding: 60px 40px;
    gap: 12px;
    max-width: 1400px;

    &__item {
      padding: 0 30px;
      height: 69px;
      font-size: 35px;
      gap: 8px;

      img {
        width: 36px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .choose-hobbie {
    .stars {
      display: none;
    }

    h3 {
      margin-top: 100px;
      margin-bottom: 40px;
      font-size: 19px;
    }
  }

  .hobbies {
    gap: 6px;
    padding: 0 15px;

    &__item {
      font-size: 16px;
      padding: 12px 16px;
      gap: 5px;
      height: 32px;

      img {
        width: 16px;
      }
    }
  }

  .stars {
    * {
      width: auto;
      height: 100%;
    }
  }
}

@media screen and (max-width: 420px) {
  .hobbies {
    gap: 4px;
    padding: 0 10px;
  }

  .choose-hobbie {
    height: calc(100vh);
    overflow-y: auto;
  }
}
</style>
