<template>
    <div>
        <h3 class="font-weight-light">Físicos</h3>
        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        voltar(){
            //this.$router.push('/');
            this.$router.go(-1);
        }
    }
}
</script>