<?php
class stats extends controller
{


    function ambil($id)
    {
        var_dump($id);
        $db = $this->helper('dbuilder');
        $db->select("*");
        $db->where('id', $id);
        $db->from('stats');
        $data = json_encode($db->result_object());
        echo $data;
    }
}
