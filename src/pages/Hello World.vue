<template>
  <Layout>
    <h1>HEllo hello</h1>
    <ul v-for ="(description, index) in myDescriptionList" :key="index">
      <ListComponent :myMagicNumber="index" :description="description"></ListComponent>
    </ul>
    <ul>
      <li>test 1</li>
      <li>test 2</li>
    </ul>
  </Layout>
</template>

<script>
import ListComponent from "@/components/ListComponent";
export default {
  components: {
    ListComponent
  },
  data() {
      return {
          myDescriptionList: ["hello", "whaddup", "im a list"]
      }
  },
};
</script>

<style scoped></style>
