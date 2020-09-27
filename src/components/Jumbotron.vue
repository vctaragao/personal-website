<template>
  <div class="jumbotron-container">
    <img :src="getImgUrl(background)" alt="Imagem de fundo" />
    <div class="text">
      <div class="title">
        <h1>
          {{ name }} <span>{{ sirname }}</span>
        </h1>
      </div>
      <div class="subtext">{{ subtext }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {
      background: "mobile_background.jpg",
      name: "",
      sirname: "",
    };
  },
  props: ["title", "subtext"],
  methods: {
    getImgUrl(img_name) {
      return require("../assets/" + img_name);
    },
  },
  created() {
    this.background =
      window.innerWidth < 768
        ? "mobile_background.jpg"
        : "header_background.jpg";

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

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    width: 80%;

    .title {
      span {
        color: #16cead;
      }
    }

    .subtext {
      text-align: justify;
    }
  }
}
</style>