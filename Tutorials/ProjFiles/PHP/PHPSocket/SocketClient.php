<?php

/*
$host    = "127.0.0.1";
$port    = 25003;
$message = "Hello Server";
echo "Message To server :".$message;
// create socket
$socket = socket_create(AF_INET, SOCK_STREAM, 0) or die("Could not create socket\n");
// connect to server
$result = socket_connect($socket, $host, $port) or die("Could not connect to server\n");
// send string to server
socket_write($socket, $message, strlen($message)) or die("Could not send data to server\n");
// get server response
$result = socket_read ($socket, 1024) or die("Could not read server response\n");
echo "Reply From Server  :".$result;
// close socket
socket_close($socket);
*/


/*
The first two steps are the same as in the server.

Set variables such as “host” and “port”
Here the port and host should be same as defined in server.
*/
$host = "127.0.0.1";
$port = 25121;//5353;//25003;
$message = "Hello Server";
echo "Message To server :".$message;
// No Timeout
set_time_limit(0);

/*
Create Socket
*/
$socket = socket_create(AF_INET, SOCK_STREAM, 0) or die("Could not create socket\n");

/*
Connect to the server
Here unlike server, client socket is not bound with port and host. Instead it connects to server socket, waiting to accept the connection from client socket. Connection of client socket to server socket is established in this step.
*/
$result = socket_connect($socket, $host, $port) or die("Could not connect toserver\n");

/*
Write to server socket
In this step, client socket data is sent to the server socket.
*/
socket_write($socket, $message, strlen($message)) or die("Could not send data to server\n");

/*
Read the response from the server
*/
$result = socket_read ($socket, 1024) or die("Could not read server response\n");
echo "Reply From Server  :".$result;

/*
Close the socket
*/
socket_close($socket);

 ?>
