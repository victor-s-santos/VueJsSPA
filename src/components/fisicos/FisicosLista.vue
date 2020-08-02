<template>
    <div>
        <h3 class="font-weight-light">Físicos</h3>
        <div class="form-group">
            <input
                type="search"
                class="form-control"
                placeholder="Buscar Físicos"
                @keyup.enter="buscar"
                >
        </div>


        <ul class="list-group" v-if="fisicosFiltrados.length > 0">
            <FisicosListaItem
                class="list-group-item"
                v-for="fisico in fisicosFiltrados"
                :key="fisico.id"
                :fisico="fisico"/>

        </ul>
        <p v-else>Nenhum fisico cadastrado!</p>
        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
    </div>
</template>

<script>
import FisicosListaItem from './FisicosListaItem.vue'

export default {
    components: {
        FisicosListaItem
    },

    data(){
        return{
            fisicos: [
                {id:1, nome: 'Albert Einstein', email: 'albert@einstein.com'},
                {id:2, nome: 'Nicola Tesla', email: 'tesla@tesla.com'},
                {id:3, nome: 'Stephen Hawking', email: 'stephen@hawking.com'},
            ]
        }
    },
    computed:{
        fisicosFiltrados(){
            const busca = this.$route.query.busca
            return !busca
                ? this.fisicos
                : this.fisicos.filter(f => f.nome.toLowerCase().includes(busca.toLowerCase()))
        }

    },
    methods: {
        voltar(){
            //this.$router.push('/');
            this.$router.go(-1);
        },
        buscar(event){
            this.$router.push({
                path: "/fisicos",
                query: {busca: event.target.value}
            })
        }
    }
}
</script>
