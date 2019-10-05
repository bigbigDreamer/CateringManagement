var order = {

    findAll: function (fn) {
        request.get('order/findAll',null,fn);
    }
};