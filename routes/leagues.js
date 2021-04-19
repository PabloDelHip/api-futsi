const  { Router } = require ('express');
const leaguesController = require('../controllers/leagues')
const router = Router()

//Leagues
router.get('/', leaguesController.leaguesGet)
router.post('/', leaguesController.leaguesPost)
router.put('/', leaguesController.leaguesPut)
router.delete('/', leaguesController.leaguesDelete)


module.exports = router;