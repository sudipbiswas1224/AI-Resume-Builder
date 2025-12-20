import { Plus, Trash2 } from "lucide-react";
import React from "react";

const ProjectForm = ({ data, onChange }) => {
  /* adding Project */
  const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: "",
    };
    onChange([...data, newProject]);
  };

  /* removing Project */
  const removeProject = (ind) => {
    const updatedProject = data.filter((_, i) => i !== ind);
    onChange(updatedProject);
  };

  /* updating Project */
  const updateProject = (ind, field, value) => {
    const updated = [...data];
    updated[ind] = { ...updated[ind], [field]: value };
    onChange(updated);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        {/*  left section */}
        <div>
          <h3 className="flex items-centergap-2 text-;g font-semibold">
            Projects
          </h3>
          <p className="text-sm text-gay-500">Add your Project details</p>
        </div>

        {/* button  */}
        <button
          onClick={addProject}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50"
        >
          {" "}
          <Plus className="size-4" />
          Add Project
        </button>
      </div>

      <div className="space-y-4 mt-6">
        {data.map((project, ind) => (
          <div
            key={ind}
            className="p-4 border border-gray-200 rounded-lg space-y-3"
          >
            <div className="flex justify-between items-start">
              {/* serial number */}
              <h4>Project #{ind + 1} </h4>
              {/* delete button */}
              <button
                onClick={() => removeProject(ind)}
                className="text-erd-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="size-4" />
              </button>
            </div>

            {/* inputs for the Project */}
            <div className="grid gap-3">
              {/* input for Project name */}
              <input
                value={project.name || ""}
                onChange={(e) => updateProject(ind, "name", e.target.value)}
                type="text"
                placeholder="Project Name"
                className="px-3 py-2 text-sm rounded-lg"
              />

              {/* input for Project type */}
              <input
                value={project.type || ""}
                onChange={(e) => updateProject(ind, "type", e.target.value)}
                type="text"
                placeholder="Project Type"
                className="px-3 py-2 text-sm rounded-lg"
              />
              {/* Project description */}
              <textarea
                rows={4}
                value={project.description || ""}
                onChange={(e) =>
                  updateProject(ind, "description", e.target.value)
                }
                placeholder="Describe your project..."
                className="px-3 py-2 text-sm rounded-lg resize-none border border-gray-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectForm;
