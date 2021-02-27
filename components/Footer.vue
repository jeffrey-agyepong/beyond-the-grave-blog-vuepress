<template>
  <footer>
    <div class="center">
      <div class="footer-col s12 m4 footer_links  font">
        <!--<div>
          <a href="https://web.facebook.com/Beyondthegrave777">Facebook</a>
        </div>
        <div>
          <a href="https://www.instagram.com/beyond_the_grave777/">Instagram</a>
        </div>
        <div>
          <img
            src="docs\.vuepress\public\assets\favicons\apple-icon-57x57.png"
            alt=""
          /><a
            href="https://www.youtube.com/channel/UCCXafO-fbIZnTHNoRlx2QWg?view_as=subscriber"
            >Youtube</a
          >
        </div>-->

        <li
          v-for="item in contact"
          :key="item.iconComponent"
          class="contact-item"
        >
          <NavLink :link="item.link">
            <component :is="item.iconComponent"></component>
            {{ item.text }}
          </NavLink>
        </li>
      </div>
    </div>
    <hr />
    <div class="footer-col s12 m4 footer_links">
      <div class="center">
        Developed by
        <a href="https://conciseweb.netlify.app/"> Concise Web Designs</a>
      </div>
      <div class="center">
        Licensed by <a href="https://bootstrapstarter.com/license/"> MIT</a>
      </div>
      <div class="center">
        <a
          href="https://bootstrapstarter.com/bootstrap-templates/vuepress-theme-mediumish/"
          >Made with Mediumish - Vuepress theme</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
import {
  CodepenIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  PhoneIcon,
  TwitterIcon,
} from 'vue-feather-icons'

export default {
  components: {
    CodepenIcon,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    GlobeIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    MessageSquareIcon,
    PhoneIcon,
    TwitterIcon,
  },

  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },
  },

  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case 'facebook':
          return 'FacebookIcon'
          break
        case 'instagram':
          return 'InstagramIcon'
          break
        case 'twitter':
          return 'TwitterIcon'
          break
      }
    },
  },
}
</script>

<style lang="stylus">
footer
  padding 20px
  background #312f2f
.footer_links
    display grid
    grid-template-columns: 1fr 1fr 1fr
.font
    font-size 20px
.center
    text-align center
    list-style: none
</style>
