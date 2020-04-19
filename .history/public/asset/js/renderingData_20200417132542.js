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
    console.log(data);
    
    if(data){
            //get the line chart canvas
            var ctx = $("#line-chart");                  
            //line chart data
            var data = {
                labels: ["match1", "match2", "match3", "match4", "match5"],
                datasets: [
                {
                    label: "TeamA Score",
                    data: [10, 50, 25, 70, 40],
                    backgroundColor: "blue",
                    borderColor: "lightblue",
                    fill: false,
                    lineTension: 0,
                    radius: 5
                }
                ]
            };
            
            //options
            var options = {
                responsive: true,
                title: {
                display: true,
                position: "top",
                text: "Line Graph",
                fontSize: 18,
                fontColor: "#111"
                },
                legend: {
                display: true,
                position: "bottom",
                labels: {
                    fontColor: "#333",
                    fontSize: 16
                }
                }
            };
            
            //create Chart class object
            var chart = new Chart(ctx, {
                type: "line",
                data: data,
                options: options
            });
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
    dataPerkembangan=getCustomStats()
    renderPerkembangan(dataPerkembangan);
}
renderRealTimeData();
setInterval(renderRealTimeData, 600000)
