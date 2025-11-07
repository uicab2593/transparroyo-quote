<script setup>
  import { ref, onMounted } from 'vue'
  import { useAlertStore } from 'src/stores/alert';

  const alertStore = useAlertStore();
  // const okLoading = ref(false)

  function onOk(){
    if(alertStore.alertType == 'warning'){
      alertStore.onOk()
    }else{
      alertStore.dialog = false
    }
  }

</script>

<template>
   <q-dialog v-model="alertStore.dialog" >
      <q-card>
        <q-card-section class="row items-center">
          <!-- <q-avatar icon="signal_wifi_off" color="primary" text-color="white" /> -->
          <span class="q-ml-sm">{{alertStore.message || '¿Confirma que deseas continuar?'}}</span>
        </q-card-section>

        <q-card-actions :align="alertStore.alertType == 'warning' ? 'between' : 'right'">
          <q-btn v-if="alertStore.alertType == 'warning'" flat label="Cerrar" color="black" v-close-popup />
          <q-btn flat label="Continuar" color="primary" @click="onOk" :loading="alertStore.okLoading"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>
