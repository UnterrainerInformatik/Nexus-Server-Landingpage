<template>
  <v-container>
    <div v-for="(item, i) in mnu" :key="i">
      <v-list nav shaped class="ma-0 pa-0">
        <v-list-item v-if="item.link === 'SPACER'"> </v-list-item>
        <div v-if="item.link !== 'SPACER'">
          <v-tooltip top :open-delay="openDelay" :disabled="!tooltips">
            <template v-slot:activator="{ on, attrs }">
              <v-list-item class="accent elevation-4" v-bind="attrs" v-on="on">
                <v-list-item-content>
                  <v-list-item-title class="title">
                    {{ $t(item.key) }}
                    <v-icon style="float: right">{{ item.icon }}</v-icon>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <div v-html="$t('tooltip.' + item.key)"></div>
          </v-tooltip>
        </div>

        <div v-for="(subItem, j) in item.subs" :key="j">
          <v-list-item v-if="subItem.link === 'SPACER'"> </v-list-item>
          <v-tooltip
            v-if="subItem.link !== 'SPACER'"
            top
            :open-delay="openDelay"
            :disabled="!tooltips"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item
                :to="subItem.link"
                @click="setDrawerVisible({ val: false, time: 0 })"
                dense
                v-bind="attrs"
                v-on="on"
              >
                <v-list-item-icon>
                  <v-icon v-bind="attrs" v-on="on">{{ subItem.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ $t(subItem.key) }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <div v-html="$t('tooltip.' + subItem.key)"></div>
          </v-tooltip>
        </div>
      </v-list>
    </div>
  </v-container>
</template>

<script lang="js">
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NavDrawer',

  data: () => ({
    mnu: [
      {
        icon: 'house',
        key: 'mnu.main',
        subs: [
          {
            link: '/app/main',
            icon: 'home',
            key: 'pageTitle.main'
          }
        ]
      }
    ]
  }),

  computed: {
    ...mapGetters('gui/tooltips', {
      tooltips: 'tooltips',
      openDelay: 'openDelay'
    })
  },

  methods: {
    ...mapActions('gui', {
      setDrawerVisible: 'drawerVisible'
    })
  }
}
</script>
