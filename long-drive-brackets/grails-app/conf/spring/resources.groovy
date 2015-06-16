import groovy.sql.Sql
import ldb.builder.BracketBuilder
import ldb.daos.BracketDao
import ldb.daos.FinalsDao
import ldb.daos.GroupDao
import ldb.daos.PlayerDao
import ldb.daos.RecordDao
import ldb.daos.RoundDao
import ldb.daos.SetDao

// Place your Spring DSL code here
beans = {
    dataSource = ref('dataSource')
    sql(Sql, dataSource)
    bracketDao(BracketDao) { bean -> bean.autowire = 'byName' }
    finalsDao(FinalsDao) { bean -> bean.autowire = 'byName' }
    roundDao(RoundDao) { bean -> bean.autowire = 'byName' }
    setDao(SetDao) { bean -> bean.autowire = 'byName' }
    groupDao(GroupDao) { bean -> bean.autowire = 'byName' }
    recordDao(RecordDao) { bean -> bean.autowire = 'byName' }
    playerDao(PlayerDao) { bean -> bean.autowire = 'byName' }
    bracketBuilder(BracketBuilder) { bean -> bean.autowire = 'byName' }
}
