<template>
  <router-view v-slot="{Component}">
    <transition name="page-opacity" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
  <div class="dots"></div>
</template>

<script setup>

import gsap from 'gsap'

//Background Gradients
const g1 = "linear-gradient(0deg,rgba(58, 54, 168, 1) 0%, rgba(132, 0, 255, 1) 100%)"
const g2 = "linear-gradient(360deg,rgba(58, 54, 168, 1) 0%, rgba(61, 28, 250, 1) 100%)"

//Background Gradients Animation
gsap.fromTo("#app", 
        {
            background: g1, 
        },
        {
            ease: "none", 
            duration: 16, 
            background: g2, 
            repeat: -1,
            yoyo: true
        }
)

</script>

<style lang="scss">
html, body {
  margin: 0;
  width: 100%;
  min-height: 100vh;
  //touch-action: none;
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@font-face {
  font-family: 'Onest';
  src: url("./assets/fonts/Onest-Regular.ttf");
  font-weight: 400;
}
@font-face {
  font-family: 'Onest';
  src: url("./assets/fonts/Onest-Medium.ttf");
  font-weight: 500;
}
@font-face {
  font-family: 'Onest';
  src: url("./assets/fonts/Onest-SemiBold.ttf");
  font-weight: 600;
}
@font-face {
  font-family: 'Onest';
  src: url("./assets/fonts/Onest-Bold.ttf");
  font-weight: 700;
}

#app {
  font-family: Onest, Serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(00deg,rgba(58, 54, 168, 1) 0%, rgba(132, 0, 255, 1) 100%);
  background-size: 110%;
  background-position: top center;
}

.dots {
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg width='5' height='5' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2.5' cy='2.5' r='2.5' fill='white' fill-opacity='0.1'/%3E%3C/svg%3E%0A");
  z-index: 999;
  pointer-events: none;
}

.page-opacity-enter-active, .page-opacity-leave-from, .page-opacity-leave-active {
  transition: .3s linear all;
}

.page-opacity-enter-from, .page-opacity-leave-to, .page-opacity-enter {
  opacity: 0;
}

* {
  outline: 4px green !important;
}

h1,h2,h3,h4,h5,h6 {
  text-align: center;
  margin: 0;
}

h1 {
  font-size: 64px;
  font-weight: 700;
  text-transform: uppercase;
  width: 740px;
  line-height: 1.03;
}

h4 {
  font-size: 32px;
  font-weight: 500;
}

.gradient-font {
  background: linear-gradient(90deg, #9EFCA6 -61.15%, #AEF9DB -23.29%, #D5E53A -1.77%,
    #57FBF4 11.56%,     #6EAEEC 28.78%, #69E2EA 55.33%, #E7ECBD 68.53%, #FF8753 79.14%,
    #D5D632 108.98%, #AEDB51 117.59%, #0CF1D4 130.19%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
