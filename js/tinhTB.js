function tinhTrungBinh() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    var num5 = document.getElementById("number5").value;
    
    console.log(typeof(num1)); //=> tất cả dữ liệu lấy từ form đều là kiểu string

    // dấu "+": có 2 tính năng: cộng các số, nối chuỗi ký tự

    //?Chuyển kiểu string thành number (ép kiểu dữ liệu)
        // dùng Number(): chuyển kiểu string thành interger và float
        // parseFloat: chỉ dùng cho số thực
        // parseInt : chỉ dùng cho số nguyên

    var trungBinh = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5;
    document.getElementById("result2").style.display = "block";
    document.getElementById("result2").innerHTML = "Số trung bình là: " + trungBinh;
}

document.getElementById("btnTrungBinh").onclick = tinhTrungBinh;