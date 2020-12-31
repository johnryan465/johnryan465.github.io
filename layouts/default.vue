<template>
  <v-app id="inspire">
    <nav-bar></nav-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row class="wrapper">
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <Nuxt></Nuxt>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <footer-component></footer-component>
  </v-app>
</template>
