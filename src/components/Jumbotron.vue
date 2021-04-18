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
    <!-- <transition name="fade-in-options" appear>
      <div v-if="loaded" class="nav-options">
        <a class="btn-thin-border-effect" href="#blog">Blog</a>
        <a class="btn-thin-border-effect" href="#projects">Projetos</a>
      </div>
    </transition> -->
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

.btn-thin-border-effect {
  letter-spacing: 0;
  line-height: 1.5rem;
}

.btn-thin-border-effect:hover,
.btn-thin-border-effect:active {
  letter-spacing: 1px;
}

.btn-thin-border-effect:after {
  backface-visibility: hidden;
  border: 0.1px solid rgba(#16cead, 0);
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
}

.btn-thin-border-effect:hover:after {
  backface-visibility: hidden;
  border-color: $sub-color;
  transition: width 350ms ease-in-out;
  width: 95%;
}

.fade-in-img-enter,
.fade-in-title-enter,
.fade-in-text-enter,
.fade-in-options-enter {
  opacity: 0;
}

.fade-in-img-enter-to,
.fade-in-title-enter-to,
.fade-in-text-enter-to,
.fade-in-options-enter-to {
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

.fade-in-options-enter-active {
  transition: opacity 1s ease-in;
  transition-delay: 1.5s;
}

@media only screen and (min-width: 768px) {
  .jumbotron-container {
    &::after {
      background-color: rgba(0, 0, 0, 0.75);
    }
  }
}

@media only screen and (min-width: 1366px) {
  .jumbotron-container {
    .text {
      font-size: 1.25rem;
      width: 40%;
    }
  }
}
</style>