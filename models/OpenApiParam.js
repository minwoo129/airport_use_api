const Sequelize = require('sequelize');

module.exports = class OpenApiParam extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            // 요청시 api 키 네임
            apiKeyNameParam: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            // 요청 항공사 코드 params
            airlineNameParam: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            // 요청 항공편 코드 params
            airlineCodeParam: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            // 요청 출발지 코드 params
            deptCityParam: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            // 요청 도착지 코드 params
            arrvCodeParam: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            // 조회시간(부터) param
            fromDateParam: {
                type: Sequelize.STRING(30),
                allowNull: true
            }, // 조회시간(까지) param
            toDateParam: {
                type: Sequelize.STRING(30),
                allowNull: true
            },
            // 조회시간(부터) 패턴
            fromDatePattern: {
                type: Sequelize.STRING(30),
                allowNull: true
            },
            // 조회시간(까지) 패턴
            toDatePattern: {
                type: Sequelize.STRING(30),
                allowNull: true
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'OpenApiParam',
            tableName: 'openApiParams',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.OpenApiParam.belongsTo(db.ScheduleOpenApi, { foreignKey: 'apiId', targetKey: 'id' });
    }
}