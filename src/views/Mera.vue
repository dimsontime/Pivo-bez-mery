<template>
  <div class="mera-container">
    <video
      ref="videoIdle"
      class="mera-video mera-video--idle"
      autoplay
      muted
      playsinline
      preload="auto"
    ></video>

    <!-- Видео 1 -->
    <video
      v-show="currentVideo === 1"
      ref="video1"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/video1.mp4" type="video/mp4" />
    </video>

    <!-- Видео 2 — onboard-01 затем onboard-02 -->
    <video
      v-show="currentVideo === '2-1'"
      ref="video2-1"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/onboard-01.mp4" type="video/mp4" />
    </video>
    <video
      v-show="currentVideo === '2-2'"
      ref="video2-2"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/onboard-02.mp4" type="video/mp4" />
    </video>

    <!-- Видео 3 -->
    <video
      v-show="currentVideo === 3"
      ref="video3"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/video3.mp4" type="video/mp4" />
    </video>

    <!-- Видео 5 — случайное из трёх -->
    <video
      v-show="currentVideo === '5-1'"
      ref="video5-1"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/result-01.mp4" type="video/mp4" />
    </video>
    <video
      v-show="currentVideo === '5-2'"
      ref="video5-2"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/result-02.mp4" type="video/mp4" />
    </video>
    <video
      v-show="currentVideo === '5-3'"
      ref="video5-3"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/result-03.mp4" type="video/mp4" />
    </video>

    <!-- Load видео — во время загрузки p5 -->
    <video
      v-show="currentVideo === 'load-1'"
      ref="videoLoad1"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/load-01.mp4" type="video/mp4" />
    </video>
    <video
      v-show="currentVideo === 'load-2'"
      ref="videoLoad2"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/load-02.mp4" type="video/mp4" />
    </video>
    <video
      v-show="currentVideo === 'load-3'"
      ref="videoLoad3"
      class="mera-video"
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/load-03.mp4" type="video/mp4" />
    </video>

    <!-- Glitch-переход — поверх всего -->
    <video
      v-show="glitchVisible"
      ref="videoGlitch"
      class="mera-video mera-video--glitch"
      muted
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/glitch-transition.mp4" type="video/mp4" />
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
      idleQuietClips: [],
      idleSoundClips: [],
      idlePhase: "quiet",
      idleQuietIdx: 0,
      idleRunning: false,
      idleErrorCount: 0,
      idleCapTimer: null,
      IDLE_QUIET_MS: 30000,
      idleFallback: require("@/assets/videos/idle-01.mp4"),
      audioCtx: null,
    };
  },
  mounted() {
    const idle = this.$refs.videoIdle;
    idle.addEventListener("ended", this.onIdleEnded);
    idle.addEventListener("error", this.onIdleError);
    this.setupIdleClips();
    this.startIdlePlaylist();

    // Принудительно загружаем все видео сразу
    this.preloadAllVideos();

    this.setupAudioProcessing();

    // Разблокируем autoplay со звуком при первом взаимодействии
    this.unlockAudio();

    // Вешаем обработчик окончания glitch один раз
    this.$refs.videoGlitch.addEventListener("ended", this.onGlitchEnded);

    this.channel = new BroadcastChannel("page-load");
    this.channel.onmessage = (event) => {
      const num = event.data;
      if (num === 1) {
        if (!this.idleRunning) this.startIdlePlaylist();
        return;
      }
      this.pauseIdle();
      if (num === 5) {
        this.pendingVideo = `5-${Math.floor(Math.random() * 3) + 1}`;
      } else if (num === 2) {
        this.pendingVideo = "2-1"; // начинаем с первой части
      } else if (num === "loading") {
        // Если приходит сигнал загрузки, выбираем случайно load видео
        this.pendingVideo = `load-${Math.floor(Math.random() * 3) + 1}`;
      } else {
        this.pendingVideo = num;
      }
      this.playGlitch("intro");
    };
  },
  beforeUnmount() {
    if (this.channel) this.channel.close();
    this.$refs.videoGlitch.removeEventListener("ended", this.onGlitchEnded);
    if (this.watchdogTimer) clearTimeout(this.watchdogTimer);
    this.pauseIdle();
    if (this.$refs.videoIdle) {
      this.$refs.videoIdle.removeEventListener("ended", this.onIdleEnded);
      this.$refs.videoIdle.removeEventListener("error", this.onIdleError);
    }
    if (this.audioCtx) this.audioCtx.close().catch(() => {});
  },
  methods: {
    // Запустить glitch-переход
    playGlitch(mode) {
      this.glitchMode = mode;
      this.glitchVisible = true;
      const glitch = this.$refs.videoGlitch;
      glitch.currentTime = 0;
      glitch.play().catch(() => {});

      // Форс-скрытие через 3 секунды если ended не сработал
      if (this.glitchFallbackTimer) clearTimeout(this.glitchFallbackTimer);
      this.glitchFallbackTimer = setTimeout(() => {
        if (this.glitchVisible) {
          console.warn("glitch fallback: форс-скрытие");
          this.onGlitchEnded();
        }
      }, 3000);
    },

    clearGlitchFallback() {
      if (this.glitchFallbackTimer) {
        clearTimeout(this.glitchFallbackTimer);
        this.glitchFallbackTimer = null;
      }
    },

    setupIdleClips() {
      const quiet = [];
      const sound = [];
      try {
        const ctx = require.context("../assets/videos", false, /\.webm$/);
        ctx.keys().forEach((key) => {
          const name = key.replace(/^\.\//, "");
          const url = ctx(key);
          if (/quiet/i.test(name)) quiet.push(url);
          else sound.push(url);
        });
      } catch (e) {
        console.warn("idle clips load failed", e);
      }
      this.idleQuietClips = quiet;
      this.idleSoundClips = sound;
    },
    startIdlePlaylist() {
      this.idleRunning = true;
      this.idlePhase = "quiet";
      this.idleQuietIdx = 0;
      this.playIdleClip();
    },
    playIdleClip() {
      this.clearIdleCap();
      const el = this.$refs.videoIdle;
      if (!el) return;
      let src;
      let muted = true;
      if (this.idlePhase === "quiet" && this.idleQuietClips.length) {
        src = this.idleQuietClips[this.idleQuietIdx % this.idleQuietClips.length];
        this.idleQuietIdx += 1;
        muted = true;
      } else if (this.idlePhase === "sound" && this.idleSoundClips.length) {
        src =
          this.idleSoundClips[
            Math.floor(Math.random() * this.idleSoundClips.length)
          ];
        muted = false;
      } else {
        src = this.idleFallback;
        muted = true;
      }
      el.muted = muted;
      el.src = src;
      if (!muted && this.audioCtx && this.audioCtx.state !== "running") {
        this.audioCtx.resume().catch(() => {});
      }
      const startPlay = () => {
        el.play()
          .then(() => {
            this.idleErrorCount = 0;
          })
          .catch(() => {
            if (!el.muted) {
              el.muted = true;
              el.play().catch(() => {});
            }
          });
      };
      if (el.readyState >= 2) startPlay();
      else el.addEventListener("canplay", startPlay, { once: true });

      if (this.idlePhase === "quiet") {
        this.idleCapTimer = setTimeout(() => this.advanceIdle(), this.IDLE_QUIET_MS);
      }
    },
    advanceIdle() {
      if (!this.idleRunning) return;
      this.clearIdleCap();
      this.idlePhase = this.idlePhase === "quiet" ? "sound" : "quiet";
      this.playIdleClip();
    },
    clearIdleCap() {
      if (this.idleCapTimer) {
        clearTimeout(this.idleCapTimer);
        this.idleCapTimer = null;
      }
    },
    onIdleEnded() {
      if (!this.idleRunning) return;
      this.advanceIdle();
    },
    onIdleError() {
      if (!this.idleRunning) return;
      this.idleErrorCount += 1;
      if (this.idleErrorCount > 8) {
        this.idleRunning = false;
        return;
      }
      this.advanceIdle();
    },
    pauseIdle() {
      this.idleRunning = false;
      this.clearIdleCap();
      const el = this.$refs.videoIdle;
      if (el) {
        el.pause();
        el.muted = true;
      }
    },

    setupAudioProcessing() {
      try {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;
        this.audioCtx = new Ctx();

        const voicedRefs = [
          "videoIdle",
          "video1",
          "video2-1",
          "video2-2",
          "video3",
          "video5-1",
          "video5-2",
          "video5-3",
          "videoLoad1",
          "videoLoad2",
          "videoLoad3",
        ];

        voicedRefs.forEach((name) => {
          const el = this.$refs[name];
          if (!el) return;
          try {
            el.volume = 1;
            const source = this.audioCtx.createMediaElementSource(el);

            const highpass = this.audioCtx.createBiquadFilter();
            highpass.type = "highpass";
            highpass.frequency.value = 120;

            const boxCut = this.audioCtx.createBiquadFilter();
            boxCut.type = "peaking";
            boxCut.frequency.value = 450;
            boxCut.Q.value = 1;
            boxCut.gain.value = -4;

            const presence = this.audioCtx.createBiquadFilter();
            presence.type = "peaking";
            presence.frequency.value = 3000;
            presence.Q.value = 1;
            presence.gain.value = 6;

            const comp = this.audioCtx.createDynamicsCompressor();
            comp.threshold.value = -28;
            comp.knee.value = 30;
            comp.ratio.value = 4;
            comp.attack.value = 0.003;
            comp.release.value = 0.25;

            const gain = this.audioCtx.createGain();
            gain.gain.value = 2.2;

            const limiter = this.audioCtx.createDynamicsCompressor();
            limiter.threshold.value = -1.5;
            limiter.knee.value = 0;
            limiter.ratio.value = 20;
            limiter.attack.value = 0.001;
            limiter.release.value = 0.1;

            source.connect(highpass);
            highpass.connect(boxCut);
            boxCut.connect(presence);
            presence.connect(comp);
            comp.connect(gain);
            gain.connect(limiter);
            limiter.connect(this.audioCtx.destination);
          } catch (e) {
            console.warn("audio chain skip", name, e);
          }
        });

        this.audioCtx.resume().catch(() => {});
      } catch (e) {
        console.warn("audio processing init failed", e);
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
        this.currentVideo = this.pendingVideo;
        this.pendingVideo = null;
        this.$nextTick(() => {
          this.playVideo(this.currentVideo);
        });
      } else if (this.glitchMode === "outro") {
        this.startIdlePlaylist();
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

    // Разблокировка autoplay: при первом клике/таче тихо запускаем все видео, чтобы браузер запомнил пользовательское взаимодействие
    unlockAudio() {
      const refs = [
        "video1",
        "video2-1",
        "video2-2",
        "video3",
        "video5-1",
        "video5-2",
        "video5-3",
        "videoLoad1",
        "videoLoad2",
        "videoLoad3",
      ];

      const unlock = () => {
        if (this.audioCtx && this.audioCtx.state !== "running") {
          this.audioCtx.resume().catch(() => {});
        }
        refs.forEach((refName) => {
          const el = this.$refs[refName];
          if (!el) return;
          el.muted = false;
          el.play()
            .then(() => el.pause())
            .catch(() => {});
        });
        document.removeEventListener("click", unlock);
        document.removeEventListener("touchstart", unlock);
        document.removeEventListener("keydown", unlock);
      };

      document.addEventListener("click", unlock);
      document.addEventListener("touchstart", unlock);
      document.addEventListener("keydown", unlock);
    },

    // Принудительно вызвать load() на всех видео чтобы браузер начал буферизацию
    preloadAllVideos() {
      const allRefs = [
        "video1",
        "video2-1",
        "video2-2",
        "video3",
        "video5-1",
        "video5-2",
        "video5-3",
        "videoLoad1",
        "videoLoad2",
        "videoLoad3",
        "videoGlitch",
      ];
      allRefs.forEach((refName) => {
        const el = this.$refs[refName];
        if (el) el.load();
      });
    },

    // Перезагрузить одно видео и вернуть Promise когда оно готово
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
      const videoElement = this.$refs[`video${videoNumber}`];
      if (!videoElement) return;

      videoElement.currentTime = 0;

      // По окончании видео — останавливаем его и запускаем outro glitch
      // (или переключаем на следующую часть для составных видео)
      videoElement.addEventListener(
        "ended",
        () => {
          const num = this.currentVideo;
          const el = this.$refs[`video${num}`];
          if (el) {
            el.pause();
            el.currentTime = 0;
          }

          // Для всех — outro glitch
          this.stopWatchdog();
          this.currentVideo = null;
          this.playGlitch("outro");
        },
        { once: true }
      );

      const doPlay = () => {
        if (this.audioCtx && this.audioCtx.state !== "running") {
          this.audioCtx.resume().catch(() => {});
        }
        videoElement.muted = false;
        videoElement.play().catch((e) => {
          console.warn("autoplay заблокирован:", e);
        });
        // Запускаем watchdog — если видео зависнет, перезапустим его
        this.startWatchdog(videoElement, async () => {
          const num = this.currentVideo;
          if (!num) return;
          await this.reloadVideo(videoElement);
          videoElement.currentTime = 0;
          videoElement.muted = false;
          videoElement.play().catch(() => {});
          this.startWatchdog(videoElement, () => {});
        });
      };

      // Ждём canplay — достаточно данных чтобы начать
      if (videoElement.readyState >= 3) {
        doPlay();
      } else {
        videoElement.addEventListener("canplay", doPlay, { once: true });
      }
    },

    stopAllVideos() {
      this.stopWatchdog();
      [
        "video1",
        "video2-1",
        "video2-2",
        "video3",
        "video5-1",
        "video5-2",
        "video5-3",
      ].forEach((refName) => {
        const el = this.$refs[refName];
        if (el) {
          el.pause();
          el.currentTime = 0;
        }
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
}

.mera-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;

  &--idle {
    z-index: 0;
  }

  &--glitch {
    z-index: 2;
  }
}
</style>
