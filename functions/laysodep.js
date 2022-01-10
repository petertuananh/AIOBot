module.exports = {
    laysodep: function(num) {
        if (num == 0) return 0;
        if (!num) return;
        let pattern = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(pattern, ',')
    }
}