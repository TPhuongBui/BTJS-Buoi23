function tinhTongHaiKySo() {
    var num = document.getElementById("nhapSo").value;
    var soHangChuc = Math.floor(num / 10);
    var sohangDV = Math.floor(num % 10);
    var tongHaiKySo = soHangChuc + sohangDV;

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "Tổng hai ký số là: " + tongHaiKySo;
}

document.getElementById("btnTongHaiSo").onclick = tinhTongHaiKySo;