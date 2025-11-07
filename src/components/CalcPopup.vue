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
  // const subtotalIva = computed(() => parseFloat((subtotal.value * (iva.value ? .13 : 0)).toFixed(2)))
  // const descuento = computed(() => parseFloat(((subtotal.value + subtotalIva.value) * porcentajeDescuento.value/100).toFixed(2)))
  // const total = computed(() => subtotal.value + subtotalIva.value - descuento.value)
  // const totalUsd = computed(() => total.value / tipoCambio.value)

  const dialog = defineModel()

  const emit = defineEmits(['onSave'])


  function onSave(){
    emit('onSave',{
      subtotal: subtotal.value,
      // subtotalIva: subtotalIva.value,
      // descuento: descuento.value,
      // subtotal: subtotal.value,
    })
  }
  // defineExpose({
  //   open,
  // })

</script>

<template>
  <q-dialog v-model="dialog">
    <q-card style="width: 900px; max-width: 80vw;">
      <q-card-section>
        <p class="text-h4 q-mb-none">Cotizacion</p>
      </q-card-section>
      <q-separator />
      <q-card-section style="max-height: 50vh" class="scroll">
        <div class="row q-col-gutter-sm">
          <div class="col-6">
            <q-card>
              <q-card-section>
                <p>Paso 1</p>
                <div class="q-col-gutter-sm row">
                  <q-input class="col-6" v-model.number="precioKm" type="number" input-class="text-right" label="Precio por km" outlined required/>
                  <q-input class="col-6" v-model.number="devaluoMovil" label="Devaluo de la movil" outlined type="number" input-class="text-right" required/>
                  <q-input class="col-6" v-model.number="pagoChofer" label="Pago Chofer" outlined type="number" input-class="text-right" required/>
                  <q-input class="col-6" v-model.number="montoGira" label="Monto Gira" outlined type="number" input-class="text-right" required/>
                  <q-input class="col-6" v-model.number="viaticos" label="Viaticos" outlined type="number" input-class="text-right" required/>
                  <q-input class="col-6" v-model.number="tipoCambio" label="Tipo de cambio" outlined type="number" input-class="text-right" required/>
                  <q-input class="col-6" v-model.number="peajes" label="Peajes" outlined type="number" input-class="text-right" required/>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-6">
            <q-card>
              <q-card-section>
                <p>Paso 2</p>
                <div class="q-col-gutter-y-sm">
                  <div class="column">
                    <div class="col row q-col-gutter-x-sm">
                      <q-input v-model.number="kms" class="col-3" label="Km's" outlined type="number" required/>
                      <!-- <q-input v-model="detalleViaje" class="col" label="Detalle viaje" outlined type="text" required/> -->
                    </div>
                    <!-- <q-checkbox label="Viaje de ida" /> -->
                    <q-checkbox v-model="viajeVuelta" label="Viaje de vuelta" />
                    <!-- <q-checkbox v-model="gira" label="Gira" /> -->
                    <q-input v-model.number="diasGira" label="Dias gira" outlined type="number" required/>
                    <!-- <q-checkbox v-model="iva" label="IVA" /> -->
                    <!-- <q-input v-model.number="porcentajeDescuento" label="Descuento %" outlined type="number" input-class="text-right" required/> -->
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12">
            <q-card>
              <q-card-section>
                <div style="font-size: 18px;">
                  <p><strong>Subtotal Viaje:</strong> ₡{{subtotalViaje}}</p>
                  <p><strong>Subtotal Gira:</strong> ₡{{subtotalGira}}</p>
                  <p><strong>Subtotal Otros:</strong> ₡{{subtotalOtros}}</p>
                  <p><strong>Subtotal:</strong> ₡{{subtotal}}</p>
                  <!-- <p><strong>IVA:</strong> {{subtotalIva}}</p> -->
                  <!-- <p><strong>Descuento:</strong> {{descuento}}</p> -->
                  <!-- <p><strong>TOTAL:</strong> {{total}}</p> -->
                  <!-- <p><strong>TOTAL USD:</strong> {{totalUsd}}</p> -->
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="Cerrar" v-close-popup />
        <q-btn flat label="Agregar" color="primary" @click="onSave" v-close-popup/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
