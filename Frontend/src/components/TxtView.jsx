import { React, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const TxtView = () => {
  const [text, setText] = useState([]);
  const [session, setSession] = useState(0);

  const [sessionText, setSessionText] = useState(
    `Well, to be honest, I'm feeling a bit uncertain about my career aspirations and the path ahead right now. It's like I have all these ideas, but I'm not sure which one is the right one. As for aligning my education and skills with my long-term goals, I guess I could start by talking to people in the field I'm interested in and maybe even try out some internships or courses to get a better sense of what's a good fit. It's all a bit overwhelming, but I think taking small steps and gaining some real-world experience could help me figure things out.`
  );

  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
  console.log(supabaseUrl, process.env);

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // Run when component mounts
  useEffect(() => {
    getCheckupText();
  }, []);

  async function getCheckupText() {
    const { data: textData, error } = await supabase.from("checkup").select();

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setText(textData || []); // Ensure textData is an array or set it to an empty array if null
    }
  }

  return (
    // <div>
    //   {text.length === 0 ? (
    //     <p>No checkup data available</p>
    //   ) : (
    //     <ul>
    //       {text.map((item, index) => {
    //         console.log(item);
    //         return <li key={index}>{item.output}</li>;
    //       })}
    //     </ul>
    //   )}
    // </div>

    <div className="flex bg-blue-400 rounded-lg p-3 max-h-[300px] gap-2 w-full">
      <div className="flex flex-col justify-between items-stretch gap-2 min-w-[100px] max-h-[300px] overflow-auto">
        {text.map((item, index) => {
          let date = new Date(item.created_at);
          // Define arrays for day and month names
          const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];

          // Get the components of the date
          const dayName = days[date.getUTCDay()];
          const day = date.getUTCDate();
          const monthName = months[date.getUTCMonth()];
          const year = date.getUTCFullYear();
          let hour = date.getUTCHours();
          const minute = date.getUTCMinutes();
          let ampm = "am";

          // Convert 24-hour time to 12-hour time and set am/pm
          if (hour >= 12) {
            ampm = "pm";
          }
          if (hour === 0) {
            hour = 12;
          } else if (hour > 12) {
            hour -= 12;
          }

          // Format the date string
          const formattedDate = `${dayName}, ${day} ${monthName} ${year}`;
          const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")} ${ampm}`;

          return (
            <div
              key={"session" + index}
              onClick={() => setSessionText(item.output)}
              className="flex flex-col bg-white p-2 rounded-lg"
            >
              <p className="font-bold">Session {index + 1}</p>
              <p className="text-xs">
                {formattedDate} {formattedTime}
              </p>
            </div>
          );
        })}
      </div>
      <div className="bg-white rounded-lg p-2">{sessionText}</div>
    </div>
  );
};

export default TxtView;
