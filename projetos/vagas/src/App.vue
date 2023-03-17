<template>
  <div>
    <h1>Component App</h1>
    <Top @event="$event()" />
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
    },
    methods: {
      load(e){
        console.log(e);
      }
    }
  }
</script>

<style scoped></style>
