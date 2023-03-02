<template>
  <div>
    <h1>Component App</h1>
    <Top />
    <Content />
  </div>
</template>

<script>
import Content from '@/components/layouts/Content.vue';
import Top from '@/components/layouts/Top.vue';

export default {
  name: 'App',
  components: {
    Content,
    Top
  }
}
</script>

<style scoped></style>
