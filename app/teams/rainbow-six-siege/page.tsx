import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function RainbowSixSiegePage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Rainbow Six: Siege Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Concordia R6 team is a competitive Rainbow Six: Siege squad
            representing Concordia University. We have a strong track record in
            collegiate leagues and are constantly looking to improve and expand
            our roster with new faces and friends.
          </p>
          <h3 className="font-semibold mb-2">Competition Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>CR6 (Sept 21 - Early December):</strong> A long-standing
              collegiate league in NA. One match per week, Default time Fridays 8PM EST.
            </li>
            <li>
              <strong>CCL (Sept 16th - Nov 25th):</strong> A new collegiate
              Canadian league. One match per week, Default time Mondays 8PM EST.
            </li>
            <li>
              <strong>Rally Cry (Sept 28th - Nov 10th):</strong> A Ubisoft sponsored
              collegiate league. One match per week, Default time Sundays 3PM EST.
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
              Concordia students with any level of experience in R6 (PC) interested
              in competitive play.
            </li>
            <li>
              Players available for a few hours on match nights (normally from
              8PM onwards).
            </li>
            <li>Main roster: 3-5 nights/week availability (often after 8PM).</li>
            <li>Substitutes: Flexible scheduling with less time commitment.</li>
          </ul>
          <Link href="https://forms.gle/FChnDwDkcigckDXW9" target="_blank">
            <Button className="bg-concordia-burgundy hover:bg-concordia-gold">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-8">
        <ResultCard
          tournamentName="CR6 Spring 2024"
          logo="/rainbow-six-siege/cr6.webp"
          result="Top 64 Playoffs"
          link="https://www.faceit.com/en/championship/b1e622f3-0662-41e5-b1f9-3ed453c47099/CollegiateR6%20Season%209%20Stage%202%20Playoffs/standings/column"
        />
        <ResultCard
          tournamentName="Vespa X CR6 Invitational 2024"
          logo="/rainbow-six-siege/cr6.webp"
          result="7th Overall"
          link="https://challonge.com/VESPAInvite/standings"
        />
        <ResultCard
          tournamentName="CR6 Fall 2023"
          logo="/rainbow-six-siege/cr6.webp"
          result="Top 64 Playoffs"
          link="https://www.faceit.com/en/championship/e407c138-319d-4aea-b520-965940cf839d/CollegiateR6%20S9%20Stage%201%20Playoffs/standings/column"
        />
        {/* Add more ResultCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Concordia Burgundy</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="Oreo"
          role="Team Captain"
          icon="/rainbow-six-siege/oreo.png"
        />
        <TeamMemberCard
          name="Cey"
          role="Flex-Entry"
          icon="/rainbow-six-siege/ceybae.png"
        />
        <TeamMemberCard
          name="DaRango"
          role="Support"
          icon="/rainbow-six-siege/rango.png"
        />
        <TeamMemberCard
          name="Batdashflap"
          role="Support"
          icon="/rainbow-six-siege/bat.png"
        />
        <TeamMemberCard
          name="Yoyo"
          role="Flex-Support"
          icon="/rainbow-six-siege/yoyo.png"
        />
        <TeamMemberCard
          name="Job"
          role="Entry-Flex"
          icon="/rainbow-six-siege/job.png"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>


      <h2 className="text-2xl font-semibold mb-4 pt-4">Concordia Gold</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      <TeamMemberCard
          name="Tranmaxpower"
          role="Entry Fragger"
          icon="/rainbow-six-siege/tran.png"
        />
        <TeamMemberCard
          name="OMIOZZ"
          role="Support"
          icon="/rainbow-six-siege/oz.png"
        />
        <TeamMemberCard
          name="Bandojay"
          role="Flex-Support"
          icon="/rainbow-six-siege/bandojay.png"
        />
        <TeamMemberCard
          name="Kyoshi"
          role="Support"
          icon="/rainbow-six-siege/kyoshi.png"
        />
        <TeamMemberCard
          name="RYMFK"
          role="Support"
          icon="/rainbow-six-siege/rymfk.png"
        />
        <TeamMemberCard
          name="Seephoun"
          role="Entry Fragger"
          icon="/rainbow-six-siege/seephoun.png"
        />
      </div>
    </div>
  );
}
