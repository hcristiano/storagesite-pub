<template>
    <div>
        <div v-if="form_submitted">
            <v-row justify="center">
                <v-col cols="12" sm="8">
                    <h2>Thank you!</h2>
                    <h4 class="pt-2 font-weight-regular">
                        Your message has been received.
                    </h4>
                    <a @click="submitAnotherMessage" class="contact--text">
                        <h4 class="mt-3 font-weight-light" >
                            <v-icon class="ml-2 contact--text" color="red-darken-2">mdi-arrow-left</v-icon>
                            <span>Submit another message</span>
                        </h4>
                    </a>
                </v-col>
            </v-row>
        </div>
        <div v-else>
            <form ref="form" :lazy-validation="form_rules.lazy" class="v-form"  @submit.prevent="sendEmail">
                <v-text-field 
                    v-model="form.name" 
                    :rules="form_rules.nameRules" 
                    label="Name" 
                    required></v-text-field>

                <v-text-field 
                    v-model="form.email" 
                    :rules="form_rules.emailRules" 
                    label="Email" 
                    required></v-text-field>

                <v-textarea 
                    v-model="form.textArea" 
                    :rules="form_rules.textAreaRules" 
                    label="Message" 
                    required />

                <v-btn 
                    :disabled="!form_rules.valid" 
                    color="primary" 
                    :dark="form_rules.valid" 
                    rounded 
                    block 
                    class="mt-3"
                    @click="sendEmail">
                    Submit
                </v-btn>
            </form>
        </div>
    </div>
</template>

<script>
// import {db} from '@/main'

import emailjs from 'emailjs-com';
export default {
    name: "ContactForm",
    data(){
        return{
            form_submitted: true,
            form_error: "",
            form_rules: {
                valid: true,
                nameRules: [
                    (v) => !!v || "Name is required.",
                    (v) => (v && v.length >= 6) || "Name needs 3 or more characters",
                ],
                emailRules: [
                    (v) => !!v || "Email is required.",
                    (v) => /.+@.+\..+/.test(v) || "Provide a valid email.",
                ],
                textAreaRules: [
                    (v) => !!v || "Message is required.",
                    (v) => (v && v.length >= 10) || "Minimum of 10 characters",
                ],
                lazy: false
            },
            form: {
                name: "",
                email: "",
                textArea: ""
            }
        }
    },
    methods: {
        sendEmail() {
            this.form_rules.valid = false
            // emailjs.sendForm('service_fv9mrxy', 'template_ry6uunk', this.$refs.form, '5p8iv01bqkGxlDmom')
            //     .then((result) => {
            //         this.form_rules.valid = true
            //         this.form_submitted = true
            //     },
            //     (error) => {
            //         this.form_rules.valid = true
            //         console.log(this.$refs.form)
            //         console.log('FAILED...', error.text);
            //     });

        },
        submitAnotherMessage(){
            this.form_submitted = false
            this.form_rules.valid = true
            this.form_error = ""
            this.form = {
                name: "",
                email: "",
                textArea: ""
            }
        }
    }
};
</script>
<style scoped>
a:hover{
    text-decoration: underline;
}
</style>