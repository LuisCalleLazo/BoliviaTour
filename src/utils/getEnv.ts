export const getEnvVariables = () => {

  return {
    API_KEY: import.meta.env.VITE_APP_API_KEY,
    AUTH_DOMAIN: import.meta.env.VITE_APP_AUTH_DOMAIN,
    PROJECT_ID: import.meta.env.VITE_APP_PROJECT_ID,
    STORAGE_BUCKET: import.meta.env.VITE_APP_STORAGE_BUCKET,
    MESSAGING_SENDER_ID: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
    APP_ID: import.meta.env.VITE_APP_APP_ID
  }
}