const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOne = document.getElementById("password-1")
const passwordTwo = document.getElementById("password-2")
const checkBoxSymbol = document.getElementById("checkbox-symbol").checked = false
let isUseSymbols = false


function getRandomNumber() {
    if (isUseSymbols){
        return Math.floor(Math.random() * characters.concat(symbols).length)
    }
    return Math.floor(Math.random() * characters.length)
}

function useSymbols(){
    return isUseSymbols = !isUseSymbols
}

function getPasswords(){
    let randomPasswordOne = ""
    let randomPasswordTwo = ""
    const passwordLength = 15
      
    if (isUseSymbols){
        charSymb = characters.concat(symbols)
        for (let i = 0; i < passwordLength; i++){
            randomPasswordOne += charSymb[getRandomNumber()]
            randomPasswordTwo += charSymb[getRandomNumber()]
            }
        passwordOne.textContent = randomPasswordOne
        passwordTwo.textContent = randomPasswordTwo    
    }else{
        for (let i = 0; i < passwordLength; i++){
            randomPasswordOne += characters[getRandomNumber()]
            randomPasswordTwo += characters[getRandomNumber()]
        }
    passwordOne.textContent = randomPasswordOne
    passwordTwo.textContent = randomPasswordTwo
    }
}



