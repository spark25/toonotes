<template>
  <div class="flex items-center justify-center py-20" v-if="!notes">
    <loader />
  </div>

  <div
    class="flex flex-col items-center justify-center py-20 text-gray-700"
    v-else-if="!notes.length"
  >
    <div class="pb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M20 4v12h-1.34l1.91 1.91C21.39 17.66 22 16.9 22 16V4c0-1.1-.9-2-2-2H4.66l2 2H20zM6 12h2v2H6zm12-3h-6.34l2 2H18zm0-3h-8v1.34l.66.66H18zM1.41 1.59L0 3l2.01 2.01L2 22l4-4h9l5.73 5.73 1.41-1.41L1.41 1.59zM5.17 16L4 17.17V7l2 2v2h2l5 5H5.17z"
        />
      </svg>
    </div>
    <p class="text-sm">Nothing to see here...</p>
    <p class="font-medium">Start saving your ideas.</p>
  </div>

  <div class="task-list px-2 py-6" v-else>
    <div v-for="note in notes" :key="note.id">
      <note :note="note" @refresh="getAllNotes" />
    </div>
  </div>
</template>

<script>
import Note from "../components/Note.vue";
import { db } from "../firebase/firebase";
// import axios from "axios";
import Loader from "../components/Loader.vue";

export default {
  components: { Note, Loader },
  data() {
    return {
      notes: null,
    };
  },
  methods: {
    async getAllNotes() {
      const snapshot = await db
        .collection("notes")
        .orderBy("timestamp", "desc")
        .get();
      const allNotes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.notes = allNotes;
    },
  },
  mounted() {
    this.getAllNotes();
  },
};
</script>

<style lang="scss">
.task-list {
}
</style>