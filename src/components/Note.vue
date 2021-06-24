<template>
  <div class="task bg-notblack mb-2 w-full" @click="viewNote">
    <div
      class="task-header flex items-center justify-between border-b-2"
      :class="`border-${note.accent}-300`"
    >
      <div class="title p-2 text-gray-100">{{ note.title }}</div>
    </div>
    <div class="task-body p-2 py-4 text-gray-100">
      {{ note.note }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      deleting: false,
      docId: null,
    };
  },
  methods: {
    viewNote() {
      this.$router.push({ name: "ViewNote", params: { id: this.docId } });
    },
    handleMenuToggle() {
      this.$refs.menuBtn.classList.toggle("show-pop");
    },
  },
  mounted() {
    const docId = this.note.id;
    this.docId = docId;
  },
};
</script>

<style lang="scss">
.task {
  // margin-bottom: 1rem;

  .task-header {
    .title {
      font-weight: 600;
    }

    .menu {
      svg,
      path {
        pointer-events: none;
      }
      .pop-menu {
        display: none;
        right: 10px;
        top: 90%;
        width: max-content;
        height: max-content;
      }

      &.show-pop {
        .pop-menu {
          display: block;
        }
      }
    }
  }
}
</style>