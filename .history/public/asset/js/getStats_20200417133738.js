var getStatsOfCountry = function(){
    var data = null;
    var settings = {
        "async": false,
        "dataType" : "json",
        "crossDomain": true,
        "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=Indonesia",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "beefe7b6eamsh027aa7179884c8ap135e99jsnfc04f913872c"
        }
    }
    
    data = $.ajax(settings).done(function (response) {
        return response
    });
    // monitoring(data.responseJSON.latest_stat_by_country[0]);
    return data;
}
var getStatsAllProv = function(){
    var data = null;
    var settings = {
        "dataType" : "json",
        "crossDomain": true,
        "url": "https://api.kawalcorona.com/indonesia/provinsi",
        "method": "GET",
    }
    
    data = $.ajax(settings).done(function (response) {
       return response
    });
    return data;
}
var asembleStatsIndo = function(){
    var dataIndonesia = getStatsOfCountry();
    var dataPerProvinsi = getStatsAllProv();

    return {
        indonesia: dataIndonesia.responseJSON,
        provinsi: dataPerProvinsi.responseJSON
    }
}
var getStatsOfProv = function(prov = 'ntb'){
    var data = null;
    var settings = {
        "dataType" : "json",
        "crossDomain": true,
        "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=Indonesia",
        "method": "GET",
    }
    
    data = $.ajax(settings).done(function (response) {
       return response
    });
    return data;
}
var getStatsByDate = function(date){
    var date = nulll
    var settings = {
        "async": false,
        "dataType" : "json",
        "crossDomain": true,
        "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/history_by_particular_country_by_date.php?country=Indonesia&date=" + date,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "beefe7b6eamsh027aa7179884c8ap135e99jsnfc04f913872c"
        }
    }
    
    data = $.ajax(settings).done(function (response) {
        return response;
    });
    return data;
}
var getAffectedCountry = function(){
    var data = null
    var settings = {
        "async": false,
        "dataType" : "json",
        "crossDomain": true,
        "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "beefe7b6eamsh027aa7179884c8ap135e99jsnfc04f913872c"
        }
    }
    
    data = $.ajax(settings).done(function (response) {
        return response;
    });
    return data;
}
var globalStats = function(){
    var data = null
    var settings = {
        "async": false,
        "crossDomain": true,
        dataType: 'json',
        "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "beefe7b6eamsh027aa7179884c8ap135e99jsnfc04f913872c"
        }
    }   
    data =$.ajax(settings).done(function (response) {
        return response;
    });
    
    return data;
}
var isLoading = true;

var monitoring = function(data){
    // debugger;
    console.log(data);
    var terbaru = null;
    var id = data && data.id ? data.id : null;   
    window.data=data;
    
    console.log(id);
    var url = window.location.origin == "http://localhost" ? "http://localhost/covid19/ws/stats/ambil/"+id : window.origin +"/ws/stats/ambil/"+id;
    // Cek dari database local 
    var settings = {
        "async": true,
        "crossDomain": true,
        dataType: 'json',
        "url": url,
        "method": "GET",
    }   
    if(id){
        terbaru=$.ajax(settings).done(function (res) {
            console.log(res);
            return res;
        });
    }
    if(terbaru && terbaru.responseJSON.length == 0){
        var url = window.location.origin == "http://localhost" ? "http://localhost/covid19/ws/stats/tambah/" : window.origin +"/ws/stats/tambah/";
        // Cek dari database local 
        var params = "";

        if(data){
            var keys = Object.keys(data);
            console.log(keys);
            
            keys.forEach(key =>{
                if(!data[key])
                    params += 'null';
                else
                    params += data[key];                

                params +="/"
            })
            console.log(params);
            
        }
        if(params){
            var settings = {
                "async": false,
                "crossDomain": true,
                dataType: 'json',
                "url": url+params,
                "method": "GET",
            }   
            $.ajax(settings).done(function (res) {
                console.log(res);
                // return res;
            });
        }        
    }
}

var getCustomStats = function(tipe = 'today', start= null, from = 'other'){
    var data = null;
    var url = window.location.origin == "http://localhost" ? "http://localhost/covid19/ws/stats/get_stats/" : window.origin +"/ws/stats/get_stats/";
    var settings = {
        "async": false,
        "crossDomain": true,
        "dataType": 'json',
        "url": url,
        "method": "GET",
    }   
    if(tipe == 'today'){
        var start = moment().format('YYYY-MM-DD');
        settings.url = 'today/'+start;
        if(from == 'other'){
            settings = {
                ...settings,
                // "async" : true,
                "headers": {
                    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                    "x-rapidapi-key": "beefe7b6eamsh027aa7179884c8ap135e99jsnfc04f913872c"
                },
                "url": 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/history_by_particular_country_by_date.php?country=Indonesia&date='+start
            }
        }

    }else if(tipe == 'day'){
        var start = moment().format('YYYY-MM-DD');
    }      
    data = $.ajax(settings).done(function (res) {
        console.log(res);
        
        return res;
    });
    return data;
}