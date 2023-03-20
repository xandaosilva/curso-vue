<template>
  <div>
    <VacanciesFavorites />
    <Top @navigate="component = $event" />
    <Content :content="component" />
  </div>
</template>

<script>
  import Content from '@/components/layouts/Content.vue';
  import Top from '@/components/layouts/Top.vue';
  import VacanciesFavorites from '@/components/comuns/VacanciesFavorites.vue';

  export default {
    name: 'App',
    data: () => ({
      component: "Home"
    }),
    components: {
    Content,
    Top,
    VacanciesFavorites
}
  }
</script>

<style scoped></style>
