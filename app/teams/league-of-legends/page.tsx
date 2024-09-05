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
            League of Legends is one of MESA&apos;s largest games, sporting
            upwards of 5 teams across all skill levels. Our teams compete in 2
            Riot Games sponsored events, with more tournament opportunities
            available throughout the year. Last year, we had five CLOL teams,
            ranging from a Masters+ average CLOL A, to a casual CLOL G team for
            anybody gold and under.
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
            McGill Collegiate League of Legends teams are recruiting for the
            Fall 2024 and Winter 2025 season. We will be mainly competing in the
            Fall 2024 CLOL Warmup tournament and the Spring 2025 CLOL
            tournament. If you&apos;re interested in playing League
            competitively, then please fill out the form from the button below!
          </p>
          <br></br>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSepejMZs9jCIhyNViZHiVW3EUAeQOvQBAkidZEs-oiWwg_U4g/viewform?usp=sf_link"
            target="_blank"
          >
            <Button className="bg-mcgill hover:bg-mcgill-vibrant">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
