<?php
class secure_controller extends Token
{

    public function __construct()
    {
        $this->init();
    }
    public function view($view, $data = [])
    {
        extract($data);
        require_once 'apps/views/' . $view . '.php';
    }
    public function model($model)
    {
        require_once 'apps/models/' . $model . '.php';
        return new $model;
    }
    public function helper($helper)
    {
        require_once 'apps/helpers/' . $helper . '.php';
        return new $helper;
    }
}
