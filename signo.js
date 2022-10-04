function dataNascimento() {
    let texto;
    let result = document.getElementById("result");
    let value = document.getElementById("data").value;
    let data = value.replaceAll("-", "");
    let year = data.substring(0, 4);
    let month = data.substring(4, 6);
    let day = data.substring(6, 8);



    if ((day >= 21 && month == 03) || (day <= 20 && month == 04)) {
        let texto = "Você é do signo de Aries";
        result.innerHTML = texto;
    }
    else if ((day >= 21 && month == 04) || (day <= 20 && month == 05)) {
        let texto = "Você é do signo de Touro ";
        result.innerHTML = texto;
    } else if ((day >= 21 && month == 05) || (day <= 20 && month == 06)) {
        let texto = "Você é do signo de Gêmeos";
        result.innerHTML = texto;
    } else if ((day >= 21 && month == 06) || (day <= 22 && month == 07)) {
        let texto = "Você é do signo de Câncer ";
        result.innerHTML = texto;
    }
    else if ((day >= 23 && month == 07) || (day <= 22 && month == 08)) {
        let texto = "Você é do signo de Leão ";
        result.innerHTML = texto;
    }
    else if ((day >= 23 && month == 08) || (day <= 22 && month == 09)) {
        let texto = "Você é do signo de Virgem";
        result.innerHTML = texto;
    }
    else if ((day >= 23 && month == 09) || (day <= 22 && month == 10)) {
        let texto = "Você é do signo de Libra ";
        result.innerHTML = texto;
    }
    else if ((day >= 23 && month == 10) || (day <= 21 && month == 11)) {
        let texto = "Você é do signo de Escorpião ";
        result.innerHTML = texto;
    }
    else if ((day >= 22 && month == 11) || (day <= 21 && month == 12)) {
        let texto = "Você é do signo de Sagitário";
        result.innerHTML = texto;
    }
    else if ((day >= 22 && month == 12) || (day <= 20 && month == 01)) {
        let texto = "Você é do signo de Capricórnio";
        result.innerHTML = texto;
    }
    else if ((day >= 21 && month == 01) || (day <= 19 && month == 02)) {
        let texto = "Você é do signo de Aquário";
        result.innerHTML = texto;
    }
    else if ((day >= 20 && month == 02) || (day <= 20 && month == 03)) {
        let texto = "Você é do signo de Peixes";
        result.innerHTML = texto;
    }

}
