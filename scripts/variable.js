var firstName = "Adam";
var middleName = "Lazuardi";
var lastName = "Haris";
var fullName = "Adam" + " Lazuardi " + "Haris";

var age = 28;
var gpa = 3.15;
var gradYear = 2024;

document.writeln("<textarea cols='50' rows='10'>");
document.write("Name: " + fullName + "\n");
document.write(
  "\nFirst Name: " +
    firstName +
    "\nMiddle Name: " +
    middleName +
    "\nLast Name: " +
    lastName +
    "\n",
);
document.write("\nAge: " + age);
document.write("\nGPA: " + gpa);
document.write("\ngradYear: " + gpa);
document.writeln("</textarea>");
