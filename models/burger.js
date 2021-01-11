var orm = require("../config/orm");

const burgerORM = {
    selectAll: function (cb) {
        orm.selectAll("burgers", cb);
    },
    insertOne: function (values, cb) {
        orm.insertOne("burgers", values, cb);
    },
    updateOne: function (values, id, cb) {
        orm.updateOne("burgers", values, id, cb);
    }
};

module.exports = burgerORM;