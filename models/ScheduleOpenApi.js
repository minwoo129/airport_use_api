const Sequelize = require('sequelize');

module.exports = class ScheduleOpenApi extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            // 공항 코드(icao)
            airportCode: {
                type: Sequelize.STRING(10),
                allowNull: false
            },
            // 노선(국내선: 'domestic', 국제선: 'international')
            route: {
                type: Sequelize.STRING,
                allowNull: false
            },
            // 출도착 여부(d: 출발, a: 도착, d/a: 출도착 동시)
            scheduleType: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            // api 호출 주소
            requestUrl: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            // api 키
            requestApiKey: {
                type: Sequelize.STRING(200),
                allowNull: false
            },
            // 요청 형식(xml, json, xml/json)
            reqPattern: {
                type: Sequelize.STRING(200),
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: 'ScheduleOpenApi',
            tableName: 'scheduleOpenApis',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.ScheduleOpenApi.hasOne(db.OpenApiParam, { foreignKey: 'apiId', soruceKey: 'id' });
        db.ScheduleOpenApi.hasOne(db.AirportTerminal, { foreignKey: 'apiId', sourceKey: 'id' });
    }
}