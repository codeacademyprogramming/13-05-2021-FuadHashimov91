

function numberToStr(n) {

    let string = 
    n.toString(),təklik, onluq, yuzluk,start, end, arr, arrLen, 
        data, 
        arrInto, 
        word, 
        words;

    console.log(string);

    if (parseInt(string) === 0) {
        return 'sıfır';
    }

    təklik = ['', 'bir', 'iki', 'üç', 'dörd', 'beş', 'altı', 'yeddi', 'səkkiz', 'doqquz', 'ten', 'on'];

    onluq = ['', 'yüz', 'iyirmi', 'otuz', 'qırx', 'əlli', 'altmış', 'yetmiş', 'səksən', 'doxsan'];

    yuzluk = ['', 'min', 'milyon', 'milyard'];

    start = string.length;
    //console.log(start + " start uzunluq");
    arr = [];
    while (start > 0) { // start 3
        end = start; //end = 3
        //console.log(end);
        arr.push(string.slice((start = Math.max(0, start - 3)), end)); // geriye 
        //console.log(arr);
        //daxil olan eded 95590 ve chanks[] = [590,95]; ela;
    }
    arrLen = arr.length; // == 2
    console.log(arrLen);
    if (arrLen > yuzluk.length) { //yuzluk length === 4
        //console.log("bosluq");
        return '';
    }
    words = [];
    console.log(word);


    
    for (i = 0; i < arrLen; i++) { //arrLen == 2  [95,590]
        data = parseInt(arr[i]);  // 
        if (data) {
           // console.log(data);
            arrInto = arr[i].split('').reverse().map(parseFloat);
            //console.log(arrInto);

            if (arrInto[1] === 1) {
                arrInto[0] += 10;
            }
            if ((word = yuzluk[i])) {
                words.push(word);
            }

            if ((word = təklik[arrInto[0]])) {
                words.push(word);
            }

            if ((word = onluq[arrInto[1]])) {
                words.push(word);
            }

            if ((word = təklik[arrInto[2]])) {
                words.push(word + '   yuz  ');
            }
        }
    }
    return words.reverse().join('   ');
}
console.log(numberToStr(55555));