import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const teams = [
  { name: "Staff and Creative Team", slug: "staff-and-creative-team" },
  { name: "Rainbow Six: Siege", slug: "rainbow-six-siege" },
  { name: "League of Legends", slug: "league-of-legends" },
  { name: "Rocket League", slug: "rocket-league" },
  { name: "Overwatch 2", slug: "overwatch-2" },
  { name: "Apex Legends", slug: "apex-legends" },
  { name: "Counter Strike 2", slug: "cs2" },
  { name: "Valorant", slug: "valorant" },
  { name: "Dota 2", slug: "dota2" },
  { name: "Deadlock", slug: "deadlock" },
  { name: "Smash Ultimate", slug: "smash-ultimate" },
  { name: "Specter Divide", slug: "specter-divide" },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Welcome to the Concordia Esports Students Association
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>About CeSA</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The Concordia Esports Students Association (CeSA) is dedicated to fostering a
            vibrant gaming community within Concordia University. We support
            various competitive esports teams and organize events for casual and
            competitive gamers alike.
          </p>
        </CardContent>
      </Card>

      <Separator className="my-8" />
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
           Our Concordia Esports teams are gearing up for an action-packed season with a
          lineup of exciting events! Stay connected through our social media channels 
          for the latest updates and more event information. We look forward to seeing you there! 
          </p>
          <h3 className="font-semibold mb-2">The Events:</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Concordia Recruitment (Ongoing):</strong> Concordia Esports teams are actively
              recruiting players for all teams. Click on the teams for more information and for the
              team sign up forms. 
            </li>
            <li>
              <strong>ETS R6 LAN (Oct 5th - Oct 6th):</strong> ETS is hosting a small 4 team Montreal
              collegiate lan event.
            </li>
            <li>
              <strong>Open tournaments:</strong> Participation depends on team
              availability.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Separator className="my-8" />
      <h2 className="text-2xl font-semibold mb-4">Our Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <Link href={`/teams/${team.slug}`} key={team.slug}>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={`/games/${team.slug}.png`}
                      alt={`${team.name} logo`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <CardTitle>{team.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Learn more about our {team.name} team and their achievements.
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
