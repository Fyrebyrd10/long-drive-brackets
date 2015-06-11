package ldb

class Round {
    int roundNumber
    static hasMany = [players:Player, sets: BracketSet]

    static constraints = {
    }
}
