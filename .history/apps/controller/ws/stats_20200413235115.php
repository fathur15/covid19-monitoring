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
        $keyBind = [
                    "id",
                    "country_name",
                    "total_cases",
                    "new_cases",
                    "active_cases",
                    "total_deaths",
                    "new_deaths",
                    "total_recovered",
                    "serious_critical",
                    "region",
                    "total_cases_per1m",
                ];
        foreach($data as $k => $v){
            $query .=":".$keyBind[$i];
            if($i != count($data)-1)
                $query .= ", ";
            else{
                $query .= ")";
            } 
            $i++;
        }
        $db->query($query);
        $i = 0;
        foreach($data as $k => $v){
            $db->bind($keyBind[$i], $v);
            $i++;
        }
        
        var_dump($query);
        $db->execute();
    }
}
