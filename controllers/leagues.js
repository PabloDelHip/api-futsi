const { response } = require('express')

const leaguesGet = (req, res = response) => {
    res.json({
        msg: 'Like Like Like'
    });
}

const leaguesPost = (req, res = response) => {
    res.json({
        msg: 'Psot Like Like'
    });
}

const leaguesPut = (req, res = response) => {
    res.json({
        msg: 'Put Like Like'
    });
}

const leaguesDelete = (req, res = response) => {
    res.json({
        msg: 'Delete Like Like'
    });
}

module.exports = {
    leaguesGet,
    leaguesPost,
    leaguesPut,
    leaguesDelete
}