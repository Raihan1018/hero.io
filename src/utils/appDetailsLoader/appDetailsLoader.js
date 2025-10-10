export const appDetailsLoader = async ({ params }) => {
  const response = await fetch("../data.json");
  
  if (!response.ok) {
    throw new Error("Failed to load application data."); 
  }
  
  const data = await response.json();
  const app = data.find((item) => item.id === parseInt(params.id));

  if (!app) {
    const error = new Error(`App with ID ${params.id} not found.`);
    throw error;
  }
  
  return app; 
};