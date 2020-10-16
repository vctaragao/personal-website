<template>
  <div class="nav-container">
    <div class="social-menu">
      <font-awesome-icon :icon="['fab', 'facebook-square']" />
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </div>
    <div class="logo"></div>
    <div class="menu">
      <font-awesome-icon :icon="['fa', 'bars']" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "MainMenu",
  data() {
    return {};
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  background-color: transparent;
  z-index: 2;
  align-items: center;
  display: flex;
  justify-content: space-evenly;

  .social-menu,
  .menu {
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .social-menu {
    color: white;
    font-size: 1.5rem;

    svg:first-of-type {
      margin-right: 1rem;
    }
  }
}
</style>