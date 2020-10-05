import {
	createRouter,
	createWebHistory
} from 'vue-router';
import Home from '../views/Home.vue';
import Question from '../views/Question.vue'
import QuestionEditor from '../views/QuestionEditor.vue'

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/question/:slug',
		name: 'Question',
		component: Question,
		props: true
	},
	{
		path: '/ask',
		name: 'QuestionEditor',
		component: QuestionEditor,
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;