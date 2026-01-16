import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
// import { i18n } from 'vue-i18n';

export const useQuoteStore = defineStore('quotes', () => {

  const quoteConsecutive = ref(200)
  const txts = ref([
    {value:'Unidad  jac sunray para 14 personas, a/c, unidades de carga usb, maletero, asientos reclinables, WiFi'},
    {value:'Unidad Toyota hiace para 11 personas, a/c, maletero, canasta, asientos reclinables, WiFi'},
    {value:'Unidad maxus para 11 personas, a/c, maletero, unidades de carga usb, maletero, asientos reclinables, WiFi'},
  ])

  const lastmsg = ref("TODO MOVIMIENTO EXTRA A LO COTIZADO TIENE COSTO ADICIONAL. EL SERVICIO INCLUYE INICAMENTE LOS KILOMETROS ESTABLECIDOS EN LA PRESENTE COTIZACION CUALQUIER RECORIDO ADICIONAL O EXTENCION DEL TRAYECTO TENDRA UN COSTO ADICIONAL")

  return {
    quoteConsecutive,
    txts,
    lastmsg,
  }
},{
  persist: {
    enabled:true,
    strategies: [
      {
        storage: localStorage,
        paths: ['quoteConsecutive','txts','lastmsg'],
      },
    ]
  }
})
