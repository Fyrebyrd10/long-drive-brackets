package ldb

import grails.converters.JSON
import ldb.daos.RecordDao
import groovy.json.*

class RecordController {
    RecordDao recordDao

    def updateRecords() {

      def jsonSlurper = new JsonSlurper()

      def body = jsonSlurper.parseText(request.reader.text)
      body.each {
        println it
      }
      // def score = body.score
      // def distance= body.distance
      // def playerId = body.playerId
      // recordDao.updateRecord(new BigDecimal(id), new BigDecimal(playerId), new BigDecimal(distance),
      //                         new BigDecimal(score))

      render status:201
    }

}
