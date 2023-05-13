<template>
    <h3>Create or edit of create ratable</h3>
    <form v-if="ratable === null" @submit.prevent>
        <div>
            <h4>English</h4>
            <input v-model="enName" type="text" placeholder="Enter name" required>
            <textarea v-model="enDiscription" name="discription" id="" cols="30" rows="10" required>
            </textarea>
        </div>
        <div>
            <h4>Nederlands</h4>
            <input v-model="nlName" type="text" placeholder="Enter name" required>
            <textarea v-model="nlDiscription" name="discription" cols="30" rows="10" required>
            </textarea>
        </div>
        <input v-on:change="filechange" type="file">
        <input @click="handelsubmision" type="submit" value="Submit">
    </form>
    <form v-else @submit.prevent>
        <div>
            <h4>{{ this.ratable.ratable_language[0].language == 'en' ? 'English' : 'Nederlands' }}</h4>
            <input type="text" v-model="this.ratable.ratable_language[0].name" required>
            <textarea name="discription" v-model="this.ratable.ratable_language[0].description" cols="30" rows="10"
                required>
            </textarea>
        </div>
        <div>
            <h4>{{ this.ratable.ratable_language[1].language == 'en' ? 'English' : 'Nederlands' }}</h4>
            <input type="text" v-model="this.ratable.ratable_language[1].name" required>
            <textarea name="discription" v-model="this.ratable.ratable_language[1].description" cols="30" rows="10"
                required>
            </textarea>
        </div>
        <input @onchange="filechange" type="file">
        <input @click="handelsubmision" type="submit" value="Submit">
    </form>
</template>
<script>
import RatableService from '../services/RatableService';
export default {
    name: 'RatableForm',
    components: {
    },
    props: {
        ratableid: {
            type: Number,
            required: false
        },
        topicid: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            service: new RatableService(),
            ratable: null,
            enName: '',
            enDiscription: '',
            nlName: '',
            nlDiscription: '',
            createFile: null,
            image: null
        }
    },
    async mounted() {
        if (this.ratableid) {
            this.ratable = await this.service.getRatable(this.topicid, this.ratableid);
            console.log(this.ratable)
        }
    },
    methods: {
        async handelsubmision() {
            if (this.ratableid) {
                const formData = {
                    translations: [
                        {
                            language: 'en',
                            name: this.ratable.ratable_language[0].language == 'en' ? this.ratable.ratable_language[0].name : this.ratable.ratable_language[1].name,
                            description: this.ratable.ratable_language[0].language == 'en' ? this.ratable.ratable_language[0].description : this.ratable.ratable_language[1].description
                        },
                        {
                            language: 'nl',
                            name: this.ratable.ratable_language[1].language == 'nl' ? this.ratable.ratable_language[1].name : this.ratable.ratable_language[0].name,
                            description: this.ratable.ratable_language[1].language == 'nl' ? this.ratable.ratable_language[1].description : this.ratable.ratable_language[0].description
                        }
                    ],
                    image: this.ratable.image
                }
                const response = await this.service.updateRatable(this.topicid, this.ratableid, formData);
                console.log(response)

            } else {
                const formData = {
                    translations: [
                        {
                            language: 'en',
                            name: this.enName,
                            description: this.enDiscription
                        },
                        {
                            language: 'nl',
                            name: this.nlName,
                            description: this.nlDiscription
                        }
                    ],
                    image: "this.createFile"
                }
                const response = await this.service.createRatable(this.topicid, formData);
                console.log(response)
            }
            this.$router.push({ name: 'topic', params: { id: this.topicid } });
        },
        onUploadFiles(e) {
            const files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.ratable.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        filechange(e) {
            console.log(e)
            const files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createFile = files[0];
        }
    },
}
</script>