<template>
  <div class="created-link">
    <div class="created-link__info">
      <span class="created-link__old">
        <img
          class="created-link__favicon"
          :src="`http://www.google.com/s2/favicons?domain=${oldUrl}`"
        />
        <span class="created-link__old-link">{{oldUrl}}</span>
      </span>
      <a :href="newUrl" class="created-link__url">
        <i class="created-link__cut-icon ion-ios-link"></i>
        <span>{{newUrl}}</span>
      </a>
    </div>
    <!-- <button v-clipboard:copy="newUrl" class="created-link__copy">
      <i class="ion-md-copy"></i>
    </button>-->
  </div>
</template>

<script>
export default {
  props: ["oldUrl", "newUrl"]
};
</script>


<style lang="stylus" scoped>
.created-link {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.8em;
  box-sizing: border-box;
  position: relative;
  background-image: url('../assets/images/background.png');

  // border-bottom: 1px solid #eaeaea;
  &:not(:last-child):before {
    content: '';
    position: absolute;
    width: calc(100% - 20px);
    top: 100%;
    left: 10px;
    height: 1px;
    background: #000;
    opacity: 0.1;
  }

  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 55px);
    background-color: #e7fecc;
    border-radius: 16px;
    margin: 1px;
    padding: 15px;
    position: relative;
    max-width: 500px;
  }

  &__info:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-left-color: #e7fecc;
    border-right: 0;
    border-bottom: 0;
    margin-top: 16.48px;
    margin-right: -10px;
  }

  &__favicon {
    margin-right: 8px;
    width: 10px;
    height: 10px;
    object-fit: cover;
  }

  &__cut-icon {
    font-size: 12px;
    display: inline-flex;
    width: 10px;
    padding-right: 8px;
  }

  &__copy {
    cursor: pointer;
    border-radius: 3px;
    padding: 14px 20px;
    font-size: 18px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    outline: none;
    transition: background 0.1s ease-in;

    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }

    &:active {
      background: rgba(0, 0, 0, 0.08);
      transform: translateY(1px);
    }
  }

  &__old {
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    color: #7f898e;
  }

  &__old-link {
    width: 94%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__url {
    text-decoration: none;
    color: #4F86C6;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
}
</style>
