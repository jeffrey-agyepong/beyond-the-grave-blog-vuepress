<template>
  <div id="mobile-header">
    <div class="mobile-header-bar">
      <div class="mobile-header-title">
        <NavLink link="/" class="mobile-home-link navbar-brand"
          ><!--<img :src="$withBase($themeConfig.logo)" />-->
          {{ $site.title }}
        </NavLink>
        <component
          :is="isOpen ? 'XIcon' : 'MenuIcon'"
          @click="$emit('toggle-sidebar')"
        />
      </div>
      <div class="mobile-menu-wrapper" :class="{ open: isOpen }">
        <hr class="menu-divider" />
        <ul v-if="$themeConfig.nav" class="mobile-nav">
          <!--<li :items="items" class="mobile-nav-item">
            <NavLink :link="items.url">{{ items.text }}</NavLink>
          </li>-->
          <!--<li :items="items2" class="mobile-nav-item">
            <NavLink :link="items2.url">{{ items2.text }}</NavLink>
          </li>
          <li :items="items3" class="mobile-nav-item">
            <NavLink :link="items3.url">{{ items3.text }}</NavLink>
          </li>
          <li :items="items4" class="mobile-nav-item">
            <NavLink :link="items4.url">{{ items4.text }}</NavLink>
          </li>-->
          <li
            v-for="item in $themeConfig.nav"
            :key="item.text"
            class="mobile-nav-item"
          >
            <NavLink :link="item.link">{{ item.text }}</NavLink>
          </li>
          <!--<li class="mobile-nav-item">
            <Feed />
          </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { MenuIcon, XIcon } from 'vue-feather-icons'
import Feed from './Feed'
export default {
  components: {
    MenuIcon,
    XIcon,
    Feed,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      items: {
        text: 'Introducing',
        url: '/tag/Introducing/',
      },
      items2: {
        text: 'Bands Spotlight',
        url: '/tag/Bands Spotlight/',
      },

      items3: {
        text: 'New Releases',
        url: '/tag/New Releases/',
      },
      items4: {
        text: 'Album Spotlight',
        url: '/tag/Album Spotlight/',
      },
    }
  },
}
</script>

<style lang="stylus">
.mobile-header-bar
  z-index 12
  position fixed
  top 0
  width 100vw
  box-sizing border-box
  background-color $headerBgColor
  margin auto
  box-shadow 0 5px 20px rgba(0, 0, 0, 0.03), 0 6px 6px rgba(0, 0, 0, 0.05)
  transition all 1s cubic-bezier(0.25, 0.8, 0.25, 1)

#mobile-header
  .mobile-header-title
    display flex
    align-items center
    justify-content space-between
    padding 1.2em

    .mobile-home-link
      text-decoration none
      color #f8f9fa

.mobile-nav-item
  font-family serif
  font-size 20px
  padding 10px 0
  list-style none
  border-radius 25px
  text-align center
  width 250px
  margin auto

  a
    text-decoration none
    color #f8f9fa

.menu-divider
  margin 0

.mobile-menu-wrapper
  max-height 0
  overflow hidden
  transition 0.3s ease
  background-color $headerBgColor

.mobile-menu-wrapper.open
  max-height 500px
  transition 0.3s ease

@media (min-width: $MQMobile)
  #mobile-header
    display none
</style>
