function quyDoiTien() {
    var soTienVND = 23500;
    var soTienUSD = document.getElementById("soUSD").value;

    var soTienQuyDoi = soTienVND * soTienUSD;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = soTienQuyDoi.toLocaleString() + " VND";
}

document.getElementById("btnQuyDoi").onclick =  quyDoiTien;