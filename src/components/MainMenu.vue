<template>
  <div class="nav-container">
    <div class="logo">
      <img src="../assets/logo_white.svg" alt="logo do site" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {};
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
  z-index: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 3rem 0;

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

@media only screen and (min-width: 768px) {
  .nav-container {
    height: 25vh;
  }
}

@media only screen and (min-width: 1920px) {
  .nav-container {
    height: 60vh;
  }
}
</style>