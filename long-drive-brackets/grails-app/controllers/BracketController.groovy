import grails.converters.JSON

class BracketController {

    def index() {

      def bracket = [:]
      def group1 = [
                      players:[
                        [name:"Brendom", distance:400],
                        [name:"Christopher", distance:380],
                        [name:"Ryan", distance:410],
                        [name:"Robert", distance:360]
                      ]
                    ]

      def group2 = [
                    players:[
                    [name:"Mike", distance:400],
                    [name:"Thomas", distance:380],
                    [name:"Cameron", distance:410],
                    [name:"Scott", distance:360]
                    ]
                    ]
      def group3 = [
                    players:[
                    [name:"Paul", distance:400],
                    [name:"David", distance:380],
                    [name:"Carl", distance:410],
                    [name:"Tim", distance:360]
                    ]
                    ]
      def group4 = [
                    players:[
                    [name:"Paul", distance:400],
                    [name:"David", distance:380],
                    [name:"Carl", distance:410],
                    [name:"Tim", distance:360]
                    ]
                    ]


      def group5 = [
                      players:[
                        [name:"Tim", distance:400],
                        [name:"Conner", distance:380],
                        [name:"Scott", distance:410],
                        [name:"Tommy", distance:360]
                      ]
                    ]

      def group6 = [
                    players:[
                    [name:"Freddy", distance:400],
                    [name:"Lee", distance:380],
                    [name:"Jason", distance:410],
                    [name:"Paul", distance:360]
                    ]
                    ]
      def group7 = [
                    players:[
                    [name:"Brad", distance:400],
                    [name:"Aaron", distance:380],
                    [name:"James", distance:410],
                    [name:"Alex", distance:360]
                    ]
                    ]
      def group8 = [
                    players:[
                    [name:"Taylor", distance:400],
                    [name:"Spencer", distance:380],
                    [name:"Joe", distance:410],
                    [name:"Tyler", distance:360]
                    ]
                    ]

      def set1 = [groups:[group1, group2, group3, group4]]
      def set2 = [groups:[group2, group3, group4, group1]]
      def set3 = [groups:[group3, group4, group1, group2]]
      def set4 = [groups:[group4, group1, group2, group3]]
      def set5 = [groups:[group1, group2, group3, group4]]
      def set6 = [groups:[group5, group6, group7, group8]]
      def set7 = [groups:[group6, group7, group8, group5]]
      def set8 = [groups:[group7, group8, group5, group6]]
      def set9 = [groups:[group8, group5, group6, group7]]
      def set10 = [groups:[group5, group6, group7, group8]]

      def round1Players = []
      round1Players.addAll(group1.players)
      round1Players.addAll(group2.players)
      round1Players.addAll(group3.players)
      round1Players.addAll(group4.players)
      round1Players.sort { it.distance }
      round1Players.reverse(true)

      def round1 = [sets:[set1,set2, set3, set4, set5], id:"round1", players: round1Players]
      def round2 = [sets:[set6,set7, set8, set9, set10], id:"round2", players: round1Players]
      def round3 = [sets:[set1,set2, set3, set4, set5], id:"round3", players: round1Players]


      bracket = [rounds:[round1, round2, round3]]

      render bracket as JSON

    }
}
