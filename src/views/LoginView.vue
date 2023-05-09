
<template >
    <main class="login">
        <section>
            <h1>RATE-IT</h1>

            <h2>
                Random meme for you
            </h2>

            <meme></meme>
            <!-- TODO INSER RANDOM MEME -->
        </section>

        <aside>

            <h2>Sign in</h2>
            <form @submit.prevent method="post">
                <input type="text" placeholder="username">

                <input type="password" placeholder="password" name="pw" id="pw">

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <RouterLink class="link" to="/register">Create Acount</RouterLink>
            </p>

        </aside>

    </main>
</template>
<script>
import { RouterLink } from 'vue-router';
import Meme from '../modules/Meme/components/Meme.vue';
export default {
    name: 'LoginView',
    components: {
    RouterLink,
    Meme
}

}
</script>