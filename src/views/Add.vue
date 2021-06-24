<template>
  <div class="add-edit">
    <div class="header flex items-center px-2 pt-4">
      <span class="back-btn p-2 cursor-pointer" @click="$router.go(-1)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          viewBox="0 0 24 24"
          width="16px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
          <path
            d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"
          />
        </svg>
      </span>
      <h2 class="px-2 font-medium text-gray-600">Add new note</h2>
    </div>

    <form @submit.prevent="addNote" class="px-2 pt-6">
      <div class="input-wrapper mb-2">
        <input
          type="text"
          name="title"
          placeholder="Title"
          class="
            p-2
            w-full
            focus:outline-none
            focus:ring
            focus:border-red-300
            text-gray-800
          "
          v-model="title"
        />
      </div>
      <div class="input-wrapper">
        <textarea
          name="note"
          cols="30"
          rows="10"
          v-model="note"
          class="
            p-2
            w-full
            resize-none
            focus:outline-none
            focus:ring
            focus:border-gray-300
            text-gray-800
            mb-2
          "
          placeholder="Write your idea here..."
        ></textarea>
      </div>

      <div class="accents my-4 flex justify-around">
        <label
          for="green"
          class="block relative w-8 h-8 bg-green-400 border-4"
          :class="accent === 'green' ? 'border-white' : 'border-transparent'"
        >
          <input
            type="radio"
            name="green"
            value="green"
            v-model="accent"
            class="opacity-0 absolute left-0 top-0 h-full w-full"
          />
        </label>
        <label
          for="red"
          class="block relative w-8 h-8 bg-red-400 border-4"
          :class="accent === 'red' ? 'border-white' : 'border-transparent'"
        >
          <input
            type="radio"
            name="red"
            value="red"
            v-model="accent"
            class="opacity-0 absolute left-0 top-0 h-full w-full"
          />
        </label>
        <label
          for="yellow"
          class="block relative w-8 h-8 bg-yellow-400 border-4"
          :class="accent === 'yellow' ? 'border-white' : 'border-transparent'"
        >
          <input
            type="radio"
            name="yellow"
            value="yellow"
            v-model="accent"
            class="opacity-0 absolute left-0 top-0 h-full w-full"
          />
        </label>
        <label
          for="blue"
          class="block relative w-8 h-8 bg-blue-400 border-4"
          :class="accent === 'blue' ? 'border-white' : 'border-transparent'"
        >
          <input
            type="radio"
            name="blue"
            value="blue"
            v-model="accent"
            class="opacity-0 absolute left-0 top-0 h-full w-full"
          />
        </label>
        <label
          for="purple"
          class="block relative w-8 h-8 bg-purple-400 border-4"
          :class="accent === 'purple' ? 'border-white' : 'border-transparent'"
        >
          <input
            type="radio"
            name="purple"
            value="purple"
            v-model="accent"
            class="opacity-0 absolute left-0 top-0 h-full w-full"
          />
        </label>
      </div>
      <template v-if="loading">
        <div class="w-full text-center">
          <Loader />
        </div>
      </template>
      <template v-else>
        <button class="w-full bg-primary-400 p-2 mt-4">Save</button>
      </template>

      <div class="error-msg text-red-400 text-sm text-center p-2">
        {{ errorMsg }}
      </div>
    </form>
  </div>
</template>

<script>
import { db, timestamp } from "../firebase";
import Loader from "../components/Loader.vue";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      accent: "green",
      title: "",
      note: "",
      errorMsg: "",
      loading: false,
    };
  },
  methods: {
    validateForm() {
      if (!this.title && !this.note) {
        this.errorMsg = "Cannot save an empty note!";
        return false;
      }
      return true;
    },
    addNote() {
      let valid = this.validateForm();
      if (valid) {
        const formData = {
          accent: this.accent,
          title: this.title,
          note: this.note,
          timestamp: timestamp(),
        };

        this.loading = true;
        // setTimeout(() => {
        //   this.loading = false;
        //   console.log(formData);
        //   this.resetForm();
        // }, 3000);

        db.collection("notes")
          .doc()
          .set(formData)
          .then(() => {
            this.loading = false;
            this.resetForm();
            this.$router.push({ name: "Home" });
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    },
    resetForm() {
      this.accent = "green";
      this.title = "";
      this.note = "";
    },
  },

  mounted() {
    const accentArray = ["green", "red", "yellow", "blue", "purple"];
    let colorIndex = Math.floor(Math.random() * 5);
    this.accent = accentArray[colorIndex];
  },
};
</script>

<style>
</style>