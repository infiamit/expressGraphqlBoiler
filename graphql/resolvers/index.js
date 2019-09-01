const firstResolvers = require('./firstResolver')
const secondResolvers = require('./second')



const resolvers = {
    Query: {
        ...firstResolvers,
        ...secondResolvers
    }
};

module.exports = resolvers;