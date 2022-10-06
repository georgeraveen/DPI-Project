set ns [new Simulator]
$ns rtproto DV

set node0 [$ns node]
set node1 [$ns node]

set tf [open out.tr w]
$ns trace-all $tf
set nf [open out.nam w]
$ns namtrace-all $nf

$ns duplex-link $node0 $node1 1Mb 10ms DropTail

$ns duplex-link-op $node0 $node1 orient right

set tcp [new Agent/TCP]
$ns attach-agent $node0 $tcp
set sink [new Agent/TCPSink]
$ns attach-agent $node1 $sink
$ns connect $tcp $sink

set ftpTraffic [new Application/FTP]
$ftpTraffic attach-agent $tcp

proc finish {} {

global ns nf tf
$ns flush-trace
close $nf
close $tf
exec nam out.nam &
exit 0
 
}

$ns at 1.0 "$ftpTraffic start"
$ns at 3.0 "$ftpTraffic stop"
$ns at 5.0 "finish"
$ns run
