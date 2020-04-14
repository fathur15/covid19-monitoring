<?php
class stats extends controller
{
    // private $db;
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
                    'date',
                ];
        for($i =0; $i < count($data); $i++){
            $query .=":".$keyBind[$i];
            if($i != count($data) -1)
                $query .= ", ";
            else
                $query .= ")";
        }
        $db->query($query);
        $i = 0;
        foreach($data as $d){
            $db->bind($keyBind[$i], $d);
            $i++;
        }
        $db->execute();
    }
    function get_stats($params){
        $db = new database;
        $start = $params[0];
        $end = $params[1];
        var_dump($params);
        $query = "SELECT * FROM `stats` WHERE record_date > :akhir AND record_date < :mulai";
        $db->query($query);
        $db->bind('mulai', $start);
        $db->bind('akhir', $end);
        $data = $db->resultSet();
        $data = json_encode($data);
        echo $data;
        
    }
}
