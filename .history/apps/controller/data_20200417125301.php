<?php
class data extends controller
{
    function index()
    {
        // $token = $this->generate("login");
        $data = array(
            'page_title' => 'Monitoring COVID-19 | Dashboard',
            'extra_js' => array(
                ['file' => STATIC_PATH . 'vendor/chart.js/Chart.js', 'position' => 'head', 'tipe' => 'file'],
                ['file' => STATIC_PATH . 'js/getStats.js', 'position' => 'head', 'tipe' => 'file'],
                ['file' => STATIC_PATH . 'js/digi-clock.js', 'position' => 'head', 'tipe' => 'file'],
                ['file' => file_get_contents(ROTT_PATH .'/covid19/public/asset/js/renderingData.js'), 'position' => 'body:akhir', 'tipe' => 'inline']
            ),
            'extra_css' => array(
                ['file'=> STATIC_PATH .'/css/digi-clock.css', 'position' => 'head', 'tipe' => 'file' ]
            ),
            'navbar' => array(
                'brand' => array(
                    'text' => 'Code.K15',
                    'icon' => null,
                    'image' => null,
                ),
                'style' => array(
                    'wrapper' => 'height: 80px',
                    'textBrand' => 'font-size: xxx-large',
                    'textMenu' => 'font-size: 30',
                )
            )
        );
        $this->view('global/header/dashboard', $data);
        $this->view('data/navbar/dashboard', $data['navbar']);
        $this->view('data/main/dashboard');
        $this->view('data/footer/dashboard', $data);
    }
    function ind(){
        echo "HELLO WORLD";
    }
}
