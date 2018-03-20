const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));


  app.get('/api', function (req, res) {	  
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify([
      {Supplier:"bonjour",Name:"Bonjour"},
      {Supplier:"babye",Name:"babye"}
    ]
    ));
  });
  // Answer API requests.
  app.post('/api', function (req, res) {	  
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify([
      {Supplier:"bonjour",Name:"Bonjour"},
      {Supplier:"babye",Name:"babye"}
    ]
    ));
  });



  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}
