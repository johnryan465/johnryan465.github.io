<template>
  <v-app id="inspire">
    <nav-bar></nav-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
             <Nuxt></Nuxt>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <footer-component></footer-component>
  </v-app>
</template>


<style>
/* main.css */
:root {
    --colour-1: #05668D;
    --colour-2: #4987ce;
    --colour-3: #FFC09F;
    --colour-4: #FFEE93;
    --colour-5: #Ef271B;
    --colour-6: #35495e;
    --colour-7: #526488;
    --white: #FFF;
    --green: #3b8070;
}


html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid var(--green);
  color: var(--green);
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: var(--white);
  background-color: var(--green);
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid var(--colour-6);
  color: var(--colour-6);
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: var(--white);
  background-color: var(--colour-6);
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: var(--colour-6);
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: var(--colour-7);
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
