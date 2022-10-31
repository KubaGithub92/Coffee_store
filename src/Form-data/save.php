<?php
require_once '../DBBlackbox/DBBlackbox.php';

// header("Access-Control-Allow-Origin: *");
$data = json_decode(file_get_contents('php://input'));
var_dump($data);
insert($data);
