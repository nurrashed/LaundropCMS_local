<template>
  <Layout>
    <div class="container mx-auto grid grid-cols-3 gap-2">
      <div v-for="blog in $static.allBlog.edges" :key="blog.id" class="w-full h-64 shadow border border-gray-100 p-4 flex flex-col justify-between">
        <div>
          <h4 class="text-2xl font-bold">{{ blog.node.title }}</h4>
          <p v-html="blog.node.content"></p>
        </div>
        <g-link class="mt-4 block text-center py-2 rounded px-4 bg-primary text-white" :to="blog.node.path">SE MER</g-link>
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
        content
        thumbnail
        date
        path
      }
    }
  }
}

</static-query>
<style lang="css" scoped></style>
