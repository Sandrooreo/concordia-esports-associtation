import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function RainbowSixSiegePage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <img src="/games/rainbow-six-siege.png" alt="Rainbow Six: Siege Logo" className="w-14 h-14 mr-3" />
        Rainbow Six: Siege Team
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Join Concordia&apos;s Rainbow Six Siege Esports Team!
             Are you a sharp strategist? A clutch master? 
             A Siege enthusiast with the skills and mindset to compete at the next level? 
             We&apos;re building Concordia&apos;s official Rainbow Six Siege team, and 
             we want you on our squad. Let&apos;s breach, clear, and conquer. 
             See you on the battlefield, Operator!
          </p>
          <h3 className="font-semibold mb-2">Competition Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>PlayCollegiate Rainbow 6 (Sept 12 - Early December):</strong> One of the longest-standing
              collegiate league in NA. One match per week, Default time Fridays 8:30PM EST.
            </li>
            <li>
              <strong>Rally Cry (Sept - Early December):</strong> A collegiate league in NA
             sponsored by Ubisoft. One match per week, Default is Weekends. 
            </li>
            <li>
              <strong>Canadian Collegiate League (Sept 12 - Early December):</strong> A growing collegiate
              all Canadian league. One match per week, Default time Thursdays 8PM EST.
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
              Full-time Concordia students
            </li>
            <li>
              Dedicated R6 players (PC only)
            </li>
            <li>Team players who can communicate (preferably in English)</li>
            <li>Experience in ranked or competitive play is a plus — but passion and potential matter most</li>
            </ul>
            <h3 className="font-semibold mb-2">What to expect?</h3>
            <ul className="list-disc pl-5 mb-4">
            <li>
              Competitive scrims and tournaments (collegiate and beyond)
            </li>
            <li>
              Team coaching and strategy sessions
            </li>
            <li>Opportunities to represent Concordia in national and international esports events</li>
            <li>A community of gamers who take teamwork seriously (and still have fun)</li>
            </ul>

            <h3 className="font-semibold mb-2">Interested? Fill out the interest form or DM us on Discord: [kyoknn / yoyoyo_]</h3>
          <Link href="https://tinyurl.com/mrxuxbxd" target="_blank">
            <Button className="bg-concordia-burgundy hover:bg-concordia-gold">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-8">
        <ResultCard
          tournamentName="Vespa X CR6 Invitational 2024"
          logo="/rainbow-six-siege/cr6.webp"
          result="7th Overall"
          link="https://challonge.com/VESPAInvite/standings"
        />
        <ResultCard
          tournamentName="CR6 Fall Season 9 2023"
          logo="/rainbow-six-siege/cr6.webp"
          result="Top 64 Playoffs"
          link="https://www.faceit.com/en/championship/e407c138-319d-4aea-b520-965940cf839d/CollegiateR6%20S9%20Stage%201%20Playoffs/standings/column"
        />
        <ResultCard
          tournamentName="CR6 Spring Season 9 2023"
          logo="/rainbow-six-siege/cr6.webp"
          result="Top 64 Playoffs"
          link="https://www.faceit.com/en/championship/b1e622f3-0662-41e5-b1f9-3ed453c47099/CollegiateR6%20Season%209%20Stage%202%20Playoffs/standings/column"
        />
        <ResultCard
          tournamentName="CR6 Fall Season 10 2024"
          logo="/rainbow-six-siege/cr6.webp"
          result="20th in Groups"
          link="https://www.faceit.com/en/championship/c8dd5e47-6417-462b-8af4-0d14bc69a337/CollegiateR6%20-%20Season%2010%20-%20Stage%201%20-%20East/standings/leaderboard"
        />
        <ResultCard
          tournamentName="CCLR6 Season 1 Fall 2024"
          logo="/ccl.webp"
          result="6th in Group B"
          link="https://www.opleague.pro/event/4397-CCLR6Season1-groupstage/standing/overview"
        />
        <ResultCard
          tournamentName="CCLR6 Season 2 Spring 2025"
          logo="/ccl.webp"
          result="WildCard Semi-Finals"
          link="https://www.opleague.pro/event/5639-CCLR6Season2-Phase2-WildCard/course"
        />
        <ResultCard
          tournamentName="CR6 Spring Season 10 2025"
          logo="/rainbow-six-siege/cr6.webp"
          result="Round of 64"
          link="https://www.faceit.com/en/championship/aab8cec2-8b89-4146-bb98-89b3303ec670/CollegiateR6%20-%20Season%2010%20-%20Stage%202%20-%20Combined%20Playoffs/standings/column"
        />
        <ResultCard
          tournamentName="Frostfire LAN 2025"
          logo="/cs2/frostfire2025.png"
          result="Winners"
          link="https://www.start.gg/tournament/frostfire-2025-1/event/rainbow-six-siege/brackets/1838035/2712213"
        />
        {/* Add more ResultCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
        <div className="bg-black rounded-xl p-2">
          <img src="/concordia.png" alt="Concordia Maroon Logo" className="w-8 h-8" />
        </div>
        <span className="ml-2">Concordia Maroon</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="Kyo"
          role="Flex-Entry"
          icon="/rainbow-six-siege/kyoshi.png"
        />
        <TeamMemberCard
          name="Yoyo"
          role="IGL Flex"
          icon="/rainbow-six-siege/yoyo.png"
        />
        <TeamMemberCard
          name="Rango"
          role="Support"
          icon="/rainbow-six-siege/rango.png"
        />
        <TeamMemberCard
          name="Job"
          role="Entry"
          icon="/rainbow-six-siege/job.png"
        />
        <TeamMemberCard
          name="Black"
          role="Support"
          icon="/rainbow-six-siege/black.png"
        />
        <TeamMemberCard
          name="Owzee"
          role="Sub"
          icon="/rainbow-six-siege/oz.png"
        />
        <TeamMemberCard
          name="Crimson"
          role="Sub"
          icon="/rainbow-six-siege/crimpfp.png"
        />
        <TeamMemberCard
          name="Nauq"
          role="Sub"
          icon="/rainbow-six-siege/nauq.png"
        />
        <TeamMemberCard
          name="Globby"
          role="Coach"
          icon="/rainbow-six-siege/globby.png"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>


      <h2 className="text-2xl font-semibold mb-4 pt-4 flex items-center">
        <div className="bg-black rounded-xl p-2">
          <img src="/concordia-gold.png" alt="Concordia Gold Logo" className="w-8 h-8" />
        </div>
        <span className="ml-2">Concordia Gold</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      
      </div>
    </div>
  );
}
