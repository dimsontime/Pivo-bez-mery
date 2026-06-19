<template>
  <div class="page-wrapper">
    <video
      ref="video"
      :src="videoUrl"
      class="video"
      autoplay
      playsinline
      preload="auto"
      @ended="goNext"
    ></video>
  </div>
</template>

<script>
import { precacheVideo } from "@/utils/cacheManager";
import video from "@/assets/videos/eq-onboarding.mp4";

export default {
  name: "p2",
  components: {},
  data() {
    return {
      videoUrl: video,
      navigated: false,
      fallbackTimer: null,
    };
  },
  mounted() {
    const channel = new BroadcastChannel("page-load");
    channel.postMessage(2);

    const el = this.$refs.video;
    if (el) {
      el.play().catch(() => {
        const resume = () => {
          el.play().catch(() => {});
          document.removeEventListener("pointerdown", resume);
          document.removeEventListener("touchstart", resume);
        };
        document.addEventListener("pointerdown", resume);
        document.addEventListener("touchstart", resume);
      });
    }

    this.fallbackTimer = setTimeout(this.goNext, 20000);

    precacheVideo(video);
  },
  methods: {
    goNext() {
      if (this.navigated) return;
      this.navigated = true;
      this.$router.push({ path: "/p3" });
    },
  },
  beforeUnmount() {
    if (this.fallbackTimer) clearTimeout(this.fallbackTimer);
  },
};
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
