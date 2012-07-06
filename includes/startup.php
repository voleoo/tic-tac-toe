<?php
define ('DIRSEP', DIRECTORY_SEPARATOR);
$site_path = realpath(dirname(__FILE__) . DIRSEP . '..' . DIRSEP) . DIRSEP;
define ('site_path',    $site_path);
session_name('sesid');
session_start();
function __autoload($class_name) {
    $filename = strtolower($class_name) . '.php';
    $file = site_path . 'classes' . DIRSEP . $filename;

    if (file_exists($file) == false) { 
        return false;
    }
    require_once ($file);
}
?>
