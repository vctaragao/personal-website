<template>
  <div class="home">
    <jumbotron :title="title" :subtext="subtext" />
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";

export default {
  name: "Home",
  data() {
    return {
      title: "Victor Moraes",
      subtext:
        "Apenas uma pessoa explorando o que significa viver uma vida feliz, enquanto não tenho a resposta completa, passo parte do meu dia desenvolvendo e escrevendo artigos sobre técnologia e aprendizados ao longo da jornadada.",
    };
  },
  components: {
    Jumbotron,
  },
};
</script>
