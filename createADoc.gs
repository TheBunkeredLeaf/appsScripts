function createDocument(){
// Create and open a document.
// After = in line 4 put text for the doc :)
var title = 'Untitled Document';
var hello = (title +  ' Created By Google Apps Script'); 
doc = DocumentApp.create(hello);
};
