import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function CounterStrike2() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Counter Strike 2 Legends Team</h1>

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
              <strong>TBD:</strong>
              <br></br>---
              <ul className="list-disc pl-5">
                <li>TBD -{">"} (insert date) </li>
                <li>TBD -{">"} (insert date) </li>
                <li>TBD -{">"} (insert date) </li>
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
    </div>
  );
}
