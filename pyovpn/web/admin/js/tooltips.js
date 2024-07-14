$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    // Advanced VPN
    $("[name='mytooltip']").tooltip({title:'List subnets in network/nbits form', placement:'right'});
    $("[id='privnets_1']").tooltip({title:'For example: 10.2.0.0/16 or 192.168.55.0/24', placement:'right'});
    $("[id='vserver_gateway_access']").tooltip({title:'Clients can ping the VPN gateway IP address in either case', placement:'right'});
    $("[id='vs_priv_access']").tooltip({title:'NAT is preferred for client access to private networks. Routing may be useful for applications that don\'t traverse NAT', placement:'right'});
    $("[id='vc_reroute_gw']").tooltip({title:'When enabled, the client\'s default route is altered so that all traffic is routed through the VPN server\'s private network', placement:'right'});
    $("[id='vclient_gateway_access']").tooltip({title:'Clients can ping the VPN gateway IP address in either case', placement:'right'});
    $("[id='dns_1']").tooltip({title:'To use a DNS server running on the Access Server host, use \'127.0.0.1\'', placement:'right'});
    $("[id='dns_2']").tooltip({title:'To use a DNS server running on the Access Server host, use \'127.0.0.1\'', placement:'right'});
    $("[id='deens_res_zones']").tooltip({title:'Optional (may be left blank)', placement:'right'});
    $("[id='deens_domain_suffix']").tooltip({title:'Optional (may be left blank)', placement:'right'});

    $("[id='srv_name00']").tooltip({title:'This is the public name or IP address VPN clients use to connect to the Access Server', placement:'right'});
    $("[id='ismd_tcp_1']").tooltip({title:'In multi-daemon mode, specify the number of separate TCP daemons to run concurrently. For OpenVPN3 the number of thread. As a rule of thumb, set to the number of processor cores on the machine', placement:'right'});
    $("[id='ismd_tcp_2']").tooltip({title:'In multi-daemon mode and OpenVPN3 mode, specify the TCP port number', placement:'right'});
    $("[id='ismd_udp_1']").tooltip({title:'In multi-daemon mode, specify the number of separate UDP daemons to run concurrently. For OpenVPN3 the number of thread. As a rule of thumb, set to the number of processor cores on the machine', placement:'right'});
    $("[id='ismd_udp_2']").tooltip({title:'In multi-daemon mode and OpenVPN3 mode, specify the UDP port number', placement:'right'});

    //$("[id='']").tooltip({title:'', placement:'right'});
    $("[id='vclient_inter_client']").tooltip({title:'This feature allows or prevents packet routing between clients on the VPN IP Network', placement:'right'});
    $("[id='test_this']").tooltip({title:'For example: 10.2.0.0/16 or 192.168.55.0/24', placement:'right'});
    $("[id='nbt_1']").tooltip({title:'IP address of primary WINS server (optional - may be left blank)', placement:'right'});
    $("[id='nbt_2']").tooltip({title:'IP address of secondary WINS server (optional - may be left blank)', placement:'right'});
    $("[id='nbt_4']").tooltip({title:'IP address of the NetBIOS over TCP/IP Datagram Distribution Server (optional - may be left blank', placement:'bottom'});
    $("[id='nbt_5']").tooltip({title:'NetBIOS over TCP/IP Scope ID (optional - may be left blank)', placement:'bottom'});
    $("[id='vserver_config_text']").tooltip({title:'These directives are added to the VPN server configuration', placement:'right'});
    $("[id='vclient_config_text']").tooltip({title:'These directives are added to the VPN client configuration', placement:'right'});

    //$("[id='']").tooltip({title:'', placement:'right'});
    // CWS Settings
    $("[id='aclient_cb1']").tooltip({title:'Normally, the Client Web Server is accessible to all users.  Check this box to restrict it to Access Server administrators', placement:'right'});
    $("[id='aclient_relay_level']").tooltip({title:'The XML-RPC/REST API is a web service that mirrors the functionality of the Client Web Server to facilitate programmatic interaction with other software.  In most cases, enabling the limited API is sufficient for general client functionality.  Enabling the complete API is only necessary if you wish to fully control the Access Server via a custom API client', placement:'right'});
    $("[id='cws_ui_offer_server_locked']").tooltip({title:'Note: server-locked profiles do not work on mobile clients', placement:'right'});
    $("[id='cws_ui_offer_autologin']").tooltip({title:'Note: this link will only be visible to users who have autologin permission', placement:'right'});
    $("[id='cws_ui_pwd_strength']").tooltip({title:'Password must contain at least 8 characters, an uppercase letter, a lowercase letter, and a symbol from !#$%&\'()*+,-./[\]^_`{|}~<>', placement:'right'});

    // Failover
    $("[id='ucarp_2']").tooltip({title:'Enter a free LAN IP address that will be shared by both failover nodes', placement:'right'});
    if ($('.prop_autologin > div > input').prop('disabled') == true) {
        $('.prop_autologin').each(function() {
                $(this).tooltip({title: 'Auto-login is not allowed with no_client_cert=true'});
        });
    };

    // Subscription
    $("[id='sub_max_cc']").tooltip({title:'Maximum VPN connections allowed on the whole subscription.', placement:'bottom'});
    $("[id='sub_total_cc']").tooltip({title:'Total VPN connections currently active on the whole subscription.', placement:'bottom'});
    $("[id='sub_current_cc']").tooltip({title:'Current VPN connections active on this server.', placement:'bottom'});
    $("[id='sub_cc_limit']").tooltip({title:'Maximum allowed VPN connections on this server.', placement:'bottom'});

    // SAML
    $("[id='saml_timeout']").tooltip({title:'How much time a user is given on a VPN connection attempt to complete the authentication.', placement:'right'});
    $("[id='saml_idp_entityid']").tooltip({title:'The identity provider issuer or identifier.', placement:'right'});
    $("[id='saml_idp_signon_endpoint']").tooltip({title:'The identity provider single sign-on URL or login URL.', placement:'right'});
    $("[id='saml_idp_logout_endpoint']").tooltip({title:'An optional logout URL.', placement:'right'});
    $("[id='saml_idp_cert']").tooltip({title:'The IdP certificate you paste as text into the field.', placement:'right'});
    $("[id='txt-saml-sp-identity-and-url']").tooltip({title:'Provide this information to the identity provider.', placement:'top'});
    $("[id='saml_sp_hostname']").tooltip({ title: "Your Access Server's hostname. You can optionally set this as a different, SAML-specific hostname. This will become part of the service provider identity", placement: 'right' });
    $("[id='saml_sp_cert']").tooltip({title:'The PEM-formatted Access Server SAML certificate you paste as text into the field.', placement:'right'});
    $("[id='saml_sp_key']").tooltip({title:'The PEM-formatted Access Server SAML private key you paste as text into the field.', placement:'right'});
    $("[id='saml_forceauthn']").tooltip({title:'If enabled, will include ForceAuthn=\'true\' in the AuthNRequest made to the IdP. This indicates to the IdP that user interaction should be required during the course of handling the request, overriding the usual implicit assumption that it is acceptable to reuse the authentication state from an earlier request.', placement:'right'})

    $("[id='saml_requestauthncontext']").tooltip({title: "If enabled, Access Server will include AuthnContext in the AuthNRequest made to the IdP.", placement:'right'})
    $("[id='saml_authncontexts']").tooltip({title: "Typical AuthNContexts are Password, PasswordProtectedTransport, TLSClient, X509, and Kerberos. The default for this field is PasswordProtectedTransport.", placement:'right'})
});
