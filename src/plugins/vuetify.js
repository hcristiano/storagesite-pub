import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#119DA4",
                secondary: "#171b34",
                accent: "3D87E4",
                title: "#B71C1C",
                contact: "#D32F2F",
                dark: "#263238",
                main_theme: "#424b58"
            }
        }
    }
});
