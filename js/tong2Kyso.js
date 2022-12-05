function tinhTongHaiKySo() {
    var num = document.getElementById("nhapSo").value;
    var soHangChuc = Number(Math.floor(num / 10));
    var sohangDV = Number(Math.floor(num % 10));
    var tongHaiKySo = soHangChuc + sohangDV;

    document.getElementById("result5").style.display = "block";
    document.getElementById("result5").innerHTML = "Tổng hai ký số là: " + tongHaiKySo;
}

document.getElementById("btnTongHaiSo").onclick = tinhTongHaiKySo;