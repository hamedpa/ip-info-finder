exports.keygen = () => {
    return Buffer.from('P2ZpZWxkcz02Njg0MjYyMyZrZXk9dUdaZ2pMMHFPVEkxOW40', 'base64').toString('binary');
}

exports.moreInfoKey = () => {
    return Buffer.from('aHR0cHM6Ly96YXJlYmluLmlyL2FwaS8/cT0=', 'base64').toString('binary');
}