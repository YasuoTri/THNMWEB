$(document).ready(function () {
  //Khi bàn phím được nhấn và thả ra thì sẽ chạy phương thức này
  $(".form").validate({
    rules: {
      name: "required",
      SDT: {
        required: true,
        digits: true,
        number: true,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 15,
      },
    },
    messages: {
      name: "Vui lòng nhập tên!",
      SDT: {
        required: "Vui lòng nhập số điện thoại",
        digits: "Chỉ được nhập số",
        number: "Vui lòng nhập số không nhập kí tự khác",
      },
      email: {
        required: "Vui lòng nhập vào email",
        email: "Nhập đúng định dạng email abc@gmail.com",
      },
      password: {
        required: "Vui lòng nhập mật khẩu!",
        minlength: "Độ dài tối thiểu 6 kí tự",
        maxlength: "Độ tài tối đa 15 kí tự",
      },
    },
  });
});
// $(document).ready(function () {
//   $("#buttonClick").click();
// });
