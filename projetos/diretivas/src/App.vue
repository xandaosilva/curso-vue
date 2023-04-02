<template>
  <div>
    <p v-teste>Minha primeira diretiva customizada</p>
    <p v-texto="'cyan'">Teste diretiva de texto</p>
    <p v-texto="'darkcyan'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium expedita laboriosam quibusdam reprehenderit, quisquam enim sed cumque velit sit, nihil voluptas eius officia doloremque facilis. Minima unde non numquam quisquam?</p>
    <p v-texto="configText">Teste</p>
    <div v-position:absolute="75" v v-texto="{ color: 'darkcyan' }">Binding de argumento e valor</div>
    <span>Cófigo A: </span>
    <input type="text">
    <span v-information:simple.oneClickMouse="'Você encontrará o código A na parte frontal do euipamento.'"> i</span>
    <br>
    <span>Cófigo B: </span>
    <input type="text">
    <span v-information:simple.doubleClickMouse="'Você encontrará o código B na parte traseira do equipamento, próximo a área de proteção.'"> i</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    configText: { color: 'blue', size: '2rem', totalLetters: 5 }
  })
}
</script>

<style scoped></style>
