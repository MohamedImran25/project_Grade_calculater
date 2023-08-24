function calculate(){
    var grade = Number(document.getElementById('value').value);
    if (grade >= 91){
        alert( "GRADE A");
    }
    else if (grade>= 71){
        alert( "GRADE B");
    }
    else if (grade>= 51){
        alert( "GRADE C");
    }
    else if (grade<= 50){
        alert( "GRADE D");
    }
}
