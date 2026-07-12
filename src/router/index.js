import { createRouter, createWebHistory } from 'vue-router'
import SymposiumPage from "@/views/SymposiumPage.vue";
import OrganizationPage from "@/views/OrganizationPage.vue";
import FeePage from "@/views/FeePage.vue";
import HotelPage from "@/views/HotelPage.vue";
import ProgramPage from '@/views/ProgramPage.vue';
import PresentationSubmissionPage from '@/views/PresentationSubmissionPage.vue';
import PresentationPage from '@/views/PresentationPage.vue';
import ContactPage from '@/views/ContactPage.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SymposiumPage',
      component: SymposiumPage
    },
    {
      path: '/commitees',
      name: 'OrganizationPage',
      component: OrganizationPage
    },
    {
      path: '/programme',
      name: 'ProgramPage',
      component: ProgramPage
    },
    {
      path: '/presentation-submission',
      name: 'PresentationSubmissionPage',
      component: PresentationSubmissionPage
    },
    {
      path: '/registration',
      name: 'FeePage',
      component: FeePage
    },
    {
      path: '/presentation',
      name: 'PresentationPage',
      component: PresentationPage
    },
    {
      path: '/accommodation',
      name: 'HotelPage',
      component: HotelPage
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    },
    {
      path: '/payment/result',
      name: 'PaymentResult',
      component: () => import('@/views/PaymentResult.vue')
    }
  ],
})

export default router
