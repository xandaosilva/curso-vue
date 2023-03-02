<template>
  <div>
    <Top />
    <Content />
  </div>
</template>

<script>
import Content from './components/layouts/Content.vue'
import Top from './components/layouts/Top.vue'

export default {
  name: 'App',
  components: {
    Content,
    Top
  }
}
</script>

<style>

</style>
