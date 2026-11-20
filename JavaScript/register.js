
function CheckPassword(password, confirmPassword) {
    if (password === confirmPassword) {
        alert("ลงทะเบียนสำเร็จ");
    } else {
        alert("กรุณาตรวจสอบข้อมูลและรหัสผ่านอีกครั้ง");
    }
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    CheckPassword(password, confirmPassword);
});
