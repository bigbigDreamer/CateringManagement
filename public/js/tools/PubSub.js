// 发布订阅模式
// 10订报纸  11月打电话通知我。

var PubSub = (
    function () {
        var handlers = {};

        function subscribe(type, fn) {

            if (!(type in handlers)) {
                handlers[type] = [];
            }
            handlers[type].push(fn);
        }

        function publish(type, msg) {
            if (!(type in handlers)) {
                alert('没有客户订阅此类型的报纸');
            }
            handlers[type].map(function (item) {
                item(msg);
            })
        }

        return {
            subscribe: subscribe,
            publish: publish
        }
    }
)();