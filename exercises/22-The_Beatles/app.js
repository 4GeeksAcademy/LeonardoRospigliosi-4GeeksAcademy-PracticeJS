//Your code above ^^^
function sing() {

    const sentence1 = "let it be";
    const sentence2 = "there will be an answer";
    const sentence3 = "whisper words of wisdom";
    let cancion = "";

    for (let index = 1; index < 13; index++) {
        switch (index) 
        {
            case 5:
                cancion += sentence2+", "; 
                break;
            case 11:
                cancion += sentence3+", ";
                break;
            case 12:
                cancion += sentence1; 
                break;
            default:
                cancion += sentence1+", "; 
                break;
        }
    }
    return cancion;
}

console.log(sing());