import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function StaffAndCreativeTeam() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Staff and Creative Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Our Staff</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The CeSA staff is commited to providing a fun experience, allowing 
            players to enjoy their time within the Concordia Esports Students 
            Association. Granting them opportunities to play in various leagues,
            competitions and tournaments across several games. 
          </p>
          <h3 className="font-semibold mb-2">The Creative Team</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Casting and Streaming:</strong> Our Casting Team is focused
              on providing an interesting overview and enjoyable experience for all
              our listners watching our games. A play by play commentary and an
              ever expanding addition to the CeSA world. 
              <ul className="list-disc pl-5">
              </ul>
            </li>
            <li>
              <strong>Production Team:</strong> Our group of Production Team
              is focused on providing assitance to streaming, additional graphic
              design and a multitude of technical support. 
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
              Concordia students with a desire to get into the world of content
              and esports. 
            </li>
            <li>
              We are looking for casters, streamers, and other staff members 
              dedicated to the production side of esports.
            </li>
            <li>Main importance is availbility for casting on default days of
              participating leagues and tournaments
            </li>
            <li>Small bonus if proficient in knowledge of one or more CeSA 
              participating games. 
            </li>
          </ul>
          <Link href="https://forms.gle/MqS9sFqufGYrPQr69" target="_blank">
            <Button className="bg-concordia-burgundy hover:bg-concordia-gold">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4 pt-4">Concordia Staff</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="Oreo"
          role="Team Captain -- Coach"
          icon="/rainbow-six-siege/oreo.png"
        />
        <TeamMemberCard
          name="Toji"
          role="Flex-Support"
          icon="/rainbow-six-siege/ceybae.png"
        />
        <TeamMemberCard
          name="Bandojay"
          role="Flex-Support"
          icon="/rainbow-six-siege/ceybae.png"
        />
        <TeamMemberCard
          name="Kyoshi"
          role="Support"
          icon="/rainbow-six-siege/kyoshi.png"
        />
      </div>
    </div>
  );
}
