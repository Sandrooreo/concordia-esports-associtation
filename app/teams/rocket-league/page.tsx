import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function RocketLeaguePage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <img src="/games/rocket-league.png" alt="Rocket League Logo" className="w-12 h-12 mr-4" />
        Rocket League Team
      </h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Concordia Halcyon Rocket League team is a squad representing Concordia University.
            We have a long standing history of fun and competitive rosters in collegiate and non collegiate leagues.
            We are constantly looking to improve and expand our roster with new faces and friends.
          </p>
          <h3 className="font-semibold mb-2">Competition Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Playfly College Esports (Sept 23rd - Early November):</strong> 1 match per week on Monday evenings.
            </li>
            <li>
              <strong>Telus Esports Series 4 (Sept 18-19 - Sept 25-26 - Oct 2-3):</strong> Matches during the weekend.
            </li>
            <li>
              <strong>Open tournaments:</strong> Participation depends on team
              availability.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Recruitment</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">Who are we looking for?</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Players with any level of experience in RL (any platforms) who are interested in competitive play.
            </li>
            <li>
              Full-Time students with a Concordia email address (you can easily ask for one via the StudentHub).
            </li>
            <li>We expect players to be available for games as well as team and indidivual practice throughout the week for a total commitment of about 5h per week.</li>
            <li>Players need to be able to communicate their availability each weeks to the Coordinator as schedule changes affects practice and game schedule.</li>
          </ul>
          <Link href="https://forms.gle/PwzEnNde9tFDuZHX6" target="_blank">
            <Button className="bg-concordia-burgundy hover:bg-concordia-gold">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-8">
        <ResultCard
          tournamentName="LAN LUQSE 2024"
          logo="/rocket-league/luqse.webp"
          result="Top 4"
          link="https://challonge.com/VESPAInvite/standings"
        />
        <ResultCard
          tournamentName="Playfly Collegiate Esports"
          logo="/rocket-league/playfly.webp"
          result="Playoffs"
          link="https://challonge.com/VESPAInvite/standings"
        />
        {/* Add more ResultCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
        <div className="bg-black rounded-xl p-2">
          <img src="/concordia-gold.png" alt="Concordia Gold Logo" className="w-8 h-8" />
        </div>
        <span className="ml-2">Concordia Gold</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="Bardo"
          role="Team Captain"
          icon="/rocket-league/bardo.png"
        />
        <TeamMemberCard
          name="Mans"
          role="Player"
          icon="/rocket-league/mans.png"
        />
        <TeamMemberCard
          name="Naro"
          role="Player"
          icon="/rocket-league/naro.png"
        />
        <TeamMemberCard
          name="MakandCheese"
          role="Sub"
          icon="/rocket-league/mak.png"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
        <div className="bg-black rounded-xl p-2">
          <img src="/concordia-burgundy.png" alt="Concordia Burgundy Logo" className="w-8 h-8" />
        </div>
        <span className="ml-2">Concordia Burgundy</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="Jacques_Squoooiize"
          role="Team Captain"
          icon="/staff/jacquez.png"
        />
        <TeamMemberCard
          name="Deadly Marly"
          role="Player"
          icon="/rocket-league/marly.png"
        />
        <TeamMemberCard
          name="Rubello"
          role="Player"
          icon="/rocket-league/rubello.png"
        />
        <TeamMemberCard
          name="Mowfling"
          role="Sub"
          icon="/rocket-league/mowfling.png"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>
      <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
        <div className="bg-black rounded-xl p-2">
          <img src="/concordia.png" alt="Concordia Maroon Logo" className="w-8 h-8" />
        </div>
        <span className="ml-2">Concordia Maroon</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="Breadmonke"
          role="Team Captain"
          icon="/rocket-league/breadmonke.png"
        />
        <TeamMemberCard
          name="Flippy"
          role="Player"
          icon="/rocket-league/flippy.png"
        />
        <TeamMemberCard
          name="LilGoatie"
          role="Player"
          icon="/rocket-league/lilgoatie.png"
        />
        <TeamMemberCard
          name="3asses"
          role="Sub"
          icon="/rocket-league/3asses.png"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>
    </div>
  );
}
