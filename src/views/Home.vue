<template>
  <div class="get-url">
    <!-- error block -->
    <div v-if="errors.length" class="errors">
      <span v-for="error in errors" class="errors__text">{{ error }}</span>
    </div>

    <!-- header -->
    <div class="header">
      <p class="header__title">Конвертер ссылок</p>
    </div>

    <!-- links -->
    <div class="new-links">
      <transition-group name="links">
        <UsedLink
          v-for="link in links"
          :oldUrl="link.origin"
          :key="link.origin"
          :newUrl="link.our"
        />
      </transition-group>
    </div>

    <!-- create link  -->
    <div :class="inputGroupClassName" v-on:keyup.enter="createLink">
      <input
        @focus="onFocus"
        @blur="onBlur"
        v-model="url"
        class="input-group__input"
        placeholder="Write a link..."
        required
        autofocus
        tabindex="1"
      />

      <button class="input-group__button" @click="createLink">
        <i class="icon ion-ios-arrow-forward"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Url from "url-parse";
import cn from "classnames";
import UsedLink from "@/components/Link";
import ky from "ky";

export default {
  name: "HelloWorld",
  data() {
    return {
      links: this.getLinks(),
      focused: false,
      errors: [],
      url: ""
    };
  },
  computed: {
    inputGroupClassName() {
      return cn("input-group", {
        focused: this.focused
      });
    }
  },
  components: {
    UsedLink
  },
  methods: {
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    },
    getLinks() {
      const local = localStorage.getItem("createdLinks");
      if (!local) return [];
      return JSON.parse(local);
    },
    async addLink(origin, our) {
      const links = this.getLinks();
      const finded = links.find(i => i.origin === origin);
      if (finded) {
        const findedIndex = links.indexOf(finded);
        links.unshift(...links.splice(findedIndex, 1));
        localStorage.setItem("createdLinks", JSON.stringify(links));
      } else {
        links.unshift({
          origin,
          our
        });
        localStorage.setItem("createdLinks", JSON.stringify(links));
      }
      this.links = links;
      this.url = "";
    },
    createLink() {
      if (this.url) {
        let link = this.url;
        if (!link.includes("t.me/")) {
          link = `http://t.me/${this.url}`;
        }
        link = link
          .replace(/.*t\.me/, "https://" + window.location.host)
          .replace("http://", "https://")
          .replace("@", "");

        this.addLink(this.url, link);
      } else {
        if (this.errors.length === 0)
          this.errors.push("Введите ссылку или юзернейм");
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
$shadow = 0 7px 30px 2px rgba(15, 35, 55, 0.1);

.get-url {
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
}

.icon {
  font-size: 24px;
}

.errors {
  position: absolute;

  &__text {
    bottom: 25px;
    color: red;
    font-size: 13px;
    font-weight: 600;
    position: relative;
  }
}

.input-group {
  flex-shrink: 0;
  width: 100%;
  display: flex;
  // border-radius: 8px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  transition: all 0.3s ease-in;

  &.focused {
    box-shadow: $shadow;
  }

  &__input {
    outline: none;
    width: 100%;
    font-size: 18px;
    padding: 12px 22px;
    font-weight: 200;
    color: #7f898e;
    line-height: 32px;
    border-bottom-left-radius: 8px;
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-top: 1px solid #eaeaea;

    &::placeholder {
      color: #c5ccd0;
    }
  }

  &__button {
    cursor: pointer;
    outline: none;
    color: #fff;
    padding: 0 26px;
    font-weight: 600;
    border: none;
    background: #4F86C6;
    transition: all 0.1s ease-in;
    // border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    &:active {
      background: #2196f3;
      box-shadow: 0 0 30px 4px rgba(33, 150, 243, 0.2);
    }
  }
}

.header {
  margin-top: 50px;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  // border-radius: 8px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  transition: all 0.3s ease-in;
  background-color: white;

  &__title {
    padding-left: 30px;
    font-weight: 700;
  }
}

.new-links {
  // margin-top: 30px;
  background: #f9f9f9;
  // border-radius: 8px;
  max-height: 500px;
  overflow-y: auto;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);

  // box-shadow: $shadow;
  &__header {
    display: flex;
    padding-top: 0.5em;
  }
}

.links-enter-active, .links-leave-active {
  transition: all 0.5s ease-in-out;
}

.links-enter, .links-leave-to {
  opacity: 0;
  transform: translateY(40px);
}

.links-move {
  transition: transform 0.35s ease-in-out;
}
</style>
