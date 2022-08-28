const Sequelize = require('sequelize');
const Airline = require('./airline');
const Airport = require('./airport');
const AirportTerminal = require('./airportTerminal');
const OpenApiParam = require('./OpenApiParam');
const ScheduleOpenApi = require('./ScheduleOpenApi');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Airline = Airline;
db.Airport = Airport;
db.AirportTerminal = AirportTerminal;
db.OpenApiParam = OpenApiParam;
db.ScheduleOpenApi = ScheduleOpenApi;

Airline.init(sequelize);
Airport.init(sequelize);
AirportTerminal.init(sequelize);
OpenApiParam.init(sequelize);
ScheduleOpenApi.init(sequelize);

Airline.associate(db);
Airport.associate(db);
AirportTerminal.associate(db);
OpenApiParam.associate(db);
ScheduleOpenApi.associate(db);

module.exports = db;