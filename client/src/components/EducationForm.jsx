import { GraduationCap, Plus, Trash2 } from "lucide-react";
import React from "react";

const EducationForm = ({ data, onChange }) => {
  /* adding education */
  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      gpa: "",
    };
    onChange([...data, newEducation]);
  };

  /* removing education */
  const removeEducation = (ind) => {
    const updatedEducation = data.filter((_, i) => i !== ind);
    onChange(updatedEducation);
  };

  /* updating education */
  const updateEducation = (ind, field, value) => {
    const updated = [...data];
    updated[ind] = { ...updated[ind], [field]: value };
    onChange(updated);
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        {/*  left section */}
        <div>
          <h3 className="flex items-centergap-2 text-;g font-semibold">
            Education
          </h3>
          <p className="text-sm text-gay-500">Add your education details</p>
        </div>

        {/* button  */}
        <button
          onClick={addEducation}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50"
        >
          {" "}
          <Plus className="size-4" />
          Add Education
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <GraduationCap className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No education added yet.</p>
          <p className="text-sm">Click "Add Education" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((edu, ind) => (
            <div
              key={ind}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex justify-between items-start">
                {/* serial number */}
                <h4>Education #{ind + 1} </h4>
                {/* delete button */}
                <button
                  onClick={() => removeEducation(ind)}
                  className="text-erd-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              {/* inputs for the Education */}
              <div className="grid md:grid-cols-2 gap-3">
                {/* input for institution name */}
                <input
                  value={edu.institution || ""}
                  onChange={(e) =>
                    updateEducation(ind, "institution", e.target.value)
                  }
                  type="text"
                  placeholder="Institution Name"
                  className="px-3 py-2 text-sm"
                />

                {/* input for degree */}
                <input
                  value={edu.degree || ""}
                  onChange={(e) =>
                    updateEducation(ind, "degree", e.target.value)
                  }
                  type="text"
                  placeholder="Degree (e.g., Bachelor of Technology)"
                  className="px-3 py-2 text-sm"
                />

                {/* input for field */}
                <input
                  value={edu.field || ""}
                  onChange={(e) =>
                    updateEducation(ind, "field", e.target.value)
                  }
                  placeholder="Field of Study"
                  type="text"
                  className="px-3 py-2 text-sm"
                />

                {/* input for graduation date */}
                <input
                  value={edu.graduation_date || ""}
                  onChange={(e) =>
                    updateEducation(ind, "graduation_date", e.target.value)
                  }
                  type="month"
                  className="px-3 py-2 text-sm"
                />
                {/* GPA */}
                <input
                  value={edu.gpa || ""}
                  onChange={(e) => updateEducation(ind, "gpa", e.target.value)}
                  placeholder="GPA (opitonal)"
                  type="text"
                  className="px-3 py-2 text-sm"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;
