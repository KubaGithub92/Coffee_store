<?php
require_once '../DBBlackbox/DBBlackbox.php';

// header("Access-Control-Allow-Origin: *");
$data = $_POST;
if (!empty($data)) {
  insert($data);
}

var_dump($data);
