module.exports = function(RED) {
    function chooseMindGameNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            // convert to lower case
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
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
}