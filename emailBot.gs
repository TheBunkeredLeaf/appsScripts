function sendEmail() {
var ss = SpreadsheetApp.getActiveSpreadsheet()
var sheet1=ss.getSheetByName('Sheet1');
var emailAddress = sheet1.getRange(2,1).getValue();
var subject = sheet1.getRange(2,2).getValue();
var message = sheet1.getRange(2,3).getValue();
MailApp.sendEmail(emailAddress, subject, message)
}
