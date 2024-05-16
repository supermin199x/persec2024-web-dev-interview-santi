class ReverseEncoder {

    endcode(str: string){
        const reversedString = str.split('').reverse().join(''); // สลับตัวอักษร
        console.log(reversedString);
    }

    decode(str: string){
        const reversedString = str.split('').reverse().join(''); // สลับตัวอักษร
        console.log(reversedString);
    }

}

const test1 = new ReverseEncoder();
test1.endcode("hello world");
test1.decode("dlrow olleh");