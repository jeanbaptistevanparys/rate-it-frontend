
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

            <h2>Sign up</h2>
            <form action="@submit.prevent" method="post">
                <input type="text" placeholder="username">

                <input type="email" name="email" id="email" placeholder="E-mail">

                <input type="password" placeholder="password" name="pw" id="pw">
                <input type="password" placeholder="repeat password" name="repw" id="repw">

                <button type="submit">Register</button>
            </form>
            <p>Already have an acount?  <RouterLink class="link" to="/Login">Sign in</RouterLink> </p>

        </aside>

    </main>
</template>
<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'RegisterView',
    components: {
        RouterLink
    }
}
</script>