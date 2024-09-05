import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CalendarPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="bg-concordia-grey text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=bvkied0on7h1t0brl24c326e9c%40group.calendar.google.com&amp;ctz=America%2FToronto"
              width="100%"
              height="800"
              frameBorder="0"
              scrolling="no"
              className="w-full max-w-[1000px] mx-auto"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendarPage;
