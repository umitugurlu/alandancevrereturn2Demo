function CevreHesapla (kenar: number) {
    cevre = kenar * 4
    return cevre
}
function alandanKenarBul (alan: number) {
    kenar = Math.sqrt(alan)
    return kenar
}
let cevre = 0
let kenar = 0
kenar = 0
cevre = 0
basic.showNumber(CevreHesapla(alandanKenarBul(36)))
