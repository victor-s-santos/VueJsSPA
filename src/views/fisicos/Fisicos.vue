<template>
    <div>
        <FisicosLista />
        <router-view></router-view>
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