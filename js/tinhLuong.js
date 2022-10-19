function tinhTienLuong() {
    var luongMotNgay = 100000;
    var soNgayLam = document.getElementById("soNgayLam").value;

    var tienLuong = ((Number(soNgayLam)) * luongMotNgay);
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "Tiền lương là: " + tienLuong.toLocaleString() + " VND";
}

document.getElementById("btnTienLuong").onclick =  tinhTienLuong;