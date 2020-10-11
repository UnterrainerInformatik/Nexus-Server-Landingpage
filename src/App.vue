<template>
  <div id="main">
    <v-app>
      <v-main>
        <modalLoading></modalLoading>
        <snackbar></snackbar>
        <v-container fluid>
          <router-view>Loading...</router-view>
        </v-container>
      </v-main>
    </v-app>
    <input type="hidden" id="hiddenCopyField" />
  </div>
</template>

<script lang="js">
import { mapGetters, mapActions } from 'vuex'
import NavDrawer from '@/components/NavDrawer.vue'
import AppBarMenu from '@/components/AppBarMenu.vue'
import Snackbar from '@/components/Snackbar.vue'
import ModalLoading from '@/components/ModalLoading.vue'

export default {
  name: 'Main',

  components: {
    ModalLoading,
    Snackbar
  },

  data: () => ({
    windowSize: {
      x: 0,
      y: 0
    },
    localeBackingField: ''
  }),

  computed: {
    locale: {
      get () {
        return this.$i18n.locale
      },
      set (value) {
        this.localeBackingField = value
      }
    },
    ...mapGetters({
      lastMdAndUp: 'lastMdAndUp'
    }),
    ...mapGetters('gui/tooltips', {
      tooltips: 'tooltips',
      openDelay: 'openDelay'
    })
  },

  methods: {
    getShowCondition () {
      return this.$route.name && this.$route.name !== 'landingpage'
    },
    goto (destination) {
      if (this.$router.currentRoute.path !== destination) {
        this.$router.push(destination)
      }
    },
    ...mapActions('gui', {
      toggleDrawerVisible: 'toggleDrawerVisible'
    })
  }

}
</script>

<style lang="scss" scoped>
@import 'styles/index.scss';

.v-app {
  min-height: 100vh;
  max-height: 100vh;
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

.v-navigation-drawer {
  width: $nav_menu_width;
  max-width: calc(100vw - #{$nav_menu_width});
}

.nav-drawer-white {
  color: white;
}
</style>
