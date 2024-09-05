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
            The McGill Rocket League Team competes in the Collegiate Star
            League&apos;s Star League and the Collegiate Rocket League&apos;s
            CRL tournaments. The Star League is a university league dedicated
            towards esports teams from universities across North America. The
            regular season for NACE (The National Association of Collegiate
            Esports) starts September 23rd, and games are always Mondays at
            7:00pm. Here teams champ 3 and below can compete in leagues based on
            skill level. CRL (Collegiate Rocket League) is a collegiate league
            run by Psyonix themselves, with a very high level of competition, it
            is something fun to try and see how far we can go.
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
            The McGill Rocket League Team is looking for McGill students who
            play Rocket League at a competitive level. You must be at least
            ranked Diamond-Champ. Please note that as per CSL&apos;s Rules, you
            must be registered as a full-time student for the duration of the
            league. We will be recruiting as many players as there is interest
            for teams. There will always be a place for you, as we will host as
            many teams as there is interest. Join us by clicking the button
            below!
          </p>
          <Link href="https://forms.gle/2WmcpHag9gK6Y4ub8" target="_blank">
            <Button className="bg-mcgill hover:bg-mcgill-vibrant">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
