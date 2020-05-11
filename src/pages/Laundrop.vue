<template>
  <layout :style="image" class="color">
    <g-image class="object-cover h-2/3" src="~/assets/images/happy_moutain.jpg"></g-image>
    <h1 class="test">Infectio n Prevention from Corona Virus</h1>
    <!-- <g-image alt="Wash your hand" src="~/coronovirus.png" class="picture" /> -->

    <ul v-for="(description, index) in descriptionList" :key="index">
      <CovidComponent :description="description"></CovidComponent>
    </ul>
  </layout>
</template>

<script>
import CovidComponent from "@/components/CovidComponent";
export default {
  components: {
    CovidComponent
  },
  data() {
    return {
      descriptionList: [
        "Wash your hands frequently ",
        "Maintain social distancing",
        "Avoid touching eyes, nose and mouth",
        "Practice respiratory hygiene",
        "Stay home if you are sick."
      ],
      // image: { backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/9/96/3D_medical_animation_coronavirus_structure.jpg)" } *Please use the g-imaage (component, see documentation @ gridomse doc site)
    };
  }
};
</script>

<style scoped>
.color {
  background-repeat: no-repeat;
  background-size: contain;
}

.test {
  /* text-align: center;
  padding-top: 50%; */
}
.picture {
  width: 50%;
  height: 50%;
  padding-left: 25%;
}
</style>
