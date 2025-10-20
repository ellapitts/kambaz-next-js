import courses from "./courses.json"; // import course data from JSON file  (database)
import modules from "./modules.json"; // import modules' data from JSON file ( module info for course [pulled from Prof. Jose Annunziato's Repo])
import assignments from "./assignments.json" assert { type: "json" }; // for Turbopack with Next.js 15
export {  courses, modules, assignments }; // Export courses so other files/componetns can use them.