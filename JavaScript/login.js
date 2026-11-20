function CheckLogin(username, password) {
    if (username === "admin" && password === "1234") {
        alert("เข้าสู่ระบบสำเร็จ");
    } else {
        alert("กรุณาตรวจสอบข้อมูลและรหัสผ่านอีกครั้ง");
    }
}
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    CheckLogin(user, pass);
});
//user=admin pass=1234
