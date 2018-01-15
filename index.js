var weeknum;
var personname = "";


$(function(){


    $("#output").hide();

    setWeekNum(getWeekNumber(new Date()) - 34);

    $.each(personSpec, function(name){
        $("#setname > select").append("<option>"+name+"</option>");
    });

    $("#setname > select").change(function(){
        setName($("#setname > select option:selected").html());
        $("#setname > select option:disabled").prop('selected', true);
    });

    var name = localStorage.getItem('fagdagName');

    if(name){
        setName(name);
    }
});

function setName(name){
    $("#setname").hide();

    localStorage.setItem('fagdagName', name);
    personname = name;

    resolveOutput();

    $("#output").show();
}

function unsetName(){
    $("#output").hide();

    localStorage.removeItem('fagdagName');

    $("#setname").show();
}

function setWeekNum(week) {
    week = week % 52;
    if( week < 0) week += 52;

    weeknum = week;
}

function resolveOutput(){
    $("#name").html(personname);

    var date = getDateOfISOWeek((weeknum + 34), 2017);

    date.setDate(date.getDate() + 4);

    $("#date").html(date.toLocaleDateString("nb-NO", {weekday: 'long', month: 'long', day: 'numeric'}));

    if (weeknum >= 0 && weeknum < weekSpec.length) {
        var week = weekSpec[weeknum];

        var data = resolveData(week);
        

        $("#subject").html(data[0]);
        $("#room")   .html(data[1]);
    } else {
        $("#subject").html("Denne uken er ikke lagt til");
    }
}

function resolveData(week) {
        
    if (week === 0){
        return ["Ordinær timeplan", ""];
    } 
    
    if (week === -1) {
        return ['Fri!!', ""];
    } 
    
    if (typeof week === 'number' && week >= 1 && week <= 4){
        var data = personSpec[personname][week - 1];
        if (data == 0) {
            return ['Fri!!', ""];
        } else {
            return data;
        }
    } 
    
    if (typeof week === 'number' && week >= 5 && week <= 6){
        var data = commonSpec[week - 5];
        if (data == 0) {
            return ['Fri!!', ""];
        } else {
            return data;
        }
    } 
    
    if (typeof week === 'string') {
        return [week, ""];
    }
    
    alert("Systemfeil. Si det til Torstein.");
    return ["", ""];
    
}

function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo;
}

function getDateOfISOWeek(w, y) {
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
}
