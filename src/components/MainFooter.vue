<template>
  <footer class="footer_container">
    <div class="copyright">Victor Moraes @ 2020</div>

    <nav class="footer_menu">
      <router-link to="/"> Inicio </router-link>
      <span class="divider">|</span>
      <router-link to="/"> Comece aqui! </router-link>
      <span class="divider">|</span>
      <router-link to="#"> Portifólio </router-link>
      <span class="divider">|</span>
      <router-link to="#"> Blog </router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.footer_container {
  display: flex;
  flex-direction: column-reverse;
  background-color: $black-bg-color;
  padding: 1rem 2rem;

  .copyright {
    color: $white-text-color;
    margin-top: 1rem;
    font-size: 0.8rem;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    a {
      font-size: 0.9rem;
      color: $white-text-color;
      transition: 0.5s;
      &:hover {
        color: $sub-color;
      }
    }

    .divider {
      color: $sub-color;
    }
  }
}
</style>