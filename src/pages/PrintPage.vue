<script setup>
  import { ref, onMounted, computed } from 'vue'

</script>

<template>
  <p class="text-h4 text-center">Cotización</p>
  <br><br>

  <table>
    <tr>
      <td class="label">Fecha de cotización:</td>
      <td class="text-right"><p id="fecha"></p></td>
    </tr>
    <tr>
      <td class="label">No Cotización:</td>
      <td class="text-right"><p>#12121</p></td>
    </tr>
  </table>
  <table border="0" cellspacing="0" cellpadding="6">
        <tr>
          <!-- Columna izquierda -->
          <td style="width:50%; vertical-align: top;">
            <p class="text-h6">Transp Arroyo Tours CR</p>
            <table>
              <tr>
                <td class="label">CED:</td>
                <td><q-input dense outlined></q-input></td>
              </tr>
              <tr>
                <td class="label">Dirección:</td>
                <td><q-input dense outlined></q-input></td>
              </tr>
              <tr>
                <td class="label">Teléfono:</td>
                <td><q-input dense outlined></q-input></td>
              </tr>
              <tr>
                <td class="label">E-mail:</td>
                <td><q-input dense outlined></q-input></td>
              </tr>
            </table>
          </td>

          <!-- Columna derecha -->
          <td style="width:50%; vertical-align: top;">
            <p class="text-h6">Cliente:</p>
            <table>
              <tr>
                <td class="label">Cliente:</td>
                <td><q-input dense outlined></q-input></td>
              </tr>
              <tr>
                <td class="label">CED:</td>
                <td><q-input dense outlined></q-input></td>
              </tr>
              <tr>
                <td class="label">Dirección:</td>
                <td><q-input dense outlined></q-input></td>
              </tr>
              <tr>
                <td class="label">Teléfono:</td>
                <td><q-input dense outlined></q-input></td>
              </tr>
              <tr>
                <td class="label">E-mail:</td>
                <td><q-input dense outlined></q-input></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
</template>


<style scoped>
    body {
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      margin: 0;
      padding: 20px;
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
      margin-bottom: 25px;
    }
    td {
      padding: 6px 10px;
      vertical-align: middle;
    }
    td.label {
      width: 30%;
      font-weight: bold;
    }
</style>
