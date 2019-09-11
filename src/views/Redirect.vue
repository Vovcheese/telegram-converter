<template lang="pug">
  .redirect_wrapper
    .main
      a.link(:href='newUrl') Перейти


</template>

<script>
export default {
  computed: {
    newUrl() {
      const path = this.$route.path;

      if (path.endsWith("bk1win")) {
        return `tg://join?invite=AAAAAEOBOGmuQYcz61e6dQ`;
      }

      let newUrl = "";
      if (path.includes("joinchat")) {
        const groupLinkId = path.split("joinchat/")[1];
        newUrl = `tg://join?invite=${groupLinkId}`;
      } else if (path.includes("addstickers")) {
        const stickersSetId = path.split("addstickers/")[1];
        newUrl = `tg://addstickers?set=${stickersSetId}`;
      } else {
        const [, chat, post] = path.split("/");
        newUrl = `tg://resolve?domain=${chat}`;
        if (post) {
          newUrl += `&post= + ${post}`;
        }
      }
      return newUrl;
    }
  },
  created() {
    const qs = new URLSearchParams(location.search)
    if (qs.has('open')) open(this.newUrl, '_self')
  }
};
</script>


<style lang="stylus" scoped>
.redirect_wrapper {
  padding-top: 1em;
}

.link {
  background-color: #2b90d9;
  width: 200px;
  -webkit-border-radius: 7px;
  border: none;
  color: #e4e2e2;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  padding: 10px 20px;
  border-radius: 8px;
}

@keyframes glowing {
  0% {
    background-color: #054775;
    box-shadow: 0 0 2px #074673;
  }

  50% {
    background-color: #f94e3f;
    box-shadow: 0 0 9px #0e87de;
  }

  100% {
    background-color: #30A9DE;
    box-shadow: 0 0 2px #47b8e0;
  }
}

.link {
  animation: glowing 1500ms infinite;
}
</style>
