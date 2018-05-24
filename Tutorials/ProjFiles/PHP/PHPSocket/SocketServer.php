<?php

/*
// set some variables
$host = "127.0.0.1";
$port = 25003;
// don't timeout!
set_time_limit(0);
// create socket
$socket = socket_create(AF_INET, SOCK_STREAM, 0) or die("Could not create socket\n");
// bind socket to port
$result = socket_bind($socket, $host, $port) or die("Could not bind to socket\n");
// start listening for connections
$result = socket_listen($socket, 3) or die("Could not set up socket listener\n");

// accept incoming connections
// spawn another socket to handle communication
$spawn = socket_accept($socket) or die("Could not accept incoming connection\n");
// read client input
$input = socket_read($spawn, 1024) or die("Could not read input\n");
// clean up input string
$input = trim($input);
echo "Client Message : ".$input;
// reverse client input and send back
$output = strrev($input) . "\n";
socket_write($spawn, $output, strlen ($output)) or die("Could not write output\n");
// close sockets
socket_close($spawn);
socket_close($socket);
*/


/*
Set variables such as “host” and “port”
Port number can be any positive integer between 1024 -65535.
*/
$host = "192.168.1.6";
$port = 25003;//5353;
// No Timeout
set_time_limit(0);


/*
Create Socket
*/
$socket = socket_create(AF_INET, SOCK_STREAM, 0) or die("Could not create socket\n");

/*
Bind the socket to port and host
Here the created socket resource is bound to IP address and port number
*/
// if (!socket_set_option($socket, SOL_SOCKET, SO_REUSEADDR, 1)) {
//    echo socket_strerror(socket_last_error($socket));
//    exit;
// }
// for ( $port = 1234; $port < 65536; $port++ )
// {
//     $result = socket_bind($socket, $host, $port) or die("Could not bind to socket\n");
//     if ( $result )
//     {
//         print "bind succeeded, port=$port\n";
//         break;
//     } else {
//         print "Binding to port $port failed: ";
//         print socket_strerror(socket_last_error($socket))."\n";
//     }
// }
// if ( $port == 65536 ) die("Unable to bind socket to address\n");
$result = socket_bind($socket, $host, $port) or die("Could not bind to socket\n");


/*
Start listening to the socket
After getting bound with IP and port server waits for the client to connect. Till then it keeps on waiting.
*/
$result = socket_listen($socket, 3) or die("Could not set up socket listener\n");


/*
Accept incoming connection
This function accepts incoming connection request on the created socket. After accepting the connection from client socket, this function returns one other socket useful resource that’s actually responsible for communication with the corresponding client socket. Right here “$spawn” is that socket resource which is responsible for communication with client socket.
To this point, we’ve prepared our server socket but the script doesn’t actually do something. Keeping to our aforesaid goal, we’ll read message from client socket and then ship back reverse of the received message to the client socket again.
*/
$spawn = socket_accept($socket) or die("Could not accept incoming connection\n");


/*
Read the message from the Client socket
*/
$input = socket_read($spawn, 1024) or die("Could not read input\n");


/*
Reverse the message
*/
$output = strrev($input) . "\n";


/*
Send message to the client socket
*/
socket_write($spawn, $output, strlen ($output)) or die("Could not write output\n");


/*
Close the socket
This completes with the server. Now we will learn to create PHP client
*/
socket_close($spawn);
socket_close($socket);

?>
