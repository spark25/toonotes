<template>
  <div class="add-edit">
    <template v-if="!note">
      <div class="flex items-center justify-center py-20" v-if="!notes">
        <loader />
      </div>
    </template>
    <template v-else>
      <div class="header flex items-center justify-between px-2 pt-4">
        <div class="flex items-center relative">
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
          <h2 class="px-2 font-medium text-gray-600">{{ note.title }}</h2>

          <div class="absolute -right-10" v-if="deleting">
            <Working />
          </div>
        </div>

        <div
          class="flex items-center justify-center p-1 cursor-pointer"
          @click="deleteNote"
        >
          <span class="text-gray-400"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#141414"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
              /></svg
          ></span>
        </div>
      </div>
      <div class="note-content p-2">
        <div
          class="note-text text-gray-600 p-4 h-full"
          :class="`bg-${note.accent}-300`"
        >
          {{ note.note }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Loader from "../components/Loader.vue";
import Working from "../components/WorkingLoader.vue";
import { db } from "../firebase";
export default {
  components: {
    Loader,
    Working,
  },
  data() {
    return {
      docId: null,
      note: null,
      deleting: false,
    };
  },
  methods: {
    getNote(_id) {
      console.log(_id);
      var docRef = db.collection("notes").doc(_id);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.note = {
              id: doc.id,
              ...doc.data(),
            };
            // console.log("Document data:", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },

    deleteNote() {
      if (this.deleting) return;
      this.deleting = true;
      const docId = this.docId;
      db.collection("notes")
        .doc(docId)
        .delete()
        .then(() => {
          this.deleting = false;
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
  },

  mounted() {
    let docId = this.$route.params.id;
    this.docId = docId;
    this.getNote(docId);
  },
};
</script>

<style lang="scss">
.note-content {
  .note-text {
    min-height: 200px;
    height: 100%;
  }
}
</style>