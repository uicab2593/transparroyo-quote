<script setup>
  import { ref, onMounted, computed } from 'vue'
  import CalcPopup from 'components/CalcPopup.vue'
  import { useQuoteStore } from 'stores/quote'
  import { DateTime, Settings } from "luxon";

  Settings.defaultLocale = "es";

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
  const printMode = ref(true)

  const detalles = ref('')
  const observaciones = ref('TODO MOVIMIENTO EXTRA A LO COTIZADO TIENE COSTO ADICIONAL. EL SERVICIO INCLUYE INICAMENTE LOS KILOMETROS ESTABLECIDOS EN LA PRESENTE COTIZACION CUALQUIER RECORIDO ADICIONAL O EXTENCION DEL TRAYECTO TENDRA UN COSTO ADICIONAL')
  const items = ref([])

  const quoteStore = useQuoteStore()

  function addItem(){
    items.value.push({
      quantity:1,
      description:'',
      subtotal:0,
      // discount:0,
      // iva:0,
      // total:0,
      dialog:false,
    })
  }

  const tipoCambio = ref(500)
  const subtotal = computed(() => items.value.reduce((suma, item) => suma + parseFloat(item.subtotal)*parseFloat(item.quantity), 0))
  const iva = computed(() => subtotal.value * (hasIva.value ? .13 : 0))
  const discount = computed(() => parseFloat(((subtotal.value + iva.value) * discountPercentage.value/100).toFixed(2)))
  const total = computed(() => subtotal.value + iva.value - discount.value)
  const totalUsd = computed(() => total.value / tipoCambio.value)

  const calc = ref()

  function onCalcItem(subtotal, item){
    // item.total = totals.total
    item.subtotal = subtotal
  }

  const hasIva = ref(false)
  const discountPercentage = ref(0)

  function print(){
    window.print()
  }

  const invoiceId = ref(100)
  const date = ref(DateTime.now().toFormat('yyyy-MM-dd'))
  const proxyDate = ref(DateTime.now().toFormat('yyyy-MM-dd'))

  function updateProxy () {
    proxyDate.value = date.value
  }

  function save () {
    date.value = proxyDate.value
  }

  // DateTime.fromSQL(value).toFormat('d MMM yyyy')
</script>

<template>
  <img src="~assets/arroyo-logo.webp" class="show-print" style="position: absolute;margin: auto;z-index: 0;left: 0;right: 0;max-width: 700px;top: 0;bottom: 0;opacity: .1;">
  <div style="max-width:1000px;margin:0 auto;position: relative;">
    <p class="text-center q-mb-none roboto-slab" style="font-size:35px;">COTIZACIÓN <q-btn class="no-print" round dense color="primary" icon="print" @click="print"/></p>

    <!-- <q-toggle v-model="printMode" label="Modo impresion" class="no-print"/> -->

    <br>
    <table border="0" cellspacing="0" cellpadding="2" style="margin-bottom: 50px;">
      <tr>
        <td style="width:80%">
          <p class="q-mb-none">
            Fecha de cotización: {{ DateTime.fromSQL(date).toFormat('d MMMM yyyy') }}
            <q-btn icon="event" round color="primary" class="no-print">
              <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                <q-date v-model="proxyDate" mask="YYYY-MM-DD">
                  <div class="row items-center justify-end q-gutter-sm">
                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                    <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-btn>
          </p>
          <p class="q-mb-none" style="display: flex; justify-content: start; align-items: center;">
            No. Cotización: #<span class="show-print" >{{quoteStore.quoteConsecutive}}</span><q-input style="width: 100px;" class="no-print" v-model="quoteStore.quoteConsecutive" dense outlined />
          </p>
        </td>
        <td style="position: relative;">
          <img src="~assets/arroyo-logo.webp" style="width: 180px;position: absolute;top: -70px;right: 0;">
        </td>
      </tr>
    </table>
    <table border="0" cellspacing="0" cellpadding="2">
          <tr>
            <!-- Columna izquierda -->
            <td style="width:50%; vertical-align: top;">
              <!-- <p class="text-h6">Transp Arroyo Tours CR</p> -->
              <table>
                <tr>
                  <td class="label" colspan="2"><p class="q-mb-none">Transp Arroyo Tours CR</p></td>
                  <!-- <td><span class="show-print" >{{cliente}}</span><q-input class="no-print" v-model="cliente" dense outlined /></td> -->
                </tr>
                <tr>
                  <td class="label">CED:</td>
                  <td><span class="show-print" >{{ced}}</span><q-input class="no-print" v-model="ced" dense outlined /></td>
                </tr>
                <tr>
                  <td class="label">Dirección:</td>
                  <td><span class="show-print" >{{direccion}}</span><q-input class="no-print" v-model="direccion" dense outlined /></td>
                </tr>
                <tr>
                  <td class="label">Teléfono:</td>
                  <td><span class="show-print" >{{telefono}}</span><q-input class="no-print" v-model="telefono" dense outlined /></td>
                </tr>
                <tr>
                  <td class="label">E-mail:</td>
                  <td><span class="show-print" >{{email}}</span><q-input class="no-print" v-model="email" dense outlined /></td>
                </tr>
              </table>
            </td>

            <!-- Columna derecha -->
            <td style="width:50%; vertical-align: top;">
              <table>
                <tr>
                  <td class="label">Cliente:</td>
                  <td><span class="show-print" >{{cliente}}</span><q-input class="no-print" v-model="cliente" dense outlined /></td>
                </tr>
                <tr>
                  <td class="label">CED:</td>
                  <td><span class="show-print" >{{clienteCed}}</span><q-input class="no-print" v-model="clienteCed" dense outlined /></td>
                </tr>
                <tr>
                  <td class="label">Dirección:</td>
                  <td><span class="show-print" >{{clienteDireccion}}</span><q-input class="no-print" v-model="clienteDireccion" dense outlined /></td>
                </tr>
                <tr>
                  <td class="label">Teléfono:</td>
                  <td><span class="show-print" >{{clienteTelefono}}</span><q-input class="no-print" v-model="clienteTelefono" dense outlined /></td>
                </tr>
                <tr>
                  <td class="label">E-mail:</td>
                  <td><span class="show-print" >{{clienteEmail}}</span><q-input class="no-print" v-model="clienteEmail" dense outlined /></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

    <div class="text-right q-mb-sm no-print">
      <q-btn
        round
        dense
        color="primary"
        icon="add"
        @click="addItem"
      />
    </div>
    <table border="1" cellspacing="0" cellpadding="2">
      <thead>
        <tr class="tr1">
          <th class="label" style="width: 10%;">CANT. BUSES</th>
          <th class="label" style="width: 70%;">DETALLES DEL VEHÍCULO</th>
          <th class="label" style="width: 10%;">PRECIO UNITARIO</th>
          <th class="label" style="width: 10%;">TOTAL</th>
          <th class="no-print"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) in items">
          <td><span class="show-print" >{{item.quantity}}</span><q-input class="no-print" v-model="item.quantity" type="number" dense outlined /></td>
          <td><span class="show-print" >{{item.description}}</span><q-input type="textarea" class="no-print" v-model="item.description" dense outlined /></td>
          <td><span class="show-print" >₡{{item.subtotal}}</span><q-input style="width: 120px;" prefix="₡" class="no-print" type="number" v-model="item.subtotal" dense outlined /></td>
          <td><span>₡{{item.subtotal * item.quantity}}</span></td>
          <td class="no-print">
            <div style="display: flex;">
              <q-btn
                round
                dense
                color="primary"
                icon="calculate"
                @click="item.dialog = true"
              />
              <q-btn
                round
                dense
                color="red"
                icon="delete"
                @click="items.splice(i,1)"
              />
            </div>
            <CalcPopup v-model="item.dialog" @onSave="({subtotal}) => onCalcItem(subtotal,item)" />
          </td>
        </tr>
      </tbody>
    </table>
    <table border="1" cellspacing="0" cellpadding="2">
      <tr>
        <td class="label" style="width:60%">Detalles del servicio</td>
        <td class="label"></td>
      </tr>
      <tr>
        <td>
          <span class="show-print" >{{detalles}}</span><q-input type="textarea" class="no-print" v-model="detalles" dense outlined />
        </td>
        <td>
          <table cellspacing="0" cellpadding="0">
            <tr>
              <td>Subtotal:</td>
              <td>₡{{subtotal.toFixed(2)}}</td>
            </tr>
            <tr :class="{'no-print':!hasIva}">
              <td><q-checkbox class="no-print" v-model="hasIva" /> IVA 13%:</td>
              <td>₡{{iva.toFixed(2)}}</td>
            </tr>
            <tr :class="{'no-print':parseFloat(discountPercentage)<=0}">
              <td>DESCUENTO {{discountPercentage}}%: <q-input style="width: 80px;" class="no-print" type="number" v-model="discountPercentage" dense outlined /></td>
              <td>₡{{discount.toFixed(2)}}</td>
            </tr>
            <tr>
              <td>TOTAL CRC:</td>
              <td>₡{{total.toFixed(2)}}</td>
            </tr>
            <tr>
              <td>TOTAL USD:</td>
              <td>${{totalUsd.toFixed(2)}}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <table border="1" cellspacing="0" cellpadding="2">
      <tr>
        <td class="label">Observaciones</td>
      </tr>
      <tr>
        <td>
          <span class="show-print" style="min-height:100px;color:red">{{observaciones}}</span><q-input type="textarea" class="no-print" v-model="observaciones" dense outlined />
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
    .roboto-slab {
      font-family: "Roboto Slab", serif;
      font-optical-sizing: auto;
      font-weight: <weight>;
      font-style: normal;
    }

    body {
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      font-size: 10pt;
      margin: 0;
      padding: 20px;
    }
    .tr1 th{
      background-color: #cdace5;color: #fff;
      -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
    }
    .text-center {
      text-align: center;
    }
    .text-right {
      text-align: right;
    }
    .text-h4 {
      font-size: 1.5em;
      font-weight: bold;
    }
    .text-h6 {
      font-size: 1.1em;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 10px;
    }
    td {
      padding: 5px;
      vertical-align: middle;
    }
    td.label {
      width: 30%;
      font-weight: bold;
    }
    .show-print{
      display: none;
    }
    @media print {
      .no-print {
        display: none;
      }
      .show-print{
        display: block;
      }
  }
</style>
