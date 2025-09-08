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
            The CeSA staff is dedicated to creating a fun, engaging, and welcoming
             environment where players can truly enjoy their time within the 
             Concordia Esports Students Association. We provide opportunities to compete
              in leagues, tournaments, and events across a wide range of games, 
              helping our members grow both in and out of competition.
          </p>
        <h3 className="font-semibold mb-2">Leadership Staff</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Concordia Club Staff:</strong> The backbone of CeSA’s operations,
               our Club Staff oversee the direction and management of the association.
                Roles include President, Vice President, and Administrators who ensure
                 everything runs smoothly within the organization.
              <ul className="list-disc pl-5">
              </ul>
            </li>
            <li>
              <strong>Team Coordinators:</strong> Our Team Coordinators serve as the bridge
               between CeSA leadership and our competitive rosters. 
               They focus on team organization and player development, 
               ensuring each roster has the structure and support needed to succeed.
            </li>
          </ul>
          <h3 className="font-semibold mb-2">The Creative Team</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Casting and Streaming:</strong> Our Casting Team delivers dynamic,
               play-by-play commentary that keeps matches exciting and engaging for our
                audience. They bring energy and insight to every broadcast, 
                helping fans connect with the action.
              <ul className="list-disc pl-5">
              </ul>
            </li>
            <li>
              <strong>Production Team:</strong> Behind the scenes, our Production Team
               ensures every stream runs smoothly. From technical support and broadcast
                management to graphic design and creative assets, they’re the backbone of CeSA’s content.
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
            We’re seeking Concordia students eager to dive into the world of esports,
             content creation, and leadership. Whether you’re an aspiring caster,
              streamer, production enthusiast, or someone interested in organizational
               roles, there’s a place for you on our team.
          </p>
        <h3 className="font-semibold mb-2">Leadership Staff</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Concordia Club Staff:</strong> Details include assisting with events coordination. 
              Financial management and maintaining budgets.
               Communications within Concordia, other external organizations, and our partners.
               Keeping our community engaged through updates, promotions, and online presence.
              <ul className="list-disc pl-5">
              </ul>
            </li>
            <li>
              <strong>Team Coordinators:</strong> Coordinators organize player recruitment,
               organizing tryouts, and handle the onboarding of new members to CeSA teams. 
               Our Coordinators are responsible for tournament and league registrations, 
               scheduling practices, and managing scrims and matches. While also providing
                structure and guidance to their teams, ensuring every roster is prepared 
                and supported both in and out of competition.
            </li>
          </ul>
          <h3 className="font-semibold mb-2">The Creative Team</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Casting and Streaming:</strong> Provide live commentary and engaging broadcasts.
              <ul className="list-disc pl-5">
              </ul>
            </li>
            <li>
              <strong>Production Team:</strong> Handle graphics, stream management, and tech support.
            </li>
          </ul>
          <Link href="docs.google.com/forms/d/e/1FAIpQLSdAP603FE2zrW7RgUpjcmc1tlwrYVUl0Bh8pIfZ8hTRAULOtw/viewform?usp=dialog" target="_blank">
            <Button className="bg-concordia-burgundy hover:bg-concordia-gold">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4 pt-4">Concordia Staff</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="Julien"
          role="Co-President -- OW Coordinator"
          icon="/staff/julien.png"
        />
        <TeamMemberCard
          name="Shivam Khera"
          role="Co-President"
          icon="/staff/firehawk.png"
        />
        <TeamMemberCard
          name="RexO"
          role="Head Admin"
          icon="/staff/rex.png"
        />
        <TeamMemberCard
          name="Kaz"
          role="Finance Coordinator"
          icon="/staff/kaz.png"
        />
        <TeamMemberCard
          name="Dion"
          role="Event Coordinator"
          icon="/staff/dion.png"
        />
        <TeamMemberCard
          name="Arcade"
          role="VP Marketing -- LoL Coordinator"
          icon="/league-of-legends/arcade.png"
        />
        <TeamMemberCard
          name="KatieKatelin"
          role="VP Internal -- LoL Coordinator"
          icon="/staff/katiekatelin.png"
        />
        <TeamMemberCard
          name=".Syl"
          role="Admin"
          icon="/staff/syl.png"
        />
        <TeamMemberCard
          name="Eli"
          role="Admin"
          icon="/staff/eli.png"
        />
        <TeamMemberCard
          name="Classiq"
          role="Admin"
          icon="/staff/classiq.png"
        />
        <TeamMemberCard
          name="Vifang"
          role="Admin"
          icon="/staff/vifang.png"
        />
        <TeamMemberCard
          name="Kyo"
          role="R6 Coordinator"
          icon="/rainbow-six-siege/kyoshi.png"
        />
        <TeamMemberCard
          name=":Beaver"
          role="RL Coordinator"
          icon="/staff/beaver.png"
        />
        <TeamMemberCard
          name="Jacques_Squoooiize"
          role="RL Coordinator"
          icon="/staff/jacquez.png"
        />
        <TeamMemberCard
          name="Yellcwroses"
          role="Val Coordinator"
          icon="/staff/yellcwroses.png"
        />
        <TeamMemberCard
          name="Kewaninou"
          role="CS2 Coordinator"
          icon="/staff/kewaninou.png"
        />
        <TeamMemberCard
          name="BatDashFlap"
          role="OW Coordinator"
          icon="/rainbow-six-siege/bat.png"
        />
        <TeamMemberCard
          name="Kajiida"
          role="Apex Coordinator"
          icon="/apex/kajiida.png"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4 pt-4">Concordia Production</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="Lt. Leah"
          role="Rainbow Six Observer"
          icon="/staff/leah.png"
        />
        <TeamMemberCard
          name="Oreo"
          role="Website Manager -- Rainbow Six Caster"
          icon="/rainbow-six-siege/oreo.png"
        />
        </div>
      </div>
  );
}
