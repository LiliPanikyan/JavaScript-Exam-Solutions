function solve(input) {
    
    var map = {};
    for (var i = 0; i < input.length; i++) {
        var str = input[i];
        var arr = str.split('|');
        var student = arr[0].trim();
        var course = arr[1].trim();
        var gradeStr = arr[2].trim();
        var grade = Number(gradeStr);
        var visitsStr = arr[3].trim();
        var visits = Number(visitsStr);
        
        if (!(course in map)) {
            map[course] = { studentsList: [], gradesList: [], visitsList: [] };
        }
        map[course].gradesList.push(grade);
        map[course].visitsList.push(visits);
        if (map[course].studentsList.indexOf(student) == -1) {
            map[course].studentsList.push(student);
        }
    }
    var output = {};
    var courses = Object.keys(map).sort();
    for (var c in courses) {
        var courseName = courses[c];
        var courseInfo = {
            avgGrade: average(map[courseName].gradesList),
            avgVisits: average(map[courseName].visitsList),
            students: map[courseName].studentsList.sort()
        };
        output[courseName] = courseInfo;
    }
    
    console.log(JSON.stringify(output))

    function average(arr) {
        var sum = 0;
        for (var i in arr) {
            sum += arr[i];
        }
        var avg = sum / arr.length;
        avg = Number(avg.toFixed(2));
        return avg;
    }
}