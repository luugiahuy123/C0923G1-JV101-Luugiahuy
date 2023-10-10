function kiemtra() {
let weight = +document.getElementById("can_nang").value;
let height = +document.getElementById("chieu_cao").value;
let bmi = weight / (height * height);

        if (bmi < 18)
            document.getElementById("result").innerHTML = "gầy";
        else if (bmi < 25)
            document.getElementById("result").innerHTML = "vừa";
        else if (bmi < 30)
            document.getElementById("result").innerHTML = "mập";
        else
            document.getElementById("result").innerHTML = "quá mập";
}



