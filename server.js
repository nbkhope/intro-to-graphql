const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
  graphiql: true,
  // schema: schema,
}));

app.listen(4000, () => {
  console.log('Server running on port 4000.');
});
