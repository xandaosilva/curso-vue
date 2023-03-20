<template>
  <div>
    <VacanciesFavorites />
    <Top @navigate="component = $event" />
    <Alert v-if="showAlert" />
    <Content :content="component" />
  </div>
</template>

<script>
  import Alert from '@/components/comuns/Alert.vue';
  import Content from '@/components/layouts/Content.vue';
  import Top from '@/components/layouts/Top.vue';
  import VacanciesFavorites from '@/components/comuns/VacanciesFavorites.vue';

  export default {
    name: 'App',
    data: () => ({
      component: "Home",
      showAlert: false
    }),
    components: {
      Alert,
      Content,
      Top,
      VacanciesFavorites
    },
    mounted(){
      this.emitter.on("alert", () => {
        this.showAlert = true;
        setTimeout(() => this.showAlert = false, 4000);
        console.log("ALert");
      });
    }
  }
</script>

<style scoped></style>
