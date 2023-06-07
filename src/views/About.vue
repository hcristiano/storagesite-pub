<template>
    <v-app>

        <navigation :color="color" :flat="flat" />
        <v-main class="pt-0">
            <about />
        </v-main>
        <foote />
    </v-app>
  </template>
  
 
  
  <script>
        import navigation from "../components/Navigation";
        import foote from "../components/Footer";
        import about from "../components/about/About";
  
        export default {
            name: "AboutSection",

            components: {
                navigation,
                foote,
                about
            },

            data: () => ({
                fab: null,
                color: "main_theme",
                flat: false,
            }),

            created() {
          
            },

            watch: {
                
            },

            methods: {
               
            },
        };
  </script>
<style scoped>
.v-main {
    background-image: url("~@/assets/img/bgMain.png");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}
</style>