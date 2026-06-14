<template>
  <div class="mera-new">
    <video
      ref="idleVideo"
      class="mera-new__video mera-new__video--idle"
      :src="idleSrc"
      autoplay
      loop
      playsinline
      preload="auto"
    ></video>

    <video
      v-show="activeLayer === 'main'"
      ref="mainVideo"
      class="mera-new__video"
      :src="mainSrc"
      playsinline
      preload="auto"
      @ended="onMainEnded"
    ></video>

    <video
      v-show="activeLayer === 'glitch'"
      ref="glitchVideo"
      class="mera-new__video mera-new__video--glitch"
      :src="videos.glitch"
      playsinline
      preload="auto"
      @ended="onGlitchEnded"
    ></video>
  </div>
</template>

<script>
import idleQuiet from "@/assets/videos/idle-quiet.webm";
import idle102 from "@/assets/videos/idle-1-02.webm";
import idle201 from "@/assets/videos/idle-2-01.webm";
import idle302 from "@/assets/videos/idle-3-02.webm";
import onboarding103 from "@/assets/videos/onboarding-1-03.webm";
import onboarding202 from "@/assets/videos/onboarding-2-02.webm";
import interidle01 from "@/assets/videos/interidle-01.webm";
import interidle02 from "@/assets/videos/interidle-02.webm";
import screen1102 from "@/assets/videos/screen_1-1-02.webm";
import screen1202 from "@/assets/videos/screen_1-2-02.webm";
import screen2101 from "@/assets/videos/screen_2-1-01.webm";
import screen2203 from "@/assets/videos/screen_2-2-03.webm";
import cta102 from "@/assets/videos/cta-1-02.webm";
import cta203 from "@/assets/videos/cta-2-03.webm";
import loader101 from "@/assets/videos/loader-1-01.webm";
import loader202 from "@/assets/videos/loader-2-02.webm";
import resultFam104 from "@/assets/videos/result-fam-1-04.webm";
import resultFam201 from "@/assets/videos/result-fam-2-01.webm";
import resultPar103 from "@/assets/videos/result-par-1-03.webm";
import resultPar203 from "@/assets/videos/result-par-2-03.webm";
import resultFri102 from "@/assets/videos/result-fri-1-02.webm";
import resultFri201 from "@/assets/videos/result-fri-2-01.webm";
import resultHom102 from "@/assets/videos/result-hom-1-02.webm";
import resultHom203 from "@/assets/videos/result-hom-2-03.webm";
import glitch from "@/assets/videos/glitch-transition-short-2.mp4";

const videos = {
  idleQuiet,
  glitch,
  p1Idle: [idle102, idle201, idle302],
  onboarding: [onboarding103, onboarding202],
  interidle: [interidle01, interidle02],
  screen1: [screen1102, screen1202],
  screen2: [screen2101, screen2203],
  cta: [cta102, cta203],
  loaders: [loader101, loader202],
  results: {
    1: [resultFam104, resultFam201],
    2: [resultPar103, resultPar203],
    3: [resultFri102, resultFri201],
    4: [resultHom102, resultHom203],
  },
};

export default {
  name: "MeraNew",
  data() {
    return {
      videos,
      channel: null,
      idleSrc: videos.idleQuiet,
      mainSrc: "",
      activeLayer: "idle",
      currentMode: "idle",
      currentToken: 0,
      pendingQueue: [],
      p1Index: 0,
      p3IdleIndex: 0,
      glitchFallbackTimer: null,
      autoplayBlocked: false,
    };
  },
  mounted() {
    this.prepareVideos();
    this.playIdle();

    this.channel = new BroadcastChannel("page-load");
    this.channel.onmessage = ({ data }) => this.handleMessage(data);

    this.restoreLastState();
  },
  beforeUnmount() {
    this.currentToken += 1;
    this.clearGlitchFallback();
    this.stopElement(this.$refs.idleVideo);
    this.stopElement(this.$refs.mainVideo);
    this.stopElement(this.$refs.glitchVideo);
    if (this.channel) this.channel.close();
  },
  methods: {
    handleMessage(data) {
      if (data && typeof data === "object" && data.type === "unlock-audio") {
        this.prepareVideos();
        this.playIdle();
        return;
      }

      const page = data && typeof data === "object" ? data.page : data;
      const mood = data && typeof data === "object" ? data.mood : null;

      if (page === 1) {
        this.startP1Loop();
        return;
      }

      this.stopP1Loop();

      if (page === 2) {
        this.playQueue([this.pick(videos.onboarding)], "idle");
        return;
      }

      if (page === 3 || page === "control-1") {
        this.playQueue([this.pick(videos.screen1)], "p3-idle");
        return;
      }

      if (page === "control-2") {
        this.playQueue([this.pick(videos.screen2)], "p3-idle");
        return;
      }

      if (page === "cta" || page === "tutor-overlay") {
        this.playQueue([this.pick(videos.cta)], "p3-idle");
        return;
      }

      if (page === 5) {
        this.playQueue([this.pick(videos.loaders), this.pickMoodVideo(mood)], "idle");
      }
    },
    restoreLastState() {
      const rawState = localStorage.getItem("mera-last-state");
      if (!rawState) return;

      try {
        const state = JSON.parse(rawState);
        this.$nextTick(() => this.handleMessage(state));
      } catch (error) {
        console.warn("Could not restore Mera state:", error);
      }
    },
    prepareVideos() {
      this.allVideoElements().forEach((video) => {
        video.muted = false;
        video.volume = 1;
        video.load();
      });
    },
    allVideoElements() {
      return [this.$refs.idleVideo, this.$refs.mainVideo, this.$refs.glitchVideo].filter(Boolean);
    },
    pick(list) {
      return list[Math.floor(Math.random() * list.length)];
    },
    pickMoodVideo(mood) {
      const moodValue = Number(mood) || 1;
      return this.pick(videos.results[moodValue] || videos.results[1]);
    },
    async playWithSound(video) {
      if (!video) return false;

      video.muted = false;
      video.volume = 1;

      try {
        await video.play();
        this.autoplayBlocked = false;
        return true;
      } catch (error) {
        this.autoplayBlocked = error && error.name === "NotAllowedError";
        console.warn("Video with sound did not start:", error);
        return false;
      }
    },
    playIdle() {
      this.activeLayer = "idle";
      this.$nextTick(() => {
        const idle = this.$refs.idleVideo;
        if (!idle) return;
        idle.muted = false;
        idle.volume = 1;
        idle.play().catch((error) => {
          this.autoplayBlocked = error && error.name === "NotAllowedError";
          console.warn("Idle with sound did not start:", error);
        });
      });
    },
    playQueue(queue, nextMode) {
      const token = this.resetPlayback(nextMode);
      this.pendingQueue = queue.filter(Boolean);
      this.playNextQueuedVideo(token);
    },
    resetPlayback(mode) {
      this.currentToken += 1;
      this.currentMode = mode;
      this.pendingQueue = [];
      this.clearGlitchFallback();
      this.stopElement(this.$refs.mainVideo);
      this.stopElement(this.$refs.glitchVideo);
      this.playIdle();
      return this.currentToken;
    },
    playNextQueuedVideo(token) {
      if (token !== this.currentToken) return;

      const nextSrc = this.pendingQueue.shift();
      if (!nextSrc) {
        this.afterQueueFinished(token);
        return;
      }

      this.mainSrc = nextSrc;
      this.playGlitch(token);
    },
    playGlitch(token) {
      this.activeLayer = "glitch";
      this.$nextTick(async () => {
        if (token !== this.currentToken) return;

        this.stopElement(this.$refs.idleVideo);
        const glitchVideo = this.$refs.glitchVideo;
        glitchVideo.currentTime = 0;
        this.clearGlitchFallback();
        this.glitchFallbackTimer = setTimeout(() => this.onGlitchEnded(), 3000);

        const started = await this.playWithSound(glitchVideo);
        if (!started && this.autoplayBlocked) {
          this.clearGlitchFallback();
          return;
        }
        if (!started) this.onGlitchEnded();
      });
    },
    onGlitchEnded() {
      this.clearGlitchFallback();
      const token = this.currentToken;

      this.stopElement(this.$refs.glitchVideo);
      this.activeLayer = "main";
      this.$nextTick(async () => {
        if (token !== this.currentToken) return;

        const mainVideo = this.$refs.mainVideo;
        mainVideo.currentTime = 0;
        const started = await this.playWithSound(mainVideo);
        if (!started && this.autoplayBlocked) return;
        if (!started) this.onMainEnded();
      });
    },
    onMainEnded() {
      const token = this.currentToken;
      this.stopElement(this.$refs.mainVideo);

      if (this.pendingQueue.length) {
        this.playNextQueuedVideo(token);
        return;
      }

      this.afterQueueFinished(token);
    },
    afterQueueFinished(token) {
      if (token !== this.currentToken) return;

      if (this.currentMode === "p1") {
        this.playNextP1Pair(token);
        return;
      }

      if (this.currentMode === "p3-idle") {
        this.playQueue([this.nextP3Idle()], "p3-idle");
        return;
      }

      this.playIdle();
    },
    startP1Loop() {
      const token = this.resetPlayback("p1");
      this.p1Index = 0;
      this.playNextP1Pair(token);
    },
    stopP1Loop() {
      this.p1Index = 0;
    },
    playNextP1Pair(token) {
      if (token !== this.currentToken) return;

      const nextVideo = videos.p1Idle[this.p1Index];
      this.p1Index = (this.p1Index + 1) % videos.p1Idle.length;
      this.pendingQueue = [videos.idleQuiet, nextVideo];
      this.playNextQueuedVideo(token);
    },
    nextP3Idle() {
      const nextVideo = videos.interidle[this.p3IdleIndex];
      this.p3IdleIndex = (this.p3IdleIndex + 1) % videos.interidle.length;
      return nextVideo;
    },
    stopElement(video) {
      if (!video) return;
      video.pause();
      video.currentTime = 0;
    },
    clearGlitchFallback() {
      if (!this.glitchFallbackTimer) return;
      clearTimeout(this.glitchFallbackTimer);
      this.glitchFallbackTimer = null;
    },
  },
};
</script>

<style scoped lang="scss">
.mera-new {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000;
}

.mera-new__video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: 100vh;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.mera-new__video--idle {
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: none;
  z-index: 0;
}

.mera-new__video--glitch {
  z-index: 2;
}
</style>
