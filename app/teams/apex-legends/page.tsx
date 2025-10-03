import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ApexLegends() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <img src="/games/apex-legends.png" alt="Apex Legends Logo" className="w-14 h-14 mr-3" />
        Apex Legends Team
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The CeSA Apex Legends squad is a competitive Apex team that represents
            Concordia in leagues and competitions. We tend to play in collegiate
            leagues and other competitions and are always looking for players and
            coaches to further our team and friendships.
          </p>
          <h3 className="font-semibold mb-2">Competition Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Octane Collegiate Season 3: </strong> Stage 2
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
             Concordia students with any level of experience in Apex 
             and is interested in competitive play in leagues or
             in tournaments. 
            </li>
            <li>
              Available on default play days for competition(s) and 
              2-3 days during the week for practice and scrims
            </li>
            <li>Main roster: 3-5 nights/week availability.</li>
            <li>Substitutes: Flexible scheduling with less time commitment.</li>
          </ul>
          <Link href="https://forms.gle/Emys5RL7uSJbRHPL6" target="_blank">
            <Button className="bg-concordia-burgundy hover:bg-concordia-gold">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>

       <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-8">
              <ResultCard
                tournamentName="Octane Collegiate Series: Season 3 Stage 1"
                logo="/apex/octane.png"
                result="Open Division"
                link="https://liquipedia.net/apexlegends/Octane_Collegiate/Season_3/Stage_1"
              />
              <ResultCard
                tournamentName="Concordia Genesis Red"
                logo="/concordia.png"
                result="Legacy Team 2024-2025"
                link="https://liquipedia.net/apexlegends/Octane_Collegiate/Season_3/Stage_1"
              />
    {/* Add more ResultCards as needed */}
    </div>  
    
    <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
            <div className="bg-black rounded-xl p-2">
              <img src="/concordia-gold.png" alt="Concordia Gold Logo" className="w-8 h-8" />
            </div>
            <span className="ml-2">Concordia Axiom Gold</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            <TeamMemberCard
              name="Kajiida"
              role="Captain"
              icon="/apex/kajiida.png"
            />
            <TeamMemberCard
              name="TuxHood"
              role="Player"
              icon="/apex/tuxhood.png"
            />
            <TeamMemberCard
              name="Dagger"
              role="Player"
              icon="/apex/dagger.png"
            />
            <TeamMemberCard
              name="Kakubacon"
              role="Sub"
              icon="/apex/kakubacon.png"
            />
            {/* Add more TeamMemberCards as needed */}
          </div>
          </div>
  );
}
