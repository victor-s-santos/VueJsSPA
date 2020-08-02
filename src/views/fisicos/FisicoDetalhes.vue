<template>
    <div>
        <h3 class="font-weight-light">Detalhes sobre o Físico de id: {{$route.params.id}}</h3>
        <router-link :to="`/fisicos/${id}/editar`"
        class="btn btn-primary">Editar</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
    beforeRouteUpdate(to, from, next){
        this.id = to.params.id
        next()
    },
    created(){
        console.log(`Parâmetros da rota: ${this.$route.params}`)
    }
}
</script>