import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}

                className="my-20 text-center text-4xl">Latest Projects</motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        {/* Project Image */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}

                            className="w-full lg:w-1/4">
                            <img
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="mb-6 rounded"
                            />
                        </motion.div>

                        {/* Project Title (Right Side) */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}

                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400 text-justify">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                    {tech}
                                </span>
                            ))}

                            {project.GitHub && ( 
                                <a
                                    href={project.GitHub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block rounded bg-purple-900 px-3 py-2 text-white text-xs font-medium transition duration-300 hover:bg-purple-700"
                                >
                                    View on GitHub
                                </a>
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
