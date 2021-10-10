function eNum(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var btn = document.querySelector(".btn");
var vl_a = document.querySelector("#vl_a");
var vl_b = document.querySelector("#vl_b");
var vl_c = document.querySelector("#vl_c");
var res = document.querySelector("#returns");
vl_a.addEventListener('input', a);
vl_b.addEventListener('input', b);
vl_c.addEventListener('input', c);
btn.addEventListener('click', calcular);

function a() {
    if (!eNum(vl_a.value)) {
        vl_a.style.border = "solid 1px #dc3545";
        res.innerHTML = `<span class="alert red">Somente números!</span>`;
    } else {
        vl_a.style.border = "solid 1px #198754";
        res.innerHTML = ``;
    }
}
function b() {
    if (!eNum(vl_b.value)) {
        vl_b.style.border = "solid 1px #dc3545";
        res.innerHTML = `<span class="alert red">Somente números!</span>`;
    } else {
        vl_b.style.border = "solid 1px #198754";
        res.innerHTML = ``;
    }
}
function c() {
    if (!eNum(vl_c.value)) {
        vl_c.style.border = "solid 1px #dc3545";
        res.innerHTML = `<span class="alert red">Somente números!</span>`;
    } else {
        vl_c.style.border = "solid 1px #198754";
        res.innerHTML = ``;
    }
}

function calcular(e) {
    e.preventDefault();
    if (vl_a.value == "" || vl_a.value == null || vl_b.value == "" || vl_b.value == null || vl_c.value == "" || vl_c.value == null) {
        res.innerHTML = `<span class="alert red">Preencha todos os campos!</span>`;
    } else {
        if (!eNum(vl_a.value) || !eNum(vl_b.value) || !eNum(vl_c.value)) {
            res.innerHTML = `<span class="alert red">Somente números!</span>`;
        } else {
            var delta = 0;
            var x1 = 0;
            var x2 = 0;
            delta = parseFloat(vl_b.value) * parseFloat(vl_b.value) - 4 * parseFloat(vl_a.value) * parseFloat(vl_c.value);
            raiz_delta = Math.sqrt(delta);
            x1 = - parseFloat(vl_b.value) + parseFloat(raiz_delta);
            x2 = - parseFloat(vl_b.value) - parseFloat(raiz_delta);
            x1 = parseFloat(x1) / (2 * parseFloat(vl_a.value));
            x2 = parseFloat(x2) / (2 * parseFloat(vl_a.value));
            
            if(isNaN(parseFloat(x1)) || isNaN(parseFloat(x2))){
                res.innerHTML = `<span class="alert orange">A equação não possui raízes reais!</span>`;
            }else{
            res.innerHTML = `
                <span class="alert blue">X' = ${x1}</span>
                <span class="alert blue">X" = ${x2}</span>`;
            }
            vl_a.value = "";
            vl_b.value = "";
            vl_c.value = "";
            vl_a.style.border = "solid 1px #ced4da";
            vl_b.style.border = "solid 1px #ced4da";
            vl_c.style.border = "solid 1px #ced4da";
            vl_a.focus();
        }

    }
}