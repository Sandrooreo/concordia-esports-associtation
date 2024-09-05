import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Apex Legends Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The MESA Apex squad is a competitive Apex team that represents
            McGill in leagues and competitions. We tend to play in collegiate
            leagues and other competitions and are always looking for players.
          </p>
          <h3 className="font-semibold mb-2">Competition Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Octane Collegiate League:</strong>
              <br></br>Collegiate tournament involving Canadian and American
              schools. Games happen on Saturday in the afternoon (12pm or 3pm)
              and lasts 3 hours.
              <ul className="list-disc pl-5">
                <li>Stage 1: September 27th -{">"} November 17th </li>
                <li>Stage 2: January 17th -{">"} March 2nd </li>
                <li>Stage 3: March 22nd -{">"} April 20th </li>
              </ul>
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
              McGill students with any level of experience in Apex (MK or
              Controller) and is interested in competing in the league
            </li>
            <li>
              Available on Saturday in the afternoon for competition and 2-3
              days during the week for practice and scrims
            </li>
            <li>Main roster: 3-5 nights/week availability.</li>
            <li>Substitutes: Flexible scheduling with less time commitment.</li>
          </ul>
          <Link href="https://forms.gle/xZRRZPrJh8Ds66Ln8" target="_blank">
            <Button className="bg-mcgill hover:bg-mcgill-vibrant">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-8">
        <ResultCard
          tournamentName="Octane Collegiate Playoffs 2022-2023"
          logo="/apex/octane-collegiate.jpg"
          result="Top 40 teams"
        />
        <ResultCard
          tournamentName="Octane Collegiate Playoffs Stage 2 2023-2024"
          logo="/apex/octane-collegiate.jpg"
          result="Top 20 teams"
        />
        {/* Add more ResultCards as needed */}
      </div>
    </div>
  );
}
