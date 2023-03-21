<template>
  <div>
    <VacanciesFavorites />
    <Top @navigate="component = $event" />
    <Alert v-if="showAlert" :type="alert.type">
      <template v-slot:title>
        <h5>{{ alert.title }}</h5>
      </template>
      <template v-slot:description>
        <p>{{ alert.description }}</p>
      </template>
    </Alert>
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
      showAlert: false,
      alert: { type: "", title: "", description: "" }
    }),
    components: {
      Alert,
      Content,
      Top,
      VacanciesFavorites
    },
    mounted(){
      this.emitter.on("alert", (a) => {
        this.alert = a;
        this.showAlert = true;
        setTimeout(() => this.showAlert = false, 4000);
      });
    }
  }
</script>

<style scoped></style>
