<template>
  <footer>
    <div class="center">
      <a href="https://www.buymeacoffee.com/beyondthegrave"
        ><img
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=beyondthegrave&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
      /></a>

      <hr />
      <div class="footer-col s12 m4 footer_links  font">
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
    <div class="center">
      <a href="privacy-policy.html" target="_blank" rel="noopener noreferrer"
        >Privacy Policy</a
      >
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
