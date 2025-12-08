import { Sparkle, Sparkles } from "lucide-react";
import React from "react";

const ProfessionalSummaryForm = ({ data, onChange, seResumeData }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {/* for left */}
        <div>
          <h3 className="flex items-centergap-2 text-;g font-semibold">
            Professional Summary
          </h3>
          <p className="text-sm text-gay-500">
            Add summary for your resume here
          </p>
        </div>

        {/* button  */}
        <button className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50">
          {" "}
          <Sparkles className="size-4" />
          Ai Enhance
        </button>
      </div>

      <div className="mt-6">
        <textarea
          value={data || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          name=""
          id=""
          className="w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
          placeholder="Write a compelling professional summary that highlights your key strengths and career objectives..."
        />

        <p className="text-xs text-gray-500 max-w-4/5">
          Tip: Keep it concise (3-4 sentences) and focus on your most relevent
          achievements and skills.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalSummaryForm;
