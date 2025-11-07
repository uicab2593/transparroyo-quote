<script setup>
  import { ref } from 'vue'
  import EssentialLink from 'components/EssentialLink.vue'
  import AlertPopup from 'components/AlertPopup.vue'

  const linksList = [
    {
      title: 'Cotizador',
      icon: 'forum',
      to: '/quoter'
    },
  ]

  const leftDrawerOpen = ref(false)

  function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }
</script>


<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-avatar>
          <img src="https://cloud-1de12d.b-cdn.net/media/original/07fe3c422f7dc7d69f8aed2546ed0207/50oJVo0QnZKMpKP34qJ7MG1ZkrSqsRMLSo7bszRj.jpg" style="max-width: 100px;">
        </q-avatar>
        <q-toolbar-title>
          Transp Arroyo Tours Cotizador
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

<!--     <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header style="text-align: center;">
          <img src="https://cloud-1de12d.b-cdn.net/media/original/07fe3c422f7dc7d69f8aed2546ed0207/50oJVo0QnZKMpKP34qJ7MG1ZkrSqsRMLSo7bszRj.jpg" style="max-width: 100px;">
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
 -->
    <q-page-container>
      <div class="q-pa-md">
        <router-view />
      </div>
      <AlertPopup />
    </q-page-container>
  </q-layout>
</template>
