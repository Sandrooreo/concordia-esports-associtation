import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function OverwatchPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Overwatch Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Concordia Overwatch 2 roster competes in TBD tournaments 
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Recruitment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Players of any skill level are welcome! We expect you to be
            available to scrim other collegiate teams 2-4 times a week. Click
            the button below to fill out our interest form!
          </p>
          <Link
            href="https://forms.gle/3UjnWvuLmjsSh3zt9"
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
