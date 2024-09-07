import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function LeagueOfLegendsPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">League of Legends Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            League of Legends is one of CeSA&aposs largest games.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Recruitment</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">Who are we looking for?</h3>
          <p className="mb-4">
            Concordia Collegiate League of Legends teams are recruiting for the
            Fall 2024 and Winter 2025 season.
          </p>
          <br></br>
          <Link
            href="https://forms.gle/yyk9cnHd8jqBuzaj8"
            target="_blank"
          >
            <Button className="bg-concordia-burgundy hover:bg-concordia-gold">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
