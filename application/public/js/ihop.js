$.get("/api/all/ihop", function(res) {
    for(let i=0;i<res.length;i++){
        let employeeWrap = $("<div>");
        let employeeName = $("<p>");
        let employeeID = $("<p>");
        let employeeStart = $("<p>");

        employeeName.text("Employee name: " + res[i].employee_name);
        employeeWrap.append(employeeName);
        employeeID.text("Employee ID: " + res[i].employee_id);
        employeeWrap.append(employeeID);
        employeeStart.text("Employee start date: " + res[i].start_date);
        employeeWrap.append(employeeStart);

        employeeWrap.addClass("employeeSingleWrap");

        $(".employeeInfoWrap").append(employeeWrap);
        console.log(res[i]);
    }
});

$(".innerJoin").click(function(event){
    event.preventDefault();
    $(".employeeInfoWrap").empty();
    $(".employeeInfoWrap").append("<p>These employees work at both IHOP and IBM</p>");
    let company = {company: "ibm"};
    $.get("/api/inner/ihopibm", function(res) {
        for(let i=0;i<res.length;i++){
            let employeeWrap = $("<div>");
            let employeeName = $("<p>");
            let employeeID = $("<p>");
            let employeeStart = $("<p>");
    
            employeeName.text("Employee name: " + res[i].employee_name);
            employeeWrap.append(employeeName);
            employeeID.text("Employee ID: " + res[i].employee_id);
            employeeWrap.append(employeeID);
            employeeStart.text("Employee start date: " + res[i].start_date);
            employeeWrap.append(employeeStart);
    
            employeeWrap.addClass("employeeSingleWrap");
    
            $(".employeeInfoWrap").append(employeeWrap);
            console.log(res[i]);
        }
    });
});

$(".leftJoin").click(function(event){
    event.preventDefault();
    $(".employeeInfoWrap").empty();
    $(".employeeInfoWrap").append("<p>These employees all work at IHOP, and some of them also work at LYFT</p>");
    $(".employeeInfoWrap").append("<p>There is currently no way of tracking which is which</p>");
    $.get("/api/left/ihoplyft", function(res) {
        for(let i=0;i<res.length;i++){
            let employeeWrap = $("<div>");
            let employeeName = $("<p>");
            let employeeID = $("<p>");
            let employeeStart = $("<p>");
    
            employeeName.text("Employee name: " + res[i].employee_name);
            employeeWrap.append(employeeName);
            employeeID.text("Employee ID: " + res[i].employee_id);
            employeeWrap.append(employeeID);
            employeeStart.text("Employee start date: " + res[i].start_date);
            employeeWrap.append(employeeStart);
    
            employeeWrap.addClass("employeeSingleWrap");
    
            $(".employeeInfoWrap").append(employeeWrap);
            console.log(res[i]);
        }
    });
});