import React, { useState } from 'react';

const Live = () => {
  const [text, setText] = useState("");
  
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-[350px] text-center">
        
        <h1 className="text-2xl font-semibold text-white mb-4">
          Live Input Preview
        </h1>

        <input
          type="text"
          placeholder="Write anything..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
        />

        <div className="bg-white/20 rounded-lg p-4 min-h-[60px]">
          <p className="text-white text-lg break-words">
            {text || "Your text will appear here..."}
          </p>
        <p className="text-gray-300 text-sm mt-2">
  Characters: {text.length}
</p>
        </div>
       
      </div>

    </div>
  );
};

export default Live;