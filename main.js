document.getElementById("myForm").addEventListener("submit", function(event) {
 event.preventDefault(); 
 // Prevent default form submission
 
 // Collect form data
 var firstName = document.getElementById("first").value;
 var lastName = document.getElementById("last").value;
 var MobileNumber = document.getElementById("no").value;
 var email = document.getElementById("email").value;
 var address = document.getElementById("address").value;

 // Generate PDF
 var doc = new jsPDF();
 doc.text("Name: " + firstName +  ' ' + lastName, 10, 10);
 doc.text("Mobile Number: " + MobileNumber , 10,20);
 doc.text("Email: " + email, 10, 30);
 doc.text("address: " + address, 10, 40);
 
// Add more text or formatting as needed

 // Save the PDF
 doc.save("form_data.pdf");
});
