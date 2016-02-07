# Elastic Search GraphQL Server Example
An example server for [elasticsearch-graphql](https://www.npmjs.com/package/elasticsearch-graphql) package

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Usage
Change variables in server.js to any existing elasticsearch server with index and type.

NOTE: In order to test this, you will need access to a elastic search server with already existing data. This example will not create any mock data for you
```js
esGraphQL({
  graphql: graphql,
  name: 'yourSchemaName',
  elastic: {
    host: 'localhost:9200',
    index: 'index',
    type: 'type'
  },
  hitsSchema: hitsSchema
})
```
