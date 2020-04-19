
<style>
    h1,h2,h3,h4,h5,h6,p, small {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    .resume p, h5{
        color: white;
        font-weight: 400;
    }
    .shadow-box{
        -webkit-box-shadow: 0 15px 10px #777;
        -moz-box-shadow: 0 15px 10px #777;
        box-shadow: 0 5px 5px #777;
        
    }
    .content-main-wrapper{
        margin: 5% 0;
    }
    /* .shadow-box:after{
        -webkit-transform: rotate(3deg);
        -moz-transform: rotate(3deg);
        -o-transform: rotate(3deg);
        -ms-transform: rotate(3deg);
        transform: rotate(3deg);
        right: 10px;
        left: auto;
    } */

</style>
<div class="content">
    <div class="heading" style="margin: 100px 30%; text-align: center">
        <h1>COVID-19 - Code.K15</h1>
        <h3>Corona Virus Realtime Data (<small style="font-size: 15px">Update every 10 minute</small>)</h3>
        <p id="date-update" style="color: #353030;">Update</p>
    </div>
    <div class="main">
        <div class="container">
            <div class="row content-main-wrapper">   
                <div class="head-main-content">
                    <h3>Data Global</h3> 
                    <a style="text-decoration: none" href="">Lihat detail  <i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i></a>
                </div>
                <div id="resumeGlobal" class="row resume" style="width: 100%; margin: 0 5%" >
                        <div class ="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div class="card shadow-box" style="display:inline-block; width: 100%; background: #f50057; margin:5% 0.5%; align-items: center; height: 120px ">
                                <div class="card-body">
                                    <div style="flex-direction: row; display: flex; justify-content: center; align-items: center">
                                        <h5 id="title-kasus-global" class="card-text">Total Kasus</h5>
                                        <span style="color: black; font-size: 25px; text-shadow: 0 0 0 yellow">&#x1F622</span>
                                    </div>
                                    <p class="card-text" id="kasus-global"></p>
                                </div>
                            </div>
                        </div>
                        <div class ="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div class="card shadow-box" style="display:inline-block; width:100%; background: #00c853; margin: 5% 0.5%; align-items: center; height: 120px ">
                                <div class="card-body">
                                    <div style="flex-direction: row; display: flex; justify-content: center; align-items: center">
                                        <h5 id="title-kasus-global" class="card-text">Sembuh</h5>
                                        <span style="color: black; font-size: 25px; text-shadow: 0 0 0 yellow">&#x1F60A</span>
                                    </div>
                                    <p class="card-text" id="sembuh-global"></p>
                                    <!-- <p style="">Orang</p> -->
                                </div>
                            </div>
                        </div>
                        <div class ="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div class="card shadow-box" style="display:inline-block; width: 100%; margin:5% 0.5%;height: 120px;align-items: center;  background :#5335b1">
                                <div class="card-body">
                                    <div style="flex-direction: row; display: flex; justify-content: center; align-items: center;">
                                        <h5 id="title-kasus-global" class="card-text">Meninggal</h5>
                                        <span class="emot" style="color: black; font-size: 25px; text-shadow: 0 0 0 yellow">&#x1F62D</span>
                                    </div>
                                    <p class="card-text" id="meninggal-global"></p>
                                    <!-- <p style="">Orang</p> -->
                                </div>
                            </div>
                        </div>  
                        <div class ="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div class="card shadow-box" style="display:inline-block; width: 100%; margin:5% 0.5%; height: 120px; background: #f44336">
                                <div class="card-body">
                                    <div style="flex-direction: row; display: flex; justify-content: center; align-items: center;">
                                        <h5 id="title-kasus-global" class="card-text">Peningkatan</h5>
                                        <span style="color: black; font-size: 25px; text-shadow: 0 0 0 yellow">&#x1F620</span>
                                    </div>
                                    <div style="flex-direction: row; display: flex;">
                                        <p style="font-size: 15px">Kasus Baru</p>
                                        <p style="margin-left: 10%; font-size: 15px">Meninggal </p>
                                    </div>
                                    <div style="display: flex; margin-top: -9%">
                                        <p style="font-size: 15px" class="card-text" id="kasus-baru-global"></p>
                                        <p style="margin-left: 10%; font-size: 15px" class="card-text" id="meninggal-baru-global"></p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            <div class="row content-main-wrapper" >
                <div class="head-main-content">
                    <h3>Data Indonesia</h3> 
                    <a style="text-decoration: none" href="">Lihat detail  <i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i></a>
                </div>
                 <div id="resumeIndonesia" class="row resume" style="width: 100%; margin: 0 5%;" >
                    <div class ="col-sm-12 col-md-6 col-lg-6 col-xl-3">    
                        <div class="card shadow-box" style="width: 100%; background: #f50057; margin: 1% 0.5%; display: inline-block; align-items: center; height: 120px ">
                            <div class="card-body">
                                <div style="flex-direction: row; display: flex; justify-content: center; align-items: center">
                                    <h5 id="title-kasus-indonesia" class="card-text">Total Kasus</h5>
                                    <span style="color: black; font-size: 25px; text-shadow: 0 0 0 yellow">&#x1F622</span>
                                </div>
                                <p style="font-size: 14px" class="card-text" id="kasus-indonesia"></p>                            
                            </div>
                        </div>
                    </div>
                    <div class ="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div class="card shadow-box" style="width: 100%; background: #00c853; margin: 1% 0.5%; display: inline-block; align-items: center; height: 120px ">
                            <div class="card-body">
                                <div style="flex-direction: row; display: flex; justify-content: center; align-items: center">
                                    <h5 id="title-kasus-indonesia" class="card-text">Sembuh</h5>
                                    <span style="color: black; font-size: 25px; text-shadow: 0 0 0 yellow">&#x1F60A</span>
                                </div>
                                <p class="card-text" id="sembuh-indonesia"></p>
                            </div>
                        </div>
                    </div>
                    <div class ="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div class="card shadow-box" style="width: 100%; margin: 1% 0.5%; display: inline-block; height: 120px;align-items: center; background :#5335b1">
                            <div class="card-body">
                                <div style="flex-direction: row; display: flex; justify-content: center; align-items: center;">
                                    <h5 id="title-kasus-indonesia" class="card-text">Meninggal</h5>
                                    <span style="color: black; font-size: 25px; text-shadow: 0 0 0 yellow">&#x1F62D</span>
                                </div>
                                <p class="card-text" id="meninggal-indonesia"></p>
                            </div>
                        </div>
                    </div>
                    <div class ="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div class="card shadow-box" style="width: 100%; margin: 1% 0.5%; display: inline-block; height: 120px; background: #f44336">
                            <div class="card-body">
                                <div style="flex-direction: row; display: flex; justify-content: center; align-items: center;">
                                    <h5 id="title-kasus-indonesia" class="card-text">Peningkatan</h5>
                                    <span style="color: black; font-size: 25px; text-shadow: 0 0 0 yellow">&#x1F620</span>
                                </div>
                                <div style="flex-direction: row; display: flex;">
                                    <p style="font-size: 15px">Kasus Baru</p>
                                    <p style="margin-left: 10%; font-size: 15px">Meninggal </p>
                                </div>
                                <div style="display: flex; margin-top: -1%%">
                                    <p style="font-size: 15px" class="card-text" id="kasus-baru-indonesia"></p>
                                    <p style="margin-left: 10%; font-size: 15px" class="card-text" id="meninggal-baru-indonesia"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row content-main-wrapper" >
                <div class="head-main-content">
                    <h3>Perkembangan Kasus COVID-19 di Indonesia Hari ini</h3> 
                </div>
            </div>
        </div>
    </div>
</div>