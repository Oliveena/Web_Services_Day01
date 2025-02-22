import Airport from "../models/airports.model.js";

// creating and saving a new Airport
export const create = (req, res) => {

  // avariables are not null
  if (!req.body.code || !req.body.city || !req.body.latitude || !req.body.longitude || !req.body.kind) {
    return res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // defining variables
  const airport = new Airport({
    code: req.body.code,
    city: req.body.city,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    kind: req.body.kind
  });

  // creating airport
  Airport.createAirport(airport, (err, data) => {
    if (err) {
      if (err.code === 209) {
        return res.status(409).send({
          message: err.message || "Conflict occurred while creating the airport"
        });
      } else {
        return res.status(500).send({
          message: err.message || "Some error occurred while creating the airport"
        });
      }
    }
    res.send(data);
  });
};

// getting all airports
const getAll = (req, res) => {
  Airport.getAll((err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message || "Some error occurred while retrieving airports"
      });
    }
    res.send(data);
  });
};

// getting by code
const findByCode = (req, res) => {
  const code = req.params.code;

  Airport.findByCode(code, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).send({
          message: `Not found Airport with code ${code}`
        });
      } else {
        return res.status(500).send({
          message: `Error retrieving Airport with code ${code}`
        });
      }
    }
    res.send(data);
  });
};

// updating by code
const updateByCode = (req, res) => {
  const code = req.params.code;

  if (!req.body.city && !req.body.latitude && !req.body.longitude && !req.body.kind) {
    return res.status(400).send({
      message: "At least one field is required to update"
    });
  }

  const updatedAirport = {
    city: req.body.city,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    kind: req.body.kind
  };

  Airport.updateByCode(code, updatedAirport, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).send({
          message: `Not found Airport with code ${code}`
        });
      } else {
        return res.status(500).send({
          message: `Error updating Airport with code ${code}`
        });
      }
    }
    res.send(data);
  });
};

// delete by code
const remove = (req, res) => {
  const code = req.params.code;

  Airport.remove(code, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).send({
          message: `Not found Airport with code ${code}`
        });
      } else {
        return res.status(500).send({
          message: `Error deleting Airport with code ${code}`
        });
      }
    }
    res.send({ message: `Airport with code ${code} was deleted successfully!` });
  });
};

// delete all from DB
const removeAll = (req, res) => {
  Airport.removeAll((err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message || "Some error occurred while deleting all airports"
      });
    }
    res.send({ message: `${data.affectedRows} airports were deleted successfully!` });
  });
};

//  default export formulation for Sequelize 
export default {
  create,
  getAll,
  findByCode,
  updateByCode,
  remove,
  removeAll
};
