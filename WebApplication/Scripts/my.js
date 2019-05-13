"use strict";
$('#Submit').click(function () {
    $.ajax({
        url: 'User/Login', //要请求的url地址
        type: 'Post', //请求方法 GET or POST
        async: true, //是否使用异步请求的方式
        timeout: 5000, //请求超时的时间，以毫秒计
        data: {
            userName: $("#LoginUserName").val(),
            password: $("#LoginPassword").val()
        }, //参数，用POST方法时使用，如果用GET方法则直接在url后拼接参数即可
        //dataType:'json', //预期的服务器返回参数类型，如果不是预期类型则会认为请求失败执行error
        beforeSend: function () {
            console.log("send")
        },//再发送请求前调用的方法
        success: function (msg) {
            console.log("success")
            alert(msg)
        }, //请求成功时回调方法，data为服务器返回的数据
        error: function () {
            console.log("error")
        }, //请求发生错误时调用方法
        complete: function () {
            console.log("over")
        } //回调方法 无论success或者error都会执行
    });
})
$('#Register').click(function () {
    $.ajax({
        url: 'User/Register', //要请求的url地址
        type: 'Post', //请求方法 GET or POST
        async: true, //是否使用异步请求的方式
        timeout: 5000, //请求超时的时间，以毫秒计
        data: {
            userName: $("#RegisterUserName").val(),
            password: $("#RegisterPassword").val(),
            phone: $("#Phone").val(),
            email: $("#Email").val(),
        }, //参数，用POST方法时使用，如果用GET方法则直接在url后拼接参数即可
        //dataType:'json', //预期的服务器返回参数类型，如果不是预期类型则会认为请求失败执行error
        beforeSend: function () {
            console.log("send")
        },//再发送请求前调用的方法
        success: function (msg) {
            console.log("success")
            alert(msg)
        }, //请求成功时回调方法，data为服务器返回的数据
        error: function () {
            console.log("error")
        }, //请求发生错误时调用方法
        complete: function () {
            console.log("over")
        } //回调方法 无论success或者error都会执行
    });
})