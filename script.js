document.addEventListener("DOMContentLoaded", function() {

  var copyButton = document.getElementById("copy-button");
  
  var codeElement = document.getElementById("code");
  
    copyButton.addEventListener("click", function() {
  
      navigator.clipboard.writeText(codeElement.textContent)
        .then(() => {
          copyButton.textContent = "Copied!";
  
          setTimeout(function() {
            copyButton.textContent = "Copy";
          }, 1000);
        })
    });
  });