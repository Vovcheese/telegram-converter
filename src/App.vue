<template lang="pug">
  #app(:style='switchImg')
    logo
    router-view
    footer
</template>

<script>
import Logo from "./components/Logo";
import Footer from "./components/Footer";

const chatBgs = {
  // images for specific link
  AAAAAE8iXu0CK0yzXLE1EQ: {
    background: `url(${require("@/assets/images/background.png")})`,
    backgroundPosition: `center`
  },
};

export default {
  computed: {
    switchImg() {
      const path = this.$route.path;
      const style = {
        backgroundColor: '#f0f5f9',
        // background: `url(${require("@/assets/images/background.png")})`,
        backgroundPosition: null,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      };

      const chatId = path.split("/joinchat/")[1];

      if (chatBgs[chatId]) {
        Object.assign(style, chatBgs[chatId]);
      }

      return style;
    }
  },
  components: {
    Logo,
    Footer,
  },
  metaInfo: {
    title: "Конвертер телеграмм ссылок",
    titleTemplate: "%s"
  }
};
</script>


<style lang="stylus">
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=cyrillic');

body {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
