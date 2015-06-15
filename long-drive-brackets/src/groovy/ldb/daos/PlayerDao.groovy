package ldb.daos

import groovy.sql.Sql
import ldb.Player

class PlayerDao {
    Sql sql

    Player getPlayerById(BigDecimal id) {
        new Player(sql.firstRow("select * from player where id = ?", [id]))
    }


}
