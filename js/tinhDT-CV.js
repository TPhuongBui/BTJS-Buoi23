function tinhCVDT() {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    var dienTich = (Number(chieuDai)) * (Number(chieuRong));
    var chuVi = ((Number(chieuDai)) + (Number(chieuRong))) * 2;

    document.getElementById("result4").style.display = "block";
    document.getElementById("result4").innerHTML = "Diện tích là: " + dienTich + "<br>" + "Chu Vi là: " + chuVi ;
}

document.getElementById("btnDTCV").onclick = tinhCVDT;