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
    const qs = new URLSearchParams(location.search);
    if (qs.has("open")) open(this.newUrl, "_self");
  }
};
</script>


<style lang="stylus" scoped>
.redirect_wrapper {
  padding-top: 1em;
}

.main {
  margin-top: 150px;
}

.link {
  text-decoration: none;
  font-size: 24px;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  color: #fff;
  background-image: linear-gradient(to right, #03a9f4 0%, darken(#03a9f4, 5%) 100%);
}
</style>