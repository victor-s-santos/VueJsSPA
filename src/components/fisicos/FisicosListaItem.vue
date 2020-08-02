<template>
    <li>
        <span>{{ fisico.nome }}</span>
        <button class="btn btn-info btn-sm float-right">Detalhes</button>
    </li>
</template>
<script>
export default {
    props: {
        fisico: {
            type: Object,
            required: true,
        }
    }
}
</script>