# Alandan Çevre

## Alandan Çevre Etkinliği Tutorial @unplugged
Alandan Çevre Hesaplama Etkinliği

![kareAlanı](https://raw.githubusercontent.com/umitugurlu/alandancevrereturn/master/kare.png)

## Değişkenleri Tanımlayalım

Öncelikle ``kenar`` ve ``cevre`` değişkenlerimizi tanımlayalım.   ``||variables: set kenar to 0||`` ve ``||variables: set cevre  to 0||`` 

```blocks

let kenar = 0
let cevre = 0

```


## Alandan Kenar Hesaplama @fullscreen
Alan değerinden kenar bilgisini hesaplayabilmek için ``||functions: function alandanKenarBul||``  fonksiyonunu hazırlayalım.
 ``||variables: alan||`` adında bir parametre tanımlayalım.

```blocks

function alandanKenarBul (alan: number) {
 
}
```



## Fonksiyonda Değişkene Değer Atama
Kenar değeri hesaplandıktan sonra saklaması için ``||variables:  kenar||`` değişkenine değerini atayalım.
``||variables: set kenar to 0||`` 

#### ~
bu adımın tüm detayları hakkında bilgilendirmelere ulaşmal ........
```blocks

function alandanKenarBul (alan: number) {
   kenar = 0
 
}

```

## ``||Math: square root||`` Bloğunu Kullanalım
``||math: square root||`` bloğunu kullanarak ``||variables: alan||`` parametresinden gelen değerin karekökünü hesaplayalım.


```blocks

function alandanKenarBul (alan: number) {
    kenar = Math.sqrt(alan)
    
}
```

## ``||functions: return||`` Kod Bloğunu Kullanalım
``||functions: return||`` kod bloğunu kullanarak hesapladığımız ``||variables: kenar||`` değişkeninde sakladığımız değeri fonksiyon dışına gönderelim.
```blocks
function alandanKenarBul (alan: number) {
    let kenar = 0
    kenar = Math.sqrt(alan)
    return kenar
}
```

## ``||functions: function CevreHesapla||`` Fonksiyonu
``||variables: kenar||`` parametresinden gelen kenar değerine göre karenin çevresini hesaplayacak olan ``||functions: function CevreHesapla||`` fonksiyonu oluşturalım.
``||variables: kenar||`` adında parametre tanımlayalım.

```blocks 
function CevreHesapla (kenar: number) {
   
}

```


## Fonksiyonda Değişkene Değer Atama

Fonksiyonunda hesaplanacak çevre değerini saklaması için ``||variables: cevre||`` değişkenine değerini atayalım.
 ``||variables: set cevre to 0||`` 

```blocks
function CevreHesapla (kenar: number) {
     cevre = 0
  
}
```

## Çevreyi Hesaplayalım.
``||variables: kenar||``  parametresinden gelen değeri 4 ile çarpalım ve sonucu ``||variables: cevre||`` değişkeninde saklayalım.

```blocks
function CevreHesapla (kenar: number) {
    cevre = kenar * 4
    
}
```

## Yine  ``||functions:return||`` Kod Bloğunu Kullanalım
 ``||functions:return||`` kod bloğunu kullanarak hesapladığımız ``||variables: cevre||`` değişkeninde sakladığımız değeri fonksiyon dışına gönderelim.
```blocks
function CevreHesapla (kenar: number) {
    let cevre = 0
    cevre = kenar * 4
    return cevre
}
```

## Sonuçları Gösterelim
``||basic: on start||`` bloğu içerisinde fonksiyon çağırarak sonuçları gösterelim. ``||basic:showNumber||`` kod bloğunu kullanacağız.

```block
basic.showNumber(0)

```

## Fonksiyonları Çağıralım. @unplugged
Çevre sonucunu görebilmek için  ``||functions:call CevreHesapla||`` kod bloğu kullanarak ``||functions:alandanKenarBul||`` fonksiyonundan gelen sonuç için çağıracağız.
Projenin tamamlanmış haline kod blokları aşağıdaki gibi olacaktır.
``|Download|`` butonuna tıklayarak Micro:Bit cihazınıza indirebilirsiniz.

```blocks

function CevreHesapla (kenar: number) {
    let cevre = 0
    cevre = kenar * 4
    return cevre
}
function alandanKenarBul (alan: number) {
    let kenar = 0
    kenar = Math.sqrt(alan)
    return kenar
}

let kenar = 0
let cevre = 0
kenar = 0
cevre = 0
basic.showNumber(CevreHesapla(alandanKenarBul(36)))
```









