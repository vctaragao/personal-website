<template>
  <div :class="[{ 'jumbotron-container': loaded }]">
    <transition name="fade-in-img">
      <img class="img" :src="image" @load="loadImage" v-show="loaded" />
    </transition>

    <div v-if="loaded" class="text">
      <transition name="fade-in-title" appear>
        <div class="title typewriter">
          <h1>
            {{ name }} <span>{{ sirname }}</span>
          </h1>
        </div>
      </transition>
      <transition name="fade-in-text" appear>
        <div class="subtext">
          {{ subtext }}
          <span class="start-here">
            <router-link to="/start-here"> Comece aqui! </router-link>
          </span>
        </div>
      </transition>
    </div>

    <div v-if="loaded" class="nav-options">
      <a href="#blog">Blog</a>
      <a href="#projects">Projetos</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {
      name: "",
      sirname: "",
      loaded: false,
    };
  },
  props: ["title", "subtext", "image"],
  methods: {
    loadImage() {
      this.loaded = true;
    },
  },
  created() {
    let name = this.title.split(" ");
    this.name = name[0];
    this.sirname = name[1];
  },
};
</script>

<style lang="scss" scoped>
.jumbotron-container {
  width: 100%;
  height: 100vh;
  position: relative;
  color: white;
  background-size: contain;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
  }

  .img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    width: 80%;

    .title {
      margin-bottom: 1rem;
      span {
        color: #16cead;
      }
    }

    .subtext {
      text-align: justify;

      .start-here a {
        color: $sub-color;
      }
    }
  }

  .nav-options {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
    z-index: 1;

    a {
      color: white;
      opacity: 0.5;
      transition: 0.5s;

      &:hover {
        opacity: 1;
        color: $sub-color;
      }
    }
  }
}

.fade-in-img-enter,
.fade-in-title-enter,
.fade-in-text-enter {
  opacity: 0;
}

.fade-in-img-enter-to,
.fade-in-title-enter-to,
.fade-in-text-enter-to {
  opacity: 1;
}

.fade-in-img-enter-active {
  transition: opacity 1s ease-out;
}

.fade-in-title-enter-active,
.fade-in-text-enter-active {
  transition: opacity 1s ease-in;
  transition-delay: 1s;
}
</style>