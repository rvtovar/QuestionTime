<template>
  <div class="single-answer">
    <p class="text-muted">
      <strong>{{ answer.author }}</strong> &#8901; {{ answer.created_at }}
    </p>
    <p>{{ answer.body }}</p>
    <div v-if="isAnswerAuthor">
      <button class="btn btn-sm btn-outline-secondary">Edit</button>
      <button @click="triggerDelete" class="btn btn-sm btn-outline-danger">Delete</button>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'Answer',
  props: {
    answer: {
      type: Object,
      required: true,
    },
    requestUser: {
      type: String,
      required: true,
    },
  },
  computed: {
    isAnswerAuthor() {
      return this.answer.author === this.requestUser;
    },
  },
  methods: {
    triggerDelete() {
      this.$emit('delete-answer', this.answer);
    },
  },
};
</script>

<style lang="css" scoped></style>
