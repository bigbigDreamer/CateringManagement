//对于jQuery AJAX的封装

// 小苏懵逼的代码
// var request = (
//     function (baseUrl) {
//
//         function get(url,data,fn) {
//             url = baseUrl + url;
//             $.get(url,data,fn);
//         }
//
//         function post() {
//             console.log('post ，你调用我干嘛')
//         }
//
//
//         return {
//             get: get,
//             post: post
//         }
//     }
// )(baseUrl);


// 小苏可以看懂的代码
var request = {

    // get请求
    get: function (url, data, fn) {
        url = baseUrl + url;
        data = Qs.stringify(data);
        $.get(url, data, fn);
    },

    // post请求
    post: function (url, data, fn) {
        url = baseUrl + url;
        data = Qs.stringify(data);
        $.post(url, data, fn);
    },
};
