

const params = parseQuery(location.href)

const ROOM = (params['room'] || '2').toUpperCase()
const LOCK = (params['lock'] || 'P').toUpperCase()
const LOCK_KEY_MAP = {
    P: '2408',
    A: '0911'
}

const data = {
    ROOM,
    LOCK,
    LOCK_KEY: LOCK_KEY_MAP[LOCK],
    DOOR_CODE: '119900#'
}

function parseQuery(url) {
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    let match;
    const params = {};

    while ((match = regex.exec(url)) !== null) {
        params[match[1]] = match[2];
    }
    return params
}

const messageEl = document.getElementById('message')
const message = messageEl?.innerHTML || ''

const renderedMessage = message.replace(/{{\s*([^}\s]+)\s*}}/g, (_, key) => {
    return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : ''
})

if (messageEl) {
    messageEl.innerHTML = renderedMessage
}



