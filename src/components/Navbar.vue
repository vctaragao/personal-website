<template>
  <div class="navbar-container">
    <div class="logo">
      <router-link to="/"
        ><img src="../assets/logo_full_white.svg" alt="logo do site"
      /></router-link>
    </div>
    <div class="social-icons">
      <a target="_blank" href="https://www.instagram.com/vitu.tech/">
        <font-awesome-icon :icon="['fab', 'instagram']"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.navbar-container {
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $black-bg-color;
  z-index: 0;

  .logo {
    width: 30%;
  }
  .social-icons {
    color: $white-text-color;
    transition: 0.5s;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      color: $sub-color;
    }
  }
}

@media only screen and (min-width: 768px) {
  .navbar-container {
    .logo {
      width: 18%;
    }
  }
}

@media only screen and (min-width: 1366px) {
  .navbar-container {
    padding: 0.5rem $lateralDektopMarginandPaddingAjust;
    .logo {
      width: 11%;
    }
  }
}

@media only screen and (min-width: 1920px) {
  .navbar-container {
    padding: 0.5rem $lateralDektop1920MarginandPaddingAjust;
    .social-icons {
      margin-right: 0.5rem;
    }
    .logo {
      width: 11%;
    }
  }
}
</style>