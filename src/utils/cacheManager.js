/**
 * Утилита для управления кэшем видео
 */

const VIDEO_CACHE_NAME = 'pivo-videos-v1';

/**
 * Регистрация Service Worker
 */
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker зарегистрирован:', registration);
      })
      .catch(error => {
        console.error('Ошибка регистрации Service Worker:', error);
      });
  }
}

/**
 * Предварительное кэширование видео
 * @param {string} videoUrl - URL видео файла
 */
export async function precacheVideo(videoUrl) {
  if (!videoUrl) return;

  try {
    const cache = await caches.open(VIDEO_CACHE_NAME);
    const response = await cache.match(videoUrl);
    
    // Если видео уже в кэше, не загружаем снова
    if (response) {
      console.log('Видео найдено в кэше:', videoUrl);
      return;
    }

    // Загружаем видео
    const videoResponse = await fetch(videoUrl);
    if (videoResponse.ok) {
      // Кэшируем видео
      cache.put(videoUrl, videoResponse.clone());
      console.log('Видео закэшировано:', videoUrl);
    }
  } catch (error) {
    console.error('Ошибка при кэшировании видео:', error);
  }
}

/**
 * Получение видео из кэша или создание blob URL
 * @param {string} videoUrl - URL видео файла
 * @returns {Promise<string>} - URL для использования в src атрибуте
 */
export async function getCachedVideoUrl(videoUrl) {
  if (!videoUrl) return videoUrl;

  try {
    const cache = await caches.open(VIDEO_CACHE_NAME);
    const response = await cache.match(videoUrl);

    if (response) {
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    }
  } catch (error) {
    console.error('Ошибка при получении видео из кэша:', error);
  }

  // Если видео не в кэше, возвращаем оригинальный URL
  return videoUrl;
}

/**
 * Очистка видео кэша
 */
export async function clearVideoCache() {
  try {
    await caches.delete(VIDEO_CACHE_NAME);
    console.log('Видео кэш очищен');
  } catch (error) {
    console.error('Ошибка при очистке кэша:', error);
  }
}

/**
 * Получение размера кэша (примерно)
 */
export async function getCacheSizeEstimate() {
  try {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      const estimate = await navigator.storage.estimate();
      return {
        usage: estimate.usage,
        quota: estimate.quota
      };
    }
  } catch (error) {
    console.error('Ошибка при получении размера кэша:', error);
  }
  return null;
}
