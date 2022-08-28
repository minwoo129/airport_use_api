const Sequelize = require('sequelize');

module.exports = class AirportTerminal extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            // 영문이름
            engName: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            // 한글이름
            korName: {
                type: Sequelize.STRING(100),
                allowNull: false,
                defaultValue: ''
            },
            // 노선(국내선: 'domestic', 국제선: 'international', 혼합: 'all')
            route: {
                type: Sequelize.STRING,
                allowNull: false
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'AirportTerminal',
            tableName: 'airportTerminals',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        })
    }

    static associate(db) {
        db.AirportTerminal.belongsTo(db.Airport, { foreignKey: 'airportId', targetKey: 'id' });
        db.AirportTerminal.belongsToMany(db.Airline, { through: 'AirlineTerminal' });
        db.AirportTerminal.belongsTo(db.ScheduleOpenApi, { foreignKey: 'apiId', targetKey: 'id' });
    }
}