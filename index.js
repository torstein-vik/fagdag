var weeknum;
var personname = "";

$(function(){


    setWeekNum(getWeekNumber(new Date()) - 34);

    $.each(personSpec, function(name){
        $("#setname > select").append("<option>"+name+"</option>");
    });

    $("#setname > select").change(function(){
        setName($("#setname > select option:selected").html());
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
    $("h3#name").html(personname);
}

function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo;
}
