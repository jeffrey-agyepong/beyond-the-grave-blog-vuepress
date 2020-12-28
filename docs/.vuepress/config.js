module.exports = {
  title: 'BEYOND THE GRAVE',
  publicPath: 'https://beyondthegrave.netlify.app/',
  description: 'Christian Metal/Hardcore Online Ministry',
  logo: './assets/img/logo.png',
  plugins:{
    'seo':{    siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => 'summary_large_image',
      type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    }
  },
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Jeffrey Agyepong',
      avatar: '/assets/img/jeff.jpg',
      link: 'https://linktr.ee/jeffrey_a',
      linktext: 'Follow',
      },
      {
        name: 'Gabriel Mesones',
        avatar: '/assets/img/avatar.png',
        link: 'https://www.instagram.com/gorship777/',
        linktext: 'Follow',
      },
	    {
        name: 'Nick Ptak',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
	    {
        name: 'Jeremy Prince',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
	    {
        name: 'Ton Ringenier',
        avatar: '/assets/img/avatar.png',
        link: 'https://web.facebook.com/ChristianmetalHorde/',
        linktext: 'Follow',
      },
	    {
        name: 'Zachary Tyler Van Dyke',
        avatar: '/assets/img/avatar.png',
        link: 'https://www.youtube.com/channel/UCPtHnXMx7APZGv91ItLaLEw',
        linktext: 'Follow',
      },
	    {
        name: 'Hezekiah Rose',
        avatar: '/assets/img/avatar.png',
        link: 'https://www.instagram.com/hezekiahrose001/',
        linktext: 'Follow',
      },
	  {
        name: 'Christianmetalreviewer777',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
	  {
        name: 'Erik Morgan',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      }
	  
    ],
    footer: {
      contact: [
        {
          type: 'facebook',
          link: 'https://web.facebook.com/Beyondthegrave777',
        },

        {
          type: 'instagram',
          link: 'https://www.instagram.com/beyond_the_grave777/',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/Beyond_grave777',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'Copyright Beyond The Grave 2021',
          link: 'https://bootstrapstarter.com/license/',
        },
        {
          text: 'Made with Mediumish - free Vuepress theme',
          link: 'https://bootstrapstarter.com/bootstrap-templates/vuepress-theme-mediumish/',
        },
      ],
    },

    sitemap: {
      hostname: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    },
    feed: {
      canonical_base: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/',
    },
    smoothScroll: true
  },
}
