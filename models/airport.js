const Sequelize = require('sequelize');

module.exports = class Airport extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            country: {
                type: Sequelize.STRING(80),
                allowNull: true
            },
            korName: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            engName: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            iataCode: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            icaoCode: {
                type: Sequelize.STRING(10),
                allowNull: true
            },
            terminalCnt: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Airport',
            tableName: 'airports',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Airport.hasMany(db.AirportTerminal, { foreignKey: 'airportId', sourceKey: 'id' })
    }
}