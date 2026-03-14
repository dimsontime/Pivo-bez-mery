<template>
  <div class="page-wrapper">
    <video src="@/assets/videos/eq-onboarding.mp4" class="video" autoplay></video>
  </div>
</template>

<script>
export default {
  name: 'p2',
  components: {},
  mounted() {
    setTimeout(() => {
      this.$router.push({ path: '/p3' });
    }, 16000)
  }
}
</script>

<style scoped lang="scss">
  .page-wrapper {
    width: 100vw;
    height: 100vh;
  }
  .video {
    width: 100vw;
  }
</style>
