<template>
  <v-app-bar app dense color=var(--colour-2)>
    <v-app-bar-title>johnryan.tech
      <v-icon medium>
        mdi-android-studio
      </v-icon>
    </v-app-bar-title>

    <v-spacer></v-spacer>
    
    <div v-if="$vuetify.breakpoint.mobile">
      <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="link in links" :key="link[0]">
          <v-btn :key="link[0]" :to="link[1]" text>
            {{ link[0] }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>
    <div v-else>
        <v-btn v-for="link in links" :key="link[0]" :to="link[1]" text>
          {{ link[0] }}
        </v-btn>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script lang="ts">
  import Vue from "vue"
  import { mapMutations } from 'vuex'

  export default Vue.extend({
    data: () => ({
      links: [
        ['Home', '/'],
        ['About', '/about'],
        ['Posts', '/posts'],
        ['Projects', '/projects'],
      ],
    }),
  })
</script>