<?php
class stats extends controller
{


    function ambil($id)
    {
        $db = $this->helper('dbuilder');
        $db->select("*");
        $db->where('id', $id[0]);
        $db->from('stats');
        $data = json_encode($db->result_object());
        echo $data;
    }
}
