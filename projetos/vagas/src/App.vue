<template>
  <div>
    <Top @navigate="component = $event" />
    <Content :content="component" />
  </div>
</template>

<script>
  import Content from '@/components/layouts/Content.vue';
  import Top from '@/components/layouts/Top.vue';

  export default {
    name: 'App',
    data: () => ({
      component: "Home"
    }),
    components: {
      Content,
      Top
    }
  }
</script>

<style scoped></style>
