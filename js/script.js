$(document).ready(function () {

    $("#field").keyup(function () {
        $("#x").fadeIn();
        if ($.trim($("#field").val()) == "") {
            $("#x").fadeOut()
        }
    });

    $("#x").click(function () {
        $("#field").val("");
        $(this).hide();
    });

    $("#field").bind("enterKey", function (e) {
        search();
    });

    $("#field").keyup(function (e) {
        if (e.keyCode == 13) {
            $(this).trigger("enterKey");
        }
    });

    $("#submit").click(function () {
        search();
    });
    
    function search() {
        $(".nDiv").remove();
        var API_KEY = '4297880-6514231e2ee97773fdc174012';
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent($("#field").attr("value"));
        $.getJSON(URL, function (data) {
            if (parseInt(data.totalHits) > 0) {
                $.each(data.hits, function (i, hit) {
                    var div = document.createElement("DIV");
                    div.className = "nDiv";
                    div.style.width = "275px";
                    div.style.height = "183px";
                    div.style.padding = "3px";
                    div.style.display = "inline-block";
                    div.style.verticalAlign = "middle";
                    div.style.textAlign = "center";
                    var a = document.createElement("a");
                    a.setAttribute("href", hit.pageURL)
                    var img = document.createElement("IMG");
                    img.setAttribute("src", hit.webformatURL);
                    img.style.maxWidth = "100%";
                    img.style.maxHeight = "100%";
                    a.appendChild(img);
                    div.appendChild(a);
                    document.body.appendChild(div);
                    console.log(hit.pageURL);
                });
            }
            else
                console.log('No hits');
        });
    };
});
