const Sequelize = require('sequelize');

module.exports = class Airline extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            engName: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            korName: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            iataCode: {
                type: Sequelize.STRING(10),
                allowNull: true
            },
            icaoCode: {
                type: Sequelize.STRING(10),
                allowNull: true
            },
            activeStatus: {
                type: Sequelize.STRING(20),
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Airline',
            tableName: 'airlines',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Airline.belongsToMany(db.AirportTerminal, { through: 'AirlineTerminal' })
    }
}