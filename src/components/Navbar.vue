<template>
  <div class="navbar-container">
    <div class="logo">
      <router-link to="/"
        ><img src="../assets/logo_full_white.svg" alt="logo do site"
      /></router-link>
    </div>
    <div class="social-icons">
      <a href="#"></a><font-awesome-icon :icon="['fab', 'instagram']" />
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
</style>