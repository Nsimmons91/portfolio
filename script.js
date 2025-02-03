
   function jumpToSection() {
       const input = document.getElementById("search").value.toLowerCase();

       if (input === "bio") {
           window.location.hash = "bio";
       } else if (input === "contact") {
           window.location.hash = "contact-form";
       } else {
           alert("No match found. Please type 'bio' or 'contact'."); // Added feedback for no match
       }
   }


