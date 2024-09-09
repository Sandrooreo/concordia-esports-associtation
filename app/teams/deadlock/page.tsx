import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function DeadlockPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Deadlock Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Concordia Collegiate Deadlock team is a new team looking to form a roster for potential leagues and competitions. 
            Participating tournaments are TBD depending on players availabilities and interests. 
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
            All players who fill out the form will be invited to play in the 
            first tryouts no matter the rank. After the tryouts, the team(s) will
            be finalized into Division 1 and Division 2. Note: If you have any 
            questions or concerns regarding the tryouts, please reach out to an 
            admin on discord. Thank you and we are excited to see everyone soon!
          </p>
          <Link href="https://forms.gle/okcQJHQRbYVNMTR16" target="_blank">
            <Button className="bg-concordia-burgundy hover:bg-concordia-gold">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
