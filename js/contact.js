// $(document).ready(function() {
//     $("#contact-form").submit(function(e) {
//         e.preventDefault();
//         var name = $("#contact_name").val();
//         var email = $("#contact_email").val();
//         var message = $("#contact_message").val();
//         $("#returnmessage").empty(); // To empty previous error/success message.
//         // Checking for blank fields.
//         if (name == '' || email == '') {
//             alert("Please Fill Required Fields");
//         } else {           
//             // Returns successful data submission message when the entered information is stored in database.
//             $.post(
//                 "bin/contact.php", 
//                 {
//                     name: name,
//                     email: email,
//                     message: message,
//                 }, 
//                 function(data) {
//                     $("#returnmessage").append(data); // Append returned message to message paragraph.
//                     alert(data);
//                     if (data == "Your Query has been received, We will contact you soon.") {
//                         $("#contact-form")[0].reset(); // To reset form fields on success.
//                     }
//                 }
//             );

//         }
//     });
// });