<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> -->

  <section class="vh-100 gradient-custom-2">
    <div class="container py-5 h-100">
      <div class="row flex justify-center items-center h-100">
        <div class="col-md-12 col-xl-10">
          <div class="card mask-custom">
            <div class="card-body p-4 text-white">
              <div class="text-center pt-3 pb-2">
                <img :src="checkImageUrl" alt="Check" width="60" />
                <h2 class="my-4">Task List</h2>
              </div>
              <table
                class="table flex justify-center items-center text-white mb-0"
              >
                <thead>
                  <tr>
                    <th scope="col">Team Member</th>
                    <th scope="col">Task</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(task, index) in tasks"
                    :key="index"
                    class="fw-normal"
                  >
                    <th class="items-center">
                      <img
                        :src="task.avatar"
                        :alt="'avatar ' + (index + 1)"
                        style="width: 45px; height: auto"
                      />
                      <span class="ms-2">{{ task.member }}</span>
                    </th>
                    <td class="items-center">
                      <span>{{ task.task }}</span>
                    </td>
                    <td class="items-center">
                      <h6 class="mb-0">
                        <span
                          :class="{
                            'badge bg-danger': task.priority === 'High',
                            'badge bg-warning': task.priority === 'Middle',
                            'badge bg-success': task.priority === 'Low',
                          }"
                          >{{ task.priority }} priority</span
                        >
                      </h6>
                    </td>
                    <td class="items-center">
                      <a href="#!" data-mdb-toggle="tooltip" title="Done"
                        ><i class="fas fa-check fa-lg text-success me-3"></i
                      ></a>
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove"
                        ><i class="fas fa-trash-alt fa-lg text-warning"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <RouterView /> -->
</template>

<script>
export default {
  data() {
    return {
      checkImageUrl:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp",
      tasks: [
        {
          member: "Alice Mayer",
          avatar:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
          task: "Call Sam For payments",
          priority: "High",
        },
        {
          member: "Kate Moss",
          avatar:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
          task: "Make payment to Bluedart",
          priority: "Low",
        },
        {
          member: "Danny McChain",
          avatar:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
          task: "Office rent",
          priority: "Middle",
        },
        {
          member: "Alexa Chung",
          avatar:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp",
          task: "Office grocery shopping",
          priority: "High",
        },
        {
          member: "Ben Smith",
          avatar:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
          task: "Ask for Lunch to Clients",
          priority: "Low",
        },
      ],
    };
  },
};
</script>

<style scoped>
.gradient-custom-2 {
  background: #7e40f6;
  background: -webkit-linear-gradient(
    to right,
    rgba(126, 64, 246, 1),
    rgba(80, 139, 252, 1)
  );
  background: linear-gradient(
    to right,
    rgba(126, 64, 246, 1),
    rgba(80, 139, 252, 1)
  );
}

.mask-custom {
  background: rgba(24, 24, 16, 0.2);
  border-radius: 2em;
  backdrop-filter: blur(25px);
  border: 2px solid rgba(255, 255, 255, 0.05);
  background-clip: padding-box;
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
}
</style>
