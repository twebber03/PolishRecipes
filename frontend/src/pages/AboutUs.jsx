import React from "react";
import "../style/AboutUs.css";

function AboutUs() {
    const teamMembers = [
        { name: "Angela Lojko", role: "Project Leader", description: "Specializes on both frontend and backend integration." },
        { name: "Oli Kosiacki", role: "Frontend Developer", description: "Specializes in React and UI design." },
        { name: "Thomas Webber", role: "Backend Developer", description: "Specializes in Django and API integration." }
    ];

    const ourMotivation = "All members of our team come from a Polish background, and we want to help people discover and appreciate Polish culture through its cuisine while preserving its rich heritage. To maintain our belief in cultural integrity, we carefully curate each dish, avoiding purely random web scraping and instead incorporating research on the origins and significance of ingredients. By highlighting the meaning behind traditional recipes, we ensure that users not only learn how to prepare these dishes but also gain a deeper appreciation for their cultural significance.";
    // "Beyond simply listing recipes, we provide historical context to ensure authenticity and deepen understanding."

    // split our motivation by sentence for better display
    const motivationSentences = ourMotivation.split(". ").filter(sentence => sentence.trim() !== "").map(sentence => sentence.trim() + ".");

    const websiteOverview = "This website serves as a hub for exploring and learning about traditional and modern Polish dishes.";

    const websiteSections = [
        { title: "Home Page", description: "The home page features an interactive carousel displaying the most popular dishes on the site (ranked based on user engagement) to begin your journey." },
        { title: "Search", description: "The search page allows you to find dishes by typing keywords into a search bar, with autocomplete suggestions appearing as you type. You can also apply tags to filter search results, making it easier to find specific types of dishes. The top most relevant dishes are displayed first, followed by additional results below for broader exploration." },
        { title: "Discover", description: "The discover page showcases the lesser known and underappreciated dishes in a carousel. Similar to the homepage, only the dish’s image and title are displayed, encouraging curiosity and exploration." },
        { title: "Individual Dish", description: "When you click on a dish, you are directed to its dedicated page, which provides detailed information, including its name, image, origin, ingredients, recipe, and cultural significance. A favorite button next to the dish name allows you to save dishes for easy access later." },
        { title: "Saved", description: "The saved page organizes and displays your favorited dishes, grouping them by the date they were saved. It allows for easier revisits and keeps track of your favorite recipes over time." }
    ];

    return (
        <div className="about-container">
            <h1 className="about-title">Polish Delight</h1>
            
            <div className="about-columns">
            {/* About the Team */}
            <div className="about-box">
                <h2>About the Team</h2>
                <div className="team-section">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                    <h3>{member.name}</h3>
                    <p><strong>{member.role}</strong></p>
                    <p>{member.description}</p>
                    </div>
                ))}
                </div>
            </div>

            {/* Our Motivation */}
            <div className="about-box">
            <h2>Our Motivation</h2>
            <div className="motivation-section">
                {motivationSentences.map((sentence, index) => (
                <div key={index} className="motivation-box">
                    <p>{sentence}</p>
                </div>
                ))}
            </div>
            </div>

            {/* About the Website */}
            <div className="about-box">
                <h2>About the Website</h2>
                <div className="website-section">
                    <div className="website-box overview">
                    <p>{websiteOverview}</p>
                    </div>
                    {websiteSections.map((section, index) => (
                    <div key={index} className="website-box">
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                    </div>
                    ))}
                </div>
            </div>

        </div>
        </div>
    );
}

export default AboutUs;
