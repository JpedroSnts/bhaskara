function eNum(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var btn = document.querySelector("#btnCalcular");
var btnFechar = document.querySelector("#btnFechar");
var vl_a = document.querySelector("#vl_a");
var vl_b = document.querySelector("#vl_b");
var vl_c = document.querySelector("#vl_c");
var res = document.querySelector("#returns");
vl_a.addEventListener('input', a);
vl_b.addEventListener('input', b);
vl_c.addEventListener('input', c);
btn.addEventListener('click', calcular);
btnFechar.addEventListener('click', fecharCalc);

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

function ExibirCalculos() {
    var divCalculos = document.querySelector("#divCalculos");
    var areaCalculo = document.querySelector("#areaCalculo");
    var bloqueio = document.querySelector(".bloqueio");
    divCalculos.classList.remove("escondido");
    bloqueio.classList.remove("escondido");

    var vla = document.querySelector("#a").value;
    var vlb = document.querySelector("#b").value;
    var vlc = document.querySelector("#c").value;
    var rvlb = parseFloat(vlb * vlb);
    var r2 = parseFloat(4 * vla * vlc);
    var delta = rvlb - r2;
    var raiz_delta = Math.sqrt(delta);
    var resx1 = - vlb + raiz_delta;
    var x1a = 2*vla;
    var resx2 = - vlb - raiz_delta;
    var x2a = 2*vla;
    var x1 = resx1 / x1a; 
    var x2 = resx2 / x2a; 
    

    areaCalculo.innerHTML = (`
    Δ = b² - 4 * a * c <br>
    Δ = ${vlb}² - 4 * ${vla} * ${vlc} <br>
    Δ = ${rvlb} - ${r2} <br>
    Δ = ${delta} <br>
    <br>
    <br>
    <div style="text-decoration: underline;">_X = -b ± √Δ_</div>
    2*a<br>
    <div><div style="text-decoration: underline;">_X' = -${vlb} + ${raiz_delta}</div>2*${vla}
    <div style="text-decoration: underline;">_X' = ${resx1}</div>${x1a}<br>
    X' = ${x1}
    </div>
    <br>
    <br>
    <div>
    <div><div style="text-decoration: underline;">_X" = -${vlb} - ${raiz_delta}</div>2*${vla}
    <div style="text-decoration: underline;">_X" = ${resx2}</div>${x2a}<br>
    X" = ${x2}<br>
    `);
}

function fecharCalc(){
    var divCalculos = document.querySelector("#divCalculos");
    var areaCalculo = document.querySelector("#areaCalculo");
    var bloqueio = document.querySelector(".bloqueio");
    divCalculos.classList.add("escondido");
    bloqueio.classList.add("escondido");

    areaCalculo.innerHTML = "";
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

            if (isNaN(parseFloat(x1)) || isNaN(parseFloat(x2))) {
                res.innerHTML = `<span class="alert orange">A equação não possui raízes reais!</span>`;
            } else {
                res.innerHTML = `
                <span class="alert blue">X' = ${x1}</span>
                <span class="alert blue">X" = ${x2}</span>
                <button class="btn btncalc" type="button" id="btnExibirCalculos">Exibir Calculos</button>`;
                var btnExibirCalculos = document.querySelector("#btnExibirCalculos");
                btnExibirCalculos.addEventListener('click', ExibirCalculos);
            }
            document.querySelector("#a").value = vl_a.value;
            document.querySelector("#b").value = vl_b.value;
            document.querySelector("#c").value = vl_c.value;
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