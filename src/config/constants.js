module.exports = {
  CORS: {
    origin: '*',
    methods: 'POST',
    headers: ['Content-Type', 'Authorization']
  },
  APPINSIGHTS: {
    key: ''
  },
  BODYPARSER: {
    formidable: { uploadDir: './uploads' },
    multipart: true,
    urlencoded: true
  },
  SENDGRID: {
    key: ''
  },
  MONGO: {
    CONFIG: {
      port: process.env.MONGO_PORT || 27017,
      url: process.env.MONGO_HOST || 'mongodb://localhost:27017'
    },
    OPTIONS: {
      poolSize: 10,
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  },
  PORT: {
    HTTP: process.env.PORT || 4000
  },
  GEOCODER: {
    OPTIONS: {
      provider: 'google',
      apiKey: '',
      language: 'pt-br'
    }
  },
  URL: {
    PROD: '',
    HML: '',
    DEV: 'http://localhost:3000'
  }
}
