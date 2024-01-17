<script>
export default {
  name: "SectionTeam",
  data() {
    return {
      cardTeam: [
        {
          image: "src/assets/team1.png",
          name: "Don Woods",
          label: "Administrator",
        },

        {
          image: "src/assets/team2.png",
          name: "Tomas Nash",
          label: "2d Animator & Compositor",
        },

        {
          image: "src/assets/team2.png",
          name: "Hector Vargas",
          label: "Project Lead & Senior Animator",
        },

        {
          image: "src/assets/team4.png",
          name: "Robert Coleman",
          label: "Owner & Creative Director",
        },
      ],
    };
  },
};
</script>

<template>
  <section>
    <div class="team">
      <div class="containe-fluid">
        <div class="row text-center elementclient">
          <div class="col-12">
            <h5>Anidio Magic Team Member</h5>
            <h1>Let Us Animate Your Project</h1>
            <p>
              We create new worlds!Let’s collaborate and create engaging,
              effective, award-winning animations
            </p>
          </div>
          <div class="row text-center my-4">
            <div
              class="col-12 col-md-6 col-lg-4 col-xl-3"
              v-for="(card, i) in cardTeam"
              :key="i"
            >
              <div class="team-iesimo">
                <img :src="card.image" alt="" />
                <div class="my-3">
                  <strong>
                    {{ card.name }}
                  </strong>
                </div>
                <p>
                  {{ card.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.team {
  @include contain;

  h1 {
    color: $darkPurple;
  }
  h5 {
    color: blue;
  }
  .team-iesimo {
    background-color: #fff5f0;
  }
}
</style>
