// $(document).ready(function () {
var products = [
  {
    id: "100",name: "iPhone 4S",brand: "Apple",os: "iOS",
  },
  {
    id: "101",name: "Moto X",brand: "Motorola",os: "Android",
  },
  {
    id: "102",name: "iPhone 6",brand: "Apple",os: "iOS",
  },
  {
    id: "103",name: "Samsung Galaxy S",brand: "Samsung",os: "Android",
  },
  {
    id: "104",name: "Google Nexus",brand: "ASUS",os: "Android",
  },
  {
    id: "105",name: "Surface",brand: "Microsoft",os: "Windows",
  },
];

var table =
  "<table border='1px'><tr><th>ID</th><th>NAME</th><th>Brand</th><th>operating-System</th><th>Remove</th></tr>";
products.forEach((element) => {
  table +=
    "<tr><td>" +
    element.id +
    "</td><td>" +
    element.name +
    "</td><td>" +
    element.brand +
    "</td><td>" +
    element.os +
    "</td><td>" +
    "<p id='para'>X<p>" +
    " </td></tr>";
  document.getElementById("p1").innerHTML = table;
});
table += "</table>";
$(document).ready(function () {
    $("#fil").click(function () {
    var sel = $("#OS1").val();
    var sel2=$("#sel2").val();
    flag=false;    
    var table='<table border="1px"><tr><th>ID</th><th>NAME</th><th>Brand</th><th>operating-System</th><th>Remove</th></tr>'
        products.forEach((element) => {
            console.log(sel);
            if(element.os.toLowerCase() == sel){
                  table+=
                        "<tr><td>"+
                        element.id+
                        "</td><td>"+
                        element.name+
                        "</td><td>"+
                        element.brand+
                        "</td><td>"+
                        element.os+
                        "</td><td>"+
                        '<p id="para">X</p>'+
                        "</td></tr>"
                        flag=true;
                      
                }
                else if(element.brand.toLowerCase()==sel2){
  
                        table +=
                          "<tr><td>" +
                          element.id +
                          "</td><td>" +
                          element.name +
                          "</td><td>" +
                          element.brand +
                          "</td><td>" +
                          element.os +
                          "</td><td>"+
                        '<p id="para">X</p>'+
                          "</td></tr>"
                        flag=true;
                  }
                });  
                table+='</table>'
                  $("#p2").html(table);              
 })
})