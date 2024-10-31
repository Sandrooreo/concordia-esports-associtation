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

      <h2 className="text-2xl font-semibold mb-4">Concordia Gold</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="Tweedledum"
          role="Top"
          icon="/league-of-legends/tweedledum.png"
        />
        <TeamMemberCard
          name="Impowerful"
          role="Jungle"
          icon="/league-of-legends/impowerful.png"
        />
        <TeamMemberCard
          name="Hellobacon"
          role="Mid"
          icon="/league-of-legends/hellobacon.png"
        />
        <TeamMemberCard
          name="MeAndOnlyMe"
          role="Adc"
          icon="/league-of-legends/meandonlyme.png"
        />
        <TeamMemberCard
          name="NightKnight"
          role="Support"
          icon="/league-of-legends/nightknight.png"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Concordia Burgundy</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="Kaiguy"
          role="Top"
          icon="/league-of-legends/kaiguy.png"
        />
        <TeamMemberCard
          name="Ngnarios"
          role="Jungle"
          icon="/league-of-legends/ngnarios.png"
        />
        <TeamMemberCard
          name="Beelzebub"
          role="Mid"
          icon="/league-of-legends/beelzebub.png"
        />
        <TeamMemberCard
          name="3MNiM3"
          role="Adc"
          icon="/league-of-legends/3mnim3.png"
        />
        <TeamMemberCard
          name="Arcade"
          role="Support"
          icon="/league-of-legends/arcade.png"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Concordia Maroon</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="HundchenTanque"
          role="Top"
          icon="/league-of-legends/hundchentanque.png"
        />
        <TeamMemberCard
          name="Bhav"
          role="Jungle"
          icon="/league-of-legends/bhav.png"
        />
        <TeamMemberCard
          name="A Pikmen"
          role="Mid"
          icon="/league-of-legends/apikmen.png"
        />
        <TeamMemberCard
          name="KatieKatelin"
          role="Adc"
          icon="/league-of-legends/katie.png"
        />
        <TeamMemberCard
          name="NotLiana"
          role="Support"
          icon="/league-of-legends/notliana.png"
        />
        <TeamMemberCard
          name="Arishu"
          role="Sub"
          icon="/league-of-legends/arishu.png"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>
    </div>
  );
}
