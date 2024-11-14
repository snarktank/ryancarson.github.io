// Dynamic content and interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Update profile information
    const updateProfileInfo = () => {
        const name = document.getElementById('name');
        const tagline = document.getElementById('tagline');
        const aboutText = document.getElementById('about-text');
        const skillsList = document.getElementById('skills-list');

        // Placeholder for dynamic content - replace with actual information
        name.textContent = 'Ryan Carson';
        tagline.textContent = 'Software Engineer & Entrepreneur';
        aboutText.textContent = 'Passionate technologist with a track record of building innovative software solutions. Experienced in web development, startup growth, and creating impactful digital products.';

        // Skills with Tailwind CSS badge styling
        const skills = [
            'Web Development', 'JavaScript', 'React', 
            'Node.js', 'Python', 'Entrepreneurship', 
            'Product Strategy', 'Cloud Computing'
        ];

        skillsList.innerHTML = skills.map(skill => 
            `<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                ${skill}
            </span>`
        ).join('');
    };

    // Add hover effects to social links
    const setupSocialLinks = () => {
        const socialLinks = {
            'LinkedIn': 'https://www.linkedin.com/in/ryancarson',
            'Twitter': 'https://twitter.com/ryancarson',
            'GitHub': 'https://github.com/ryancarson'
        };

        const contactSection = document.getElementById('contact').querySelector('.flex');
        const links = contactSection.getElementsByTagName('a');

        Array.from(links).forEach((link, index) => {
            const platform = Object.keys(socialLinks)[index];
            link.href = socialLinks[platform] || '#';
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        });
    };

    updateProfileInfo();
    setupSocialLinks();
});
