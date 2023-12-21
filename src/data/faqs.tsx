import { JSX } from "solid-js";

let f: { id: string, question: string, answer: JSX.Element };

let faqs: typeof f[] = [];

faqs.push({
    id: "what-is-nocode-devops",
    question: "What is No-code DevOps?",
    answer: (
        <>
            <p>No-code DevOps is a simplified way to manage and deploy software on different cloud platforms without needing technical skills.</p>
            <p>It combines 'DevOps', which involves streamlining software development and operations, with a 'no-code' approach, allowing users without technical expertise to handle tasks like deployment, testing, and monitoring using easy-to-use tools instead of writing complex code or interacting with technical systems of a web server.</p>
        </>
    ),
});

faqs.push({
    id: "how-is-it-simplified",
    question: "How does OpShala simplify cloud application deployment?",
    answer: (
        <>
            <p>OpShala facilitates easy management and deployment of software across multiple cloud providers. Our pre-defined automated workflows and streamlined processes are designed to be used by anyone.</p>
            <p>Our system does not expect you to know any technical details, making the entire experience user-friendly and efficient.</p>
        </>
    ),
});

faqs.push({
    id: "applications-supported",
    question: "Which applications does OpShala support?",
    answer: (
        <>
            <p>At present, we are working on supporting Wordpress. Other softwares in consideration for the future are Plasmic, ERPNext and many more.</p>
            <p>If there are any useful business web applications you would like OpShala to support, we would love to hear from you. You can email us on team@opshala.com.</p>
        </>
    ),
});

faqs.push({
    id: "applications-supported-own",
    question: "Can it help me deploy my own softwares & applications as well?",
    answer: (
        <>
            <p>At OpShala, we are currently focused on introducing and strengthening support for Wordpress and it's diverse ecosystem.</p>
            <p>In the near future, we do plan to introduce support for you to be able to deploy your own applications too.</p>
        </>
    ),
});

faqs.push({
    id: "cloud-providers-supported",
    question: "What cloud providers does OpShala support?",
    answer: (
        <>
            <p>We are currently developing support for Amazon Web Services(AWS) and Digital Ocean.</p>
            <p>Our primary focus is to ensure compatibility and flexibility for our users for the providers we support, enabling seamless deployment across various cloud environments based on their preferences and needs.</p>
            <p>Introducing more cloud providers will definitely be our consideration once the support for existing ones is seamless and stable.</p>
        </>
    ),
});

export default faqs;