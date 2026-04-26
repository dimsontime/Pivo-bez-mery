<template>
  <div class="page-wrapper">
    <div class="head-logo">
      <img src="@/assets/img/mera-logo.png" alt="logo">
    </div>
    <h1 class="gradient-font" :class="currentH1Class" v-html="currentText"></h1>

    <div class="mera-avatar">
      <img src="@/assets/img/mera-avatar.png" alt="">
    </div>
    <div class="qrcode-img">
      <img src="@/assets/img/qrcode.png" alt="">
    </div>
    <div class="qrcode-text">
      <h5>Пройди по QR-коду и получи<br>персональную скидку на свой<br>напиток!</h5>
    </div>

    <div class="bag">
      <img src="@/assets/img/bag.png" alt="">
    </div>
    <div class="arrow">
      <img src="@/assets/img/arrow.png" alt="">
    </div>

    <div class="beer-logo res-1" :style="{ display: currentImageClass === 'res-1' ? 'block' : 'none' }">
      <img src="@/assets/img/logo-zeno.png" alt="">
    </div>
    <div class="beer-logo res-2" :style="{ display: currentImageClass === 'res-2' ? 'block' : 'none' }">
      <img src="@/assets/img/logo-hoegarden.png" alt="">
    </div>
    <div class="beer-logo res-3" :style="{ display: currentImageClass === 'res-3' ? 'block' : 'none' }">
      <img src="@/assets/img/logo-natahtari.png" alt="">
    </div>
    <div class="beer-logo res-4" :style="{ display: currentImageClass === 'res-4' ? 'block' : 'none' }">
      <img src="@/assets/img/logo-essa.png" alt="">
    </div>
    <div class="beer-logo res-5" :style="{ display: currentImageClass === 'res-5' ? 'block' : 'none' }">
      <img src="@/assets/img/logo-bud.png" alt="">
    </div>
    <div class="beer-logo res-6" :style="{ display: currentImageClass === 'res-6' ? 'block' : 'none' }">
      <img src="@/assets/img/logo-stella.png" alt="">
    </div>

    <div class="beer-img res-1" :style="{ display: currentImageClass === 'res-1' ? 'block' : 'none' }">
      <img src="@/assets/img/beer-zeno.png" alt="">
    </div>
    <div class="beer-img res-2" :style="{ display: currentImageClass === 'res-2' ? 'block' : 'none' }">
      <img src="@/assets/img/beer-hoegarden.png" alt="">
    </div>
    <div class="beer-img res-3" :style="{ display: currentImageClass === 'res-3' ? 'block' : 'none' }">
      <img src="@/assets/img/beer-natahtari.png" alt="">
    </div>
    <div class="beer-img res-4" :style="{ display: currentImageClass === 'res-4' ? 'block' : 'none' }">
      <img src="@/assets/img/beer-essa.png" alt="">
    </div>
    <div class="beer-img res-5" :style="{ display: currentImageClass === 'res-5' ? 'block' : 'none' }">
      <img src="@/assets/img/beer-bud.png" alt="">
    </div>
    <div class="beer-img res-6" :style="{ display: currentImageClass === 'res-6' ? 'block' : 'none' }">
      <img src="@/assets/img/beer-stella.png" alt="">
    </div>

    <router-link to="/" class="next-btn">
      В начало
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'p5',
  components: {},
  data() {
    return {
      textsMatrix: [
        // zeno
        [
          'Пауза, в которой<br>всё становится<br>на свои места.',
          'Лёгкий ритм дня, который тебе подходит.',
          'Даже среди шума можно словить дзен'
        ],
        // hoegarden
        [
          'Когда хочется замедлиться<br>и почувствовать вкус без спешки.',
          'Вечер, который раскрывается постепенно — как хороший разговор.',
          'Даже в шуме есть место вкусу<br>и характеру.'
        ],
        // natahtari
        [
          'Иногда достаточно глотка, чтобы сделать день чуть ярче.',
          'Когда хочется добавить настроению цвета и вкуса.',
          'Этот вечер точно будет ярким<br>и насыщенным'
        ],
        // essa
        [
          'Home Party — даже дома можно почувствовать вкус вечеринки',
          'Хорошим друзьям<br>не нужен клуб, чтоб устроить настоящую вечеринку',
          'Ты знаешь, как сделать коктейль<br>из яркого вкуса<br>и шумного вечера'
        ],
        // bud
        [
          'Передышка тоже часть игры — важно восстановить ритм.',
          'Когда день в движении, а вечер — в хорошем темпе.',
          'Ты на волне — и готов выжать из вечера максимум.'
        ],
        // stella
        [
          'Иногда лучший план — просто остановиться и насладиться моментом.',
          'Хорошая компания и вкус, который не требует лишнего шума.',
          'Даже когда вечер становится оживлённым, стиль остаётся с тобой.'
        ],
      ]
    }
  },
  computed: {
    currentImageClass() {
      const v1 = this.$store.state.canvas1Value;
      if (v1) {
        return `res-${v1}`;
      }
      return 'res-6'; // дефолтное значение
    },
    currentText() {
      const v1 = this.$store.state.canvas1Value ? this.$store.state.canvas1Value : 6;
      const v2 = this.$store.state.canvas2Value ? this.$store.state.canvas2Value : 3;

      if (v1 && v2) {
        return this.textsMatrix[v1 - 1][v2 - 1];
      }
      return this.textsMatrix[0][0]; // дефолтный текст
    },
    currentH1Class() {
      const v1 = this.$store.state.canvas1Value ? this.$store.state.canvas1Value : 6;
      const v2 = this.$store.state.canvas2Value ? this.$store.state.canvas2Value : 3;
      return `res-${v1}-${v2}`;
    }
  },
  mounted() {
    // Отправляем BroadcastChannel при загрузке p5
    const channel = new BroadcastChannel('page-load');
    channel.postMessage(5);
    // setTimeout(() => {
    //   this.$router.push('/p1');
    // }, 60000);
  },
};
</script>

<style scoped lang="scss">
* img {
  width: 100%;
}

.page-wrapper {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.head-logo {
  width: 153px;
  height: 140px;
  position: absolute;
  z-index: 10;
  bottom: 40px;
  left: 40px;
}

h1 {
  position: absolute;
  z-index: 10;
  top: 40px;
  left: 40px;
  padding-top: 10px;
  font-size: 87px;
  line-height: 1.03;
  text-transform: uppercase;
  width: 1150px;
}

.mera-avatar {
  position: absolute;
  top: 482px;
  left: 106px;
  z-index: 5;
  width: 302px;
}

.qrcode-img {
  position: absolute;
  z-index: 6;
  top: 668px;
  left: 320px;
  width: 269px;
}

.qrcode-text {
  position: absolute;
  z-index: 6;
  top: 559px;
  left: 442px;
  width: 380px;
  font-size: 25px;
  line-height: 1.03;
  letter-spacing: -0.02;
  color: #fff;
}

.bag {
  position: absolute;
  z-index: 4;
  top: 632px;
  left: 633px;
  width: 65px;
}
.arrow {
  position: absolute;
  z-index: 3;
  top: 545px;
  left: 580px;
}

.beer-logo {
  position: absolute;
  z-index: 1;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);

  width: 1040px;
}
.beer-img {
  position: absolute;
  z-index: 9;
  top: 15px;
  right: 50px;

  img {
    width: 620px;
  }
}

h1, h5 {
  text-align: left;
}

.next-btn {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;

  text-decoration: none;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 18px 60px;
  background: transparent;
  border: none;
  color: white;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 3px; /* толщина бордера */
    border-radius: 999px;

    background: linear-gradient(
        90deg,
        #9EFCA6 -61.15%,
        #AEF9DB -23.29%,
        #D5E53A -1.77%,
        #57FBF4 11.56%,
        #6EAEEC 28.78%,
        #69E2EA 55.33%,
        #E7ECBD 68.53%,
        #FF8753 79.14%,
        #D5D632 108.98%,
        #AEDB51 117.59%,
        #0CF1D4 130.19%
    );

    /* Магия вырезания центра */
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;

    mask-composite: exclude;

    pointer-events: none;
  }
}




.beer-logo {
  img {
    position: absolute;
    bottom: 0;
  }
}

.beer-logo.res-1 {
  img {
    width: 600px;
    right: 120px;
  }
}

.beer-logo.res-3 {
  img {
    width: 700px;
    right: 160px;
  }
}
.beer-img.res-3 {
  img {
    width: 800px;
    margin-right: -100px;
  }
}

.beer-logo.res-4 {
  img {
    width: 1050px;
    left: 100px;
  }
}
.beer-img.res-4 {
  img {
    // width: 800px;
    // margin-right: -100px;
  }
}
.beer-logo.res-5 {
  img {
    width: 1500px;
    left: -50px;
  }
}
.beer-img.res-5 {
  img {
    height: 100vh;
    width: auto;
    margin-top: -15px;
    margin-right: 150px;
  }
}
.beer-logo.res-6 {
  img {
    width: 1050px;
    left: 50px;
    bottom: 10px;
  }
}
.beer-img.res-6 {
  img {
    height: 100vh;
    width: auto;
    margin-top: -15px;
    margin-right: 110px;
  }
}
</style>
