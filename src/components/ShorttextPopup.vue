<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useQuoteStore } from 'stores/quote'

  const quoteStore = useQuoteStore()
  const dialog = defineModel()
  const emit = defineEmits(['onSave'])

  function onSave(txt){
    dialog.value = false
    emit('onSave',txt)
  }

</script>

<template>
  <q-dialog v-model="dialog">
    <q-card style="width: 900px; max-width: 80vw;">
      <q-card-section>
        <p class="text-h4 q-mb-none">Textos</p>
      </q-card-section>
      <q-separator />
      <q-card-section style="max-height: 50vh" class="scroll">
        <table style="width:100%">
          <tr v-for="(txt,i) in quoteStore.txts">
            <td style="width: 90%;">
              <q-input type="textarea" class="inline-block" style="width: 100%;" value="" dense outlined v-model="txt.value"/>
            </td>
            <td style="width: 10%;">
                <q-btn
                    class="no-print"
                    style="margin-bottom: 5px; margin-right: 5px;"
                    dense
                    color="red"
                    icon="delete"
                    @click="quoteStore.txts.splice(i,1)"
                />
                <q-btn
                    class="no-print"
                    style="margin-bottom: 5px;"
                    dense
                    color="green"
                    icon="check"
                    @click="() => onSave(txt.value)"
                />
            </td>
          </tr>
        </table>
        <q-btn
            dense
            color="green"
            icon="add"
            @click="quoteStore.txts.push({value:''})"
        />
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="Cerrar" v-close-popup />
        <q-btn flat label="Agregar" color="primary" @click="onSave" v-close-popup/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
