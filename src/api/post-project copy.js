async function postProject(title, description, goal, image) {
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    const token = window.localStorage.getItem("token");

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`,
            },         
        });

        const data = await response.json();

        if (!response.ok) {
            console.log("Server error response:", data); // Log the actual error from server
            throw new Error(data.detail || "Error trying to create project");
        }

        return data;
    } catch (error) {
        console.log("Full error details:", error); // Log the full error
        throw error;
    }
}

export default postProject;