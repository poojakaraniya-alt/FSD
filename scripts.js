// ----- DOM Manipulation -----

// Change text using innerHTML
document.getElementById("changeTextBtn").addEventListener("click", function() {
  let info = document.getElementsByClassName("info")[0];
  info.innerHTML = "Text changed using innerHTML!";
});

// Change color and position
document.getElementById("changeColorBtn").addEventListener("click", function() {
  let heading = document.getElementById("heading");
  heading.style.color = "blue";
  heading.style.position = "relative";
  heading.style.left = "20px";
});

// Change image source
document.getElementById("changeImageBtn").addEventListener("click", function() {
  document.getElementById("myImage").src = "https://via.placeholder.com/200/ff0000/ffffff?text=New+Image";
});

// Add a text node
document.getElementById("addNodeBtn").addEventListener("click", function() {
  let newNode = document.createTextNode(" → New text node added!");
  document.getElementById("heading").appendChild(newNode);
});

// Delete a node
document.getElementById("deleteNodeBtn").addEventListener("click", function() {
  let para = document.getElementsByTagName("p")[0];
  if (para) {
    para.remove();
  }
});

// ----- jQuery Section -----

$(document).ready(function() {
  // Change button text
  $("#jqBtn").click(function() {
    $(this).text("Text Changed with jQuery!");
  });

  // Set background image
  $("body").css("background-image", "url('https://www.transparenttextures.com/patterns/white-paper.png')");

  // Access form data
  $("#formBtn").click(function() {
    let name = $("#nameInput").val();
    $("#output").text("You entered: " + name);
  });

  // Add attribute
  $("#myImage").attr("title", "This image source was changed dynamically!");
});
