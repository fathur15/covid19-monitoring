 <!-- extra js body:akhir -->
 <?php 
    if(isset($extra_js) && !empty($extra_js)){
        foreach($extra_js as $js){
            if($js['position'] == "body:akhir" && $js['tipe'] == 'file'){
                echo '<script src="' . $js['file'] . '"></script>';
                echo "<br>";
            }
            if($js['position'] == 'body:akhir' && $js['tipe'] == 'inline'){
                echo '<script>';
                print_r($js['file']);
                echo '</script>';
            }
                
        }
    }
?>
</body>
</html>