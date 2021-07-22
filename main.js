name_of_the_student_array=[];
function submit()
{
var display_student_array=[];
for (g=1;g<=4;g++) {
 var name_of_the_student=document.getElementById("name_of_the_student_"+g).value;
 name_of_the_student_array.push(name_of_the_student);   
}
var leanth_of_student_array=name_of_the_student_array.length;
for (var k=0;k<leanth_of_student_array;k++) {
display_student_array.push("<h4>Name-"+name_of_the_student_array[k]+"</h4>");
}
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var remove_commas=display_student_array.join(" "); 
document.getElementById("display_name_without_commas").innerHTML=remove_commas; 
document.getElementById("sort_button").style.display="inline-block";
}