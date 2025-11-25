let firstName = "Adam";
let middleName = "Lazuardi";
let lastName = "Haris";
let fullName = "Adam" + " Lazuardi " + "Haris";

let age = 28;
let gpa = 3.15;
let gradYear = 2024;

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
