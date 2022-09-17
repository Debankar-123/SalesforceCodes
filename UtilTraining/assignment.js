var Fname;
var Lname;
var Email;
var Phone;
var tabData = [];

function fname() {
  Fname = document.getElementById("fnm").value;
}
function lname() {
  Lname = document.getElementById("lnm").value;
}
function email() {
  Email = document.getElementById("eml").value;
}
function pho() {
  Phone = document.getElementById("ph").value;
}

function subme() {
  var table = document.getElementById("tab");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell2 = row.insertCell(3);
  var cell2 = row.insertCell(4);
  adjustSerial();
  var record = {
    Firstname: Fname,
    Lastname: Lname,
    Emails: Email,
    Phones: Phone,
  };
  tabData.push(record);
  console.log(tabData);
  console.log(record);
  assignValue();
}
function refme() {
  document.getElementById("fnm").value = "";
  document.getElementById("lnm").value = "";
  document.getElementById("eml").value = "";
  document.getElementById("ph").value = "";
}
function adjustSerial() {
  var table = document.getElementById("tab");
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[0].innerHTML = "" + i;
  }
}
function assignValue() {
  var table = document.getElementById("tab");
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[1].innerHTML = tabData[i - 1].Firstname;
    table.rows[i].cells[2].innerHTML = tabData[i - 1].Lastname;
    table.rows[i].cells[3].innerHTML = tabData[i - 1].Emails;
    table.rows[i].cells[4].innerHTML = tabData[i - 1].Phones;
  }
}
