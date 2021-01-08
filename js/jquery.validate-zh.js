$(function (){

    $.extend($.validator.messages,{
            required: "你丫的必填！",
            remote: "Please fix this field.",
            email: "你这个是火星邮箱吗？",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "亲，必须填数字.",
            digits: "亲，这个电话找不到你",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: $.validator.format("请输入正确的手机号"),
            minlength: $.validator.format("请输入正确的手机号"),
            rangelength: $.validator.format("请输入正确的密码"),
            range: $.validator.format("请输入正确的手机号"),
            max: $.validator.format("Please enter a value less than or equal to {0}."),
            min: $.validator.format("Please enter a value greater than or equal to {0}.")

    });




    $('.log').click(function(){
        location.href='../index.html'
    })
})