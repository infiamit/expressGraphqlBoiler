var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');
const resolvers = require('./graphql/resolvers/index')

var indexRouter = require('./controllers/index');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./graphql/schema/index')
var app = express();
if (process.env.NODE_ENV === 'production') {
    app.disable('x-powered-by');
    app.use(compression())
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const server = new ApolloServer({
    typeDefs, resolvers, context: () => {
        return { test: true }
    }
});
server.applyMiddleware({ app });

module.exports = app;
