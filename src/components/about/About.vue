<template>
    <section class="about_us" id="about">
        <v-container fluid>
            <v-row align="center" justify="center" class="py-5">
                <v-col cols="10">
                    <v-row align="start" justify="center">
                        <v-col cols="12" md="5">
                            <v-row align="start" justify="center">
                                <v-col cols="12">
                                    <h1 class="font-weight-light display-2 pb-4">
                                        {{ title }}
                                    </h1>
                                    <h3 class="font-weight-light mb-3">
                                        {{ subtitle }}
                                    </h3>
                                </v-col>
                            </v-row>
                            <v-row align="start" justify="center">
                                <v-col cols="12">
                                    <h2 class="font-weight-medium pb-4">
                                        Unit Sizes
                                    </h2>
                                    <v-simple-table align="start">
                                        <template v-slot:default>
                                            <thead style="border-color: white!important;">
                                                <tr>
                                                    <th class="text-left">
                                                        <h2 class="font-weight-medium">
                                                            5 FT
                                                        </h2>
                                                    </th>
                                                    <th class="text-left">
                                                        <h2 class="font-weight-medium">
                                                            10 FT
                                                        </h2>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        5x5
                                                        <br/>
                                                        5x10
                                                        <br/> 
                                                        5x20
                                                    </td>
                                                    <td>
                                                        10x10
                                                        <br/>
                                                        10x15
                                                        <br/>
                                                        10x20 
                                                        <br/>
                                                        10x25 
                                                        <br/> 
                                                        10x30
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="7" class="d-none d-md-flex">
              
                            <v-carousel hide-delimiters>
                                <v-carousel-item
                                    v-for="(item,i) in items"
                                    :key="i"
                                    :src="item.src"
                                    cover
                                ></v-carousel-item>
                                
                            </v-carousel>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>


export default {
    name: "About",
    data() {
        return{
            title: "About",
            subtitle: "A family-owned self-storage facility in the heart of East Haven, just minutes from the Connecticut",
            units: [
                {
                    title: "We offer three different 5 foot sizes",
                    sizes: [
                        "5x5",
                        "5x10",
                        "5x20"
                    ]
                },
                {
                    title: "We offer five different 10 foot sizes",
                    sizes: [
                        "10x10",
                        "10x15",
                        "10x20",
                        "10x25",
                        "10x30"
                    ]
                }
            ],
            items: [
                {
                    src: require("@/assets/img/about/unit_one.jpg")
                },
                {
                    src: require("@/assets/img/about/unit_two.jpg")
                },
                {
                    src: require("@/assets/img/about/unit_three.jpg")
                },
                {
                    src: require("@/assets/img/about/unit_four.jpg")
                }
            ]
            
        }
    }
}
</script>

<style scoped>
#about{
    padding-top: 150px;
}
.about_us .v-data-table{
    background-color: transparent;
}
.about_us .v-data-table tbody{
    vertical-align: top;
}
.about_us .v-data-table tbody tr:hover{
    background-color: transparent!important;
}
</style>