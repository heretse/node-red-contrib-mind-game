var settings = require('../bluemix-settings.js'),
    nano = require('nano')(settings.couchUrl);

module.exports = function(RED) {
    function chooseMindGameNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {

            var minedb = nano.db.use('mind_questions');
            minedb.list(function(err, body) {

                if (err) {
                    node.warn(err);
                }

                Math.random() * (max - 0) + min;

                if (body.length > 0) {
                    var index = getRandomInt(0, body.length - 1);
                    msg.payload = body[index];
                } else {
                    msg.payload = null;
                }

                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("choose-mind-game", chooseMindGameNode);

    function analysisMindGameNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            // convert to lower case
            msg.payload = msg.payload.toUpperCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("analysis-mind-game", analysisMindGameNode);

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}