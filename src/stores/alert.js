import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
// import { i18n } from 'vue-i18n';

export const useAlertStore = defineStore('alerts', () => {

  const message = ref('')
  const alertType = ref('alert') //warning
  const dialog = ref(false)
  const okLoading = ref(false)
  const onOk = ref(() => {})

  function showAlert(msg) {
    alertType.value = 'alert'
    message.value = msg
    dialog.value = true
    onOk.value = () => {}
    okLoading.value = false
  }
  function showWarning(msg = '', onOkCallback = (close, setLoading) => {}) {
    alertType.value = 'warning'
    message.value = msg
    onOk.value = onOkCallback
    dialog.value = true
    okLoading.value = false
  }

  return {
    dialog,
    message,
    alertType,
    okLoading,

    showAlert,
    showWarning,
    onOk,
  }
})
