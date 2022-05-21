
window.onload = function() {
   
    handleClassNames();

    let td = new Date();
    td = td.toLocaleString("en-US", {
        dateStyle: "full"
    });
    td = td.toString();
    console.log(td);

    let elem = document.getElementById("todays-date");
    elem.innerHTML = td;

    for (const key in localStorage) {
        // console.log(Number(key);
        if (Number(key)) {}
        let txtID = "txt-" + key;
        let txtArea = document.getElementById(txtID);
        let txtToInsert = localStorage.getItem(key);
        if (txtArea != null) {
            txtArea ["value"] = txtToInsert;


        } 

    }

    handleClassNames();
}

//change the color of the text area based on the current hour
function handleClassNames() {

    let txtBoxes = []
    let currBox = 9;
    const currHour = new Date().getHours();
    console.log("CURR HOUR::: " + currHour);
    
    for (let i = 0; i < 9; i++) {
        txtBoxes[i] = document.getElementById("txt-" + currBox);

        if (currBox < currHour) {
            txtBoxes[i].className = "past";
        } 

        else if (currBox == currHour) {
            txtBoxes[i].className = "present";
        }

        else {
            txtBoxes[i].className = "future";
        }
        
        ++currBox;
   
    }
}

function handleButtonClick(btnID) {

    let txtAreaID = "txt-" + btnID;
    let txtToSave = document.getElementById(txtAreaID);
    txtToSave = txtToSave["value"];
    if (txtToSave.length > 0) {
        localStorage.setItem(btnID, txtToSave);
        let txtToInsert = localStorage.getItem(key);
        if (txtToInsert != null) {
            txtAreaString["value"] = txtToInsert;

        }
    };
}
            
