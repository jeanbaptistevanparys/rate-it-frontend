
<template >
    <main class="login">
        <section>
            <h1>RATE-IT</h1>

            <h2>
                Random meme for you
            </h2>

            <meme></meme>
        </section>

        <aside>

            <h2>Sign up</h2>
            <form @submit.prevent method="post">
                <input type="text" placeholder="username" v-model="username">

                <input type="email" name="email" id="email" placeholder="E-mail" v-model="email">

                <input type="password" placeholder="password" name="pw" id="pw" v-model="password">

                <button @click="register" type="submit">Register</button>
            </form>
            <p>Already have an acount?  <RouterLink class="link" to="/login">Sign in</RouterLink> </p>

        </aside>

    </main>
</template>
<script>
import { RouterLink, useRouter } from 'vue-router'
import AuthService from '../modules/Auth/services/AuthService';
import Meme from '../modules/Meme/components/Meme.vue';
export default {
    name: 'RegisterView',
    components: {
        RouterLink,
        Meme
    },
    data() {
        return {
            "service": new AuthService(),
            router: new useRouter(),
        }
    },
    methods: {
        async register() {
           const res = await this.service.register(this.username, this.email, this.password)
            if (!res) {
                alert("the fields are not entered correctly try again please")
            }else{
                this.$router.push({ name: 'login' })
            }
        }
    },
}
</script>