import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Question from "../views/Question.vue";
import QuestionEditor from "../views/QuestionEditor.vue";
import AnswerEditor from "../views/AnswerEditor.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/question/:slug",
    name: "Question",
    component: Question,
    props: true
  },
  {
    path: "/ask/:slug?",
    name: "QuestionEditor",
    component: QuestionEditor,
    props: true
  },
  {
    path: "/answer/:id",
    name: "AnswerEditor",
    component: AnswerEditor,
    props: true
  },
  {
    path: "/:pathMatch(.*)",
    name: "not-found",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
