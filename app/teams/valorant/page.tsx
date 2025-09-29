import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function ValorantPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <img src="/games/valorant.png" alt="Valorant Logo" className="w-18 h-14 mr-3" />
        Valorant Team
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
          The Concordia Valorant team is a competitive valorant squad
            representing Concordia University. We have a strong track record in
            collegiate leagues and are constantly looking to improve and expand
            our roster with new faces and friends.
          </p>
          <h3 className="font-semibold mb-2">Competition Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong> CVAL East(January 25th - Febuary 22nd)</strong>
            </li>
            <li>
              <strong> Canadian Collegiate League (Sept 15th - Early December):</strong> A growing collegiate
              all Canadian league. One match per week, Default time Fridays 8PM EST.
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
          <p className="mb-4">
          There is no minimum rank or skill level required to tryout, and all
            individuals interested in Competitive play are encouraged to tryout.
            Also note that this is NOT an application, as all players who fill
            out the form will be invited to play in tryouts no matter the rank. 
            If you have any questions or concerns regarding the tryouts, please
            reach out to an admin on discord . Thank you and we&apos;re
            excited to see everyone soon!
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScxoks09yL8IDVHuViActlGaSS7-xnDxWNHy5JxhOUq-sRJtg/viewform?usp=dialog" target="_blank">
            <Button className="bg-concordia-burgundy hover:bg-concordia-gold">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>

            <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-8">
              <ResultCard
                tournamentName="CCLVAL Winter Series 2025"
                logo="/ccl.webp"
                result="6th in Group A"
                link="https://www.opleague.pro/event/5407-CCLVALWinterSeries2025-Phase1-GroupStage-GroupA/course?playday=5&selected=9827-Western-Walruses"
              />
               {/* Add more ResultCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
              <div className="bg-black rounded-xl p-2">
                <img src="/concordia.png" alt="Concordia Crimson Logo" className="w-8 h-8" />
              </div>
              <span className="ml-2">Concordia Crimson</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              <TeamMemberCard
                name="Malderdoge"
                role="Player"
                icon="/valorant/malderdoge.png"
              />
              <TeamMemberCard
                name="Alchemyy"
                role="Player"
                icon="/valorant/alchemyy.png"
              />
              <TeamMemberCard
                name="izakazuya"
                role="Player"
                icon="/valorant/kazuya.png"
              />
              <TeamMemberCard
                name="Notetr"
                role="Player"
                icon="/valorant/notetr.png"
              />
              <TeamMemberCard
                name="Owzee"
                role="Player"
                icon="/rainbow-six-siege/oz.png"
              />
              <TeamMemberCard
                name="Huntxr_"
                role="Player"
                icon="/valorant/huntxr.png"
              />
              <TeamMemberCard
                name="Mel_001"
                role="Sub"
                icon="/valorant/mel.png"
              />
              <TeamMemberCard
                name="Chrislablitz"
                role="Analyst and Sub"
                icon="/valorant/chris.png"
              />
              <TeamMemberCard
                name="Ronnyrdy"
                role="Coach"
                icon="/valorant/ronnyrdy.png"
              />
              <TeamMemberCard
                name="Thrillaval"
                role="Coach"
                icon="/valorant/thrillaval.png"
              />
              {/* Add more TeamMemberCards as needed */}
            </div>
    </div>
  );
}
