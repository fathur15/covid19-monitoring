<?php
class user extends controller
{
    // private $db = new database;
    function login()
    {
        $post = $_POST;
        var_dump($this->validate($post['token']));
    }
    function datauser()
    {
    }
}
