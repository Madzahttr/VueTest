<template>
    <div class="container">
        <h1>{{message}}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: " "
        };
    }
};
//window.backend.basic().then(result => {
    //self.message = result;
//});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    margin-top: 2em;
    position: relative;
    min-height: 5rem;
    width: 100%;
}
</style>