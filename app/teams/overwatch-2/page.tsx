import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function OverwatchPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <img src="/games/overwatch-2.png" alt="Overwatch 2 Logo" className="w-16 h-12 mr-4" />
        Overwatch Team
      </h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
          The Concordia OW team is a competitive Overwatch squad
            representing Concordia University. We have a strong track record in
            collegiate leagues and are constantly looking to improve and expand
            our roster with new faces and friends.
          </p>
          <h3 className="font-semibold mb-2">Competition Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>SPCS Intermediate and Advanced Divisions:</strong> Febuary 13th - Febuary 27th + Playoffs
            </li>
            <li>
              <strong> Canadian Collegiate League (Sept 15th - Early December):</strong> A growing collegiate
              all Canadian league. One match per week, Default time Wednesdays 8PM EST.
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
              Concordia students with any level of experience in OW (PC) interested
              in competitive play.
            </li>
            <li>
              Players available for a few hours on match nights (normally from
              8PM onwards).
            </li>
            <li>Main roster: 3-5 nights/week availability (often after 8PM).</li>
            <li>Substitutes: Flexible scheduling with less time commitment.</li>
          </ul>
          <Link
            href="https://forms.gle/faAUHa2GmvQkepRm9"
            target="_blank"
          >
            <Button className="bg-concordia-burgundy hover:bg-concordia-gold">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-8">
              <ResultCard
                tournamentName="Spawn Point Championship Series 1"
                logo="/ow2/spcs.webp"
                result="23rd Advanced Division"
                link="https://spcs.slmn.gg/event/VV65hVSmdRb9Z5/standings"
              />
              <ResultCard
                tournamentName="Tranquility Discord Tier"
                logo="/ow2/tranquility.webp"
                result="Top 8 Playoffs"
                link=""
              />
              <ResultCard
                tournamentName="Spawn Point Championship Series 2"
                logo="/ow2/spcs.webp"
                result="6th in Advanced Division -- 9th in Intermediate Division"
                link="https://spcs.slmn.gg/event/2T93kQLRsmdcB6/standings"
              />
              <ResultCard
                tournamentName="CCL OW2 Winter Invitational"
                logo="/ccl.webp"
                result="Quarter Finals"
                link="https://www.opleague.pro/event/5838-CCLOW2WinterInvitational2025-Phase2-Playoffs/course"
              />
              {/* Add more ResultCards as needed */}
            </div>
   
   <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
           <div className="bg-black rounded-xl p-2">
             <img src="/concordia-wildwind.png" alt="Concordia Wildwind Logo" className="w-8 h-8" />
           </div>
           <span className="ml-2">Concordia Wildwind</span>
         </h2>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
           <TeamMemberCard
             name="ThatAFKNoob"
             role="Tank"
             icon="/ow2/afknoob.png"
           />
           <TeamMemberCard
             name="BatDashFlap"
             role="Tank"
             icon="/rainbow-six-siege/bat.png"
           />
           <TeamMemberCard
             name="Moogoesquack"
             role="DPS"
             icon="/staff/julien.png"
           />
           <TeamMemberCard
             name="Seta"
             role="DPS"
             icon="/ow2/seta.png"
           />
           <TeamMemberCard
             name="Vinvoide"
             role="Support"
             icon="/ow2/vinvoide.png"
           />
           <TeamMemberCard
             name="JJacket"
             role="Support"
             icon="/ow2/jjacket.png"
           />
           <TeamMemberCard
             name="B3ll"
             role="Support"
             icon="/ow2/b3ll.png"
           />
           <TeamMemberCard
             name="Fa1nter"
             role="Support"
             icon="/ow2/fa1nter.gif"
           />
           {/* Add more TeamMemberCards as needed */}
         </div>
   
   
         <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
           <div className="bg-black rounded-xl p-2">
             <img src="/concordia-crimson.png" alt="Concordia Crimson Logo" className="w-8 h-8" />
           </div>
           <span className="ml-2">Concordia Crimson</span>
         </h2>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
         <TeamMemberCard
             name="Amigo"
             role="Tank"
             icon="/ow2/amigo.png"
           />
         <TeamMemberCard
             name="Jawbreaker"
             role="DPS"
             icon="/ow2/jawbreakerx.gif"
           />
           <TeamMemberCard
             name="R1ptide"
             role="Support"
             icon="/ow2/r1ptide.png"
           />
           <TeamMemberCard
             name="Freakywizard"
             role="DPS"
             icon="/games/overwatch-2.png"
           />
           <TeamMemberCard
             name="Jimbionicles"
             role="Support"
             icon="/ow2/jimbionicles.png"
           />
           <TeamMemberCard
             name="Bucket"
             role="Support"
             icon="/ow2/bucket.png"
           />
         </div>

         <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
           <div className="bg-black rounded-xl p-2">
             <img src="/concordia-no-more-mr-nice-guy.png" alt="Concordia NoMoreMr.NiceGuy Logo" className="w-8 h-8" />
           </div>
           <span className="ml-2">Concordia NoMoreMr.NiceGuy</span>
         </h2>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
         <TeamMemberCard
             name="Motherkiller"
             role="Tank"
             icon="/ow2/mothekiller.png"
           />
         <TeamMemberCard
             name="Ourboy"
             role="DPS"
             icon="/ow2/ourboy.png"
           />
           <TeamMemberCard
             name="TimmyTumTum"
             role="DPS"
             icon="/ow2/timmytumtum.png"
           />
           <TeamMemberCard
             name="Fishmarket"
             role="DPS"
             icon="/ow2/fishmarket.png"
           />
           <TeamMemberCard
           name="Maddy"
           role="DPS"
           icon="/ow2/Maddy.png"
         />
           <TeamMemberCard
             name="Julie"
             role="Support"
             icon="/ow2/julie.png"
           />
           <TeamMemberCard
             name="Watson"
             role="Support"
             icon="/ow2/watson.png"
           />
           <TeamMemberCard
             name="TuneEternal"
             role="Flex"
             icon="/ow2/tuneeternal.png"
           />
         </div>
       </div> 
  );
}
