<script setup>
  import { ref, onMounted, computed } from 'vue'
  function onSubmit(){
  }

  const precioKm = ref(100)
  const devaluoMovil = ref(0)
  const pagoChofer = ref(0)
  const montoGira = ref(0)
  const viaticos = ref(0)
  const tipoCambio = ref(500)
  const peajes = ref(0)

  const kms = ref(10)
  const detalleViaje = ref('')
  const viajeVuelta = ref(false)
  // const gira = ref(false)
  const diasGira = ref(0)
  const iva = ref(true)
  const porcentajeDescuento = ref(0)

  const subtotalGira = computed(() => montoGira.value * diasGira.value)
  const subtotalViaje = computed(() => precioKm.value * kms.value * (viajeVuelta.value ? 1.75 : 1))
  const subtotalOtros = computed(() => pagoChofer.value + viaticos.value + peajes.value + devaluoMovil.value)
  const subtotal = computed(() => subtotalGira.value + subtotalViaje.value + subtotalOtros.value)
  const subtotalIva = computed(() => parseFloat((subtotal.value * (iva.value ? .13 : 0)).toFixed(2)))
  const descuento = computed(() => parseFloat(((subtotal.value + subtotalIva.value) * porcentajeDescuento.value/100).toFixed(2)))
  const total = computed(() => subtotal.value + subtotalIva.value - descuento.value)
  const totalUsd = computed(() => total.value / tipoCambio.value)
</script>

<template>
    <h3>Cotizador</h3>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="col-2">
        <q-card-section>
          <div class="q-col-gutter-y-sm">
            <q-input v-model.number="precioKm" type="number" input-class="text-right" label="Precio por km" outlined required/>
            <q-input v-model.number="devaluoMovil" label="Devaluo de la movil" outlined type="number" input-class="text-right" required/>
            <q-input v-model.number="pagoChofer" label="Pago Chofer" outlined type="number" input-class="text-right" required/>
            <q-input v-model.number="montoGira" label="Monto Gira" outlined type="number" input-class="text-right" required/>
            <q-input v-model.number="viaticos" label="Viaticos" outlined type="number" input-class="text-right" required/>
            <q-input v-model.number="tipoCambio" label="Tipo de cambio" outlined type="number" input-class="text-right" required/>
            <q-input v-model.number="peajes" label="Peajes" outlined type="number" input-class="text-right" required/>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="col-3">
        <q-card-section>
          <div class="q-col-gutter-y-sm">
            <div class="column">
              <div class="col row q-col-gutter-x-sm">
                <q-input v-model.number="kms" class="col-3" label="Km's" outlined type="number" required/>
                <q-input v-model="detalleViaje" class="col" label="Detalle viaje" outlined type="text" required/>
              </div>
              <!-- <q-checkbox label="Viaje de ida" /> -->
              <q-checkbox v-model="viajeVuelta" label="Viaje de vuelta" />
              <!-- <q-checkbox v-model="gira" label="Gira" /> -->
              <q-input v-model.number="diasGira" label="Dias gira" outlined type="number" required/>
              <q-checkbox v-model="iva" label="IVA" />
              <q-input v-model.number="porcentajeDescuento" label="Descuento %" outlined type="number" input-class="text-right" required/>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="col-3">
        <q-card-section>
          <div class="">
            <p class="text-h4">Cotizacion</p>
            <q-separator inset />
            <p>Subtotal Viaje = {{subtotalViaje}}</p>
            <p>Subtotal Gira = {{subtotalGira}}</p>
            <p>Subtotal Otros = {{subtotalOtros}}</p>
            <p>Subtotal = {{subtotal}}</p>
            <p>IVA = {{subtotalIva}}</p>
            <p>Descuento = {{descuento}}</p>
            <p>TOTAL = {{total}}</p>
            <p>TOTAL USD = {{totalUsd}}</p>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <q-form @submit="onSubmit" class="q-gutter-y-md" style="max-width: 300px;">
      <div class="q-gutter-md row">
        <!-- <q-input class="col-8" label="Precio" outlined v-model="model.question" required/> -->
<!--         <q-select
          class="col"
          :options="[{label:'Activo',value:'active'},{label:'Inactivo',value:'inactive'}]"
          label="Estado"
          outlined
          v-model="model.status"
          required
          emit-value
          map-options
        /> -->
      </div>
    </q-form>
</template>
