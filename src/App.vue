<template lang="pug">
  #app(v-if="this.$route.path === '/joinchat/AAAAAE0pVA6iCpzrW9B6yA'")
    spain-template

  #app(:style='switchImg' v-else)
    //- logo
    router-view
    footer
</template>

<script>
import Logo from "./components/Logo";
import Footer from "./components/Footer";

import SpainTemplate from "./components/templates/SpainTemplate";

const chatBgs = {
  // bbetlive
  AAAAAE8iXu0CK0yzXLE1EQ: {
    background: `url(${require("@/assets/images/1bbet.jpg")})`,
    backgroundPosition: `center`
  },
  // rich_vas
  "AAAAAEQ_FoV-Z5T-1gppaw": {
    background: `url(${require("@/assets/images/rich_vas.jpg")})`,
    backgroundPosition: `center`
  },
  // kotov
  AAAAAEmgas_pAFXeyDu44Q: {
    background: `url(${require("@/assets/images/r8bbet.jpg")})`,
    backgroundPosition: `center`
  }
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
    SpainTemplate
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
