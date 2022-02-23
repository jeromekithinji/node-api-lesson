// tells us what the data looks like
const schemas = {
    Student: {
        type: "object",
        properties: {
            id: {
                type: 'string',
                description: 'Unique identifier',
                example: "1"
            },
            name: {
                type: 'string',
                description: 'The name of the student',
                example: "Adam Pinches"
            },
            age: {
                type: 'number',
                description: "An integer that is the years since birth of the student",
                example: 23
            },
            interests: {
                type: 'array',
                items: {
                    ingredient: {
                        type: "string",
                        description: "An interest of the student",
                        example: "Golf"
                    }
                }
            },
            dateCreated: {
                type: "string",
                description: "UTC date string for when the student was created",
                example: "Wed, 22 Apr 2020 22: 36: 50 GMT"
            }
        }
    },
    Students: {
        type: 'object',
        properties: {
            recipes: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/Student'
                }
            }
        }
    }
  }

module.exports = schemas;