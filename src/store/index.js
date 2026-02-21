import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
// import hobbieModule from "@/slicers/HobbiesSlice";

export default createStore({
  state: {
    hobbies: [
      {
        name: 'Искусство',
        count: 76195,
        icon: 'ic-art.png'
      },
      {
        name: 'Рисование',
        count: 59874,
        icon: 'ic-draw.png'
      },
      {
        name: 'Музыка',
        count: 471141,
        icon:  'ic-music.png'
      },
      {
        name: 'Фотография',
        count: 212953,
        icon:  'ic-photo.png'
      },
      {
        name: 'Дизайн',
        count: 52673,
        icon:  'ic-design.png'
      },
      {
        name: 'Музеи и галереи',
        count: 52759,
        icon:  'ic-musei.png'
      },
      {
        name: 'Кино и сериалы',
        count: 323999,
        icon:  'ic-movie.png'
      },
      {
        name: 'Книги',
        count: 147079,
        icon:  'ic-book.png'
      },
      {
        name: 'Путешествия',
        count: 291382,
        icon:  'ic-fly.png'
      },
      {
        name: 'Фитнес',
        count: 264426,
        icon:  'ic-fit.png'
      },
      {
        name: 'Кофе',
        count: 218698,
        icon:  'ic-coffee.png'
      },
      {
        name: 'Отдых на природе',
        count: 202012,
        icon:  'ic-wild.png'
      },
      {
        name: 'Кинотеатры',
        count: 189257,
        icon:  'ic-corn.png'
      },
      {
        name: 'Пицца',
        count: 116072,
        icon:  'ic-pizza.png'
      },
      {
        name: 'Домашняя кухня',
        count: 174988,
        icon:  'ic-food.png'
      },
      {
        name: 'Велосипед',
        count: 152868,
        icon:  'ic-bike.png'
      },
      {
        name: 'Кошки',
        count: 157617,
        icon:  'ic-cat.png'
      },
      {
        name: 'Встречи с друзьями',
        count: 171782,
        icon:  'ic-meet.png'
      },
      {
        name: 'Концерты и шоу',
        count: 69872,
        icon:  'ic-show.png'
      },
      {
        name: 'Бег',
        count: 155046,
        icon:  'ic-run.png'
      },
      {
        name: 'Активный отдых',
        count: 117202,
        icon:  'ic-active.png'
      },
      {
        name: 'Чай',
        count: 114359,
        icon:  'ic-tea.png'
      },
      {
        name: 'Кулинария',
        count: 105104,
        icon:  'ic-cook.png'
      },
      {
        name: 'Танцы',
        count: 84632,
        icon:  'ic-dance.png'
      },
      {
        name: 'Футбол',
        count: 114635,
        icon:  'ic-foot.png'
      },
      {
        name: 'Суши',
        count: 114080,
        icon:  'ic-sushi.png'
      },
      {
        name: 'Собаки',
        count: 110573,
        icon:  'ic-dog.png'
      },
      {
        name: 'Здоровое питание',
        count: 91323,
        icon:  'ic-pp.png'
      },
      {
        name: 'IT и технологии',
        count: 81948,
        icon:  'ic-it.png'
      },
      {
        name: 'Горы',
        count: 46289,
        icon:  'ic-mntn.png'
      },
      {
        name: 'Меломан',
        count: 100008,
        icon:  'ic-mlmn.png'
      },
      {
        name: 'Загородные поездки',
        count: 86282,
        icon:  'ic-tree.png'
      },
      {
        name: 'Рок',
        count: 44404,
        icon:  'ic-rock.png'
      },
      {
        name: 'Турпоходы',
        count: 83165,
        icon:  'ic-tour.png'
      },
      {
        name: 'Охота и рыбалка',
        count: 85609,
        icon:  'ic-hunt.png'
      },
      {
        name: 'Комедии',
        count: 77358,
        icon:  'ic-comedy.png'
      },
      {
        name: 'Настольные игры',
        count: 82060,
        icon:  'ic-table.png'
      },
      {
        name: 'Компьютерные игры',
        count: 80231,
        icon:  'ic-vg.png'
      },
      {
        name: 'Автомобили',
        count: 75623,
        icon:  'ic-auto.png'
      },
      {
        name: 'Рестораны',
        count: 75427,
        icon:  'ic-rest.png'
      },
      {
        name: 'Плавание',
        count: 69048,
        icon:  'ic-swim.png'
      },
      {
        name: 'Йога',
        count: 46376,
        icon:  'ic-joga.png'
      },
      {
        name: 'Сладости',
        count: 67512,
        icon:  'ic-sweet.png'
      },
      {
        name: 'Театры',
        count: 61107,
        icon:  'ic-theatre.png'
      },
      {
        name: 'Лыжи',
        count: 59343,
        icon:  'ic-ski.png'
      },
      {
        name: 'Бургеры',
        count: 58753,
        icon:  'ic-ff.png'
      },
      {
        name: 'Рукоделие',
        count: 51416,
        icon:  'ic-hm.png'
      },
      {
        name: 'Сноуборд',
        count: 51238,
        icon:  'ic-board.png'
      },
      {
        name: 'Пение',
        count: 50814,
        icon:  'ic-sing.png'
      },
      {
        name: 'Видеосъемка',
        count: 47634,
        icon:  'ic-video.png'
      },
    ],
    chosenId: null,
    autoRedirect: false,
    currPageID: 0,
    boxFrameCount: 120,
    boxImages: [],
  },
  mutations: {
    setHobbies (state, hobbies) {
      state.hobbies = hobbies
    },
    incrementCount(state, id) {
      const hobby = state.hobbies[id];
      hobby.count += 1;
      let clickData = JSON.parse(window.localStorage.getItem('clickData')) || {};
      let dateKey = new Date().toISOString().split('T')[0];
      if (!clickData[dateKey]) {
        clickData[dateKey] = {};
      }
      if (!clickData[dateKey][hobby.name]) {
        clickData[dateKey][hobby.name] = 0;
      }
      clickData[dateKey][hobby.name] += 1;
      window.localStorage.setItem('clickData', JSON.stringify(clickData));
    },
    changeChosenId(state, id) {
      state.chosenId = id;
    },
    changeRedirect(state,val) {
      state.autoRedirect = val;
    },
    changePageID(state, val) {
      state.currPageID = val;
    },
    setBoxImages(state) {
      let currentFrame = (index) =>
        `/vylet_w/vylet_${(index + 1)
          .toString()
          .padStart(5, "0")}.webp`;
      let images = [];
      for (let i = 0; i < state.boxFrameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }
      state.boxImages = images;
    }
  },
  // plugins:[createPersistedState({
  //   key:'hobbies',
  //   paths: ['hobbies']
  // })],
  // modules: {
  //   hobbies: hobbieModule
  // }
});
