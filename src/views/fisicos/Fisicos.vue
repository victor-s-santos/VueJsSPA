<template>
    <div>
        <FisicosLista />
        <router-view></router-view>
        <router-view name="fisico-detalhes"></router-view>
    </div>
</template>

<script>
import FisicosLista from './../../components/fisicos/FisicosLista'

export default {
    components: {
        FisicosLista,
    }
}
</script>