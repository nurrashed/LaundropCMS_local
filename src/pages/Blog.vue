<template>
  <Layout>
    <div class="container mx-auto grid w-full gap-2 pt-8">
      <div v-for="blog in $static.allBlog.edges" :key="blog.id" class="w-full shadow border border-gray-100 p-4 flex flex-col justify-between">
        <div class="h-full">
          <h4 class="text-2xl font-bold text'-gray-800">{{ blog.node.title }}</h4>
          <g-image :src="blog.node.thumbnail" class="pt-4"></g-image>
          <p>{{ blog.node.intro }}</p>
        </div>
        <g-link class="mt-4 block text-center py-2 rounded px-4 bg-primary text-white hover:bg-white hover:text-primary" :to="blog.node.path">SE MER</g-link>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<static-query>
query {
  allBlog {
    edges {
      node {
        id
        title
        intro
        thumbnail
        date
        path
      }
    }
  }
}

</static-query>
<style lang="css" scoped></style>
