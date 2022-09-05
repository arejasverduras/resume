import React from 'react';

export const profileData = {
    profileName: 'Michiel Roukens',
    profileTitle: 'React Developer',
    profilePicture: "./images/michiel.jpeg",
    jobs: [
        {
            type: 'experience',
            period: '2021 - Current',
            title: 'Becoming a Full-Stack JavaScript Developer',
            company: 'Arejas',
            location: 'The Hague',
            description: 'Bootcamp on Codecademy, Studying React / Express. Build and sold a campervan to be able to study fulltime. See: Education / About me.'
        }, 
        {
        type: 'experience',
        period: '2019/2022',
        title: 'Freelance Developer',
        company: 'Arejas',
        location: 'The Hague',
        description: 'Wordpress websites & webshops for different clients using Divi, Elementor, WooCommerce, HTML and CSS.'
    }, 
    {
        type: 'experience',
        period: '2010-2019',
        title: 'mijnJohan.nl',
        company: 'privately held',
        location: '',
        description:'Development, Marketing and Sales. Homegrown accountancy software for independent entrepreneurs. Passive Income Company.'
    },
    {
        type: 'experience',
        period: '2016-2017',
        title: 'Growth Hacker',
        company: 'Camptoo.nl',
        location: 'The Hague',
        descriptionNL: 'Hoofverantwoordelijk voor de groei van het aanbod van campers & caravans op dit peer-2-peer platform, gebruikmakend van het volledige online marketing spectrum gebasseerd op tracking & data analyse. Analytics, Split Testing, Conversion optimisation.',
        description: 'Head responsible for the growth of the product-offering for this peer-2-peer Campers & Caravans renting platform, using the complete online marketing spectrum including Goal Tracking, Analytics, Split Testing and Conversion Optimisation.'

    },

    {
        type: 'experience',
        period: '2015-2016',
        title: 'First marketing Officer',
        company: 'Yippie.nl',
        location: 'Amsterdam',
        descriptionNL: 'Hoofdverantwoordelijk voor de eerste groeispurt in gebruikers van deze shopping-app, gebruikmakend van het volledige online marketing spectrum.',
        description: 'Head responsible for the first growth spurt in users of this shopping-app, using the complete online marketing spectrum including Facebook Ads, Google Ads, Goal Tracking, Analytics, Split Testing and Conversion Optimisation.'

    },
    {
        type: 'experience',
        period: '2011-2014',
        title: 'Startup Founder',
        company: 'OWNR',
        location: 'The Hague',
        descriptionNL: 'Internet startup in action sports. Verantwoordelijk voor marketing, verkoop, investeerders, productontwikkeling en algemeen succes. Samenwerkingen met onder andere Quiksilver / DC shoes en Nitro Snowboards.',
        description: 'Internet startup in action sports. Responsible for marketing, sales, investors, product-development and allround succes. Collaborations with among others: Quiksilver / DC shoes and Nitro Snowboards.'
    },
    {
        type: 'education',
        period: '2021 - Present',
        company: 'codecademy',
        location: '',
        title: 'Full-Stack Developer Career Path Course',
        description: "Becoming a Full-Stack web developer learning to build web-apps' front-end and back-end using HTML, CSS, JavaScript, React, Redux, Node, Express, SQL, TDD, Mocha, Jest, React Testing Library, Markdown, JSON, Git & Github."
    },
    {
        type: 'education',
        period: '2020 - 2021',
        company: 'codecademy',
        location: '',
        title: 'Build a back-end app with JavaScript',
        description: "A predecessor to codecademy's back-end engineer career path. This was my introduction to JavaScript, Node, Express, SQL and building API's."
    },
    {
        type: 'education',
        period: '2008-2010',
        company: 'WdKa',
        location: 'Rotterdam',
        title: 'Creative Advertising',
        description: 'Art Direction, concepting & realisation. Arts Academy of Rotterdam.'
    },
    {
        type: 'education',
        period: '1998-2004',
        company: 'Ashram College',
        location: 'Alphen aan den Rijn',
        title: 'Atheneum',
        descriptionNL: 'Atheneum. Richting Economie & Maatschappij. Keuzevak Informatica. Profielwerkstuk: Encryptie',
        description: 'Atheneum. Focus on Economics & Society. Field of choice: Computer Science. Research paper: Encryption.'
    },
],
    certifications: [{
        type: 'certification',
        title: 'Back-end app with Javascript',
        description: "Write API's with Node, Express & SQL",
        institute: 'Codecademy',
        date: "Jan '21"
    }],
    contactInfo: {
        phone: '+31622040319',
        email: 'info@arejo.nl',
        location: 'The Hague, Netherlands',
        github: <a href='https://github.com/arejasverduras' target='_blank' rel="noreferrer">github</a>,
        portfolio: <a href='https://arejasportfolio.surge.sh' target='_blank' rel="noreferrer">portfolio</a>,
        linkedin: <a href='https://www.linkedin.com/in/michielroukens/' target='_blank' rel="noreferrer">LinkedIn</a>,
    },

    summary: <>
    <p><b>Startup founder turned developer.</b></p>
    <p>Extremely passionate about building beautiful, practical and smart things. Self-starting, highly determined, obsessively persistent.</p>
    <p>Having completed the Front-end section of the Full-Stack Career Course on <a href="https://www.codecademy.com/learn/paths/full-stack-engineer-career-path">codecademy</a>, I am eager to practice my new found skills as a Front-end / React Developer. </p>
    <p>Open for a junior position or Freelance assignment. Remote / hybrid preferred. <br/>Get in touch!</p>
</>,

    keySkills: ['Building web-apps from start to finish','Rocking React & Redux'],
    techSkills: ['HTML', 'CSS', 'JavaScript','React','Redux','Node.js','Express.js','SQL','Git','GitHub','TDD','Mocha','JEST','React Testing Library', 'JSON'],
    mktSkills: ['Google Analytics','Goal Tracking','Growth Hacking Principles','Split Testing','Conversion Optimalisation','Google Adwords','Facebook Ads'],
    addSkills: ['Adobe Creative Suite','Google Sketchup'],
    languages: ['Dutch','English','German','Spanish'],
    hobbies: ['Snowboard','Skateboard','Surf','Wake', 'Climbing', 'Guitar', 'Travel', 'Campervans']
}