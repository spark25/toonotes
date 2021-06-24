<template>
  <div class="home relative">
    <h2 class="px-2 pt-4 font-medium text-gray-600">All my notes</h2>
    <task-list />

    <div class="btn-add fixed bottom-6 right-6 bg-primary-400 w-10 h-10 rounded-full flex items-center justify-center shadow-xl cursor-pointer" @click="addNew">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#ffff"
      >
        <g><rect fill="none" height="24" width="24" /></g>
        <g>
          <g><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" /></g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import TaskList from "./TaskList.vue";
export default {
  components: { TaskList },
  methods:{
    addNew(){
      this.$router.push({name: 'Note'})
    }
  }
};
</script>

<style>
</style>