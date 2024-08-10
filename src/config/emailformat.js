const generateEmailContent = (data) => {
    const { name } = data;
  
    const textData = `Dear ${name},
  
  I hope this email finds you in great spirits. Thank you for reaching out through our website, "www.targetgreencard.com."
  
  I'm reaching out from EB1 Next Level Program, where we specialize in providing comprehensive support for individuals applying for the EB1A visa category. Our services are meticulously designed to strengthen your application through strategic evidence creation.
  
  At EB1 Next Level Program, we understand the nuances of the EB1A application process and offer a range of services tailored to showcase your extraordinary abilities and achievements. Here’s a brief overview of the services we provide, each aimed at enhancing the compelling nature of your application:
  
  - Article Writing and Publication: Our team of expert writers and editors can craft and publish articles that highlight your professional expertise and contributions to your field.
  - Citation Generation: We assist in increasing the citation count of your existing publications, thereby demonstrating the impact and recognition of your work within the scholarly community.
  - Peer Review Opportunities: Engage in peer review processes for reputable journals, underscoring your recognition as an authority in your field.
  - Editorial Board Membership: We can facilitate placements on editorial boards, showcasing your leadership and influence in your academic or professional specialty.
  - Press Releases: Our team can coordinate press releases to amplify significant achievements, further proving your widespread acclaim.
  - Book Writing and Publishing on Amazon: From conceptualization to publication, we guide you through authoring a book that reflects your knowledge and expertise, published directly to Amazon.
  - Writing of the Petition for EB1A: We craft compelling narratives for your petition, encapsulating your professional narrative and arguing persuasively for your eligibility.
  
  In addition to these services, we also provide training to help enhance your profile and ensure you fully understand the EB1 process requirements. Our training programs are designed to give you the knowledge and confidence needed to present a strong application.
  
  Each service is priced individually, allowing you the flexibility to choose options that best meet your specific needs and budget. We are committed to providing you with personalized support to enhance your application's strength.
  
  Please let me know if you would like more detailed information about any of these services or if you have specific needs that we can assist you with. We are here to help you make your case for an EB1A visa as robust as possible.
  
  To make scheduling as convenient as possible, we have provided a Calendly link below where you can choose a time that best fits your schedule. Please note that there is a fee for this meeting.
  
  Schedule Your Meeting
  
  Initial Meet - EB1 Next Level
  
  Thank you for considering the EB1 Next Level Program as your partner in this important endeavor. I look forward to the opportunity to discuss how we can support your application further.
  
  Warm regards,
  
  Team EB1 Next Level Program
  http://www.targetgreencard.com
  `;
  
    const htmlData = `
    <p>Dear ${name},</p>
    <p>I hope this email finds you in great spirits. Thank you for reaching out through our website, "www.targetgreencard.com."</p>
    <p>I'm reaching out from EB1 Next Level Program, where we specialize in providing comprehensive support for individuals applying for the EB1A visa category. Our services are meticulously designed to strengthen your application through strategic evidence creation.</p>
    <p>At EB1 Next Level Program, we understand the nuances of the EB1A application process and offer a range of services tailored to showcase your extraordinary abilities and achievements. Here’s a brief overview of the services we provide, each aimed at enhancing the compelling nature of your application:</p>
    <ul>
      <li><strong>Article Writing and Publication:</strong> Our team of expert writers and editors can craft and publish articles that highlight your professional expertise and contributions to your field.</li>
      <li><strong>Citation Generation:</strong> We assist in increasing the citation count of your existing publications, thereby demonstrating the impact and recognition of your work within the scholarly community.</li>
      <li><strong>Peer Review Opportunities:</strong> Engage in peer review processes for reputable journals, underscoring your recognition as an authority in your field.</li>
      <li><strong>Editorial Board Membership:</strong> We can facilitate placements on editorial boards, showcasing your leadership and influence in your academic or professional specialty.</li>
      <li><strong>Press Releases:</strong> Our team can coordinate press releases to amplify significant achievements, further proving your widespread acclaim.</li>
      <li><strong>Book Writing and Publishing on Amazon:</strong> From conceptualization to publication, we guide you through authoring a book that reflects your knowledge and expertise, published directly to Amazon.</li>
      <li><strong>Writing of the Petition for EB1A:</strong> We craft compelling narratives for your petition, encapsulating your professional narrative and arguing persuasively for your eligibility.</li>
    </ul>
    <p>In addition to these services, we also provide training to help enhance your profile and ensure you fully understand the EB1 process requirements. Our training programs are designed to give you the knowledge and confidence needed to present a strong application.</p>
    <p>Each service is priced individually, allowing you the flexibility to choose options that best meet your specific needs and budget. We are committed to providing you with personalized support to enhance your application's strength.</p>
    <p>Please let me know if you would like more detailed information about any of these services or if you have specific needs that we can assist you with. We are here to help you make your case for an EB1A visa as robust as possible.</p>
    <p>To make scheduling as convenient as possible, we have provided a Calendly link below where you can choose a time that best fits your schedule. Please note that there is a fee for this meeting.</p>
    <p><a href="https://calendly.com/eb1-next-level">Schedule Your Meeting</a></p>
    <p>Thank you for considering the EB1 Next Level Program as your partner in this important endeavor. I look forward to the opportunity to discuss how we can support your application further.</p>
    <p>Warm regards,</p>
    <p>Team EB1 Next Level Program</p>
    <p><a href="http://www.targetgreencard.com">http://www.targetgreencard.com</a></p>
    `;
  
    return {
      text: textData,
      html: htmlData,
    };
  };
  