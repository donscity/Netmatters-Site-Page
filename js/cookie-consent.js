let $cookie = $('#cookie-popup')
let $acceptBtn = $('#cookie-popup .btn.accept')

if (ReadCookie('cookieConsent') == false) {$cookie.css('display', '')}

$acceptBtn.click( function() {
    SetCookie('cookieConsent', 'true', 100); 
    $cookie.css('display', 'none')
})
