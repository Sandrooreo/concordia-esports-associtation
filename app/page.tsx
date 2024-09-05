import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const teams = [
  { name: "Rainbow Six: Siege", slug: "rainbow-six-siege" },
  { name: "League of Legends", slug: "league-of-legends" },
  { name: "Rocket League", slug: "rocket-league" },
  { name: "Valorant", slug: "valorant" },
  { name: "Overwatch 2", slug: "overwatch-2" },
  { name: "Apex Legends", slug: "apex" },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Welcome to the McGill Esports Association
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>About MESA</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The McGill Esports Association (MESA) is dedicated to fostering a
            vibrant gaming community within McGill University. We support
            various competitive esports teams and organize events for casual and
            competitive gamers alike.
          </p>
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
