<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if form fields are set
    if (isset($_POST['name'], $_POST['email'], $_POST['message'])) {
        // Sanitize input data
        $name = htmlspecialchars(trim($_POST['name']));
        $email = htmlspecialchars(trim($_POST['email']));
        $message = htmlspecialchars(trim($_POST['message']));

        // Validate inputs
        if (empty($name) || empty($email) || empty($message)) {
            echo "All fields are required!";
            exit;
        }

        // Validate email format
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Invalid email address!";
            exit;
        }

        // Prepare the data to be saved
        $data = "Name: $name\nEmail: $email\nMessage: $message\n\n";

        // Define the file to save the data
        $file = __DIR__ . '/contacts.txt'; // Use __DIR__ to ensure the correct directory

        // Save the data to the file
        if (file_put_contents($file, $data, FILE_APPEND | LOCK_EX) !== false) {
            // Display a success message or redirect to a thank you page
            echo "Thank you for contacting us!";
        } else {
            // Handle error in case the file could not be written
            echo "Sorry, your message could not be saved at this time.";
        }
    } else {
        echo "Invalid form submission!";
    }
} else {
    echo "Invalid request!";
}
?>
