<template>
    <main>
        <h1>404</h1>
        <p>Page not found</p>
    </main>
</template>
<script>
export default {
    name: 'NotFoundView',
}
</script>
<style>
main {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

h1 {
    color: rgba(32, 180, 137, 1);
    font-size: 10rem;
    margin: 0;
}

p {
    color: rgba(118, 118, 118, 1);
    font-size: 2rem;
    margin: 0;
}
</style>