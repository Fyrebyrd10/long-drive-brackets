package ldb

import grails.converters.JSON
import ldb.builder.BracketBuilder
import ldb.daos.BracketDao
import ldb.daos.GroupDao
import ldb.daos.PlayerDao

class BracketController {
    PlayerDao playerDao
    BracketBuilder bracketBuilder
    BracketDao bracketDao

    def index() {

        def bracket = [:]

        bracket = bracketDao.getBracketById(2)
        def players = playerDao.getAllPlayers()
        def map = [bracket:bracket, players:players]
        render map as JSON
    }

    def createBracket = {
        bracketBuilder.buildEmptyBraket()
        render status:200
    }

    def getBracket = {
        def bracket = null
        bracket = bracketDao.getBracketById(2)

        render bracket as JSON
    }
}
