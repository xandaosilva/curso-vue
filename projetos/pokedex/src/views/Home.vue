<template>
  <div class="container">
    <div class="row mt-2">
      <div class="col mb-2">
        <div class="card palco">
          <div class="card-header"></div>
          <div class="card-body bg-pokebola bg-normal">
            <div class="pokemon">
              <!-- <transition name="jump" type="animation"> -->
              <!-- <transition name="jump" :duration="{ enter: 2000, leave: 1000 }"> -->
              <!-- <transition 
                enter-from-class="enter-initial-state"
                enter-active-class="transition"
                enter-to-class="enter-final-state"
                leave-from-class="leave-initial-state"
                leave-active-class="transition"
                leave-to-class="leave-final-state"
              > -->
              <!-- <transition 
                enter-active-class="animate__animated animate__bounceIn"
                leave-active-class="animate__animated animate__bounceOut"
              > -->
              <!-- <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelld"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelld"
                enter-active-class="animate__animated animate__bounceIn"
                leave-active-class="animate__animated animate__bounceOut"
              > -->
              <transition
                @after-enter="displayEvolutionTransition"
                @before-leave="hideDisplayEvolution"
                enter-active-class="animate__animated animate__bounceIn"
                leave-active-class="animate__animated animate__bounceOut"
              >
                <img :src="require(`@/assets/imgs/pokemons/${pokemon.image}`)" v-if="display">
              </transition>
              <div class="evolucoes">
                <transition name="fade" v-for="evolution in pokemon.evolutions" :key="evolution">
                  <img :src="require(`@/assets/imgs/pokemons/${evolution.toString().padStart(3, '0')}.png`)" v-if="displayEvolution">
                </transition>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <nav class="nav nav-pills nav-fill">
              <router-link class="nav-item nav-link text-white" :to="{ path: '/sobre' }" exact-active-class="active">Sobre</router-link>
              <router-link class="nav-item nav-link text-white" :to="{ path: '/status' }" exact-active-class="active">Status</router-link>
              <router-link class="nav-item nav-link text-white" :to="{ path: '/habilidades' }" exact-active-class="active">Habilidades</router-link>
            </nav>
            <div class="detalhes">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-2 pokedex">        
        <div class="row">
          <div class="col">
            <h1>Pokédex</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <select class="form-select">
              <option>Id crescente</option>
              <option>Id decrescrente</option>
              <option>De A - Z</option>
            </select>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Pesquisar pokémon">
          </div>
        </div>
        <div class="row">
          <div class="pokedex-catalogo">
            <div :class="`cartao-pokemon bg-${pokemon.type}`" v-for="pokemon in pokemons" :key="pokemon.id" @click="analyzePokemon(pokemon)">
              <h1>{{ pokemon.id }} {{ pokemon.name }}</h1>
              <span>{{ pokemon.type }}</span>
              <div class="cartao-pokemon-img">
                <img :src="require(`@/assets/imgs/pokemons/${pokemon.image}`)">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    display: false,
    displayEvolution: false,
    pokemon: {},
    pokemons: [
      { id: 1, name: 'Bulbasaur', type: 'grama', image: '001.png', evolutions: [2,3] },
      { id: 2, name: 'Ivysaur', type: 'grama', image: '002.png', evolutions: [3] },
      { id: 3, name: 'Venusaur', type: 'grama', image: '003.png', evolutions: [] },
      { id: 4, name: 'Charmander', type: 'fogo', image: '004.png', evolutions: [5, 6] },
      { id: 5, name: 'Charmeleon', type: 'fogo', image: '005.png', evolutions: [6] },
      { id: 6, name: 'Charizard', type: 'fogo', image: '006.png', evolutions: [] },
      { id: 7, name: 'Squirtle', type: 'agua', image: '007.png', evolutions: [8,9] },
      { id: 8, name: 'Wartortle', type: 'agua', image: '008.png', evolutions: [9] },
      { id: 9, name: 'Blastoise', type: 'agua', image: '009.png', evolutions: [] },
      { id: 10, name: 'Caterpie', type: 'inseto', image: '010.png', evolutions: [11,12] },
      { id: 11, name: 'Metapod', type: 'inseto', image: '011.png', evolutions: [12] },
      { id: 12, name: 'Butterfree', type: 'inseto', image: '012.png', evolutions: [] },
      { id: 13, name: 'Weedle', type: 'inseto', image: '013.png', evolutions: [14,15] },
      { id: 14, name: 'Kakuna', type: 'inseto', image: '014.png', evolutions: [15] },
      { id: 15, name: 'Beedrill', type: 'inseto', image: '015.png', evolutions: [] },
      { id: 16, name: 'Pidgey', type: 'normal', image: '016.png', evolutions: [17,18] },
      { id: 17, name: 'Pidgeotto', type: 'normal', image: '017.png', evolutions: [18] },
      { id: 18, name: 'Pidgeot', type: 'normal', image: '018.png', evolutions: [] }
    ]
  }),
  methods:{
    displayEvolutionTransition(){
      this.displayEvolution = true;
    },

    hideDisplayEvolution(){
      this.displayEvolution = false;
    },

    analyzePokemon(pokemon){
      if((this.pokemon.id !== pokemon.id) && this.display){
        setTimeout(() => {
          this.analyzePokemon(pokemon);
        }, 1000);
      }
      this.pokemon = pokemon;
      this.display = !this.display;
      this.displayEvolution = !this.displayEvolution;
    },

    beforeEnter(el){
      console.log("Antes da entrada.", el);
    },

    // enter(el, done){
    //   console.log("Durante a entrada.", el);
    //   done();
    // },
    
    enter(el){
      console.log("Durante a entrada.", el);
    },

    afterEnter(el){
      console.log("Após a entrada.", el);
    },

    enterCancelld(el){
      console.log("Entrada cancelada.", el);
    },

    beforeLeave(el){
      console.log("Antes da saída.", el);
    },

    // leave(el,done){
    //   console.log("Saída.", el);
    //   done();
    // },
    
    leave(el){
      console.log("Saída.", el);
    },
    
    afterLeave(el){
      console.log("Depois da saída.", el);
    },

    leaveCancelld(el){
      console.log("Saída cancelada.", el);
    }
  }
}
</script>

<style>
body {
  background-color: #dee3eb;
}
</style>

<style scoped>
@import "~@/assets/css/animations.css";

.pokedex {
  padding: 20px;
  background-color: #ffffff;
  -webkit-box-shadow: 2px 2px 10px rgba(200, 200, 200, 0.77);
  -moz-box-shadow: 2px 2px 10px rgba(200, 200, 200, 0.77);
  box-shadow: 2px 2px 10px rgba(200, 200, 200, 0.77);
  border-radius: 10px;
}

.pokedex-catalogo {
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  width: 98%;
  margin-top: 10px;
}

.cartao-pokemon {
  position: relative;
  margin: 5px;
  width: 150px;
  height: 115px;
  cursor: pointer;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 2px rgba(200, 200, 200, 0.77);
  -moz-box-shadow: 2px 2px 2px rgba(200, 200, 200, 0.77);
  box-shadow: 2px 2px 2px rgba(200, 200, 200, 0.77);
}

.cartao-pokemon h1{
  color:#fff;
  font-size: 14px;
  margin: 5px 0px 0px 5px;
  padding: 0px;
}

.cartao-pokemon span{
  color:#fff;
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  font-size: 12px;
  margin: 10px 0px 0px 5px;
  padding: 5px 10px 5px 10px;
  border-radius: 25px;
}

.cartao-pokemon img {
  max-width:60%;
  max-height:60%;
  float: right;
}

.bg-grama {
  background-color: #2d8f78;
}

.bg-fogo {
  background-color: #e47373
}

.bg-agua {
  background-color: #5a9ed2
}

.bg-inseto {
  background-color: #26d3ab
}

.bg-normal {
  background-color: #cecece
}

.bg-pokebola {
  background-image: url("~@/assets/imgs/pokebola.png");
  background-repeat: no-repeat;
  background-position: bottom right;
}

.palco {
  color: #fff;
  background-color: #333;
  -webkit-box-shadow: 2px 2px 10px rgba(230, 223, 223, 0.77);
  -moz-box-shadow: 2px 2px 10px rgba(230, 223, 223, 0.77);
  box-shadow: 2px 2px 10px rgba(230, 223, 223, 0.77);
  border-radius: 10px;
}

.pokemon {
  display: block;
  text-align: center;
  height: 215px;
}

.detalhes {
  margin: 20px 30px 20px 30px;
}

.evolucoes{
  position: absolute;
  top: 0;
  right: 0;
  height: 70px;
}

.evolucoes img{
  cursor: pointer;
  max-width: 100%;
  max-height: 100%;
}

</style>
