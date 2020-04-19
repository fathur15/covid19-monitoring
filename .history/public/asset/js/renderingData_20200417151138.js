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
        // isLoading = false;   
        
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
        // isLoading = false;
    }
    // if(!isLoading)
    //     $("#" + parent).show();    
}
var elements = {
    'kasus-global' : 'total_cases',
    'sembuh-global': 'total_deaths',
    'meninggal-global': 'total_recovered',
    'kasus-baru-global': 'new_cases',
    'meninggal-baru-global': 'new_deaths',
}

function renderPerkembangan(data, tipe='line'){    
    var arrayOfData = {
        totalCases: [],
        dateTime: [],
        activeCases: [],
        death: [],
        recovered: [],
        newDeaths: [],
        newCase: [],
    };
    
    if(data){
        if(data.stat_by_country)
            data = data.stat_by_country

        var keys = Object.keys(data);
        keys.forEach(el => {
            var total_cases = data[el].total_cases.replace(',','');            
            var active_cases = data[el].total_cases.replace(',','');                      
            // arrayOfData.totalCases.push(parseInt(total_cases));
            // arrayOfData.activeCases.push(parseInt(active_cases));
            arrayOfData.death.push(parseInt(data[el].total_deaths));
            arrayOfData.recovered.push(parseInt(data[el].total_recovered));
            arrayOfData.newDeaths.push(parseInt(data[el].new_deaths));
            arrayOfData.newCase.push(parseInt(data[el].new_cases));
            arrayOfData.dateTime.push(data[el].record_date);
        });
        console.log(arrayOfData);
        
        //get the line chart canvas
        //line chart data
        
        var lineChartData = {
            labels: arrayOfData.dateTime,
            datasets: [
                // {
                //     label: 'Total Kasus',
                //     fillColor: "rgba(220,220,220,0)",
                //     strokeColor: "rgba(220,180,0,1)",
                //     pointColor: "rgba(220,180,0,1)",
                //     data: arrayOfData.totalCases,
                // }, 
                // {
                //     label: 'Masih dirawat',
                //     fillColor: "rgba(151,187,205,0)",
                //     strokeColor: "rgba(151,187,205,1)",
                //     pointColor: "rgba(151,187,205,1)",
                //     data: arrayOfData.activeCases
                // },
                {
                    label: 'Meninggal',
                    fillColor: 'red',
                    data: arrayOfData.death,
                },
                {
                    label: "Sembuh",
                    fillColor: "green",
                    data: arrayOfData.recovered
                }
            ]
        
        }
        
        // var options = {
        //     animationSteps: 50,
        //     tooltipYPadding: 16,
        //     tooltipCornerRadius: 0,
        //     tooltipTitleFontStyle: "normal",
        //     tooltipFillColor: "rgba(0,160,0,0.8)",
        //     animationEasing: "easeOutBounce",
        //     responsive: true,
        //     scaleLineColor: "black",
        //     scaleFontSize: 16,
        // }
        
        var ctx = $("#line-chart");                  
        var chart = new Chart(ctx, {
            type: "line",
            data: lineChartData,
            // options: options 
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
    dataPerkembangan = getCustomStats()
    renderPerkembangan(dataPerkembangan.responseJSON);
}
renderRealTimeData();
setInterval(renderRealTimeData, 600000)
