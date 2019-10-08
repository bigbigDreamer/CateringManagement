// 缓存临时数据，生命周期只是从页面打开到结束
// 利用sessionStorage

var cache = (
    function () {

        // 判断数据类型
        function checkDataType(value) {
            return Object.prototype.toString.call(value).slice(8, -1);
        }

        function set(key, value) {
            // 缓存中只能存入值类型，所以需要序列化对象
            if (checkDataType(value) === "Object") {
                value = JSON.stringify(value);
            } else {
                sessionStorage.setItem(key, value);
            }

            sessionStorage.setItem(key, value);


        }

        function get(key) {
            var result = sessionStorage.getItem(key);

            // 获取对象的时候，解析JSON字符串为对象
            return JSON.parse(result);
        }

        return {
            set: set,
            get: get
        }
    }
)();


