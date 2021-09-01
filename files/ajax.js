function ajaxCall(value){
    var vaccineName = document.getElementById('vaccine_name').value;
    var campDate = document.getElementById('campDate').value;
    var startNo = document.getElementById('startNo').value;
    var endNo = document.getElementById('endNo').value;
    var noDate = document.getElementById('noDate').checked;
    if(value == 'Generate Tokens'){
        url = 'files/rssb_token.html?vaccineName=' + encodeURIComponent(vaccineName) + '&campDate=' + campDate + '&startNo=' + startNo + '&endNo=' + endNo + '&noDate=' + noDate;
    }
    else if(value == 'Generate Registration Slips'){
        url = 'files/rssb_reg.html?vaccineName=' + encodeURIComponent(vaccineName) + '&campDate=' + campDate + '&startNo=' + startNo + '&endNo=' + endNo + '&noDate=' + noDate;
    }
    document.location.href = url;
}
function validateForm(id) {
    let vaccine_name = document.forms["campDetails"]["vaccine_name"].value;
    let campDate = document.forms["campDetails"]["campDate"].value;
    let startNo = document.forms["campDetails"]["startNo"].value;
    let endNo = document.forms["campDetails"]["endNo"].value;
    startNo = Number(startNo);
    endNo = Number(endNo);
    if (vaccine_name === "") {
      alert("Please Select Vaccine Name");
      return false;
    }
    else if (campDate == "" ||  noDate == false) {
        alert("Please Enter Date");
        return false;
    }
    else if (startNo == "" || isNaN(startNo) || startNo <= 0 ) {
        alert("Please Enter valid Starting Serial Number");
        return false;
    }
    else if (endNo == "" ||isNaN(endNo) || endNo <= 0 ) {
        alert("Please Enter valid Last Serial Number");
        return false;
    }
    else if (startNo > endNo){
        alert("Starting serial no. cannot be greater than or equal to last serial no.");
        return false;
    }
    else{
        ajaxCall(id.value);
    }
}


