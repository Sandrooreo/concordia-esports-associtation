import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function ValorantPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Valorant Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The McGill Collegiate VALORANT teams play in Collegiate tournaments
            such as the NACE Starleague and CVal over the course of the
            semester. The teams have signed up and will sign up for any other
            Open tournaments that matches their availability, if they choose to.
            Preliminary dates are in the range of Aug 29-Sep 1 and Sep 5-8.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Recruitment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            There is no minimum rank or skill level required to tryout, and all
            individuals interested in Competitive play are encouraged to tryout.
            Also note that this is NOT an application, as all players who fill
            out the form will be invited to play in the first tryouts no matter
            the rank. This year we will be hosting tryouts twice. The first time
            will be in late August/early September, and the second time will be
            in late September. The first tryout will be a general tryout, where
            you can preliminarily make the team, be invited for second tryouts
            or be cut. The second tryout is for anyone who did not attend the
            first tryout (for whatever reason) or anyone who was invited to
            tryout again. After the second tryout, the teams will be finalized
            into Division 1 and Division 2 Collegiate VALORANT teams. Note:
            preliminarily, players will be placed into Division 1 or Division 2,
            while the second tryout could shuffle the players a little bit. If
            you have any questions or concerns regarding the tryouts, please
            reach out to me @smashktchp on discord . Thank you and we&apos;re
            excited to see everyone soon!
          </p>
          <Link href="https://forms.gle/LxDn9X5oVVBhvmcAA" target="_blank">
            <Button className="bg-mcgill hover:bg-mcgill-vibrant">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
