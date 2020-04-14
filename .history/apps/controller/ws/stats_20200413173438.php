<?php
class stats extends controller
{


    function ambil($id)
    {
        $db = $this->helper('dbuilder');
        $db->select("*");
        var_dump($id)
        $db->where('id', $id);
        $db->from('stats');
        $data = json_encode($db->result_object());
        echo $data;
    }
}
