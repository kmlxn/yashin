var name = 'store';

export function set (elem) {
    const store = JSON.stringify({ ...get(), ...elem});
    const days = 350;
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (store || "")  + expires + "; path=/";
}

export function get () {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return JSON.parse(c.substring(nameEQ.length, c.length));
        }
    }
    return {};
}

export function erase () {   
    document.cookie = name + '=; Max-Age=-99999999;';  
}