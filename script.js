<Script>

    function jumpToSection() {
        //Grab the element from the seach bar
        const input = document.getElementById("search").value.toLowerCase();

        // Check if input matches any ids
        if (input === "bio") {
            window.location.hash = "bio";

        } else if (input === "contact") { 
            window.location.hash = "contact-form"

        } else {
            //if no match return, no match found
            console.log("No match found.")
        }
    }
</Script>