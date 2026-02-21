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
  font-family: 'VK';
  src: url("./assets/fonts/VK Sans Text Regular.ttf");
  font-weight: 400;
}

@font-face {
  font-family: 'VK';
  src: url("./assets/fonts/VK Sans Text Medium.ttf");
  font-weight: 500;
}

@font-face {
  font-family: 'VKdisplay';
  src: url("./assets/fonts/VK Sans Display Regular.otf");
  font-weight: 400;
}

@font-face {
  font-family: 'VKdisplay';
  src: url("./assets/fonts/VK Sans Display Medium.otf");
  font-weight: 500;
}

#app {
  font-family: VKdisplay, Serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
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
</style>
