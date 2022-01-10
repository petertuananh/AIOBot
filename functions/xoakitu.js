module.exports = {
    xoakitu: function (str) {
        // let pattern = "^";
        var outString = (/[`^/]/gi);
        return str.replace(outString, "")
    }
}