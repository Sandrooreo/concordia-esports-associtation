import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function RocketLeaguePage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Rocket League Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Concordia Halycon Rocket League team is a squad representing Concordia University. 
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

    </div>
  );
}
