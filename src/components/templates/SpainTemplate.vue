<template lang="pug">
  .telegram-wrapper
    //- header
    .telegram-wrapper__head
      img(src="../../assets/images/logotype.svg" class='telegram-wrapper__head logo')
    .telegram-wrapper__dl-button
      a(class="telegram-wrapper__dl-button text" href='https://telegram.org/dl') 
        | Todavía no tienes
        strong  Telegram?
        |  Pruébalo ahora!
      img(src="../../assets/images/arrow-right.png" class='telegram-wrapper__head arrow-right')

    //- body
    .telegram-wrapper__body
      //- channel avatar
      img(src="../../assets/images/avatar-channel.jpg" class='telegram-wrapper__body avatar')
      //- channel name
      p(class='telegram-wrapper__body channel-name') Apuestas en España - Betting King 👑
      //- join button
      a(class='telegram-wrapper__body join-button' :href='newUrl') Unirse al canal
      
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
    // window.location.href = this.newUrl;
  }
};
</script>


<style lang="stylus" scoped>
.telegram-wrapper {
  width: 100%;
  min-height: 100%;

  &__head {
    margin: 7px 7px 4px;
    text-align: left;

    &.arrow-right {
      display: inline-block;
      width: 8px;
      height: 12px;
      background-size: 8px 12px;
      vertical-align: top;
      margin-top: 15px;
      margin-left: 9px;
    }
  }

  &__dl-button {
    margin: 0;
    background: #32afed;

    &.text {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      color: white;
      line-height: 44px;
      text-decoration: none;

      strong {
        font-weight: 800;
      }
    }
  }

  &__body {
    margin-top: 20px;

    &.avatar {
      width: 122px;
      height: 122px;
      border-radius: 61px;
    }

    &.channel-name {
      font-family: 'Roboto', sans-serif;
      font-size: 26px;
      line-height: 32px;
      font-weight: bold;
      text-align: center;
      max-width: 340px;
      padding: 10px 30px;
      margin: 0 auto;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &.join-button {
      background: #33d684;
      font-size: 14px;
      font-weight: bold;
      line-height: 100%;
      color: #FFF;
      border-radius: 22px;
      overflow: hidden;
      display: inline-block;
      padding: 15px 27px 13px;
      text-transform: uppercase;
      border: none;
      text-decoration: none;
    }

    &.join-button:hover {
      background: #5dc390;
    }
  }
}
</style>
