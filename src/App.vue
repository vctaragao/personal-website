<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-family: $secundary-font;
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $primary-font;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: white;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

img {
  max-width: 100%;
  height: auto;
}

.fade-in-enter {
  opacity: 0;
}

.fade-in-to {
  opacity: 1;
}

.fade-in-enter-active {
  transition: opacity 0.5s ease-in;
  transition-delay: 1s;
}
</style>
