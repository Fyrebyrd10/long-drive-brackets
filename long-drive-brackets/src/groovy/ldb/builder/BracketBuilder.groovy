package ldb.builder

import groovy.sql.Sql
import ldb.Bracket
import ldb.Round


class BracketBuilder {

    Sql sql

    void buildEmptyBraket() {

        def bracket_id = 2
//        def round_id = 1
//        def set_id = 1
//        def group_id=1
        (1..3).each { round_id ->
            (1..5).each { set_id ->
                (1..4).each { group_id ->
                    (1..4).each { player_id ->
                        sql.executeInsert("""
                              insert into records(id, bracket_id, round_id, set_id, group_id, player_id, distance, score)
                              values (?,?,?,?,?,?,?,?)
                          """, [getNextId(), bracket_id, round_id, set_id, group_id, player_id, 0, 0])

                    }
                }
            }
        }

    }
    def getNextId() {
            def res = sql.firstRow("""
                        SELECT t1.id + 1 as id
                        FROM records t1
                        WHERE NOT EXISTS (
                          SELECT *
                          FROM records t2
                          WHERE t2.id = t1.id + 1
                        )
                        LIMIT 1
    """)

        res.id
        }
}
