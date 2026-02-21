<template>
  <div class="result">
    <Head></Head>

    <div class="result-load">
      <div class="icon-wrapper">
        <img src="@/assets/bigicon.svg" alt="" class="icon">
      </div>
      <p>
        {{ this.loaderPhrase }}
      </p>
      <div class="bar">
        <img :src="require(`@/assets/icons/${this.$store.state.hobbies[this.$store.state.chosenId ? this.$store.state.chosenId : 0].icon}`)" alt="">
        <span>
           {{ this.$store.state.hobbies[this.$store.state.chosenId ? this.$store.state.chosenId : 0].name }}
          </span>
      </div>
    </div>

    <div class="result-final">
      <div class="result-body">
        <div class="count">
          {{ this.resNum}}
        </div>
        <p>
          человек<span v-if="this.wordEndingCheck(this.$store.state.hobbies[this.$store.state.chosenId ? this.$store.state.chosenId : 0].count)">а</span> указали в&nbsp;анкете интерес
        </p>
        <div class="bar">
          <img :src="require(`@/assets/icons/${this.$store.state.hobbies[this.$store.state.chosenId ? this.$store.state.chosenId : 0].icon}`)" alt="">
          <span>
           {{ this.$store.state.hobbies[this.$store.state.chosenId ? this.$store.state.chosenId : 0].name }}
          </span>
        </div>
      </div>
    </div>

    <div class="stars stars-1">
      <img src="@/assets/star.png" alt="" class="star1">
      <img src="@/assets/star.png" alt="" class="star2">
      <img src="@/assets/ball.png" alt="" class="star3">
      <img src="@/assets/ball.png" alt="" class="star4">
      <img src="@/assets/star.png" alt="" class="star5">
    </div>
    <div class="stars stars-2">
      <img src="@/assets/star.png" alt="" class="star1">
      <img src="@/assets/star.png" alt="" class="star2">
      <img src="@/assets/ball.png" alt="" class="star3">
      <img src="@/assets/ball.png" alt="" class="star4">
      <img src="@/assets/star.png" alt="" class="star5">
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import {gsap} from "gsap";
import { Vue3Lottie } from 'vue3-lottie';
import Confetti from '@/assets/hearts-1.json';
import Confetti2 from '@/assets/confetti_down.json';
let Timer;
let phrases = [
  "Определяем количество анкет в\xa0VK Знакомствах по\xa0интересу",
  "Подключаем нейросети для\xa0анализа интересов",
  "Ищем идеальные совпадения по\xa0интересам",
  "Рассчитываем количество идеальных совпадений с\xa0интересом"
]
export default {
  components: {
    Head,
    Vue3Lottie
  },
  data() {
    return {
      Confetti,
      Confetti2,
      resNum: '',
      loaderPhrase: '',
      value: {
        val: this.$store.state.hobbies[this.$store.state.chosenId ? this.$store.state.chosenId : 0].count
      }
    }
  },
  methods: {
    transformNumber(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    wordEndingCheck(n) {
      let ns = n;
      while (ns>10) {
        ns = ns%10;
      }
      if (ns == 2 || ns == 3 || ns==4)  {
        return true;
      } else {
        return false
      }
    }
  },
  mounted() {
    this.$store.commit("changePageID", 2);

    this.loaderPhrase = phrases[Math.floor(Math.random()*phrases.length)]

    gsap.to(".icon", {
      scale: 0.8,
      duration: 1.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
    gsap.to(".stars-2", {
      opacity: 1,
      delay: 4,
      duration: 0.7,
      ease: "power1.inOut",
    });
    gsap.to(".stars-1", {
      opacity: 0,
      delay: 3.5,
      duration: 0.7,
      ease: "power1.inOut",
    });

    gsap.to(".result-load", {
      opacity: 0,
      duration: 1,
      delay: 3,
    })
    gsap.to(".result-final", {
      opacity: 1,
      duration: 1,
      delay: 3.8,
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
    startl.to(".star1", {
      y: "random(-45,45,5)",
      duration: 2,
    })
    startl.to(".star1", {
      x: "random(-30,30,5)",
      duration: 1.6,
    })
    startl.to(".star2", {
      y: "random(-60,60,5)",
      duration: 2.5,
    })
    startl.to(".star2", {
      x: "random(-40,40,5)",
      duration: 1.9,
    })
    startl.to(".star3", {
      y: "random(-40,20,5)",
      duration: 2.2,
    })
    startl.to(".star3", {
      x: "random(-30,10,5)",
      duration: 1.7,
    })
    startl.to(".star4", {
      y: "random(-30,10,5)",
      duration: 2.1,
    })
    startl.to(".star4", {
      x: "random(-20,20,5)",
      duration: 1.5,
    })
    startl.to(".star5", {
      y: "random(-60,60,5)",
      duration: 2.6,
    })
    startl.to(".star5", {
      x: "random(-30,30,5)",
      duration: 1.5,
    })

    gsap.from(this.value, {
      val: 0,
      duration: 2,
      delay: 4,
      ease: "power3.inOut",
      roundProps: 'val',
      onUpdate: () => {
        this.resNum = this.transformNumber(this.value.val)
      }
    })


    Timer = setTimeout(()=> {
        this.$router.push('/box');
        clearTimeout(Timer)
    }, 9000)
  },
  beforeUnmount() {
    clearTimeout(Timer)
  },
}
</script>

<style lang="scss">

@media screen and (min-width: 2100px) and (min-height: 3000px) {
  .result {
    overflow: hidden;
    width: 100svw;
    height: 100svh;
  }
}

.tmp {
  font-size: 100px;
  color: #fff;
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

.result {
  .stars img {
    z-index: 0;
    position: absolute;
  }

  .star1 {
    width: 196px;
    top: 415px;
    left: 430px;
  }

  .star2 {
    width: 186px;
    bottom: 158px;
    left: 600px;
    transform: rotate(-7deg);
    display: block;
  }

  .star3 {
    top: auto;
    width: 70px;
    left: 230px;
    bottom: 908px;
  }

  .star4 {
    width: 44px;
    top: 312px;
    left: 284px;
  }

  .star5 {
    width: 216px;
    bottom: 692px;
    right: 184px;
    transform: rotate(2deg);
  }

  .stars-2 {
    opacity: 0;
    .star1 {
      width: 165px;
      top: 160px;
      left: 325px;
    }

    .star2 {
      width: 212px;
      bottom: 692px;
      right: 184px;
      left: auto;
      transform: rotate(-7deg);
      display: block;
    }

    .star3 {
      top: auto;
      width: 70px;
      left: 230px;
      bottom: 908px;
    }

    .star4 {
      width: 44px;
      top: 54%;
      right: 312px;
      left: auto;
    }

    .star5 {
      width: 216px;
      bottom: 692px;
      right: 184px;
      transform: rotate(2deg);
      display: none;
    }
  }
}

.bar {
  font-size: 74px;
  color: #000;
  font-weight: 500;
  background: #fff;
  border-radius: 120px;
  padding: 0 80px;
  height: 188px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

  img {
    width: 76px;
  }
}

.result {
  padding: 400px 80px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-load, &-final {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  &-load {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
      width: 700px;
    }

    p {
      font-size: 106px;
      line-height: 1.3;
      max-width: 1500px;
      text-align: center;
      margin: 170px 0 100px;
    }
  }

  &-final {
    opacity: 0;
    padding: 400px 80px 80px;
  }

  &-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 80px;
    padding: 160px 0;
    width: 100%;

    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);

    .count {
      font-size: 500px;
      line-height: 1;
      font-family: VKdisplay;
      margin: 50px 0 32px;
    }

    p {
      font-size: 106px;
      max-width: 1300px;
      text-align: center;
      margin: 0 0 100px;
    }
  }

  &-bottom {
    font-size: 76px;
    width: 1500px;
    margin: 270px auto 0;
    text-align: center;
    opacity: 0;

    p {
      margin: 40px 0 66px;
    }

    img {
      width: 1102px;
    }
  }
}

.lottie-animation-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}

@media (min-aspect-ratio: 1/1) {
  .result {
    padding-bottom: 30px;

    &-body {
      border-radius: 40px;
      padding: 80px;

      p {
        font-size: 53px;
      }
    }

    .bar {
      font-size: 47px;
      padding:  0 30px;
      height: 111px;
      gap: 8px;
    }

    .count {
      font-size: 220px;
      margin: 68px 0 40px;
    }

    &-bottom {
      p {
        font-size: 50px;
        margin-bottom: 30px;
      }

      img {
        width: 540px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .result-load {
    .icon {
      width: 50%;

      &-wrapper {
        display: flex;
        justify-content: center;
      }
    }

    .bar {
      font-size: 18px;
      height: 40px;
      padding: 18px 16px;
      gap: 8px;

      img {
        width: 18px;
      }
    }

    p {
      font-size: 24px;
      margin: 30px 0 20px;
      max-width: 350px;
    }
  }

  .stars {
    display: none;
  }

  .result-final {
    padding: 100px 30px;
  }

  .result-body {
    padding: 0;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 15px;

    .count {
      font-size: 80px;
    }

    p {
      font-size: 24px;
      margin: 0 0 30px;
    }

    .bar {
      font-size: 18px;
      height: 40px;
      padding: 18px 16px;
      gap: 8px;

      img {
        width: 18px;
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
</style>
