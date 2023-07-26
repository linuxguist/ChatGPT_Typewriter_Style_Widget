
function printStringByLetter(paragraph_id,myDiv_id) {
    // console.log(paragraph_id);
    // console.log(myDiv_id);
    var myDiv = document.getElementById(myDiv_id);

    myDiv.style.display = "block";

    var text = document.getElementById(paragraph_id).innerHTML;
    // myDiv.innerHTML = "";
    document.getElementById(myDiv_id).innerHTML = "";
    // console.log(text.length);
    var index = 0;
    var intervalId = setInterval(function() {
        myDiv.innerHTML += text.charAt(index);
        index++;
        // console.log(index);
        if(index == text.length) {
            clearInterval(intervalId);
            index = 0;
            text = "";
        }
    }, 50);    
}    
