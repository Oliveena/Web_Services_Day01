import { Sequelize, DataTypes } from 'sequelize';
import sequelize from './db.js'; 

// deifining the model with Sequelize instead of MySQL
const Airport = sequelize.define('Airport', {
  code: {
    type: DataTypes.STRING(6),
    primaryKey: true,
    allowNull: false,
    validate: {
        len: [3, 6]
      }
  },
  city: {
    type: DataTypes.STRING(40),
    unique: true,
    allowNull: false,
    validate: {
        len: [1, 40]
      }
  },
  latitude: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    validate: {
        len: [-90, 90]
      }
  },
  longitude: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    validate: {
        len: [-180, 180]
      }
  },
  kind: {
    type: DataTypes.ENUM('Passenger', 'Cargo', 'Military', 'Private'),
    allowNull: false,
  },
}, {
  tableName: 'day05airports', 
  timestamps: false, 
});

// create a new instance of Airport
Airport.createAirport = (newAirport, result) => {
  // check if city already exists in DB
  Airport.findOne({ where: { city: newAirport.city } })
    .then((existingCity) => {
      if (existingCity) {
        console.log("error: City already exists, conflict");
        result({ code: 209, message: "City already exists" }, null);
        return;
      }

      // create if doesn't exist
      Airport.create(newAirport)
        .then((airport) => {
          console.log("Created airport: ", airport);
          result(null, airport);
        })
        .catch((err) => {
          console.log("Error during creation: ", err);
          result({ message: 'Error during creation', error: err }, null); 
        });
    })
    .catch((err) => {
      console.log("Error checking for existing city: ", err);
      result({ message: 'Error checking for existing city', error: err }, null); 
    });
};


// GET by code
Airport.findByCode = (code, result) => {
  Airport.findOne({ where: { code } }).then((airport) => {
    if (airport) {
      console.log("Found airport: ", airport);
      result(null, airport);
    } else {
      result({ kind: "not_found" }, null);
    }
  }).catch((err) => {
    console.log("Error: ", err);
    result(err, null);
  });
};

// GET all airportts from the DB 
Airport.getAll = (result) => {
  Airport.findAll().then((airports) => {
    console.log("Airports: ", airports);
    result(null, airports);
  }).catch((err) => {
    console.log("Error: ", err);
    result(err, null);
  });
};

// update bu code 
Airport.updateByCode = (code, airportData, result) => {
  Airport.update(airportData, { where: { code } }).then((updatedRows) => {
    if (updatedRows[0] === 0) {
      result({ kind: "not_found" }, null);
    } else {
      console.log("Updated airport: ", { code, ...airportData });
      result(null, { code, ...airportData });
    }
  }).catch((err) => {
    console.log("Error: ", err);
    result(err, null);
  });
};

// DELETE by code
Airport.remove = (code, result) => {
  Airport.destroy({ where: { code } }).then((deletedRows) => {
    if (deletedRows === 0) {
      result({ kind: "not_found" }, null);
    } else {
      console.log("Deleted airport with code: ", code);
      result(null, { message: "Deleted successfully" });
    }
  }).catch((err) => {
    console.log("Error: ", err);
    result(err, null);
  });
};

// DELETE all airports from DB
Airport.removeAll = (result) => {
  Airport.destroy({ where: {}, truncate: true }).then((deletedRows) => {
    console.log(`Deleted ${deletedRows} airports`);
    result(null, { message: `${deletedRows} airports deleted` });
  }).catch((err) => {
    console.log("Error: ", err);
    result(err, null);
  });
};

// make Airport accessible for other scripts 
export default Airport;
