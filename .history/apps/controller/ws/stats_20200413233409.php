<?php
class stats extends controller
{
    private $db;
    function ambil($params)
    {
        $id = $params[0];
        $db = $this->helper('dbuilder');
        $db->select("*");
        $db->where('id', $id);
        $db->from('stats');
        $data = json_encode($db->results());
        echo $data;
    }
    function tambah ($data){
        $db = new database;
        $query = "INSERT INTO stats values(";
        $i = 0;
        foreach($data as $d){
            $query .= $d;
            if($i != count($data)-1)
                $query .= ", ";
            else    
                $query .= ")";
            $i++;
        }
        var_dump($$query);
        $db->query($query);
        $db->execute();
    }
}
