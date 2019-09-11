<template>
  <router-link to="/">
    <span class="logo">
      <i class="ion-ios-paper-plane"></i>
    </span>
  </router-link>
</template>

<style lang="stylus" scoped>
.logo {
  font-size: 48px;
  color: rgba(15, 35, 55, 0.25);
  display: flex;
  align-items: center;
  margin: 50px 0;
  padding: 5px;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #4F86C6;
  }
}
</style>
