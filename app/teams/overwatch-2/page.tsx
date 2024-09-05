import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function ValorantPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Overwatch Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Our Overwatch team competes in the Overwatch Collegiate Homecoming
            during both the Fall and Winter semesters, as well as other
            tournaments.
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSd82mT8H5Hs5WP5OiJ-v_4yfZLQVy1OiuhhdG22C7J1sjpNUg/viewform?ts=66ccc15a&edit_requested=true"
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
