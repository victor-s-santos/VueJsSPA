<template>
    <li>
        <span>{{ fisico.nome }}</span>
        <router-link 
        :to="{name: 'fisico', params: {id: fisico.id }}"
        class="btn btn-info btn-sm float-right">
        Detalhes</router-link>
    </li>
</template>
<script>
export default {
    props: {
        fisico: {
            type: Object,
            required: true,
        }
    },
}
</script>