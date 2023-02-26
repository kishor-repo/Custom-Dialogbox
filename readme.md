
# Introduction
Dialogbox is a lightweight library for creating dialogbox messages in browsers. It supports three methods: Alert, Confirm, and Prompt.

# Installation
To use Dialogbox, add dialogbox.css to the <head> section of your HTML code and dialogbox.js to the <body> section:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Custom Dialog Box</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Kishor-550/Custom-Dialogbox@main/dialogbox.css">
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/gh/Kishor-550/Custom-Dialogbox@main/dialogbox.js"></script>
  </body>
</html>
```

Usage
Once you've added the necessary files to your project, you can use Dialogbox to create a custom dialog box. The following parameters are available for each method:

`message`: The message to display in the dialog box.<br>
`title` (optional): The title or heading to display in the dialog box.<br>
`accept` (optional): The text to display on the accept button.<br>
`cancel` (optional): The text to display on the cancel button.<br>

```JS
DialogBox.prompt(message, title, inputType, accept, cancel)
DialogBox.confirm(message, title,accept,cancel)
DialogBox.alert(message, title)
```

Prompt
```JS
DialogBox.prompt(message, title, inputType, accept, cancel)
```
	
Example:
```JS
DialogBox.prompt("Please enter your name:", null, "text", "Save", "Cancel")
.then((result) => {
	console.log(result);
});
```		
			
Confirm
```JS
DialogBox.confirm(message, title,accept,cancel)
```
	
Example:
```JS
DialogBox.confirm("Are you sure want to delete this Account",null,"Yes,Delete","No")
.then((result) => {
	console.log(result);
});
```
	
Alert
```JS
DialogBox.alert(message, title)
```
	
Example:
```JS
DialogBox.alert("Success", null);
```

# Conclusion
Dialogbox is a simple and easy-to-use library for creating custom dialog boxes in your web applications. With just a few lines of code, you can create personalized prompts, confirms, and alerts to enhance your user experience.
