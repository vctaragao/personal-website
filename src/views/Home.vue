<template>
  <div class="home">
    <jumbotron :title="title" :subtext="subtext" :image="background" />
    <transition name="fade-in" appear>
      <main-menu />
    </transition>
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";
import MainMenu from "@/components/MainMenu.vue";
import header_background from "@/assets/header_background.jpg";
import mobile_background from "@/assets/mobile_background.jpg";

export default {
  name: "Home",
  data() {
    return {
      title: "Victor Moraes",
      subtext:
        "Apenas uma pessoa explorando o que significa viver uma vida feliz, enquanto não tenho a resposta completa, passo parte do meu dia desenvolvendo e escrevendo artigos sobre técnologia e aprendizados ao longo da jornadada.",
      background: "",
    };
  },
  components: {
    Jumbotron,
    MainMenu,
  },
  created() {
    this.background =
      window.innerWidth < 768 ? mobile_background : header_background;
  },
};
</script>
