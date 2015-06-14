package ldb.daos

import groovy.sql.Sql
import ldb.Player

/**
 * Created by hunterscheib on 6/14/15.
 */
class PlayerDao {
    Sql sql

    Player getPlayerById(BigDecimal id) {
        new Player(sql.firstRow("select * from player where id = ?", [id]))
    }


}
