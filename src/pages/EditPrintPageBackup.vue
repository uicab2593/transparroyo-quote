<script setup>
  import { ref, onMounted, computed } from 'vue'

  const noCot = ref(1)
  const ced = ref('')
  const direccion = ref('')
  const telefono = ref('')
  const email = ref('')
  const cliente = ref('')
  const clienteCed = ref('')
  const clienteDireccion = ref('')
  const clienteTelefono = ref('')
  const clienteEmail = ref('')
</script>

<template>
  <q-card style="max-width:1000px;margin: 0 auto;" class="q-pa-sm">
    <q-card-section>
      <p class="text-h4 text-center">Cotizacion</p>
      <br>
      <br>
      <div class="row">
        <div class="col-6"><p>Fecha de cotizacion:</p></div>
        <div class="col-6 text-right"><p>{{new Date()}}</p></div>
        <div class="col-6"><p>No Cotización:</p></div>
        <div class="col-6 text-right"><p>#12121</p></div>
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <div class="row q-col-gutter-sm">
            <div class="col-12"><p class="text-h6">Transp Arroyo Tours CR</p></div>
            <div class="col-6"><p>CED:</p></div>
            <div class="col-6"><q-input dense outlined v-model="ced" /></div>
            <div class="col-6"><p>Direccion:</p></div>
            <div class="col-6"><q-input dense outlined v-model="direccion" /></div>
            <div class="col-6"><p>Telefono:</p></div>
            <div class="col-6"><q-input dense outlined v-model="telefono" /></div>
            <div class="col-6"><p>E-mail:</p></div>
            <div class="col-6"><q-input dense outlined v-model="email" /></div>
          </div>
        </div>
        <div class="col-6">
          <div class="row q-col-gutter-sm">
            <div class="col-6"><p class="text-h6">Cliente:</p></div>
            <div class="col-6"><q-input dense outlined v-model="cliente" /></div>
            <div class="col-6"><p>CED:</p></div>
            <div class="col-6"><q-input dense outlined v-model="clienteCed" /></div>
            <div class="col-6"><p>Direccion:</p></div>
            <div class="col-6"><q-input dense outlined v-model="clienteDireccion" /></div>
            <div class="col-6"><p>Telefono:</p></div>
            <div class="col-6"><q-input dense outlined v-model="clienteTelefono" /></div>
            <div class="col-6"><p>E-mail:</p></div>
            <div class="col-6"><q-input dense outlined v-model="clienteEmail" /></div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
