<template>
  <div class="home">
    <Head></Head>
    <div class="home-body">
<!--      <img class="bubbles" src="@/assets/home-bubbles.svg" alt="">-->
      <div class="bubbles bubbles-2">
        <div class="bubble">
          <img src="@/assets/stars_outline_28.svg" alt="">
          Счетчик
        </div>
        <div class="bubble">интересов</div>
      </div>
      <img class="kv" src="@/assets/home-kv2.png" alt="">

      <div class="kv-new">
        <img src="@/assets/kv-Back.svg" alt="" class="kv-back">
        <img src="@/assets/kv-Face.png" alt="" class="kv-face">
        <img src="@/assets/kv-Center.png" alt="" class="kv-center">
      </div>
    </div>
    <div class="home-bottom">
      <h4>
        Узнайте, сколько людей  в&nbsp;VK&nbsp;Знакомствах разделяют ваши интересы
      </h4>
      <router-link  to="/choose-hobby" class="home-button">
        Выбрать интерес
      </router-link>
    </div>
    <div class="rules-button">
      Нажимая «Выбрать интерес»,
      вы&nbsp;соглашаетесь с&nbsp;правилами акции <span>vk.cc/lovegift2024</span>
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
// @ is an alias to /src
import Head from "@/components/Head.vue";
export default {
  name: 'HomeView',
  components: {
    Head
  },
  mounted() {
    this.$store.commit("changePageID", 0);
    if (!(window.localStorage.hobbies)) {
      window.localStorage.setItem("hobbies", JSON.stringify(this.$store.state.hobbies))
    } else {
      let parsed = JSON.parse(window.localStorage.getItem("hobbies"));
      this.$store.commit("setHobbies",  parsed);
    }

    gsap.to(".kv-face", {
      y: "random(-20,20,5)",
      x: "random(-20,20,4)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "back.inOut",
      repeatRefresh: true,
    })

    gsap.to(".stars", {
      y: "random(-15,15,5)",
      x: "random(-10,10,5)",
      duration: 2.3,
      repeat: -1,
      yoyo: true,
      ease: "back.inOut",
      repeatRefresh: true,
    })
    let startl = gsap.timeline({
      repeat: -1,
      ease: "power1.inOut",
      yoyo: true,
      repeatRefresh: true
    })

    startl.to(".star1", {
      y: "random(-14,14,2)",
      duration: 2.8,
    })
    startl.to(".star1", {
      x: "random(-10,15,2)",
      duration: 2,
    }, "<")
    startl.to(".star2", {
      y: "random(-25,25,2)",
      duration: "random(2.4, 2.8, 0.1)",
    })
    startl.to(".star2", {
      x: "random(-15,15,2)",
      duration: "random(1.4, 2.2, 0.1)",ease: "back.inOut",
    }, "<")
    gsap.to(".star3", {
      y: "random(-15,15,2)",
      x: "random(-12, 15,2)",
      duration: "random(3.3,3.9,0.2)",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      repeatRefresh: true
    })
    gsap.to(".star4", {
      y: "random(-10,5,3)",
      x: "random(-8, 8,2)",
      duration: "random(1.1,1.5,0.1)",
      repeat: -1,
      ease: "power1.inOut",
      yoyo: true,
      repeatRefresh: true
    })
  },
  beforeUnmount() {
    gsap.to(".bg-1-1", {
      opacity: 1,
      duration: 0.3,
      ease: "power1.inOut",
    })
  }
};
</script>

<style lang="scss">
.home {
  font-size: 106px;
  font-weight: 500;
  text-align: center;
  position: relative;
  width: 100vw;
  height: 100vh;

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
    width: 196px;
    top: 832px;
    left: 405px;
  }

  .star2 {
    width: 186px;
    bottom: 1050px;
    right: 706px;
    transform: rotate(-7deg);
    display: block;
  }

  .star3 {
    width: 60px;
    top: 330px;
    right: 496px;
  }

  .star4 {
    width: 44px;
    bottom: 661px;
    right: 210px;
  }

  &-body {
    .bubbles {
      position: absolute;
      top: 465px;
      left: 50%;
      transform: translateX(-50%);
      height: 412px;
      width: 1166px;

      &-2 {
        color: #fff;
        font-size: 101px;

        .bubble{
          position: absolute;
          background: rgba(#fff, .12);
          //border: 2px solid rgba(#fff, .22);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 33px;
          padding: 54px 112px;
          border-radius: 200px;
          backdrop-filter: blur(32px);

          img {
            width: 119px;
          }

          &:nth-child(1) {
            top: 0;
            left: 0;
          }

          &:nth-child(2) {
            bottom: 0;
            right: 0;
            padding: 40px 112px 60px;
          }
        }
      }
    }

    .kv {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      display: none;

      &-new {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        z-index: 0;
      }

      &-back, &-face, &-center {
        position: absolute;
      }

      &-back {
        z-index: -3;
        width: 150%;
        bottom: -15%;
        left: 50%;
        transform: translateX(-50%);
      }

      &-center {
        z-index: -2;
        width: 1950px;
        bottom: 405px;
        left: 50%;
        transform: translateX(-45%);
        }
      &-face {
        z-index: -1;
        width: 415px;
        right: 270px;
        bottom: 607px;
      }
    }
  }

  &-bottom {
    position: absolute;
    top: 1166px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    width: 1800px;

    h4 {
      line-height: 1.3;
      color: #fff;
      margin: 0 0 96px;
      font-weight: 500;
      font-size: 128px;
    }
  }

  &-button {
    text-decoration: none;
    color: #fff;
    background: linear-gradient(0deg, rgba(255,34,168,1) 0%, rgba(255,130,205,1) 100%);
    box-shadow: 0px 0px 69px 0px rgba(255,138,208,0.74);
    -webkit-box-shadow: 0px 0px 69px 0px rgba(255,138,208,0.74);
    -moz-box-shadow: 0px 0px 69px 0px rgba(255,138,208,0.74);
    padding: 95px 150px 105px;
    border-radius: 200px;
    font-size: 128px;
    line-height: 1.2;
  }

  .rules-button {
    font-size: 40px;
    line-height: 1.3;
    max-width: 950px;
    color: #fff;
    text-decoration: none;
    font-weight: 400;

    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
    span {
      text-decoration: underline;
    }
  }
}

.about-button {
  position: absolute;
  bottom: 96px;
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
}

@media screen and (min-width: 2100px) and (min-height: 3000px) {
  .home {
    overflow: hidden;
    width: 100svw;
    height: 100svh;
  }
}

@media (min-aspect-ratio: 1/1) {
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-body, &-bottom {
      position: static;
    }

    &-body {
      width: 100%;

      padding-bottom: 50%;

      .bubbles {
        position: relative;
        width: 40%;
        height: auto;
        transform: none;
        left: auto;
        top: auto;
      }

      .kv {
        z-index: 0;

        width: 60%;
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &-bottom {
      z-index: 1;
      transform: none;
      width: 100%;
      padding-bottom: 40px;

      h4 {
        font-size: 52px;
        max-width: 1200px;
      }

      a {
        border-radius: 30px;
        padding: 60px 100px;
        font-size: 52px;
      }
    }
  }
}


@media screen and (max-width: 500px) {
  .rules-button {
    display: none;
  }

  .home-button {
    padding: 25px 36px;
    font-size: 32px;
  }

  .home .stars {
    display: none;
  }

  .home-body {
    .kv {
      &-face {
        width: 20%;
        top: 75%;
        right: 25%;
        left: auto;
      }

      &-center {
        width: 100%;
        top: 60%;
      }
    }

    .bubbles {
      top: 130px;
      height: 110px;
      width: 290px;

      .bubble {
        font-size: 25px;
        padding: 15px 28px;

        gap: 10px;

        &:nth-child(2) {
          padding: 12px 28px 16px;
        }

        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }

  .home-bottom {
    top: 35%;
    max-width: 450px;
    gap: 40px;

    h4 {
      max-width: 100vw;
      padding: 0 15px;
      font-size: 28px;
      margin-bottom: 0;
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
