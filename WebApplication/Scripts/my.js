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
        },//再发送请求前调用的方法
        success: function (msg) {
            if (msg == "登录失败") {
                alert(msg)
            } else {
                document.write(msg);
            }
        }, //请求成功时回调方法，data为服务器返回的数据
        error: function () {
        }, //请求发生错误时调用方法
        complete: function () {
        } //回调方法 无论success或者error都会执行
    });
    return false;//页面不刷新
})
$('#Register').click(function () {
    var a = $("#RegisterPassword").val();
    var b = $("#ConfirmPassword").val();
    if (a!=b) {
        alert("两次密码输入不同！")
        return false;
    }
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
        },//再发送请求前调用的方法
        success: function (msg) {
            alert(msg)
        }, //请求成功时回调方法，data为服务器返回的数据
        error: function () {
        }, //请求发生错误时调用方法
        complete: function () {
        } //回调方法 无论success或者error都会执行
    });
})

function findAllUser() {
    $.ajax({
        url: 'User/FindByAll', //要请求的url地址
        type: 'Get', //请求方法 GET or POST
        async: true, //是否使用异步请求的方式
        timeout: 5000, //请求超时的时间，以毫秒计
        data: {
        }, //参数，用POST方法时使用，如果用GET方法则直接在url后拼接参数即可
        dataType: 'json', //预期的服务器返回参数类型，如果不是预期类型则会认为请求失败执行error
        beforeSend: function () {
        },//再发送请求前调用的方法
        success: function (msg) {
            showData(msg)
        }, //请求成功时回调方法，data为服务器返回的数据
        error: function () {
        }, //请求发生错误时调用方法
        complete: function () {
        } //回调方法 无论success或者error都会执行
    });
}
function showData(data) {
    $("#table").empty();
    $(data).each(function () {
        var li = '<tr>'
            + '<td>' + this.userName + '</td>'
            + '<td>' + this.password + '</td>'
            + '<td>' + this.phone + '</td>'
            + '<td>' + this.email + '</td>'
            + '<td>'
            + '<button type="button" class="btn btn-info" onclick="editUser(' + "'" + this.userName + "'"+')">修改</button>'
            + '<button type="button" class="btn btn-warning" onclick="deleteUser(' + "'" + this.userName + "'"+')">删除</button>'
            + '</td>'
            + '</tr>'
        $("#table").append(li);
    })
}
function deleteUser(userName) {
    $.ajax({
        url: 'User/DeleteUser', //要请求的url地址
        type: 'Get', //请求方法 GET or POST
        async: true, //是否使用异步请求的方式
        timeout: 5000, //请求超时的时间，以毫秒计
        data: {
            userName: userName
        }, //参数，用POST方法时使用，如果用GET方法则直接在url后拼接参数即可
        dataType: 'json', //预期的服务器返回参数类型，如果不是预期类型则会认为请求失败执行error
        beforeSend: function () {
        },//再发送请求前调用的方法
        success: function (msg) {
            showData(msg)
        }, //请求成功时回调方法，data为服务器返回的数据
        error: function () {
        }, //请求发生错误时调用方法
        complete: function () {
        } //回调方法 无论success或者error都会执行
    });
    return false;//页面不刷新
}
function editUser(userName) {
    $.ajax({
        url: 'User/FindUserByUserName', //要请求的url地址
        type: 'Get', //请求方法 GET or POST
        async: true, //是否使用异步请求的方式
        timeout: 5000, //请求超时的时间，以毫秒计
        data: {
            userName: userName
        }, //参数，用POST方法时使用，如果用GET方法则直接在url后拼接参数即可
        dataType: 'json', //预期的服务器返回参数类型，如果不是预期类型则会认为请求失败执行error
        beforeSend: function () {
        },//再发送请求前调用的方法
        success: function (msg) {
            showDialog(msg[0])
        }, //请求成功时回调方法，data为服务器返回的数据
        error: function () {
        }, //请求发生错误时调用方法
        complete: function () {
        } //回调方法 无论success或者error都会执行
    });
    return false;//页面不刷新
}
$('#dialog_yes').click(function () {
    $.ajax({
        url: 'User/UpdateUser', //要请求的url地址
        type: 'POST', //请求方法 GET or POST
        async: true, //是否使用异步请求的方式
        timeout: 5000, //请求超时的时间，以毫秒计
        data: {
            oldName: $("#dialogTitle").attr("key"),
            newName: $("#userName").val(),
            newPassword: $("#password").val(),
            newPhone: $("#phone").val(),
            newEmail: $("#email").val()
        }, //参数，用POST方法时使用，如果用GET方法则直接在url后拼接参数即可
        //dataType: 'json', //预期的服务器返回参数类型，如果不是预期类型则会认为请求失败执行error
        beforeSend: function () {
        },//再发送请求前调用的方法
        success: function (msg) {
            alert(msg)
            findAllUser()
            closeDialog()
        }, //请求成功时回调方法，data为服务器返回的数据
        error: function () {
        }, //请求发生错误时调用方法
        complete: function () {
        } //回调方法 无论success或者error都会执行
    });
    return false;//页面不刷新
})
function showDialog(msg) {
    $(".v-modal").show()
    $("#dialog").show();
    $("#dialogTitle").text("编辑");
    $("#dialogTitle").attr("key",msg.userName);
    $("#userName").val(msg.userName);
    $("#password").val(msg.password);
    $("#phone").val(msg.phone);
    $("#email").val(msg.email);
}
function closeDialog() {
    //隐藏对话框
    $("#dialog").hide();
    $(".v-modal").hide()
    //清空输入框
    $("#userName").val('');
    $("#password").val('');
    $("#phone").val('');
    $("#email").val('');
}