<template>
  <router-view v-slot="{Component}">
    <transition name="page-opacity" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script>

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
  background: url("/src/assets/img/main-bg.png");
  background-size: 110%;
  background-position: top center;
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
