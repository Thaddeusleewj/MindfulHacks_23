import { React, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const TxtView = () => {
  const [text, setText] = useState([]);

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

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
    <div>
      {text.length === 0 ? (
        <p>No checkup data available</p>
      ) : (
        <ul>
          {text.map((item, index) => (
            <li key={index}>{item.output}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TxtView;
