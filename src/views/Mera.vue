<template>
  <div class="mera-container">
    <!-- Idle-видео — всегда играет, лежит под всеми остальными -->
    <video
      ref="videoIdle"
      class="mera-video mera-video--idle"
      autoplay
      muted
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
      muted
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
      muted
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
      muted
      playsinline
      preload="auto"
    >
      <source src="@/assets/videos/glitch-transition.webm" type="video/webm" />
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
    };
  },
  mounted() {
    const idle = this.$refs.videoIdle;
    idle.play().catch(() => {});
    idle.addEventListener("ended", () => {
      idle.currentTime = 0;
      idle.play().catch(() => {});
    });

    // Принудительно загружаем все видео сразу
    this.preloadAllVideos();

    // Разблокируем autoplay со звуком при первом взаимодействии
    this.unlockAudio();

    // Вешаем обработчик окончания glitch один раз
    this.$refs.videoGlitch.addEventListener("ended", this.onGlitchEnded);

    this.channel = new BroadcastChannel("page-load");
    this.channel.onmessage = (event) => {
      const num = event.data;
      if (num === 1) {
        // Запустить последовательность p1
        this.isP1Active = true;
        this.startP1IdleSequence();
      } else if (num === 5) {
        this.isP1Active = false;
        const mood = this.$store.state.canvas2Value;
        if (mood === 2) {
          this.pendingVideo = `5-par-${Math.floor(Math.random() * 2) + 1}`;
        } else if (mood === 3) {
          this.pendingVideo = `5-fri-${Math.floor(Math.random() * 2) + 1}`;
        } else if (mood === 4) {
          this.pendingVideo = `5-hom-${Math.floor(Math.random() * 2) + 1}`;
        } else {
          this.pendingVideo = `5-fam-${Math.floor(Math.random() * 2) + 1}`;
        }
      } else if (num === 2) {
        this.isP1Active = false;
        this.pendingVideo = "2-1"; // начинаем с первой части
      } else if (num === "control-1") {
        this.isP1Active = false;
        this.pendingVideo = `Screen1-${Math.floor(Math.random() * 2) + 1}`;
      } else if (num === "control-2") {
        this.isP1Active = false;
        this.pendingVideo = `Screen2-${Math.floor(Math.random() * 2) + 1}`;
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
          // Проверяем, является ли это interidle видео
          if (this.currentVideo && typeof this.currentVideo === 'string' && this.currentVideo.includes('interidle')) {
            this.playInteridleLoop(this.currentVideo);
          } else {
            this.playVideo(this.currentVideo);
          }
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

    // Разблокировка autoplay: при первом клике/таче тихо запускаем все видео, чтобы браузер запомнил пользовательское взаимодействие
    unlockAudio() {
      const refs = [
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
      ];

      const unlock = () => {
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

      // По окончании видео — останавливаем его и запускаем outro glitch (если p1) или interidle loop
      videoElement.addEventListener(
        "ended",
        () => {
          const num = this.currentVideo;
          const el = this.$refs[`video${num}`];
          if (el) {
            el.pause();
            el.currentTime = 0;
          }

          // Если p1 активен, запускаем outro glitch, иначе запускаем interidle loop через glitch
          this.stopWatchdog();
          this.currentVideo = null;
          
          if (this.isP1Active) {
            this.playGlitch("outro");
          } else {
            // Выбираем случайное interidle видео
            const interidles = ['interidle-01', 'interidle-02'];
            const randomInteridle = interidles[Math.floor(Math.random() * interidles.length)];
            this.pendingVideo = randomInteridle;
            this.playGlitch("intro");
          }
        },
        { once: true }
      );

      const doPlay = () => {
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
      ].forEach((refName) => {
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
      const videoElement = this.$refs[`video${interidle}`];
      if (!videoElement) return;

      videoElement.currentTime = 0;

      const doPlay = () => {
        videoElement.muted = false;
        videoElement.play().catch((e) => {
          console.warn("autoplay заблокирован:", e);
        });
      };

      // Ждём canplay — достаточно данных чтобы начать
      if (videoElement.readyState >= 3) {
        doPlay();
      } else {
        videoElement.addEventListener("canplay", doPlay, { once: true });
      }
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
      const refName = `video${videoName}`;
      const videoElement = this.$refs[refName];
      if (!videoElement) return;

      videoElement.currentTime = 0;

      // После окончания видео показываем idle и затем запускаем следующее
      const onEnded = () => {
        videoElement.removeEventListener("ended", onEnded);
        this.currentVideo = null;
        
        // Ждём 2 секунды на idle-quiet перед следующим видео
        setTimeout(() => {
          this.playNextP1Video();
        }, 2000);
      };

      videoElement.addEventListener("ended", onEnded, { once: true });

      const doPlay = () => {
        videoElement.muted = false;
        videoElement.play().catch((e) => {
          console.warn("autoplay заблокирован:", e);
        });
      };

      if (videoElement.readyState >= 3) {
        doPlay();
      } else {
        videoElement.addEventListener("canplay", doPlay, { once: true });
      }
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
