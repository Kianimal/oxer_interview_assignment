var connection = require("../config/connection.js");

module.exports = function(app) {
  // Get all records
  app.get("/api/all/ibm", function(req, res) {

    var query = "SELECT * FROM ibm_employees";

    connection.query(query, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.get("/api/all/ihop", function(req, res) {

    var query = "SELECT * FROM ihop_employees";

    connection.query(query, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.get("/api/all/lyft", function(req, res) {

    var query = "SELECT * FROM lyft_employees";

    connection.query(query, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.get("/api/inner/ibm", function(req, res) {

    var query = "SELECT * FROM lyft_employees";

    connection.query(query, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.get("/api/inner/ihop", function(req, res) {

    var query = "SELECT * FROM lyft_employees";

    connection.query(query, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.get("/api/inner/ibmlyft", function(req, res) {
    var query = connection.query(
      "SELECT ibm_employees.employee_name, ibm_employees.employee_id, ibm_employees.start_date " + 
      " FROM ibm_employees INNER JOIN lyft_employees ON ibm_employees.employee_name = lyft_employees.employee_name" + 
      " ORDER BY ibm_employees.employee_name;",
      function(err, result) {
          if (err) throw err;
          res.json(result);
      }
    );
  });

  app.get("/api/inner/ihopibm", function(req, res) {
    var query = connection.query(
      "SELECT ihop_employees.employee_name, ihop_employees.employee_id, ihop_employees.start_date " + 
      " FROM ihop_employees INNER JOIN ibm_employees ON ihop_employees.employee_name = ibm_employees.employee_name" + 
      " ORDER BY ihop_employees.employee_name;",
      function(err, result) {
          if (err) throw err;
          res.json(result);
      }
    );
  });

  app.get("/api/inner/lyftihop", function(req, res) {
    var query = connection.query(
      "SELECT lyft_employees.employee_name, lyft_employees.employee_id, lyft_employees.start_date " + 
      " FROM lyft_employees INNER JOIN ihop_employees ON lyft_employees.employee_name = ihop_employees.employee_name" + 
      " ORDER BY lyft_employees.employee_name;",
      function(err, result) {
          if (err) throw err;
          res.json(result);
      }
    );
  });

  app.get("/api/left/ibmihop", function(req, res) {
    var query = connection.query(
      "SELECT ibm_employees.employee_name, ibm_employees.employee_id, ibm_employees.start_date " + 
      "FROM ibm_employees LEFT JOIN ihop_employees ON " +
      "ibm_employees.employee_name = ihop_employees.employee_name ORDER BY " + 
      "ibm_employees.employee_name;",
      function(err, result) {
        if (err) throw err;
        res.json(result);
      }
    );
  });

  app.get("/api/left/ihoplyft", function(req, res) {
    var query = connection.query(
      "SELECT ihop_employees.employee_name, ihop_employees.employee_id, ihop_employees.start_date " + 
      "FROM ihop_employees LEFT JOIN lyft_employees ON " +
      "ihop_employees.employee_name = lyft_employees.employee_name ORDER BY " + 
      "ihop_employees.employee_name;",
      function(err, result) {
        if (err) throw err;
        res.json(result);
      }
    );
  });

  app.get("/api/left/lyftibm", function(req, res) {
    var query = connection.query(
      "SELECT lyft_employees.employee_name, lyft_employees.employee_id, lyft_employees.start_date " + 
      "FROM lyft_employees LEFT JOIN ibm_employees ON " +
      "lyft_employees.employee_name = ibm_employees.employee_name ORDER BY " + 
      "lyft_employees.employee_name;",
      function(err, result) {
        if (err) throw err;
        res.json(result);
      }
    );
  });

  app.post("/api/populateDB", function(req, res) {
    console.log(req.body);

    for(let i=0;i<req.body.list.length;i++){
      var query = connection.query(
        "INSERT INTO " + req.body.company + "_employees SET ?",
        {
            employee_name: req.body.list[i].name,
            employee_id: req.body.list[i].employee_id,
            start_date: req.body.list[i].start_date,
        },
        function(err, res) {
          if (err) throw err;
        }
      );
    }

  })

};