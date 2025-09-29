import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function CounterStrike2() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <img src="/games/counter-strike-2.png" alt="Counter Strike Logo" className="w-12 h-12 mr-3" />
        Counter Strike 2 Team
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The CeSA Counter Strike 2 squad is a competitive CS2 team that represents
            Concordia in collegiate leagues and competitions. With tendencies to prefer collegiate competitions.
            A driven team looking for players, dedicated to improvement and having fun.
          </p>
          <h3 className="font-semibold mb-2">Competition Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>ESEA: Season 51 Open Division 9 - 10</strong>
              <ul className="list-disc pl-5">
                <li>Season 52 - Open Division -{">"} (January 13th - March 2nd + Playoffs) </li>
              </ul>
            </li>
            <li>
              <strong>Frostfire 2025 LAN:</strong> January 18th 2025
            </li>
            <li>
              <strong> Canadian Collegiate League (Sept 15th - Early December):</strong> A growing collegiate
              all Canadian league. One match per week, Default time Mondays 8PM EST.
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
              Concordia students with any level of experience in CS2 and is interested in competing in leagues
            </li>
            <li>
              Available on default competition days and 2-3
              days during the week for practice and scrims
            </li>
            <li>Main roster: 3-5 nights/week availability.</li>
            <li>Substitutes: Flexible scheduling with less time commitment.</li>
          </ul>
          <Link href="https://forms.gle/C6kBx8L4ryU8mBCW6" target="_blank">
            <Button className="bg-concordia-burgundy hover:bg-concordia-gold">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4">Results</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-8">
                    <ResultCard
                      tournamentName="ESEA: Season 51 Open Division"
                      logo="/cs2/esea.png"
                      result="Open Division 3rd round Playoffs"
                      link="https://www.faceit.com/en/cs2/league/ESEA%20League/a14b8616-45b9-4581-8637-4dfd0b5f6af8/e60308e0-fa19-4266-a509-aa68fcd512d9/overview"
                    />
                    <ResultCard
                      tournamentName="Frostfire 2025 LAN"
                      logo="/cs2/frostfire2025.png"
                      result="3rd"
                      link="https://www.start.gg/tournament/frostfire-2025-1/event/counter-strike-2"
                    />
          {/* Add more ResultCards as needed */}
          </div>  
      
      <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
            <div className="bg-black rounded-xl p-2">
              <img src="/concordia-blue.png" alt="Concordia Blue Logo" className="w-8 h-8" />
            </div>
            <span className="ml-2">Concordia Blue</span>
          </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      <TeamMemberCard
          name="Briggan"
          role="Captain"
          icon="/cs2/briggan.png"
        /> 
        <TeamMemberCard
          name="Declan"
          role="AWP"
          icon="/cs2/declan.png"
        />
        <TeamMemberCard
          name="mjgoat"
          role="Rifler"
          icon="/cs2/mjgoat.png"
        />
        <TeamMemberCard
          name="ewan"
          role="Rigler"
          icon="/cs2/ewan.png"
        />
        <TeamMemberCard
          name="zach"
          role="Rifler"
          icon="/cs2/zach.png"
        />
        <TeamMemberCard
          name="TSUNAMI"
          role="Rifler"
          icon="/cs2/tsunami.png"
        />
        <TeamMemberCard
          name="Gopak"
          role="Rifler"
          icon="/cs2/gopak.png"
        />
        <TeamMemberCard
          name="Kordia"
          role="Rifler"
          icon="/cs2/kordia.png"
        />
        <TeamMemberCard
          name="syxsown"
          role="Rifler"
          icon="/games/counter-strike-2.png"
        />
        </div>
    </div>
  );
}
