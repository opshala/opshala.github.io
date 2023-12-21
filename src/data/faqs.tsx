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
    question: "Can it help me deploy my own softwares & applications as well? Can it also integrate with existing cloud-based software that I have deployed?",
    answer: (
        <>
            <p>At OpShala, we are currently focused on introducing and strengthening support for Wordpress and it's diverse ecosystem.</p>
            <p>In the near future, we do plan to introduce support for you to be able to deploy your own applications, as well as being able to integrate with your existing deployments.</p>
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

faqs.push({
    id: "technical-expertise-required",
    question: "How much technical expertise is required to use OpShala?",
    answer: (
        <>
            <p>OpShala is designed to be user-friendly, requiring no technical expertise at all.</p>
            <p>The application is built with a no-code approach, allowing users without technical backgrounds to easily navigate and utilize its functionalities.</p>
            <p>With intuitive interfaces, drag-and-drop tools(where required) and simplified workflows, OpShala enables users to manage cloud application deployment efficiently, regardless of their level of technical expertise</p>
        </>
    ),
});

faqs.push({
    id: "industries-benefit",
    question: "What industries benefit most from your solution?",
    answer: (
        <>
            <p>OpShala caters to a diverse range of industries, empowering businesses that rely on cloud-based applications. Specifically, industries such as IT services, e-commerce, media and various businesses seeking to deploy and manage cloud software instances—like WordPress, Magento, ERPNext, among others—can significantly benefit from our simplified deployment solutions.</p>
            <p>Moreover, any industry seeking efficient, user-friendly cloud application management without extensive technical expertise can find value in using OpShala.</p>
        </>
    ),
});

faqs.push({
    id: "security-during-deployments",
    question: "How does your platform ensure security during deployments?",
    answer: (
        <>
            <p>OpShala takes security during deployments seriously. We implement industry-standard security practices to protect your applications and data.</p>
            <p>OpShala ensures security during deployments by utilizing tailor-made workflows for specific software needs. These workflows are designed to implement secure deployment practices without the need for technical expertise.</p>
            <p>Additionally, our server setup workflows cover operating system and network security, providing a secure foundation for applications deployed using OpShala.</p>
        </>
    ),
});

faqs.push({
    id: "scaling-applications",
    question: "Can I scale applications easily using your platform?",
    answer: (
        <>
            <p>Currently, our platform primarily focuses on facilitating single deployments with a simple and user-friendly approach. Scaling, specifically increasing resources for applications, is possible in our initial release.</p>
            <p>While our current functionalities offer ease in initial deployments, we aim to introduce more advanced orchestration capabilities in the future to enable easy scaling of applications by efficiently managing it without technical knowledge or intervention.</p>
        </>
    ),
});

faqs.push({
    id: "application-costs",
    question: "What are the costs for running an application?",
    answer: (
        <>
            <p>Our software, OpShala, is free to use. While our software itself is free, the costs associated with running an application depend on factors like the chosen cloud provider, resource allocation, and additional services utilized.</p>
            <p>We aim to provide a cost-effective solution, and the pricing structure for cloud resources will vary based on your specific deployment requirements with the chosen cloud providers.</p>
        </>
    ),
});

faqs.push({
    id: "saas-application",
    question: "Wouldn’t OpShala be more useful and handy as a SaaS application?",
    answer: (
        <>
            <p>OpShala prioritizes privacy and control, which is why we've opted for a desktop software solution over a SaaS-based platform.</p>
            <p>Our focus on a desktop application offers users greater privacy and data control by allowing them to manage and deploy applications directly from their local environment. This approach ensures sensitive data remains within the user's control, eliminating potential privacy concerns often associated with SaaS applications.</p>
            <p>We believe in empowering users with a privacy-first, secure, and user-friendly experience through our desktop software.</p>
        </>
    ),
});

export default faqs;