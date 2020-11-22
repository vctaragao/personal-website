<template>
  <div class="start_here_container">
    <navbar />
    <header>
      <img src="../assets/start-here.jpg" alt="imagem de fundo o cabeçalho" />
    </header>
    <div class="content">
    <h1>Sobre mim</h1>
    <p clas="description">
      Oie! Seja muito bem vindo ao meu cantinho da internet. Meu nome é Victor Moraes, tenho 22 anos e sou um Desenvolvedor Web agora buscando adentrar no mundo de Machine
      Learning e Data Science
    </p>
    <transition name="fade-in" appear>
      <h2>O que faço atualmente:</h2>
    </transition>
    <transition name="fade-in" appear>
      <p>
          <ol>
              <li><span>🎓</span>Curso o 2º ano de Sistemas da Infomação na Universidade Federal de Itajubá (UNIFEI)</li>
              <li><span>💻</span>Trabalho meio periodo como desenvolvedor Back-end com PHP</li>
              <li><span><font-awesome-icon :icon="['fab', 'vuejs']" /></span>Aprofundando em VueJs e começando a estudar Python nas horas vagas</li>
          </ol>
      </p>
    </transition>
     <transition name="fade-in" appear>
    <h2>Outras curiosidades:</h2>
    </transition>
    <transition name="fade-in" appear>
    <p>
        <ol>
            <li><span><font-awesome-icon :icon="['fas', 'terminal']"/></span>Comecei a me apaixonar por programação quando tinha 14 anos com C++</li>
            <li><span>🎓</span>Sistemas de Informações é minha segunda tentativa de faculdade. Cursei durante 4 anos Engenharia Eletrônica, mas decidi seguir meu caminho como desenvolvedor</li>
            <li><span>🕺</span>Fui professor de forró por 3 anos na equipe Forró de Segunda, um projeto voluntário onde ensinam o estilo de dança Forró Universitário aberto para a cidade de Itajubá.</li>
            <li><span><font-awesome-icon :icon="['fas', 'code']"/></span>Trabalhei em uma Empresa Júnior de TI chamada byron.solutions, ingressei nela em 2017 ocupei vários cargos durante e sai no final de 2019 após chegar o final da  minha gestão como Presidente da empresa</li>
        </ol>
    </p>
    </transition>
    </div>
    <main-footer/>
  </div>
</template>

<script>
import MainFooter from "@/components/MainFooter.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
    MainFooter,
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin: 0 1rem;
  text-align: left;

  p.description {
    text-align: left;
  }

  h1,
  h2 {
    color: rgba(0, 0, 0, 0.8);
  }

  h1 {
    text-align: center;
  }

  ol {
    padding-left: 0.75rem;
  }

  ol li {
    margin-bottom: 1rem;

    span {
      margin-right: 0.5rem;
      margin-left: 0.25rem;
    }
  }

  .fade-in-enter {
    opacity: 0;
  }

  .fade-in-to {
    opacity: 1;
  }

  .fade-in-enter-active {
    transition: opacity 0.5s ease-in;
    transition-delay: 0.5s;
  }
}
</style>