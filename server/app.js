const express = require('express');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();

//this will serve the build project of the react app 
app.use(express.static(path.join(__dirname, '../build')));

app.listen(PORT, () => {
  console.log(`React built app is running on express server using port ${PORT}`)});
