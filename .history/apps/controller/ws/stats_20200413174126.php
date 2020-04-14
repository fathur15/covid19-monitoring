<?php
class stats extends controller
{


    function ambil($params)
    {
        $id = $params[0];
        $db = $this->helper('dbuilder');
        $db->select("*");
        $db->where('id', $id);
        $db->from('stats');
        // $data = json_encode($db->result_object());
        var_dump($db->results());
        // echo $data;
    }
}
