<template>
  <div class="mera-container">
    <!-- Видео 1 -->
    <video 
      v-show="currentVideo === 1" 
      ref="video1"
      class="mera-video"
      autoplay
      muted
      playsinline
    >
      <source src="@/assets/videos/video1.mp4" type="video/mp4">
      Ваш браузер не поддерживает видео
    </video>

    <!-- Видео 2 -->
    <video 
      v-show="currentVideo === 2" 
      ref="video2"
      class="mera-video"
      autoplay
      muted
      playsinline
    >
      <source src="@/assets/videos/video2.mp4" type="video/mp4">
      Ваш браузер не поддерживает видео
    </video>

    <!-- Видео 3 -->
    <video 
      v-show="currentVideo === 3" 
      ref="video3"
      class="mera-video"
      autoplay
      muted
      playsinline
    >
      <source src="@/assets/videos/video3.mp4" type="video/mp4">
      Ваш браузер не поддерживает видео
    </video>

    <!-- Видео 5 -->
    <video 
      v-show="currentVideo === 5" 
      ref="video5"
      class="mera-video"
      autoplay
      muted
      playsinline
    >
      <source src="@/assets/videos/video5.mp4" type="video/mp4">
      Ваш браузер не поддерживает видео
    </video>
  </div>
</template>

<script>
export default {
  name: 'Mera',
  data() {
    return {
      currentVideo: null,
      channel: null
    }
  },
  mounted() {
    // Создаём BroadcastChannel для получения сообщений
    this.channel = new BroadcastChannel('page-load');
    
    // Слушаем входящие сообщения
    this.channel.onmessage = (event) => {
      const videoNumber = event.data;
      
      // Останавливаем все видео
      this.stopAllVideos();
      
      // Устанавливаем номер текущего видео
      this.currentVideo = videoNumber;
      
      // Запускаем воспроизведение нужного видео
      this.$nextTick(() => {
        this.playVideo(videoNumber);
      });
    };
  },
  beforeUnmount() {
    // Закрываем канал при размонтировании компонента
    if (this.channel) {
      this.channel.close();
    }
  },
  methods: {
    playVideo(videoNumber) {
      const refName = `video${videoNumber}`;
      const videoElement = this.$refs[refName];
      
      if (videoElement) {
        // Гарантируем, что видео начинается с самого начала
        videoElement.currentTime = 0;
        
        // Обработчик для гарантированного запуска после загрузки
        const startPlayback = () => {
          // Сначала пытаемся запустить со звуком
          videoElement.muted = false;
          const playPromise = videoElement.play();
          
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log(`Видео ${videoNumber} запущено со звуком`);
              })
              .catch(error => {
                // Если autoplay блокирован, запускаем заглушенным
                console.warn(`Автоplay со звуком заблокирован, запускаем заглушенным:`, error);
                videoElement.muted = true;
                videoElement.play().catch(err => {
                  console.error(`Ошибка при воспроизведении видео ${videoNumber}:`, err);
                });
              });
          }
        };
        
        // Если метаданные уже загружены
        if (videoElement.readyState >= 1) {
          startPlayback();
        } else {
          // Если метаданные еще не загружены, ждем события
          videoElement.addEventListener('loadedmetadata', startPlayback, { once: true });
        }
      } else {
        console.warn(`Видеоэлемент ${refName} не найден`);
      }
    },
    stopAllVideos() {
      const videoRefs = ['video1', 'video2', 'video3', 'video5'];
      videoRefs.forEach(refName => {
        const videoElement = this.$refs[refName];
        if (videoElement) {
          videoElement.pause();
          videoElement.currentTime = 0;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.mera-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.mera-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
