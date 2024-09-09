import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function SpecterDividePage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Specter Divide</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Concordia Specter Divide team plays in some TBD leagues and
            tournaments. Will be based on players availabilities and interests.
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
            out the form will be invited to play in tryouts no matter the rank. 
            If you have any questions or concerns regarding the tryouts, please
            reach out to an admin on discord . Thank you and we&apos;re
            excited to see everyone soon!
          </p>
          <Link href="https://forms.gle/jwqzdXF79K9rmP7H7" target="_blank">
            <Button className="bg-concordia-burgundy hover:bg-concordia-gold">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
