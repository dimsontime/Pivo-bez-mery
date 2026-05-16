<template>
  <div class="page-wrapper">
    <video :src="videoUrl" class="video" autoplay></video>
  </div>
</template>

<script>
import { precacheVideo, getCachedVideoUrl } from "@/utils/cacheManager";
import video from "@/assets/videos/eq-onboarding.mp4";

export default {
  name: "p2",
  components: {},
  data() {
    return {
      videoUrl: video,
    };
  },
  async mounted() {
    await precacheVideo(video);
    const cachedUrl = await getCachedVideoUrl(video);
    this.videoUrl = cachedUrl;

    const channel = new BroadcastChannel("page-load");
    channel.postMessage(2);

    setTimeout(() => {
      this.$router.push({ path: "/p3" });
    }, 16000);
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
