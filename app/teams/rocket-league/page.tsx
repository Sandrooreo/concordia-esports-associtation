import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function RocketLeaguePage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <img src="/games/rocket-league.png" alt="Rocket League Logo" className="w-14 h-14 mr-4" />
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
              <strong> Canadian Collegiate League (Sept 15th - Early December):</strong> A growing collegiate
              all Canadian league. One match per week, Default time Tuesdays 8PM EST.
            </li>
            <li>
              <strong>Gankster Scrims:</strong> An open Scrim setting. 
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
          <Link href="https://docs.google.com/document/d/1oKFIfQqrU8npxHIXdC3xiG8N0oabfXdB1GOHXPpqd4s/edit?usp=sharing" target="_blank">
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
          link=""
        />
        <ResultCard
          tournamentName="Playfly Collegiate Esports"
          logo="/rocket-league/playfly.webp"
          result="Playoffs"
          link=""
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
          name="Nauq"
          role="Player"
          icon="/rainbow-six-siege/nauq.png"
        />
        <TeamMemberCard
          name="MansrFlying"
          role="Player"
          icon="/rocket-league/mansrflying.png"
        />
        <TeamMemberCard
          name="Jacquez"
          role="Captain"
          icon="/staff/jacquez.png"
        />
        <TeamMemberCard
          name="Bardo"
          role="Sub"
          icon="/rocket-league/bardo.png"
        />
        <TeamMemberCard
          name="Dani3l"
          role="Sub"
          icon="/rocket-league/dani3l.png"
        />
        <TeamMemberCard
          name="T0_0T"
          role="Sub"
          icon="/rocket-league/t0t0.png"
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
          name="3assas"
          role="Captain"
          icon="/rocket-league/3asses.png"
        />
        <TeamMemberCard
          name="Will"
          role="Player"
          icon="/rocket-league/will.png"
        />
        <TeamMemberCard
          name="Ghumsi"
          role="Player"
          icon="/rocket-league/ghumsi.png"
        />
        <TeamMemberCard
          name="Lard"
          role="Sub"
          icon="/rocket-league/lard.png"
        />
        <TeamMemberCard
          name="Breadmonke"
          role="Sub"
          icon="/rocket-league/breadmonke.png"
        />
        <TeamMemberCard
          name="LilGoatie"
          role="Sub"
          icon="/rocket-league/lilgoatie.png"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>
      </div>
  );
}
