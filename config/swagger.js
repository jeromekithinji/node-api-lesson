const students = require('../docs/student.swagger.js');
const schemas = require('../docs/schemas.swagger.js');

const swaggerDocument = {
    openapi: '3.0.1',
    swagger: '2.0',
    // information about my api
    info: {
        // version 1.0.0 is because this is the frist version of our api
        version: '1.0.0',
        title: 'Jerome Node API',
        // this is how the user will see it in the docs
        description: "The API I built on the _nology self-paced course",
        contact: {
            name: 'Jerome',
            email: 'kithinjijerome@gmail.com',
            url: 'https://jeromekithinji.github.io/_portfolio/'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    // if the api was hosted we'd have 2 servers but in this case it's local host 3000
    servers: {
        url: 'https://localhost:3000/',
        description: "Local Server"
    },
    tags: {
        name: 'Students'
    },
    // paths for api users to interact with
    paths: {
        "/api/students": {
            get: students.findAll,
            post: students.create,
        },
        "/api/students/:id": {
            get: students.find,
            delete: students.destroy
        }
    },
    components: {
        schemas: schemas
    }
}

module.export = swaggerDocument;