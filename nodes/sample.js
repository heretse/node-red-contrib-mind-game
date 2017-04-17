module.exports = function(RED) {
    function UpperCaseNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            // convert to upper case
            msg.payload = msg.payload.toUpperCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("upper-case", UpperCaseNode);

    function LowerCaseNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            // convert to lower case
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("lower-case", LowerCaseNode);
}