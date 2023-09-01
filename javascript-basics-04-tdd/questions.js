
const stringSize = (text) => {
    return text.length;

}
const replaceCharacterE = (text) => {
    return text.replace("e", " ");

}
const concatString = (text1, text2) => {
    return text1 + text2;

}
const showChar5 = (text) => {
    return text.charAt(4);

}
const showChar9 = (text) => {
    return text.slice(0, 9);

}
const toCapitals = (text) => {
    return text.toUpperCase();

}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
    return text.trim();

}
const IsString = (text) => {
    return typeof (text) === 'string';

}

const getExtension = (text) => {
    return text.split(".").pop();

}
const countSpaces = (text) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === " ")
            count++;
    }
    return count;
}
const InverseString = (text) => {
    let s = "";
    for (let i = text.length - 1; i >= 0; i--) {
        s += text.charAt(i);
    }
    return s;


}

const power = (x, y) => {
    return Math.pow(x, y);

}
const absoluteValue = (num) => {
    if (num % 1 == 0 && num % num == 0) {
        return num * (-1);
    }

}
const absoluteValueArray = (array) => {
    for (let i=0; i<array.length; i++){
        if (array[i] % 1 == 0 && array[i] % array[i] == 0) 
            array[i] *= -1;
        }
            return array;

            

    }


const circleSurface = (radius) => {
    return Math.round(Math.PI * Math.pow(radius,2));

}
const hypothenuse = (ab, ac) => {
    return Math.sqrt(ab * ab + ac * ac)

}
const BMI = (weight, height) => {
    return Math.round(weight / Math.pow(height,2)*100)/100;

    

}

const createLanguagesArray = () => {
    return ['Html', 'CSS', 'Java', 'PHP'];

}

const createNumbersArray = () => {
    return [0, 1, 2, 3, 4, 5]

}

const replaceElement = (languages) => {
    languages[2] = "Javascript"
    return languages;

}
   
const addElement = (languages) => {
    languages.push('Ruby')
    languages.push('Python')
    return languages;

}

const addNumberElement = (numbers) => {
    numbers.unshift(-1)
    numbers.unshift(-2)
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift()
    return languages;
}

const removeLast = (languages) => {
    languages.pop()
    return languages;

}

const convertStrToArr = (social_arr) => {
    let s = 'Facebook,Twitter,Google +,Viadeo,LinkedIn'
    social_arr = s.split(',')

    return social_arr;
}

const convertArrToStr = (languages) => {
    let array = ['CSS', 'Javascript', 'PHP', 'Ruby']
    let s = ""
    for (let i=0; i< array.length; i++) {
        s += array[i] + ","
    }
    s = s.slice(0, -1)
    return s
}

const sortArr = (social_arr) => {

     
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();

}