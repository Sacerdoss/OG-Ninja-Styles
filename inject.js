let njaTitle = "OGame Ninja";
$(document).ready(function () {
    let currentUrl = document.location.href;
    if (document.title.startsWith(njaTitle)) {
        addViewportTag();
        if (!window.matchMedia('(max-device-width: 576px)').matches) {
            $("#logs > .data").css("overflow", "hidden");
            return;
        }
        currentUrl = currentUrl.replace(/http[s]{0,1}:\/\/[^\/]+/, "");
        if (currentUrl.match(/^\/$/)) {
            startPage();
        } else if (currentUrl.match(/^\/bots\/\d+$/)) {
            botPage();
        } else if (currentUrl.match(/^\/bots\/\d+\/brain$/)) {
            brainPage();
        } else if (currentUrl.match(/^\/bots\/\d+\/defender$/)) {
            defenderPage();
        } else if (currentUrl.match(/^\/bots\/\d+\/scanner$/)) {
            scannerPage();
        } else if (currentUrl.match(/^\/bots\/\d+\/hunter$/)) {
            hunterPage();
        } else if (currentUrl.match(/^\/bots\/\d+\/farmer(\?.*){0,1}$/)) {
            farmerPage();
        } else if (currentUrl.match(/^\/bots\/\d+\/farmer\/sessions\/\d+(\?.*){0,1}$/)) {
            farmerDetailPage();
        } else if (currentUrl.match(/^\/bots\/\d+\/activities(\?.*){0,1}$/)) {
            activitiesPage();
        } else if (currentUrl.match(/^\/bots\/\d+\/logs(\?.*){0,1}$/)) {
            logsPage();
        } else if (currentUrl.match(/^\/bots\/\d+\/settings(\?.*){0,1}$/)) {
            settingsPage();
        } else if (currentUrl.match(/^\/bots\/\d+\/flights(\?.*){0,1}$/)) {
            flightsPage();
        } else {
            console.log(currentUrl);
        }
    }
});

function botPage() {
    $("body").attr("id", "botpage");
    $("body").addClass("botpage");
    fixBotNavigation();
}

function brainPage() {
    $("body").attr("id", "brainpage");
    $("body").addClass("brainpage");
    $("table").wrap("<div class=\"table-wrap\"></div>");
    fixBotNavigation();
}

function defenderPage() {
    $("body").attr("id", "defenderpage");
    $("body").addClass("defenderpage");
    $("table").wrap("<div class=\"table-wrap\"></div>");
    fixBotNavigation();
}

function scannerPage() {
    $("body").attr("id", "scannerpage");
    $("body").addClass("scannerpage");
    fixBotNavigation();
}

function hunterPage() {
    $("body").attr("id", "hunterpage");
    $("body").addClass("hunterpage");
    $("table").wrap("<div class=\"table-wrap\"></div>");
    fixBotNavigation();
}

function farmerPage() {
    $("body").attr("id", "farmerpage");
    $("body").addClass("farmerpage");
    $("table").wrap("<div class=\"table-wrap\"></div>");
    fixBotNavigation();
}

function farmerDetailPage() {
    $("body").attr("id", "farmerdetailpage");
    $("body").addClass("farmerdetailpage");
    $("table").wrap("<div class=\"table-wrap\"></div>");
    fixBotNavigation();
}

function activitiesPage() {
    $("body").attr("id", "activitiespage");
    $("body").addClass("activitiespage");
    $("table").wrap("<div class=\"table-wrap\"></div>");
    fixBotNavigation();
}

function logsPage() {
    $("body").attr("id", "logspage");
    $("body").addClass("logspage");
    fixBotNavigation();
}

function settingsPage() {
    $("body").attr("id", "settingspage");
    $("body").addClass("settingspage");
    fixBotNavigation();
}

function flightsPage() {
    $("body").attr("id", "flightspage");
    $("body").addClass("flightspage");
    $("table").wrap("<div class=\"table-wrap\"></div>");
    $("div.table-wrap:nth-child(1) > table:nth-child(1)").attr("id", "flighttargets");
    $("#flighttargets > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1)").html("Geschw.");
    fixBotNavigation();
}

function startPage() {
    $("body").attr("id", "startpage");
}

function fixBotNavigation() {
    let origHref = $("#app .row .list-group > a.active").attr("href");
    $("#app .row .list-group > a:not(.active)").hide();
    $("#app .row .list-group > a.active").attr("href", "javascript:void(0)");
    $("#app .row .list-group > a.active").click(function () {
        $("#app .row .list-group > a:not(.active)").show(function () {
            $("#app .row .list-group > a.active").attr("href", origHref);
        });
    });
}

function addViewportTag() {
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
}