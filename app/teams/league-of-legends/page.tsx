import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function LeagueOfLegendsPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <img src="/games/league-of-legends.png" alt="League of Legends Logo" className="w-14 h-14 mr-3" />
        League of Legends Team
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
        <p className="mb-4">
            The Concordia LoL teams are competitive League of Legends teams
            representing Concordia University. One of the largest groups of 
            players hosting 3 teams within Concordia. One of the most populated
            Esport games world wide of massive popularity, it shows within Concordia.
            We love team camaraderie and fun experiences, along with the enjoyment of
            competitive gameplay against many other University teams nationwide. 
          </p>
          <h3 className="font-semibold mb-2">Competition Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>University Esports NA (CLOL East) (Jan 25th - Feb 22nd):</strong> A long-standing
              collegiate league in NA. One match per week, Default time Saturday 3PM EST.
            </li>
            <li>
              <strong>Esports Canada PS Nationals (Nov 25th - Dec 1st):</strong> A new collegiate
              Canadian Nationals Tournament. Tuesday, Thursday and Friday Groups (Round 1, 2 and 3 respectively
              with top team from each group going into playoff bracket on Saturday 30th and Sunday 1st).
            </li>
            <li>
              <strong>Open tournaments:</strong> Participation depends on team
              availability.
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
              Concordia students with any level of experience in LoL interested
              in competitive play.
            </li>
            <li>
              Players available for a few hours on match nights.
            </li>
            <li>Main roster: 3-5 nights/week availability (often after 8PM).</li>
            <li>Substitutes: Flexible scheduling with less time commitment.</li>
            <li>Coaches: Some level of game knowledege and ability to assist
              players through game situations.</li>
          </ul>
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

      <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
        <div className="bg-black rounded-xl p-2">
          <img src="/concordia-gold.png" alt="Concordia Gold Logo" className="w-8 h-8" />
        </div>
        <span className="ml-2">Concordia Gold</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="Tweedledum"
          role="Top"
          icon="/league-of-legends/tweedledum.png"
        />
        <TeamMemberCard
          name="Tweedledee"
          role="Jungle"
          icon="/league-of-legends/tweedledee.png"
        />
        <TeamMemberCard
          name="Beelzebub"
          role="Mid"
          icon="/league-of-legends/beelzebub.png"
        />
        <TeamMemberCard
          name="MeAndOnlyMe"
          role="Adc"
          icon="/league-of-legends/meandonlyme.png"
        />
        <TeamMemberCard
          name="Akaen"
          role="Support"
          icon="/league-of-legends/akaen.png"
        />
        <TeamMemberCard
          name="Hellobacon"
          role="Sub"
          icon="/league-of-legends/hellobacon.png"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
        <div className="bg-black rounded-xl p-2">
          <img src="/concordia-burgundy.png" alt="Concordia Burgundy Logo" className="w-8 h-8" />
        </div>
        <span className="ml-2">Concordia Burgundy</span>
      </h2>
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
          name="NightKnight"
          role="Mid"
          icon="/league-of-legends/nightknight.png"
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
        <TeamMemberCard
          name="Mr.2"
          role="Sub"
          icon="/league-of-legends/mr2.png"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
        <div className="bg-black rounded-xl p-2">
          <img src="/concordia.png" alt="Concordia Maroon Logo" className="w-8 h-8" />
        </div>
        <span className="ml-2">Concordia Maroon</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="HundchenTanque"
          role="Top"
          icon="/league-of-legends/hundchentanque.png"
        />
        <TeamMemberCard
          name="Bhav"
          role="Mid"
          icon="/league-of-legends/bhav.png"
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
          role="Jungle"
          icon="/league-of-legends/arishu.png"
        />
        <TeamMemberCard
          name="Nicknack"
          role="Sub"
          icon="/rainbow-six-siege/nicknack.png"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>
    </div>
  );
}
