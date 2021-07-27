export const environment = {
  production: true,
  version: "2021.0.0",
}

/* TO_CONF - App Configuration */
export const appConfig = {
  /* Timer */
  timerSecurity: 1, // for security

  /* File Mngt */
  fileUploadSizeMax: 20971520,
  fileExcelExportMaxRows: 25000,
  fileCSVExportMaxRows: 700000,
  filePhotoMaxResize: 1600,

  /* UI */
  paginationDefaultSize: 20,
  paginationSizes: [20, 50, 100]
}

/* TO_CONF - Business Service */
export const envBusinessAPI = {

  apiUrl: 'http://localhost:4000',

  // Template
  // <domaineMetier>ServiceNameUrl: "http://",
  // S'il y a des eggregateur : aggregator<domaineMetier>Url: "http://",

  // Exemple
  userPreferenceUrl: "http://", // Gestion des préférence de l'utilisateur
  organisationUrl: "http://", // Ensemble d'Humain (Agence, Collectivité, Partenaire...)
  ccpDictionnaireUrl: "http://", // Gestion des énumérations du domaine métier 'ccp'
}

/* TO_CONF - Support Tools */
export const envSupportTool = {
  authUrl: "https://", // Authentication (Ex : auth0...)
  logUrl: "https://", // Log (Ex : Graylog...)
  eSignUrl: "https://", // Electronic Signature
  gedUrl: "https://", // GED (Ex : LogicalDoc...)
  analyticUrl: "https://", // Analytics  (Ex : Matomo, Google Analytics...)
  mapUrl: "https://", // Map (Ex : OpenStreetMap, Google Map...)
  dataVizUrl: "https://", // DataViz (Ex : Qlik...)
}

/* TO_CONF - Database */
export const envDatabase = {
  dbServerUrl: "http://", // DB Provider (Ex : couchDB, pouchDB...)
}
