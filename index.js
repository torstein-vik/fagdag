$(function(){
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

    resolveOutput(name);

    $("#output").show();
}

function unsetName(){
    $("#output").hide();

    localStorage.setItem('fagdagName', undefined);

    $("#setname").show();
}


function resolveOutput(name){

}
