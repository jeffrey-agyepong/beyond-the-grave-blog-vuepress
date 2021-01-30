<template>
  <div v-if="$themeConfig.authors">
    <span v-for="author in $themeConfig.authors" :key="author.name">
      <div class="d-flex align-items-center">
        <a class="profile-avatar ">
          <img
            v-if="author.name === $frontmatter.author"
            :src="$withBase(author.avatar)"
            class="avatar-image"
            :alt="author.name"
          />
        </a>
        <div v-if="author.name === $frontmatter.author" class="mg-c">
          <span>{{ author.name }}</span> &nbsp;
          <NavLink
            v-if="author.name === $frontmatter.author"
            :link="author.link"
            class="btn btn-sm btn-outline-dark"
            >{{ author.linktext }}</NavLink
          >
        </div>
      </div>
    </span>
  </div>
</template>

<style lang="stylus" scoped>
.mg-c
  margin: auto
  text-align: center
</style>
