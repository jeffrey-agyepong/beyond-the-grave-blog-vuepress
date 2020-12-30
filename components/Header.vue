<template>
  <section id="header-wrapper">
    <header id="header">
      <div class="header-wrapper">
        <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
          <NavLink link="/" class="navbar-brand"
            ><!--<img :src="$withBase($themeConfig.logo)" />-->
            {{ $site.title }}
          </NavLink>
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarsExampleDefault" class="collapse navbar-collapse">
              <ul v-if="$themeConfig.nav" class="navbar-nav ml-auto">
                <ejs-dropdownbutton :items="items">Bands</ejs-dropdownbutton>
                <ejs-dropdownbutton :items="items2">Albums</ejs-dropdownbutton>
                <li
                  v-for="item in $themeConfig.nav"
                  :key="item.text"
                  class="nav-item"
                >
                  <NavLink :link="item.link" class="nav-link">{{
                    item.text
                  }}</NavLink>
                </li>

                <SearchBox />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </section>
</template>

<script>
import Vue from 'vue'
import { DropDownButtonPlugin } from '@syncfusion/ej2-vue-splitbuttons'
import { enableRipple } from '@syncfusion/ej2-base'
import SearchBox from '@SearchBox'

enableRipple(true)
Vue.use(DropDownButtonPlugin)
export default {
  components: { SearchBox },
  data() {
    return {
      items: [
        {
          text: 'Introducing',
          url: '/tag/Introducing/',
        },
        {
          text: 'Bands Spotlight',
          url: '/tag/Introducing/',
        },
      ],
      items2: [
        {
          text: 'New Releases',
          url: '/tag/New_Releases/',
        },
        {
          text: 'Bands Spotlight',
          url: '/tag/Introducing/',
        },
      ],
    }
  },
}
</script>

<style lang="stylus">
@import '~@app/style/config'
// border-bottom 5px solid lighten(#3eaf7c, 50%)
.header-wrapper
  .title
    /* flex 0 0 200px */
    font-size 30px
    margin 0
    letter-spacing 2px
    display block
    text-transform uppercase

    a
      color $darkTextColor
      font-weight bold
      text-decoration none

  .header-right-wrap
    flex 1
    display flex
    justify-content flex-end
    align-items center

    .nav
      flex 0 0 auto
      display flex
      margin 0

      .nav-item
        margin-left 20px

        a
          text-decoration none
          transition color 0.3s

    .search-box
      margin-left 10px

      input
        border-radius 5px
        transition all 0.5s
        border 1px solid #cecece

        &:hover
          border 1px solid $accentColor
          box-shadow 0 0 5px $accentColor

      .suggestions
        border 1px solid $darkBorderColor
        top 40px
        right 0

        a
          color $darkTextColor
          text-decoration none

          &.focused
            color $accentColor
@media (max-width: $MQMobile)
  #header
    display none

  .header-wrapper
    flex-direction column

    .header-right-wrap
      display none
@import '../node_modules/@syncfusion/ej2-base/styles/material.css'
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css'
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css'
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css'
</style>
