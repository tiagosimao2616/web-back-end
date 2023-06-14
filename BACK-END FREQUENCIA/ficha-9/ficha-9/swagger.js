const swaggerAutogen = require('swagger-autogen')();
const swaggerOptions = {

  swaggerDefinition: {

      info: {

          version:"1.0.0",

          title:"Ficha 7 API",

          description:"Ficha 7 API Information",

          contact: {

              name:"TPSI-DWB"

          },

          servers: ["http://localhost:8080"],

      },

      definitions: {

          "Person": {

              "type":"object",

              "properties": {

                  "id": {

                      "type":"integer",

                      

                      "x-primary-key":true

                  },

                  "firstname": {

                      "type":"string"                        

                  },

                  "lastname": {

                      "type":"string"                        

                  },

                  "profession": {

                      "type":"string"                        

                  },                 

                  "age": {

                      "type":"integer",

                      "format":"int64"

                  }

              },

              "xml": {

                  "name":"Person"

              }

          }

      }

  },

  apis: ["app.js"]

};

const outputFile = './swagger-output.json';
const endpoints = ['./app.js'];

swaggerAutogen(outputFile,endpoints,swaggerOptions)