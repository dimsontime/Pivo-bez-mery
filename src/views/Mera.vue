<template>
  <div class="mera-container">
    <!-- Idle-видео — всегда играет, лежит под всеми остальными -->
    <video
      ref="videoIdle"
      class="mera-video mera-video--idle"
      autoplay
      :muted="!audioUnlocked"
      loop
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/idle-quiet.webm" type="video/webm" />
    </video>

    <!-- Видео для p1 — последовательность -->
    <video
      v-show="currentVideo === 'idle-1-02'"
      ref="videoIdle-1-02"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/idle-1-02.webm" type="video/webm" />
    </video>
    <video
      v-show="currentVideo === 'idle-2-01'"
      ref="videoIdle-2-01"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/idle-2-01.webm" type="video/webm" />
    </video>
    <video
      v-show="currentVideo === 'idle-3-02'"
      ref="videoIdle-3-02"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/idle-3-02.webm" type="video/webm" />
    </video>


    <!-- Видео 2 — onboard-01 затем onboard-02 -->
    <video
      v-show="currentVideo === '2-1'"
      ref="video2-1"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/onboarding-1-03.webm" type="video/webm" />
    </video>
    <video
      v-show="currentVideo === '2-2'"
      ref="video2-2"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/onboarding-2-02.webm" type="video/webm" />
    </video>

    <!-- Видео 5 — для mood = 1 -->
    <video
      v-show="currentVideo === '5-fam-1'"
      ref="video5-fam-1"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/result-fam-1-04.webm" type="video/webm" />
    </video>
    <video
      v-show="currentVideo === '5-fam-2'"
      ref="video5-fam-2"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/result-fam-2-01.webm" type="video/webm" />
    </video>

    <!-- Видео 5 — для mood = 2 -->
    <video
      v-show="currentVideo === '5-par-1'"
      ref="video5-par-1"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/result-par-1-03.webm" type="video/webm" />
    </video>
    <video
      v-show="currentVideo === '5-par-2'"
      ref="video5-par-2"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/result-par-2-03.webm" type="video/webm" />
    </video>

    <!-- Видео 5 — для mood = 3 -->
    <video
      v-show="currentVideo === '5-fri-1'"
      ref="video5-fri-1"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/result-fri-1-02.webm" type="video/webm" />
    </video>
    <video
      v-show="currentVideo === '5-fri-2'"
      ref="video5-fri-2"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/result-fri-2-01.webm" type="video/webm" />
    </video>

    <!-- Видео 5 — для mood = 4 -->
    <video
      v-show="currentVideo === '5-hom-1'"
      ref="video5-hom-1"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/result-hom-1-02.webm" type="video/webm" />
    </video>
    <video
      v-show="currentVideo === '5-hom-2'"
      ref="video5-hom-2"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/result-hom-2-03.webm" type="video/webm" />
    </video>

    <!-- Inter-idle видео — loop для пауз между видео -->
    <video
      v-show="currentVideo === 'interidle-01'"
      ref="videoInteridle-01"
      class="mera-video"
      loop
      :muted="!audioUnlocked"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/interidle-01.webm" type="video/webm" />
    </video>
    <video
      v-show="currentVideo === 'interidle-02'"
      ref="videoInteridle-02"
      class="mera-video"
      loop
      :muted="!audioUnlocked"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/interidle-02.webm" type="video/webm" />
    </video>

    <!-- Screen videos для control-1 -->
    <video
      v-show="currentVideo === 'screen-1-1'"
      ref="videoScreen1-1"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/screen_1-1-02.webm" type="video/webm" />
    </video>
    <video
      v-show="currentVideo === 'screen-1-2'"
      ref="videoScreen1-2"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/screen_1-2-02.webm" type="video/webm" />
    </video>

    <!-- Screen videos для control-2 -->
    <video
      v-show="currentVideo === 'screen-2-1'"
      ref="videoScreen2-1"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/screen_2-1-01.webm" type="video/webm" />
    </video>
    <video
      v-show="currentVideo === 'screen-2-2'"
      ref="videoScreen2-2"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/screen_2-2-03.webm" type="video/webm" />
    </video>

    <!-- Glitch-переход — поверх всего -->
    <video
      v-show="glitchVisible"
      ref="videoGlitch"
      class="mera-video mera-video--glitch"
      :muted="!audioUnlocked"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/glitch-transition-short-2.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "Mera",
  data() {
    return {
      currentVideo: null,
      pendingVideo: null,
      glitchVisible: false,
      glitchMode: null, // 'intro' | 'outro'
      channel: null,
      watchdogTimer: null, // таймер watchdog для текущего видео
      glitchFallbackTimer: null, // форс-скрытие глитча если ended не сработал
      p1IdleSequence: ['idle-1-02', 'idle-2-01', 'idle-3-02'],
      p1IdleIndex: 0,
      isP1Active: false,
      audioUnlocked: false,
      playingMutedPendingUnlock: false,
      boundUnlockHandler: null,
      onboardingStep: null,
    };
  },
  mounted() {
    this.audioUnlocked = sessionStorage.getItem("meraAudioUnlocked") === "1";

    const idle = this.$refs.videoIdle;
    idle.addEventListener("ended", () => {
      idle.currentTime = 0;
      this.startVideoPlayback(idle);
    });

    // Принудительно загружаем все видео сразу
    this.preloadAllVideos();

    this.runWhenVideoReady("videoIdle", (idleVideo) =>
      this.startVideoPlayback(idleVideo)
    );

    // Разблокируем autoplay со звуком при первом взаимодействии
    this.unlockAudio();

    if (window.opener) {
      this.markAudioUnlocked();
      this.primeVideosWithSound();
    } else if (this.audioUnlocked) {
      this.$nextTick(() => {
        this.applySoundToAllVideos();
      });
    }

    // Вешаем обработчик окончания glitch один раз
    this.$refs.videoGlitch.addEventListener("ended", this.onGlitchEnded);

    this.channel = new BroadcastChannel("page-load");
    this.channel.onmessage = (event) => {
      const data = event.data;

      if (typeof data === "object" && data.type === "unlock-audio") {
        this.markAudioUnlocked();
        this.primeVideosWithSound();
        return;
      }

      const num = typeof data === "object" ? data.page : data;
      const mood = typeof data === "object" ? data.mood : this.$store.state.canvas2Value;

      if (num === 1) {
        // Запустить последовательность p1
        this.isP1Active = true;
        this.startP1IdleSequence();
        return;
      }

      this.isP1Active = false;

      if (num === 5) {
        const moodValue = Number(mood) || 1;
        if (moodValue === 2) {
          this.pendingVideo = `5-par-${Math.floor(Math.random() * 2) + 1}`;
        } else if (moodValue === 3) {
          this.pendingVideo = `5-fri-${Math.floor(Math.random() * 2) + 1}`;
        } else if (moodValue === 4) {
          this.pendingVideo = `5-hom-${Math.floor(Math.random() * 2) + 1}`;
        } else {
          this.pendingVideo = `5-fam-${Math.floor(Math.random() * 2) + 1}`;
        }
      } else if (num === 2) {
        this.onboardingStep = 1;
        this.pendingVideo = "2-1";
      } else if (num === 3) {
        this.pendingVideo = this.getRandomInteridle();
      } else if (num === "control-1") {
        this.pendingVideo = `screen-1-${Math.floor(Math.random() * 2) + 1}`;
      } else if (num === "control-2") {
        this.pendingVideo = `screen-2-${Math.floor(Math.random() * 2) + 1}`;
      } else {
        this.pendingVideo = this.normalizeVideoKey(num);
      }

      this.pendingVideo = this.resolvePendingVideo(this.pendingVideo);
      if (!this.pendingVideo) return;

      this.playGlitch("intro");
    };
  },
  beforeUnmount() {
    if (this.channel) this.channel.close();
    this.$refs.videoGlitch.removeEventListener("ended", this.onGlitchEnded);
    if (this.watchdogTimer) clearTimeout(this.watchdogTimer);
    this.removeUnlockListeners();
  },
  methods: {
    // Запустить glitch-переход
    playGlitch(mode) {
      this.glitchMode = mode;
      this.glitchVisible = true;

      if (this.glitchFallbackTimer) clearTimeout(this.glitchFallbackTimer);
      this.glitchFallbackTimer = setTimeout(() => {
        if (this.glitchVisible) {
          console.warn("glitch fallback: форс-скрытие");
          this.onGlitchEnded();
        }
      }, 3000);

      this.runWhenVideoReady("videoGlitch", async (glitch) => {
        glitch.currentTime = 0;
        const started = await this.startVideoPlayback(glitch);
        if (!started) {
          console.warn("glitch не запустился, пропускаем переход");
          this.onGlitchEnded();
        }
      });
    },

    clearGlitchFallback() {
      if (this.glitchFallbackTimer) {
        clearTimeout(this.glitchFallbackTimer);
        this.glitchFallbackTimer = null;
      }
    },

    // Glitch закончился
    onGlitchEnded() {
      if (!this.glitchVisible) return; // уже обработан
      this.clearGlitchFallback();
      this.glitchVisible = false;

      if (this.glitchMode === "intro") {
        // Glitch отыграл → показываем нужное видео
        this.stopAllVideos();
        this.currentVideo = this.resolvePendingVideo(this.pendingVideo);
        this.pendingVideo = null;
        this.$nextTick(() => {
          requestAnimationFrame(() => {
            const videoKey = this.normalizeVideoKey(this.currentVideo);
            if (!videoKey) return;

            if (videoKey.includes("interidle")) {
              this.playInteridleLoop(videoKey);
            } else {
              this.playVideo(videoKey);
            }
          });
        });
      } else if (this.glitchMode === "outro") {
        // Glitch отыграл — currentVideo уже null, остаётся idle
      }

      this.glitchMode = null;
    },

    // Запустить watchdog: если видео не продвинулось за N секунд — перезапустить
    startWatchdog(videoElement, onStuck) {
      if (this.watchdogTimer) clearTimeout(this.watchdogTimer);
      let lastTime = videoElement.currentTime;
      const check = () => {
        if (videoElement.paused || videoElement.ended) return;
        if (videoElement.currentTime === lastTime) {
          // Видео зависло — перезапускаем
          console.warn("Watchdog: видео зависло, перезапуск");
          onStuck();
          return;
        }
        lastTime = videoElement.currentTime;
        this.watchdogTimer = setTimeout(check, 3000);
      };
      this.watchdogTimer = setTimeout(check, 3000);
    },

    stopWatchdog() {
      if (this.watchdogTimer) {
        clearTimeout(this.watchdogTimer);
        this.watchdogTimer = null;
      }
    },

    // Разблокировка autoplay со звуком при первом взаимодействии с экраном Mera
    unlockAudio() {
      this.boundUnlockHandler = () => {
        this.markAudioUnlocked();
        this.primeVideosWithSound();
        this.removeUnlockListeners();
      };

      document.addEventListener("click", this.boundUnlockHandler, {
        capture: true,
      });
      document.addEventListener("touchstart", this.boundUnlockHandler, {
        capture: true,
      });
      document.addEventListener("keydown", this.boundUnlockHandler, {
        capture: true,
      });
    },

    removeUnlockListeners() {
      if (!this.boundUnlockHandler) return;

      document.removeEventListener("click", this.boundUnlockHandler, {
        capture: true,
      });
      document.removeEventListener("touchstart", this.boundUnlockHandler, {
        capture: true,
      });
      document.removeEventListener("keydown", this.boundUnlockHandler, {
        capture: true,
      });
      this.boundUnlockHandler = null;
    },

    markAudioUnlocked() {
      if (this.audioUnlocked) {
        this.applySoundToAllVideos();
        return;
      }

      this.audioUnlocked = true;
      this.playingMutedPendingUnlock = false;
      sessionStorage.setItem("meraAudioUnlocked", "1");
      this.applySoundToAllVideos();
    },

    getRandomInteridle() {
      const interidles = ["interidle-01", "interidle-02"];
      return interidles[Math.floor(Math.random() * interidles.length)];
    },

    normalizeVideoKey(value) {
      if (value == null || value === "") return null;
      return String(value);
    },

    resolvePendingVideo(videoKey) {
      const normalized = this.normalizeVideoKey(videoKey);
      if (!normalized) return null;
      if (this.getVideoElement(normalized)) return normalized;

      console.warn("unknown video key, fallback to interidle:", normalized);
      return this.getRandomInteridle();
    },

    getAllVideoRefs() {
      return [
        "videoIdle",
        "videoIdle-1-02",
        "videoIdle-2-01",
        "videoIdle-3-02",
        "video2-1",
        "video2-2",
        "video5-fam-1",
        "video5-fam-2",
        "video5-par-1",
        "video5-par-2",
        "video5-fri-1",
        "video5-fri-2",
        "video5-hom-1",
        "video5-hom-2",
        "videoInteridle-01",
        "videoInteridle-02",
        "videoScreen1-1",
        "videoScreen1-2",
        "videoScreen2-1",
        "videoScreen2-2",
        "videoGlitch",
      ];
    },

    getSoundVideoRefs() {
      return this.getAllVideoRefs().filter((refName) => refName !== "videoIdle");
    },

    applySoundToAllVideos() {
      this.getAllVideoRefs().forEach((refName) => {
        const videoElement = this.$refs[refName];
        if (!videoElement) return;

        videoElement.muted = false;

        if (!videoElement.paused && !videoElement.ended) return;

        if (refName === "videoGlitch" && !this.glitchVisible) return;
        if (refName === "videoIdle") {
          videoElement.play().catch(() => {});
        }
      });
    },

    primeVideosWithSound() {
      this.getAllVideoRefs().forEach((refName) => {
        const el = this.$refs[refName];
        if (!el) return;

        el.muted = false;

        if (refName === "videoIdle") return;

        el.play()
          .then(() => {
            el.pause();
            el.currentTime = 0;
          })
          .catch(() => {});
      });
    },

    // Принудительно вызвать load() на всех видео чтобы браузер начал буферизацию
    preloadAllVideos() {
      this.getAllVideoRefs().forEach((refName) => {
        const el = this.$refs[refName];
        if (el) el.load();
      });
    },

    getVideoElement(videoKey) {
      if (!videoKey) return null;

      const refMap = {
        "idle-1-02": "videoIdle-1-02",
        "idle-2-01": "videoIdle-2-01",
        "idle-3-02": "videoIdle-3-02",
        "interidle-01": "videoInteridle-01",
        "interidle-02": "videoInteridle-02",
      };

      const refName = refMap[videoKey] || `video${videoKey}`;
      return this.$refs[refName] || null;
    },

    runWhenVideoReady(videoKey, callback) {
      this.$nextTick(() => {
        requestAnimationFrame(async () => {
          const videoElement =
            typeof videoKey === "string" && videoKey.startsWith("video")
              ? this.$refs[videoKey]
              : this.getVideoElement(videoKey);

          if (!videoElement) {
            console.warn("video element not found:", videoKey);
            return;
          }

          const isReady = await this.waitForCanPlayWithTimeout(videoElement);
          if (!isReady) {
            console.warn("video load timeout, reload:", videoKey);
            await this.reloadVideo(videoElement);
            await this.waitForCanPlayWithTimeout(videoElement);
          }

          await callback(videoElement);
        });
      });
    },

    waitForCanPlayWithTimeout(videoElement, timeoutMs = 8000) {
      return new Promise((resolve) => {
        if (videoElement.readyState >= 3) {
          resolve(true);
          return;
        }

        let settled = false;
        const finish = (result) => {
          if (settled) return;
          settled = true;
          clearTimeout(timeoutId);
          videoElement.removeEventListener("canplay", onReady);
          videoElement.removeEventListener("loadeddata", onReady);
          resolve(result);
        };

        const onReady = () => finish(true);
        const timeoutId = setTimeout(() => finish(false), timeoutMs);

        videoElement.addEventListener("canplay", onReady, { once: true });
        videoElement.addEventListener("loadeddata", onReady, { once: true });
      });
    },

    waitForCanPlay(videoElement) {
      return this.waitForCanPlayWithTimeout(videoElement);
    },

    async startVideoPlayback(videoElement) {
      if (!videoElement) return false;

      const attempts = [
        !this.audioUnlocked,
        true,
      ];

      for (const muted of attempts) {
        try {
          videoElement.muted = muted;
          await videoElement.play();

          if (this.audioUnlocked) {
            videoElement.muted = false;
            this.playingMutedPendingUnlock = false;
          } else {
            this.playingMutedPendingUnlock = true;
          }

          return true;
        } catch (error) {
          console.warn(
            muted ? "autoplay заблокирован:" : "autoplay со звуком заблокирован:",
            error
          );
        }
      }

      return false;
    },

    async playVideoElement(videoKey, { onEnded, useWatchdog = true } = {}) {
      this.runWhenVideoReady(videoKey, async (element) => {
        element.currentTime = 0;

        if (onEnded) {
          element.addEventListener("ended", onEnded, { once: true });
        }

        let started = await this.startVideoPlayback(element);
        if (!started) {
          await this.reloadVideo(element);
          element.currentTime = 0;
          started = await this.startVideoPlayback(element);
        }

        if (!started) {
          console.warn("video failed to start:", videoKey);
          return;
        }

        if (useWatchdog) {
          this.startWatchdog(element, async () => {
            if (this.currentVideo !== videoKey) return;
            await this.reloadVideo(element);
            element.currentTime = 0;
            await this.startVideoPlayback(element);
            this.startWatchdog(element, () => {});
          });
        }
      });
    },

    handleVideoFinished(finishedVideoKey) {
      const el = this.getVideoElement(finishedVideoKey);
      if (el) {
        el.pause();
        el.currentTime = 0;
      }

      this.stopWatchdog();
      this.currentVideo = null;

      if (this.isP1Active) {
        this.playGlitch("outro");
        return;
      }

      if (finishedVideoKey === "2-1") {
        this.onboardingStep = 2;
        this.pendingVideo = "2-2";
        this.playGlitch("intro");
        return;
      }

      if (finishedVideoKey === "2-2") {
        this.onboardingStep = null;
      }

      const interidles = ["interidle-01", "interidle-02"];
      this.pendingVideo =
        interidles[Math.floor(Math.random() * interidles.length)];
      this.playGlitch("intro");
    },

    reloadVideo(videoElement) {
      return new Promise((resolve) => {
        videoElement.load();
        const onReady = () => resolve();
        if (videoElement.readyState >= 3) {
          resolve();
        } else {
          videoElement.addEventListener("canplay", onReady, { once: true });
        }
      });
    },

    // Воспроизвести основное видео и повесить обработчик конца
    playVideo(videoNumber) {
      if (!videoNumber) return;

      this.playVideoElement(videoNumber, {
        onEnded: () => this.handleVideoFinished(videoNumber),
      });
    },

    stopAllVideos() {
      this.stopWatchdog();
      this.getSoundVideoRefs().forEach((refName) => {
        const el = this.$refs[refName];
        if (el) {
          el.pause();
          el.currentTime = 0;
        }
      });
    },

    // Воспроизвести interidle loop видео
    playInteridleLoop(interidle) {
      this.stopAllVideos();
      this.currentVideo = interidle;
      this.playVideoElement(interidle, { useWatchdog: false });
    },

    // Запустить последовательность видео для p1
    startP1IdleSequence() {
      this.p1IdleIndex = 0;
      this.playNextP1Video();
    },

    playNextP1Video() {
      if (this.p1IdleIndex < this.p1IdleSequence.length) {
        const videoName = this.p1IdleSequence[this.p1IdleIndex];
        this.playP1Video(videoName);
        this.p1IdleIndex++;
      } else {
        // Последовательность закончилась, вернуться на idle
        this.currentVideo = null;
      }
    },

    playP1Video(videoName) {
      this.stopAllVideos();
      this.currentVideo = videoName;

      this.playVideoElement(videoName, {
        useWatchdog: false,
        onEnded: () => {
          this.currentVideo = null;
          setTimeout(() => {
            this.playNextP1Video();
          }, 2000);
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.mera-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mera-video {
  position: absolute;
  height: 100vh;
  width: auto;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &--idle {
    z-index: 0;
    inset: 0;
    width: 100%;
    height: 100%;
    left: auto;
    top: auto;
    transform: none;
  }

  &--glitch {
    z-index: 2;
  }
}
</style>
