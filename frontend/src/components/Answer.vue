<template>
  <div class="single-answer">
    <p class="text-muted">
      <strong>{{ answer.author }}</strong> &#8901; {{ answer.created_at }}
    </p>
    <p>{{ answer.body }}</p>
    <div v-if="isAnswerAuthor">
      <router-link
        :to="{ name: 'AnswerEditor', params: { id: answer.id } }"
        class="btn btn-sm btn-outline-secondary mr-1"
      >
        Edit
      </router-link>
      <button @click="triggerDelete" class="btn btn-sm btn-outline-danger">
        Delete
      </button>
    </div>
    <div v-else>
      <button
        @click="toggleLike"
        class="btn btn-sm"
        :class="{
          'btn-danger': userLikedAnswer,
          'btn-outline-danger': !userLikedAnswer
        }"
      >
        <strong>Like {{ likesCounter }}</strong>
      </button>
    </div>
    <hr />
  </div>
</template>

<script>
import { apiService } from "@/common/api.service.js";
export default {
  name: "Answer",
  props: {
    answer: {
      type: Object,
      required: true
    },
    requestUser: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      userLikedAnswer: this.answer.user_has_voted,
      likesCounter: this.answer.likes_count
    };
  },
  computed: {
    isAnswerAuthor() {
      return this.answer.author === this.requestUser;
    }
  },
  methods: {
    triggerDelete() {
      this.$emit("delete-answer", this.answer);
    },
    toggleLike() {
      this.userLikedAnswer === false ? this.likeAnswer() : this.unlikeAnswer();
    },
    likeAnswer() {
      this.userLikedAnswer = true;
      this.likesCounter += 1;
      let endpoint = `/api/answers/${this.answer.id}/like/`;
      apiService(endpoint, "POST");
    },
    unlikeAnswer() {
      this.userLikedAnswer = false;
      this.likesCounter -= 1;
      let endpoint = `/api/answers/${this.answer.id}/like/`;
      apiService(endpoint, "DELETE");
    }
  }
};
</script>

<style lang="css" scoped></style>
