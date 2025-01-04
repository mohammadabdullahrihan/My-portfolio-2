import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ProjectDetails = () => { 
  const [project, setProject] = useState(null);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (data && id) {
      const singleData = data.find((item) => item?.id === Number(id));
      setProject(singleData);
    }
  }, [data, id]);

  return (
    <div className="container mx-auto px-4 py-8">
      {project ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{project?.title}</h1>
          <p className="text-gray-600 mb-4 text-2xl">{project?.description}</p>
          <img 
            src={project?.image} 
            alt={project?.title} 
            className="w-full h-auto rounded-lg mb-4"
          />
          <p className="text-gray-700 font-medium mb-2 text-xl">
            <span className="font-semibold text-2xl">Technologies:</span> {project?.technologies?.join(', ')}
          </p>
          {project?.live && (
                  <Link to={project?.live}> 
<button
  href="#"
  class="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
>
  <span
    class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
  ></span>
  <div class="flex items-center">
    <span class="ml-1 text-xl text-white">Live View</span>
  </div>

</button>

                  </Link>
//             <p className="text-blue-500 text-xl btn btn-info">
//               <a href={project?.live} target="_blank" rel="noopener noreferrer">Live Project</a>
//             </p>
          )}
        </div>
      ) : (
        <p className="text-gray-500 text-center">Loading project details...</p>
      )}
    </div>
  );
};

export default ProjectDetails;
