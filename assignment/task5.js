var grade = [45, 60, 90, 75, 67, 55, 30];
for (var i = 0; i < grade.length; i++) {
    if (grade[i] < 50) {
        grade.splice(i, 1);
    }
}
console.log("passed person", grade);
