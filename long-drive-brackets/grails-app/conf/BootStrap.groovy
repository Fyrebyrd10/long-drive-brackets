import ldb.Bracket
import ldb.BracketSet
import ldb.Group
import ldb.Player
import ldb.Record
import ldb.Round

class BootStrap {

    def init = { servletContext ->
        // Check whether the test data already exists.
        if (!Player.count()) {
            int i = 1
            new Player(name: "Tim Burke").save(failOnError: true)
            new Player(name: "Spencer McDaniel").save(failOnError: true)
            new Player(name: "Chris Hall").save(failOnError: true)
            new Player(name: "Brent Champion").save(failOnError: true)
            new Player(name: "Chris Deason").save(failOnError: true)
            new Player(name: "Brooks Baldwin").save(failOnError: true)
            new Player(name: "Troy Templeton").save(failOnError: true)
            new Player(name: "Maurice Allen").save(failOnError: true)
            new Player(name: "Trent Scruggs").save(failOnError: true)
            new Player(name: "Aaron Mansfield").save(failOnError: true)
            new Player(name: "Tyler Parsons").save(failOnError: true)
            new Player(name: "Troy Teal").save(failOnError: true)
            new Player(name: "Eddie Fernandez").save(failOnError: true)
            new Player(name: "Richard Smith").save(failOnError: true)
            new Player(name: "Andy Bollenbacher").save(failOnError: true)
            new Player(name: "Ryan Reisbeck").save(failOnError: true)
            new Player(name: "Kevin Shook").save(failOnError: true)
            new Player(name: "Landon Gentry").save(failOnError: true)
            new Player(name: "Matt Vilade").save(failOnError: true)
            new Player(name: "Tommy Hug").save(failOnError: true)
            new Player(name: "Will Hogue").save(failOnError: true)
            new Player(name: "Hunter Scheib").save(failOnError: true)
            new Player(name: "Nick Kiefer").save(failOnError: true)
            new Player(name: "Mike Ferrell").save(failOnError: true)
            new Player(name: "Seth Ellsworth").save(failOnError: true)
            new Player(name: "Rob Tiettmeyer").save(failOnError: true)
            new Player(name: "Jason Frey").save(failOnError: true)
            new Player(name: "Brady Torbitt").save(failOnError: true)
            new Player(name: "Jessie Petterson").save(failOnError: true)
            new Player(name: "Austin Hinshaw").save(failOnError: true)
            new Player(name: "Nicholas Guyton").save(failOnError: true)
            new Player(name: "Myles Dibrincat").save(failOnError: true)
            new Player(name: "Daniel Simon ").save(failOnError: true)
            new Player(name: "Kevin Hennessy").save(failOnError: true)
            new Player(name: "Shawn Holcomb").save(failOnError: true)
            new Player(name: "Austin Stinemetz").save(failOnError: true)
            new Player(name: "Ben Tua'one").save(failOnError: true)
            new Player(name: "Josh Crews").save(failOnError: true)
            new Player(name: "Randy Hunt").save(failOnError: true)
            new Player(name: "Ian Griscom").save(failOnError: true)
            new Player(name: "Kevin Bullard").save(failOnError: true)
            new Player(name: "Andrew Williams").save(failOnError: true)
            new Player(name: "Dustin Merrill").save(failOnError: true)
            new Player(name: "Jeff Crittendon").save(failOnError: true)
            new Player(name: "Patrick Hopper").save(failOnError: true)
            new Player(name: "Steve Magam").save(failOnError: true)
            new Player(name: "Bobby Peterson").save(failOnError: true)
            new Player(name: "Jeff Flagg").save(failOnError: true)




            def round1Players = []
            def round2Players = []
            def round3Players = []

            (1..16).each {
                round1Players << Player.get(it)
            }
            (17..32).each {
                round2Players << Player.get(it)
            }
            (33..48).each {
                round3Players << Player.get(it)
            }

            def set1Groups = []

            def set1Group1 = []
            def set1Group2 = []
            def set1Group3 = []
            def set1Group4 = []

            round1Players.eachWithIndex {  entry,  index ->
                if(index < 4)
                    set1Group1 << new Record(player: entry).save()
                else if(index < 8)
                    set1Group2 << new Record(player: entry)
                else if(index < 12)
                    set1Group3 << new Record(player: entry)
                else if(index < 16)
                    set1Group4 << new Record(player: entry)
            }



//            def group1 =new Group(records: set1Group1).save()





//            def set1 = new BracketSet(groups: [group1, new Group(records: set1Group2), new Group(records: set1Group3), new Group(records: set1Group4)])


            def round1 = new Round(players:round1Players, roundNumber: 1)
            def round2 = new Round(players:round2Players, roundNumber: 2)
            def round3 = new Round(players:round3Players, roundNumber: 3)

            def bracket = new Bracket(rounds: [round1, round2, round3]).save(failOnError: true)


//            new Group(players:Player.findAllByIdLessThan(5), id:1)

        }
    }
    def destroy = {
    }
}
