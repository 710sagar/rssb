function ajaxCall(value){
    var vaccineName = document.getElementById('vaccine_name').value;
    var campDate = document.getElementById('campDate').value;
    var startNo = document.getElementById('startNo').value;
    var endNo = document.getElementById('endNo').value;
    if(value == 'Generate Tokens'){
        url = 'files/rssb_token.html?vaccineName=' + encodeURIComponent(vaccineName) + '&campDate=' + campDate + '&startNo=' + startNo + '&endNo=' + endNo;
    }
    else if(value == 'Generate Registration Slips'){
        url = 'files/rssb_reg.html?vaccineName=' + encodeURIComponent(vaccineName) + '&campDate=' + campDate + '&startNo=' + startNo + '&endNo=' + endNo;
    }
    document.location.href = url;
}
function validateForm(id) {
    let vaccine_name = document.forms["campDetails"]["vaccine_name"].value;
    let campDate = document.forms["campDetails"]["campDate"].value;
    let startNo = document.forms["campDetails"]["startNo"].value;
    let endNo = document.forms["campDetails"]["endNo"].value;
    if (vaccine_name == "0") {
      alert("Please Select Vaccine Name");
      return false;
    }
    else if (campDate == "") {
        alert("Please Enter Date");
        return false;
    }
    else if (startNo == "") {
        alert("Please Enter Starting Serial Number");
        return false;
    }
    else if (endNo == "") {
        alert("Please Enter Last Serial Number");
        return false;
    }
    else if (startNo > endNo){
        alert("Starting serial no. cannot be greater than or equal to last serial no.")
    }
    else{
        ajaxCall(id.value);
    }
}


