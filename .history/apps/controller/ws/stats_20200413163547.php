<?php
class stats extends controller
{


    function ambil($id)
    {
        $db = $this->helper('dbuilder');
        $db->select("*");
        $db->where('id', $id);
        $db->from('password');
        $data = json_encode($db->result_object());
        echo $data;
    }
}
