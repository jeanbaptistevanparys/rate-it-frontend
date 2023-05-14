<template>
    <article class="ratable-form">
        <h3>Create or edit ratable</h3>
        <form v-if="ratable === null" @submit.prevent>
            <div>
                <div>
                    <h4>English</h4>
                    <input v-model="enName" type="text" placeholder="Enter name" required>
                    <textarea v-model="enDiscription" placeholder="Enter description" name="discription" id="" cols="30" rows="10" required>
                    </textarea>
                </div>
                <div>
                    <h4>Nederlands</h4>
                    <input v-model="nlName" type="text" placeholder="Enter name" required>
                    <textarea v-model="nlDiscription" placeholder="Enter description" name="discription" cols="30" rows="10" required>
                    </textarea>
                </div>
            </div>
            <div>
                <input v-on:change="filechange" type="file" >
                <input @click="handelsubmision" type="submit" value="Submit">
            </div>
        </form>
        <form v-else @submit.prevent>
            <div>
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
            </div>
            <div>
                <input v-on:change="filechange" type="file" accept="image/*">
                <input @click="handelsubmision" type="submit" value="Submit">
            </div>
        </form>
    </article>
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
            image: null
        }
    },
    async mounted() {
        if (this.ratableid) {
            this.ratable = await this.service.getRatable(this.topicid, this.ratableid);
            this.image = this.ratable.image;
        }
    },
    methods: {
        async handelsubmision() {
            if (this.ratableid) {
                const formdata = this.toFormdata(
                    this.ratable.ratable_language[0].language == 'en' ? this.ratable.ratable_language[0].name : this.ratable.ratable_language[1].name,
                    this.ratable.ratable_language[0].language == 'en' ? this.ratable.ratable_language[0].description : this.ratable.ratable_language[1].description,
                    this.ratable.ratable_language[1].language == 'en' ? this.ratable.ratable_language[0].name : this.ratable.ratable_language[1].name,
                    this.ratable.ratable_language[1].language == 'en' ? this.ratable.ratable_language[0].description : this.ratable.ratable_language[1].description,
                );
                const response = await this.service.updateRatable(this.topicid, this.ratableid, formdata);
                console.log(formdata)
                console.log(response)

            } else {
                const formdata = this.toFormdata(
                    this.enName,
                    this.enDiscription,
                    this.nlName,
                    this.nlDiscription,
                );
                const response = await this.service.createRatable(this.topicid, formdata);
                console.log(formdata.image)
                console.log(response)
            }
            this.$router.push({ name: 'topic', params: { id: this.topicid } });
        },
        filechange(e) {
            const reader = new FileReader();
            const files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                return;
            }

            reader.onload = (event) => {
                this.image = event.target.result;
            };

            reader.readAsDataURL(files[0]);
        },
        toFormdata(name, discription, name2, discription2) {
            const formData = {
                translations: [
                    {
                        language: 'en',
                        name: name,
                        description: discription,
                    },
                    {
                        language: 'nl',
                        name: name2,
                        description: discription2,
                    }
                ],
                image: this.image
            }
            return formData;
        }

    },
}
</script>