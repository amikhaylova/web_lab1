window.onload = function () {
    //получаем значение нажатой кнопочки у игрека и оставляем ее сфокусированной
    let buttons = document.getElementsByName("button_y");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function (event) {
            document.getElementById("hidden_y").value = event.target.value;
            buttons.forEach(elem => elem.classList.remove("focused"));
            event.target.classList.add("focused");
        }
    }

    //проверка валидного ввода
    let warning_element = document.getElementById("warning");
    document.getElementById("x_value").oninput = function (e) {
        warning_element.style.visibility = "hidden";
        let input = e.target.value;
        let incorrect = isNaN(input);
        //console.log(incorrect);
        if ((incorrect === true) || (input[input.length - 1] === " ")) {
            if (input !== "-") {
                //e.target.value = input.substring(0, input.length - 1);
                warning_element.textContent = "Недопустимое значение";
                warning_element.style.visibility = "visible";
            }
        } else if (parseFloat(input) <= -3) {
            //e.target.value = input.substring(0, input.length - 1);
            warning_element.textContent = "Недопустимое значение";
            warning_element.style.visibility = "visible";
        } else if (parseFloat(input) >= 5) {
            //e.target.value = input.substring(0, input.length - 1);
            warning_element.textContent = "Недопустимое значение";
            warning_element.style.visibility = "visible";
        }
    }

    //действия при расфокусе кнопки
    document.getElementById("x_value").onblur = function (e) {
        warning_element.style.visibility = "hidden";
        let input = e.target.value;
        if (input === "-") {
            e.target.value = "";
            warning_element.textContent = "Недопустимое значение";
            warning_element.style.visibility = "visible"
            setTimeout(function () {
                    warning_element.style.visibility = "hidden"
                },
                2000);
        }
        if (isNaN(e.target.value)) {
            e.target.value = "";
        }
        if (e.target.value.trim() !== "") {
            e.target.value = parseFloat(e.target.value.trim());
        }
        if (e.target.value.trim() <= -3 || e.target.value.trim() >= 5) {
            e.target.value = "";
        }
    }
}

