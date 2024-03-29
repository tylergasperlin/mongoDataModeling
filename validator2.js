//to update a validator
db.runCommand({ 
    collMod: 'posts', 
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['title','text','creator','comments'],
            properties: {
                title: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                text:{
                    bsonType:"string",
                    description: "must be a string and is required"
                },
                creator:{
                    bsonType: "objectId",
                    description: "must be an objectidand is required"
                },
                comments:{
                    bsonType:"array",
                    description:"must be an array and is required",
                    items: {
                        bsonType: "object",
                        required: ["text", "author"],
                        properties: {
                            text: {
                                bsonType: "string",
                                description: "must be a string and is required"
                            },
                            author: {
                                bsonType: "objectId",
                                description: 'must be a string and is required'
                            }
                        }
                    }
                }
            }
        }
    },
    validationAction: 'warn' // what should we validate on update?
});
