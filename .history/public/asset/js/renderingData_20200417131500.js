// showTime();
var renderData = function(tipe = 'global', elements = {}, parent = null){
    var data;
    $("#"+parent).hide();
    if(tipe == 'global'){
        var response = globalStats();
        data = response.responseJSON
        keys = Object.keys(elements);
        keys.forEach(element => {
            var jumlah = data[elements[element]] ? data[elements[element]] : 0;
            $("#" + element).append("<u><b>" + jumlah + " </u></b> Orang");
        });
        var tanggal = moment(data.statistic_taken_at).format("dddd, DD-MM-YYYY LTS");
        $("#date-update").text('');
        $("#date-update").append("Update "+tanggal)
        isLoading = false;
        
    }
    if(tipe == 'indonesia'){
        var response = getStatsOfCountry();
        data = response.responseJSON.latest_stat_by_country[0];
        keys = Object.keys(elements);
        keys.forEach(element => {
            var jumlah = data[elements[element]] ? data[elements[element]] : 0;
            if(element == 'kasus-indonesia')
                $("#" + element).append("Total ada <u><b>" + jumlah + " </u></b> kasus dan  <u><b>" + data['active_cases'] + " </u></b> orang masih dirawat");
            else
                $("#" + element).append("<u><b>" + jumlah + "<u><b> Orang");
        });
        isLoading = false;
    }
    if(!isLoading)
        $("#" + parent).show();    
}
var elements = {
    'kasus-global' : 'total_cases',
    'sembuh-global': 'total_deaths',
    'meninggal-global': 'total_recovered',
    'kasus-baru-global': 'new_cases',
    'meninggal-baru-global': 'new_deaths',
}

function renderPerkembangan(data, tipe='line'){
    if(data){
        switch(tipe){
            case 'line':
                var ctx = $("http://localhost/covid19/public/asset/vendor/chart.js/Chart.js#line-chart");
                var myLineChart = new Chart(ctx, {
                    type: 'line',
                    data: data,
                    options: options,
                    data: [{
                        x: 10,
                        y: 20
                    }, {
                        x: 15,
                        y: 10
                    }]
                });
            
        }
    }
}

function renderRealTimeData(){
    showTimer();
    $.when(renderData('global', elements, 'resumeGlobal')).done(
        ()=>{
            elements = {
                'kasus-indonesia' : 'total_cases',
                'sembuh-indonesia': 'total_deaths',
                'meninggal-indonesia': 'total_recovered',
                'kasus-baru-indonesia': 'new_cases',
                'meninggal-baru-indonesia': 'new_deaths',
            }
            renderData('indonesia', elements, 'resumeIndonesia');
        }
    );
    var dataPerkembangan = null;
    $.when(getCustomStats()).done(function(){
        renderPerkembangan(dataPerkembangan);
    });
}
renderRealTimeData();
setInterval(renderRealTimeData, 600000)
