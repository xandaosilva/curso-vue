<template>
    <div class="container">
        <div class="row">
            <div class="col-6 bg-light">
                <span class="fs-4">ENTRADA DE DADOS</span>
                <hr>
                <form @submit.prevent="handleSubmit($event)" @reset.prevent="resetForm()">
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Nome:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy.trim="form.name">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">E-mail:</label>
                        <div class="col">
                            <input type="email" class="form-control" v-model="form.email">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Senha:</label>
                        <div class="col">
                            <input type="password" class="form-control" v-model.trim="form.password">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Idade:</label>
                        <div class="col">
                            <input type="number" class="form-control" v-model.number="form.age">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Gênero:</label>
                        <div class="col">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" v-model="form.gender" value="FEMALE">
                                <label class="form-check-label">Feminino</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" v-model="form.gender" value="MALE">
                                <label class="form-check-label">Masculino</label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Licença:</label>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" v-model="form.license" true-value="YES" false-value="NO">
                                <label class="form-check-label">Li e aceito os termos</label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Interesses:</label>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="form.interests" value="JavaScript">
                                <label class="form-check-label">JavaScript</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="form.interests" value="VueJS">
                                <label class="form-check-label">VueJS</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="form.interests" value="Angular">
                                <label class="form-check-label">Angular</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="form.interests" value="NodeJS">
                                <label class="form-check-label">NodeJS</label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Telefone:</label>
                        <div class="col">
                            <!-- <input type="tel" class="form-control" pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"> -->
                            <input type="text" class="form-control" v-model="form.telephone" v-maska="'(##) #####-####'">
                            <small class="text-muted">Formato: 11 97777-5555</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cep:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cep" v-maska="'#####-###'">
                            <small class="text-muted">Formato: 00000-000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">RG:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.rg" v-maska="'#*-X'">
                            <small class="text-muted">Formato: Sem padrão</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cpf:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cpf" v-maska="'###.###.###-##'">
                            <small class="text-muted">Formato: 000.000.000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cnpj:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cnpj" v-maska="'##.###.###/####-##'">
                            <small class="text-muted">Formato: 00.000.000/0000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cartão de crédito:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.creditCard" v-maska="'#### #### #### ####'">
                            <small class="text-muted">Formato: 0000 0000 0000 0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa de veículo:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.vehiclePlate" v-maska="'AAA-####'">
                            <small class="text-muted">Formato: AAA-0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa de veículo Mercosul:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.vehiclePlateMercosul" v-maska="'AAA#A##'">
                            <small class="text-muted">Formato: AAA0A00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data:</label>
                        <div class="col">
                            <input type="date" class="form-control" v-model="form.date">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data/hora local:</label>
                        <div class="col">
                            <input type="datetime-local" class="form-control" v-model="form.dateLocal">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Mês:</label>
                        <div class="col">
                            <input type="month" class="form-control" v-model="form.month">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Semana:</label>
                        <div class="col">
                            <input type="week" class="form-control" v-model="form.week">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Hora:</label>
                        <div class="col">
                            <input type="time" class="form-control" v-model="form.hour">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cor:</label>
                        <div class="col">
                            <input type="color" class="form-color" v-model="form.color">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Valor limite:</label>
                        <div class="col">
                            <input type="range" class="form-range" min="0" max="100" step="1" v-model="form.range">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Escondido:</label>
                        <div class="col">
                            <input type="hidden" class="form-control" v-model="form.hidden">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Upload:</label>
                        <div class="col">
                            <input type="file" class="form-control" multiple @change="selectFiles($event)">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Descrição:</label>
                        <div class="col">
                            <textarea class="form-control" rows="3" v-model="form.description"></textarea>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cursos:</label>
                        <div class="col">
                            <select class="form-select" v-model="form.course">
                                <option value="" disabled>Selecione um curso</option>
                                <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.course }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Avaliação:</label>
                        <div class="col">
                            <!-- <InputStars :numberStars="5" @toAssess="form.assessment = $event" /> -->
                            <InputStars :numberStars="5" v-model:toAssess="form.assessment" />
                        </div>
                    </div>
                    <hr>
                    <div class="mb-3 row">
                        <div class="col d-flex justify-content-between">
                            <button class="btn btn-secondary" type="button" @click="resetForm()">Limpar (btn)</button>
                            <button class="btn btn-secondary" type="reset">Limpar</button>
                            <button class="btn btn-success" type="button" @click="newHandleSubmit($event)">Enviar (btn)</button>
                            <button class="btn btn-success" type="submit">Enviar (submit)</button>
                        </div>                        
                    </div>
                </form>
            </div>
            <div class="col-6 text-white bg-secondary" :style="'background-color:'+form.color+'!important'">
                <span class="fs-4">ESTADO DO OBJETO</span>
                <hr>
                <div class="mb-5 row">
                    <span>Estado do objeto</span>
                </div>
                <span class="fs-4">SAÍDA DE DADOS</span>
                <hr>
                <div class="mb-3 row">
                    <span>Nome: {{ form.name }}</span>
                </div>
                <div class="mb-3 row">
                    <span>E-mail: {{ form.email }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Senha: {{ form.password }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Idade: {{ form.age }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Gênero: {{ form.gender }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Licença: {{ form.license }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Interesses:</span>
                    <ul>
                        <li v-for="(interest, index) in form.interests" :key="index">{{ interest }}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Telefone: {{ form.telephone }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cep: {{ form.cep }}</span>
                </div>
                <div class="mb-3 row">
                    <span>RG: {{ form.rg }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cpf: {{ form.cpf }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cnpj: {{ form.cnpj }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cartão de crédito: {{ form.creditCard }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Placa de veículo: {{ form.vehiclePlate }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Placa de veículo Mercosul: {{ form.vehiclePlateMercosul }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data: {{ form.date }} | {{ $moment(form.date).format("DD/MM/YYYY") }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data/hora local: {{ form.dateLocal }}</span>
                    <ul>
                        <li>{{ $moment(form.dateLocal).format("dddd") }}</li>
                        <li>{{ $moment(form.dateLocal).add(3, "days").format("LL") }}</li>
                        <li>{{ $moment(form.dateLocal).add(1, "month").format("LL") }}</li>
                        <li>{{ $moment(form.dateLocal).add(2, "years").format("LL") }}</li>
                        <li>{{ $moment(form.dateLocal).subtract(3, "days").format("LL") }}</li>
                        <li>{{ $moment(form.dateLocal).subtract(1, "month").format("LL") }}</li>
                        <li>{{ $moment(form.dateLocal).subtract(2, "years").format("LL") }}</li>
                        <li>{{ $moment(form.dateLocal).format("LLLL") }}</li>
                        <li>{{ $moment(form.dateLocal).add(15, "days").format("LLLL") }}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Mês: {{ form.month }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Semana: {{ form. week}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Hora: {{ form.hour }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cor: {{ form.color }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Valor limite: {{ form.range }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Escondido: {{ form.hidden }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Upload:</span>
                    <ul>
                        <li v-for="(file, index) in form.files" :key="index">{{ file.name }}</li>
                    </ul>
                </div>  
                <div class="mb-3 row">
                    <span>Descrição:</span>
                    <!-- <div style="white-space: pre">{{ form.description }}</div> -->
                    <pre>{{ form.description }}</pre>
                </div>
                <div class="mb-3 row">
                    <span>Curso: {{ form.course }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Avaliação: {{ form.assessment }} estrelas</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import InputStars from '@/components/InputStars.vue';

    export default {
        name: 'Formulario',
        components:{
            InputStars
        },
        data: () =>({
            courses:[
                { id: 1, course: "Bancos de dados relacionais" },
                { id: 2, course: "Desenvolvimento web Avançado com Vue" },
                { id: 3, course: "Desenvolvimento web Avançado com Laravel" },
                { id: 4, course: "Curso Completo de Desenvolvedor NodeJs e MongoDB" }
            ],
            form: {},
            formInitialState: {
                name: "",
                email: "",
                password: "",
                age: "",
                license: "NO",
                interests: [],
                gender: "",
                telephone: "",
                cep: "",
                cpf: "",
                cnpj: "",
                creditCard: "",
                vehiclePlate: "",
                vehiclePlateMercosul: "",
                rg: "",
                date: "",
                dateLocal: "",
                month: "",
                week: "",
                hour: "",
                color: "#6c757d",
                range: 5,
                hidden: "Input invisível",
                files: {},
                description: "",
                course: "",
                assessment: 0
            }
        }),
        created(){
            this.resetForm();
        },
        methods: {
            selectFiles(event){
                this.form.files = event.target.files;
            },
            handleSubmit(event){
                console.log(event);
                const formSent = Object.assign({}, this.form);
                console.log(formSent);
            },
            newHandleSubmit(event){
                console.log(event);
                const formSent = Object.assign({}, this.form);
                console.log(formSent);
            },
            resetForm(){
                this.form = Object.assign({}, this.formInitialState);
            }
        }
    }
</script>

<style scoped>
    li{
        list-style: none;
    }
</style>
