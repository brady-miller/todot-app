<template>
  <div class="home">
    <!-- Header -->
    <home-header url="/register">
      <template v-slot:title>Manage your daily workload like a pro</template>
      <template v-slot:subtitle>TodoT is a simple, innovative todo management app 
      designed to help you manage a backlog of important tasks.</template>
      <template v-slot:button>Sign Up</template>
    </home-header>

    <!-- Columns -->
    <home-columns>
      <!-- Left Column -->
      <template v-slot:title-left>Lessen your workload</template>
      <template v-slot:content-left>With TodoT, you can organize your work into segments, and complete them as needed.</template>

      <!-- Middle Column -->
      <template v-slot:title-middle>Organize your tasks</template>
      <template v-slot:content-middle>TodoT allows you to sort your todos by priority, allowing you to find what is important.</template>

      <!-- Right Column -->
      <template v-slot:title-right>Stay on track</template>
      <template v-slot:content-right>Set different due dates for your todos, and you will never miss another deadline again.</template>
    </home-columns>

    <!-- Call To Action -->
    <home-cta url="/register">
      <template v-slot:cta-title>Ready to get started?</template>
      <template v-slot:cta-helper>Click the button below to sign up.</template>
      <template v-slot:cta-button>Sign Up</template>
    </home-cta>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeHeader from '@/components/layout/HomeHeader.vue'; // @ is an alias to /src
import HomeColumns from '@/components/layout/HomeColumns.vue';
import HomeCta from '@/components/layout/HomeCTA.vue';

@Component({
  components: {
    HomeHeader,
    HomeColumns,
    HomeCta,
  },
})
export default class Home extends Vue {}
</script>
