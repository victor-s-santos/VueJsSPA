<template>
    <div>
        <h3 class="font-weight-light">Físicos</h3>
        <ul class="list-group" v-if="fisicos.length > 0">
            <FisicosListaItem
                class="list-group-item"
                v-for="fisico in fisicos"
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
    methods: {
        voltar(){
            //this.$router.push('/');
            this.$router.go(-1);
        }
    }
}
</script>
