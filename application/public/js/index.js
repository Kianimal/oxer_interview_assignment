window.onload = function(){
    let firstNames = ["Archer","Bradley","Carlos","Dahlia","Edris","Frank","Gregory","Hannah","Ingrid",
                "Isla","Irvine","Jacob","Katherine","Kameron","Larry","Lenora","Mary","Nicolas",
                "Olivia","Perry","Rachel","Sindel","Tyler","Umberto","Vicky","Wesly","Xena","Yamilia","Zondolfo"];

    let lastNames = ["Adams","Bartolo","Crestmire","Daniels","Elsberg","Freeman","Grey","Harlowe","Ilba","Jacobson",
                    "Kardashian","Lyon","Mackie","Newgarde","Octavio","Parsons","Reynolds","Simon","Torreto","Ulsich",
                    "Vader","Wilde","Xavier","Yanni",];

    let generatedEmployeeList = [];

    let selectedEmployeeList = [];

    function generateUniqueName(arr){
        let firstName = firstNames[Math.floor(Math.random()*Math.floor(firstNames.length))];
        let lastName = lastNames[Math.floor(Math.random()*Math.floor(lastNames.length))];
        let name = firstName + " " + lastName;
        if(arr.length === 0){
            return name;
        }
        else{
            for(let i=0;i<arr.length;i++){
                if(name === arr[i] || name === arr[i].name){
                    generateUniqueName(arr);
                }
            }
            return name;
        }
    }
    
    function generateEmployeeID() {
        return Math.floor(Math.random()*Math.floor(10000));
    }
    
    function isUnique(name,nameArray) {
        if(nameArray.length === 0){
            return true;
        }
        else{
            for(let j=0;j<nameArray.length;j++){
                if(name === nameArray[j] || name === nameArray[j].name){
                    return false;
                }
            }
            return true;
        }
    }

    function generateEmployeeID() {
        return Math.floor(Math.random()*Math.floor(1000));
    }
    
    function populateArray(arr,size){
        for (let i=0;i<size;i++){
            let name = generateUniqueName(arr);
            if(isUnique(name,arr)){
                let newEmployee = {name: name,
                                employee_id: generateEmployeeID(),
                                start_date: new Date()};
                arr.push(newEmployee);
            }
            else{i--};
        }
        console.log(generatedEmployeeList);
    }

    populateArray(generatedEmployeeList,200);

    var generatedDataPackage = {list: generatedEmployeeList, company: "ibm"};

    $.post("/api/populateDB", generatedDataPackage)
        .then($.get("/api/all/ibm", function(res) {
            var row = $("<div>");
            row.addClass("employeeTotal");
            row.append("<p>" + res.length + " employees</p>");
            $(".1").append(row);
            
        }));

    generatedEmployeeList = [];

    populateArray(generatedEmployeeList,100);

    var generatedDataPackage = {list: generatedEmployeeList, company: "lyft"};

    $.post("/api/populateDB", generatedDataPackage)
        .then($.get("/api/all/lyft", function(res) {
            var row = $("<div>");
            row.addClass("employeeTotal");
            row.append("<p>" + res.length + " employees</p>");
            $(".2").append(row);
            
        }));

        generatedEmployeeList = [];

    populateArray(generatedEmployeeList,300);

    var generatedDataPackage = {list: generatedEmployeeList, company: "ihop"};

    $.post("/api/populateDB", generatedDataPackage)
        .then($.get("/api/all/ihop", function(res) {
            var row = $("<div>");
            row.addClass("employeeTotal");
            row.append("<p>" + res.length + " employees</p>");
            $(".3").append(row);
            
        }));
}