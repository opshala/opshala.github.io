import { JSX } from "solid-js";

let f: { id: string; question: string; answer: JSX.Element };

let faqs: (typeof f)[] = [];

faqs.push({
  id: "what-is-nocode-devops",
  question: "What is no-code DevOps?",
  answer: (
    <>
      <p>
        No-code DevOps is a simplified way to manage and deploy software on
        different cloud platforms without needing technical skills.
      </p>
      <p>
        OpShala uses standard DevOps practices, like running continuous
        integration and continuous deployment (CI/CD) pipelines; or using
        Ansible for managing Linux servers. However, the OpShala desktop
        application does not expose these technical details to the user. Instead
        it is a simple GUI through which a business user can specify the
        software they need and simply access them through a web browser. OpShala
        manages deployment using existing cloud platforms. The business owner
        has to sign up to the cloud services.
      </p>
    </>
  ),
});

faqs.push({
  id: "how-is-it-simplified",
  question: "How does OpShala simplify cloud application deployment?",
  answer: (
    <>
      <p>
        OpShala guides a business user in creating accounts with various cloud
        service providers. Then it sets up all the needed infrastructure and
        software on the cloud as per the needs of the business. The desktop is
        like an IT admin for the business.
      </p>
      <p>
        Our system does not expect you to know any technical details, making the
        entire experience user-friendly and efficient.
      </p>
    </>
  ),
});

faqs.push({
  id: "applications-supported",
  question: "Which applications does OpShala support?",
  answer: (
    <>
      <p>
        At present, we are working on supporting Wordpress. Other softwares in
        consideration for the future are Plasmic, ERPNext, Drupal, Magento and
        many more.
      </p>
      <p>
        If there are any useful business web applications you would like OpShala
        to support, we would love to hear from you. You can email us on
        team@opshala.com.
      </p>
    </>
  ),
});

faqs.push({
  id: "applications-supported-own",
  question:
    "Can it help me deploy my own softwares & applications as well? Can it also integrate with existing cloud-based software that I have deployed?",
  answer: (
    <>
      <p>
        For the near future OpShala will focus on existing open source software,
        their plugins, themes and other dependencies. We want to add support for
        applications written in frameworks like Django, Laravel, Ruby on Rails,
        etc. as well in the future.
      </p>
      <p>
        In the near future, we do plan to introduce support for you to be able
        to deploy your own applications, written in any language, as well as
        being able to integrate with your existing deployments.
      </p>
    </>
  ),
});

faqs.push({
  id: "cloud-providers-supported",
  question: "What cloud providers does OpShala support?",
  answer: (
    <>
      <p>
        We are currently developing support for Digital Ocean and Linode. We
        will soon add support for Amazon Web Services (AWS), and Google Cloud
        Platform (GCP).
      </p>
      <p>
        Introducing more cloud providers will definitely be our consideration
        once the support for existing ones is seamless and stable.
      </p>
    </>
  ),
});

faqs.push({
  id: "technical-expertise-required",
  question: "How much technical expertise is required to use OpShala?",
  answer: (
    <>
      <p>
        The OpShala desktop app is designed for users with no technical
        expertise. It is a GUI application where users can select the software
        they way, register for the cloud services they want to use, and OpShala
        does the rest.
      </p>
    </>
  ),
});

faqs.push({
  id: "industries-benefit",
  question: "What industries benefit most from your solution?",
  answer: (
    <>
      <p>
        OpShala caters to a diverse range of industries, empowering businesses
        that rely on cloud-based applications. Specifically, industries such as
        IT services, e-commerce, media and various businesses seeking to deploy
        and manage cloud software instances—like WordPress, Magento, ERPNext,
        among others—can significantly benefit from our simplified deployment
        solutions.
      </p>
      <p>
        Moreover, any industry seeking efficient, user-friendly cloud
        application management without extensive technical expertise can find
        value in using OpShala.
      </p>
    </>
  ),
});

faqs.push({
  id: "security-during-deployments",
  question: "How does your platform ensure security during deployments?",
  answer: (
    <>
      <p>
        OpShala takes security during deployments seriously. We implement
        industry-standard security practices to protect your applications and
        data.
      </p>
      <p>
        OpShala ensures security during deployments by utilizing tailor-made
        workflows for specific software needs. These workflows are designed to
        implement secure deployment practices without the need for technical
        expertise.
      </p>
      <p>
        Additionally, our server setup workflows cover operating system and
        network security, providing a secure foundation for applications
        deployed using OpShala.
      </p>
    </>
  ),
});

faqs.push({
  id: "scaling-applications",
  question: "Can I scale applications easily using your platform?",
  answer: (
    <>
      <p>
        Currently, our platform primarily focuses on facilitating single server
        deployments, which can be scaled by upgrading the server resources. We
        want to support running multiple software on the single server,
        including the core business software, databases, etc. If a business
        wants to scale their platform, then OpShala will allow them to using
        larger instances.
      </p>
      <p>
        In the future we want to support more complex deployments, with multiple
        servers, separate database servers, etc. Individual servers could be of
        different sizes depending on the scale needed.
      </p>
    </>
  ),
});

faqs.push({
  id: "application-costs",
  question: "What are the costs for running an application?",
  answer: (
    <>
      <p>
        Our desktop software, OpShala, is free to use. However, you will need to
        pay for the cloud resources you use. Those need to be paid directly to
        the cloud service providers.
      </p>
      <p>
        OpShala will help you choose the right cloud resources for your
        business, thereby reducing your costs.
      </p>
    </>
  ),
});

faqs.push({
  id: "saas-application",
  question: "Wouldn't OpShala be more useful and handy as a SaaS application?",
  answer: (
    <>
      <p>
        OpShala prioritizes privacy and control, which is why we've opted for a
        desktop software solution over a SaaS-based platform.
      </p>
      <p>
        Our focus on a desktop application offers users greater privacy and data
        control by allowing them to manage and deploy applications directly from
        their local environment. This approach ensures sensitive data remains
        within the user's control, eliminating potential privacy concerns often
        associated with SaaS applications.
      </p>
      <p>
        We believe in empowering users with a privacy-first, secure, and
        user-friendly experience through our desktop software.
      </p>
    </>
  ),
});

export default faqs;
