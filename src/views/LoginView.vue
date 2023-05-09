
<template >
    <main class="login">
        <section>
            <h1>RATE-IT</h1>

            <h2>
                Random meme for you
            </h2>

            <img src="https://i.imgflip.com/4/30b1gx.jpg" alt="meme" width="500" height="500">
            <!-- TODO INSER RANDOM MEME -->
        </section>

        <aside>

            <h2>Sign in</h2>
            <form @submit.prevent method="post">
                <input type="text" placeholder="username">

                <input type="password" placeholder="password" name="pw" id="pw">

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <RouterLink class="link" to="/Register">Create Acount</RouterLink> </p>

        </aside>

    </main>
</template>
<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'LoginView',
    components: {
        RouterLink
    }
}
</script>