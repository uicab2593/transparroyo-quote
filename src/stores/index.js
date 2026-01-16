import { defineStore } from '#q-app/wrappers'
import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
// import persistedState from 'pinia-plugin-persistedstate-2'
import localforage from 'localforage'
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default defineStore((/* { ssrContext } */) => {
  const pinia = createPinia()
  // pinia.use(piniaPluginPersistedstate)
  const persistedState = createPersistedStatePlugin({
    storage: {
      getItem: async key => await localforage.getItem(key),
      setItem: async (key, value) => await localforage.setItem(key, value),
      removeItem: async key => await localforage.removeItem(key),
    }
  })

  // You can add Pinia plugins here
  pinia.use(persistedState)

  return pinia
})
