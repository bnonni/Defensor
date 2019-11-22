const pcap = require('pcap'),

    var fs = require('fs'),
        pcap_session = pcap.createSession('en0', "ip proto \\tcp");

module.exports = node_pcap_session = {
    start_session: () => {
        tcp_tracker = new pcap.TCPTracker(),
            pcap_session.on('packet', function(raw_packet) {
                var packet = pcap.decode.packet(raw_packet);
                tcp_tracker.track_packet(packet);
                var pcap_file = 'sniffer.txt';
                fs.appendFileSync(pcap_file, packet)
                fs.appendFileSync(pcap_file, '\n')
            });
    },
    stop_session: () => {
        pcap_session.close()
    }
}